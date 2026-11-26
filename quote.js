/* Deima Travels — one standard quote request for every form on the site.
   Every form (quick quote, custom quote, Sri Lanka trip builder) calls DeimaQuote.submit(),
   which posts the same JSON shape to the Power Automate flow below.
   Shape: see quote-schema.json. Every key is always present (no nulls), so the flow's
   Parse JSON step never fails on a missing field. */
(function(){
/* Paste the HTTP POST URL from the flow's "When an HTTP request is received" trigger here.
   Leave it empty to keep the site in demo mode (nothing is sent; customers can copy the request). */
const ENDPOINT='https://default30ad2cab0a614091a0308f5365a99e.70.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/21/workflows/4c6cdce793cb41d5a85556056956f282/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vpdSoEXDoaAlQEJQo0nws7fvw91FNzGn9nPSQZCdDWE';

const SCHEMA='deima-travels.quote-request',VERSION=1;
const str=v=>v==null?'':String(v).trim();
const num=v=>{const n=Number(v);return Number.isFinite(n)?n:0};
const arr=v=>Array.isArray(v)?v.map(str).filter(Boolean):[];

function reference(){
  const d=new Date(),p=n=>String(n).padStart(2,'0');
  const r=Array.from(crypto.getRandomValues(new Uint8Array(3)),b=>b.toString(36).toUpperCase().padStart(2,'0')).join('').slice(0,4);
  return `DT-${String(d.getFullYear()).slice(2)}${p(d.getMonth()+1)}${p(d.getDate())}-${r}`;
}

/* Fill every field of the standard shape, whatever the form gave us. */
function build(src,input){
  const c=input.customer||{},t=input.trip||{},b=t.budget||{};
  const phone=str(c.phone);
  return {
    schema:SCHEMA,schemaVersion:VERSION,
    reference:str(input.reference)||reference(),
    submittedAt:new Date().toISOString(),
    source:src,
    language:str(document.documentElement.lang)||'en',
    pageUrl:location.href.split('#')[0],
    customer:{
      name:str(c.name),email:str(c.email),phone,
      whatsapp:str(c.whatsapp)||phone,
      countryOfResidence:str(c.countryOfResidence),
      preferredContact:str(c.preferredContact)||(phone?'WhatsApp':'Email'),
      consent:c.consent!==false
    },
    trip:{
      services:arr(t.services),
      origin:str(t.origin),destination:str(t.destination),
      travelDate:str(t.travelDate),travelMonth:str(t.travelMonth),
      flexibleDays:num(t.flexibleDays),nights:num(t.nights),
      adults:num(t.adults),children:num(t.children),travellersNote:str(t.travellersNote),
      style:str(t.style),
      budget:{amount:num(b.amount),currency:str(b.currency)},
      notes:str(t.notes)
    },
    itinerary:(input.itinerary||[]).map(d=>({day:num(d.day),date:str(d.date),title:str(d.title),activities:arr(d.activities)})),
    summaryText:str(input.summaryText)
  };
}

function check(p){
  const c=p.customer;
  if(!c.name)return 'Add your name.';
  if(!c.email&&!c.phone)return 'Add a phone number or email so we can reply.';
  if(c.email&&!/^\S+@\S+\.\S+$/.test(c.email))return 'Check your email address.';
  if(c.phone&&c.phone.replace(/\D/g,'').length<7)return 'Check your phone number.';
  return '';
}

async function post(p){
  if(!ENDPOINT)return {ok:false,demo:true};
  const body=JSON.stringify(p);
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),15000);
  try{
    const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body,signal:ctl.signal});
    return r.ok?{ok:true}:{ok:false,status:r.status};
  }catch(e){return {ok:false,error:String(e)}}
  finally{clearTimeout(tm)}
}

/* submit(source, input, statusEl) → {payload, result} ; statusEl gets a friendly message */
async function submit(source,input,el){
  const p=build(source,input);
  if(input.honeypot){say(el,'ok',p);return {payload:p,result:{ok:true}}}
  const bad=check(p);if(bad){say(el,'bad',p,bad);return {payload:p,result:{ok:false,invalid:bad}}}
  say(el,'busy',p);
  const result=await post(p);
  say(el,result.ok?'ok':result.demo?'demo':'fail',p);
  return {payload:p,result};
}

function say(el,kind,p,msg){
  if(!el)return;
  el.dataset.state=kind;el.hidden=false;
  el.textContent=kind==='busy'?'Sending your request…'
    :kind==='ok'?`Sent. Your reference is ${p.reference}. A Deima travel planner will reply the same working day.`
    :kind==='demo'?`Demo mode: this request was not sent. Reference ${p.reference}. Copy it below and send it on WhatsApp or email.`
    :kind==='fail'?`We couldn't send it automatically. Copy the request below and send it on WhatsApp or email (reference ${p.reference}).`
    :msg||'';
}

window.DeimaQuote={submit,build,check,live:!!ENDPOINT};
})();
