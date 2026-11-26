# Quote requests → Power Automate

Every quote form on the site sends the **same JSON request** to one Power Automate flow:

| Form | `source` value |
|---|---|
| Quick quote pop-up (header QUOTE button, destination cards, packages) | `quick-quote` |
| Custom quote ("Make it your own", Trips section) | `custom-quote` |
| Sri Lanka trip builder (6 steps, "Send to Deima") | `trip-builder` |

Every key is always present. Missing text is `""`, missing numbers are `0` and missing lists are `[]`, never `null`, so the flow never fails on an empty field. The shape is in [`quote-schema.json`](quote-schema.json).

## 1. Build the flow

1. In Power Automate, create an **Instant cloud flow** with the trigger **When an HTTP request is received**.
2. In the trigger, set **Who can trigger the flow?** to **Anyone**. The website has no Microsoft sign-in, so any other setting blocks it.
3. Leave the trigger's *Request Body JSON Schema* empty. Then add a **Parse JSON** action:
   - **Content**: expression `json(string(triggerBody()))`
   - **Schema**: paste the contents of `quote-schema.json`

   This expression handles both ways the browser can send the request (JSON or plain text).
4. Add the steps you want, using the Parse JSON outputs. For example:
   - **Add a row** to an Excel table or SharePoint list (Reference, Source, Name, Email, Phone, Destination, Travel date, Adults, Children, Services, Submitted at)
   - **Send an email (V2)** to travels@… with `summaryText` as the body and `reference` in the subject
   - **Post a message** in a Teams channel
   - An auto-reply to `customer.email` when it isn't empty
5. Finish with a **Response** action: status `200`, body `{"ok":true}`.
6. Save. Then copy the **HTTP URL** the trigger shows.

## 2. Connect the site

In `quote.js`, paste the URL into the line:

```js
const ENDPOINT='';
```

Then commit and push. While `ENDPOINT` is empty, the site runs in **demo mode**: nothing is sent, and customers see their request with a copy/WhatsApp option.

> The URL contains a signature (`sig=...`). Anyone who reads the page source can see it and post to the flow. To limit spam, the forms include a hidden honeypot field, and the flow can drop requests where `customer.name` is empty. If you need stronger protection, put an Azure Function or API Management in front of the flow.

## 3. Request example

```json
{
  "schema": "deima-travels.quote-request",
  "schemaVersion": 1,
  "reference": "DT-261126-K7QZ",
  "submittedAt": "2026-11-26T08:15:02.114Z",
  "source": "custom-quote",
  "language": "en",
  "pageUrl": "https://sahantrident.github.io/deima-travels/",
  "customer": {
    "name": "Nimali Perera", "email": "nimali@example.com", "phone": "+94 77 123 4567",
    "whatsapp": "+94 77 123 4567", "countryOfResidence": "", "preferredContact": "WhatsApp", "consent": true
  },
  "trip": {
    "services": ["Flights", "Hotels"], "origin": "Colombo (CMB)", "destination": "Japan",
    "travelDate": "", "travelMonth": "Mar 2027", "flexibleDays": 3, "nights": 0,
    "adults": 2, "children": 1, "travellersNote": "", "style": "Comfort",
    "budget": { "amount": 0, "currency": "" }, "notes": ""
  },
  "itinerary": [],
  "summaryText": "Hello Deima Travels,\nI'd like a custom quote. ..."
}
```

`itinerary` is filled only by the trip builder, with one entry per day: `{ "day": 1, "date": "2027-01-10", "title": "...", "activities": ["..."] }`.

If you change the shape later, raise `schemaVersion` in `quote.js` so the flow can tell old and new requests apart.
