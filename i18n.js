/* Deima Travels: English (default), Japanese and Korean.
   Every English string the site shows is looked up here and swapped in place, including text the
   trip builder, quote form, globe and seat guide draw later. The request text sent to Deima
   (the "What Deima receives" box and the quick-quote summary) stays in English for the team. */
(()=>{'use strict';
// "English": ["日本語", "한국어"]
const T={
// header, hero, departures
"Destinations":["旅行先","여행지"],"Explore":["探す","탐색"],"Airlines":["航空会社","항공사"],"Services":["サービス","서비스"],"How it works":["ご利用の流れ","이용 방법"],"Deima Group":["Deimaグループ","Deima 그룹"],"Contact":["お問い合わせ","문의"],"Plan my trip":["旅行を計画する","여행 계획하기"],
"Where do you want to wake up next?":["次はどこで目覚めたいですか?","다음엔 어디에서 눈뜨고 싶나요?"],
"Air tickets, visas, holiday packages and hotels — planned by one team in Colombo, from the first quote to the flight home.":["航空券、ビザ、パッケージツアー、ホテル。最初のお見積もりから帰りの便まで、コロンボの一つのチームがまとめて手配します。","항공권, 비자, 패키지 여행, 호텔까지. 첫 견적부터 귀국 항공편까지 콜롬보의 한 팀이 모두 준비합니다."],
"Now showing":["表示中","지금 보는 곳"],"TRIP BUILDER · SRI LANKA":["旅行プランナー · スリランカ","여행 플래너 · 스리랑카"],
"Build your trip, get a priced quote":["旅程を作って、料金付きのお見積もりを","여행을 만들고 가격 견적을 받으세요"],
"Pick your dates and interests, plan your route on the map, and a Deima consultant sends you prices.":["日程と興味を選び、地図でルートを作ると、Deimaの担当者が料金をお送りします。","날짜와 관심사를 고르고 지도에서 경로를 짜면 Deima 상담원이 가격을 보내드립니다."],
"Arrival date":["到着日","도착일"],"Travellers":["旅行者","여행자"],"1 adult":["大人1名","성인 1명"],"2 adults":["大人2名","성인 2명"],"3 adults":["大人3名","성인 3명"],"4 adults":["大人4名","성인 4명"],"Group (6)":["グループ(6名)","단체 (6명)"],
"Start building my trip →":["旅程づくりを始める →","여행 만들기 시작 →"],"Going abroad instead? Send a quick request":["海外旅行ですか?簡単なリクエストを送る","해외로 가시나요? 간단 요청 보내기"],
"Departures":["出発ボード","출발 안내"],"Real footage from places our travellers go — at home in Sri Lanka and across the world. Tap a gate to ask for a plan.":["スリランカ国内と世界各地、お客様が訪れる場所の実際の映像です。ゲートをタップしてプランを依頼できます。","스리랑카와 전 세계, 고객들이 실제로 다녀온 곳의 영상입니다. 게이트를 눌러 일정을 요청하세요."],
"All":["すべて","전체"],"Sri Lanka":["スリランカ","스리랑카"],"Abroad":["海外","해외"],"Sigiriya":["シーギリヤ","시기리야"],"Day tours and cultural triangle trips":["日帰りツアーと文化三角地帯の旅","당일 투어와 문화 삼각지대 여행"],"Build this trip →":["この旅を作る →","이 여행 만들기 →"],
"Malé atolls":["マレ環礁","말레 환초"],"Maldives":["モルディブ","몰디브"],"Island resort packages":["島リゾートのパッケージ","섬 리조트 패키지"],"Get a quote →":["見積もりを依頼 →","견적 받기 →"],
"UAE":["アラブ首長国連邦","아랍에미리트"],"Dubai":["ドバイ","두바이"],"City holidays and visit visas":["都市観光と訪問ビザ","도시 여행과 방문 비자"],"Ella":["エッラ","엘라"],"Hill country rail journeys":["高原地帯の鉄道の旅","고원 지대 기차 여행"],
"Japan":["日本","일본"],"Tokyo":["東京","도쿄"],"Tours and visa support":["ツアーとビザサポート","투어와 비자 지원"],"Galle, Sri Lanka":["ゴール、スリランカ","골, 스리랑카"],"South Coast":["南海岸","남부 해안"],
"Beaches, stilt fishermen and Galle Fort stays":["ビーチ、竹馬漁、ゴール要塞での滞在","해변, 장대 낚시꾼, 골 요새 숙박"],"United Kingdom":["イギリス","영국"],"London":["ロンドン","런던"],"Visit and study visas":["訪問・留学ビザ","방문 및 유학 비자"],
"Singapore":["シンガポール","싱가포르"],"City breaks and stopovers":["都市旅行とストップオーバー","도시 여행과 스톱오버"],"Sigiriya, Sri Lanka":["シーギリヤ、スリランカ","시기리야, 스리랑카"],"Maldives, Malé atolls":["モルディブ、マレ環礁","몰디브, 말레 환초"],"Dubai, UAE":["ドバイ、アラブ首長国連邦","두바이, 아랍에미리트"],"Tokyo, Japan":["東京、日本","도쿄, 일본"],
// globe
"Explore the world":["世界を探す","세계 탐색"],"Spin the globe. Pick a country.":["地球儀を回して、国を選ぼう。","지구본을 돌리고 나라를 고르세요."],
"Drag to turn the world and tap a glowing country to see the best places to visit, and why. The dotted line shows your route from Colombo.":["ドラッグで地球を回し、光っている国をタップすると、おすすめの観光地とその理由が見られます。点線はコロンボからのルートです。","드래그해서 지구를 돌리고 빛나는 나라를 누르면 가볼 만한 곳과 그 이유를 볼 수 있어요. 점선은 콜롬보에서 가는 경로입니다."],
"Colombo":["コロンボ","콜롬보"],"India":["インド","인도"],"Nepal":["ネパール","네팔"],"Thailand":["タイ","태국"],"Malaysia":["マレーシア","말레이시아"],"Indonesia":["インドネシア","인도네시아"],"Vietnam":["ベトナム","베트남"],"South Korea":["韓国","대한민국"],"Türkiye":["トルコ","튀르키예"],"France":["フランス","프랑스"],"Italy":["イタリア","이탈리아"],"Switzerland":["スイス","스위스"],"Australia":["オーストラリア","호주"],
"Drag to spin · tap a green country":["ドラッグで回転 · 緑の国をタップ","드래그로 회전 · 초록색 나라를 누르세요"],"Asia":["アジア","아시아"],"Indian Ocean":["インド洋","인도양"],"Middle East":["中東","중동"],"Europe":["ヨーロッパ","유럽"],"Oceania":["オセアニア","오세아니아"],
"Interactive globe. Use the country list to open each guide.":["操作できる地球儀。国の一覧から各ガイドを開けます。","조작 가능한 지구본. 나라 목록에서 각 가이드를 열 수 있습니다."],"Zoom in":["拡大","확대"],"Zoom out":["縮小","축소"],"Reset view":["表示をリセット","보기 초기화"],
"Tap for the Deima guide":["タップでDeimaガイドを表示","눌러서 Deima 가이드 보기"],"Close":["閉じる","닫기"],"Previous country":["前の国","이전 나라"],"Next country":["次の国","다음 나라"],
"Best months to go":["ベストシーズン","가기 좋은 달"],"Great for":["おすすめ","추천 대상"],"Best places to visit — and why":["おすすめの観光地とその理由","가볼 만한 곳과 그 이유"],"Tip":["ヒント","팁"],
"culture":["文化","문화"],"nature":["自然","자연"],"beach":["ビーチ","해변"],"city":["都市","도시"],"food":["グルメ","음식"],"adventure":["アクティビティ","액티비티"],
"Build my Sri Lanka trip":["スリランカ旅行を作る","스리랑카 여행 만들기"],"Compare airlines for this trip →":["この旅の航空会社を比較 →","이 여행의 항공사 비교 →"],"You are home":["ここが出発地","출발지입니다"],
"Jan":["1月","1월"],"Feb":["2月","2월"],"Mar":["3月","3월"],"Apr":["4月","4월"],"May":["5月","5월"],"Jun":["6月","6월"],"Jul":["7月","7월"],"Aug":["8月","8월"],"Sep":["9月","9월"],"Oct":["10月","10월"],"Nov":["11月","11월"],"Dec":["12月","12월"],
"Culture":["文化","문화"],"Wildlife":["野生動物","야생동물"],"Beaches":["ビーチ","해변"],"Families":["家族旅行","가족 여행"],"Pilgrimage":["巡礼","성지순례"],"Food":["グルメ","음식"],"Shopping":["ショッピング","쇼핑"],"Trekking":["トレッキング","트레킹"],"Mountains":["山","산"],"Nightlife":["ナイトライフ","나이트라이프"],"Value":["コスパ","가성비"],"First trip abroad":["初めての海外","첫 해외여행"],"Honeymoon":["ハネムーン","신혼여행"],"Surfing":["サーフィン","서핑"],"Students":["学生","학생"],"K-culture":["韓流カルチャー","K-컬처"],"Snorkelling":["シュノーケリング","스노클링"],"Luxury":["ラグジュアリー","럭셔리"],"Stopovers":["ストップオーバー","스톱오버"],"History":["歴史","역사"],"Football":["サッカー","축구"],"Family visits":["家族訪問","가족 방문"],"Art":["アート","예술"],"Snow":["雪","눈"],"Scenic trains":["絶景列車","경치 좋은 기차"],"Nature":["自然","자연"],
// country facts
"LKR":["スリランカ・ルピー","스리랑카 루피"],"Dec–Apr south & west · May–Sep east coast":["南部・西部は12〜4月 · 東海岸は5〜9月","남·서부 12~4월 · 동해안 5~9월"],"Oct–Mar":["10〜3月","10~3월"],"Oct–Nov & Mar–Apr":["10〜11月と3〜4月","10~11월, 3~4월"],"Nov–Mar cool & dry":["11〜3月(涼しく乾季)","11~3월 (선선한 건기)"],"All year · Feb–Aug drier":["通年 · 2〜8月は雨が少なめ","연중 · 2~8월이 더 건조"],"Dec–Aug on the west coast":["西海岸は12〜8月","서해안은 12~8월"],"Apr–Oct dry season":["4〜10月(乾季)","4~10월 (건기)"],"Feb–Apr is good nationwide":["2〜4月は全土でおすすめ","2~4월은 전국이 좋음"],"Mar–May blossoms · Oct–Nov colours":["3〜5月は花 · 10〜11月は紅葉","3~5월 꽃 · 10~11월 단풍"],"Apr–May & Sep–Nov":["4〜5月と9〜11月","4~5월, 9~11월"],"Nov–Apr dry season":["11〜4月(乾季)","11~4월 (건기)"],"Nov–Mar":["11〜3月","11~3월"],"Apr–Jun & Sep–Oct":["4〜6月と9〜10月","4~6월, 9~10월"],"May–Sep":["5〜9月","5~9월"],"Jun–Sep summer · Dec–Mar snow":["夏は6〜9月 · 雪は12〜3月","여름 6~9월 · 눈 12~3월"],"Sep–Nov & Mar–May":["9〜11月と3〜5月","9~11월, 3~5월"],
"≈ 1h 20m direct from Colombo":["コロンボから直行便で約1時間20分","콜롬보에서 직항 약 1시간 20분"],"≈ 1h 30m to Chennai from Colombo":["コロンボからチェンナイまで約1時間30分","콜롬보에서 첸나이까지 약 1시간 30분"],"≈ 4h direct from Colombo":["コロンボから直行便で約4時間","콜롬보에서 직항 약 4시간"],"≈ 3h 20m direct from Colombo":["コロンボから直行便で約3時間20分","콜롬보에서 직항 약 3시간 20분"],"≈ 3h 45m direct from Colombo":["コロンボから直行便で約3時間45分","콜롬보에서 직항 약 3시간 45분"],"≈ 3h 30m direct from Colombo":["コロンボから直行便で約3時間30分","콜롬보에서 직항 약 3시간 30분"],"≈ 7h with one stop from Colombo":["コロンボから乗り継ぎ1回で約7時間","콜롬보에서 1회 경유 약 7시간"],"≈ 6h with one stop from Colombo":["コロンボから乗り継ぎ1回で約6時間","콜롬보에서 1회 경유 약 6시간"],"≈ 9h direct to Tokyo from Colombo":["コロンボから東京へ直行便で約9時間","콜롬보에서 도쿄까지 직항 약 9시간"],"≈ 10h with one stop from Colombo":["コロンボから乗り継ぎ1回で約10時間","콜롬보에서 1회 경유 약 10시간"],"≈ 4h 30m direct from Colombo":["コロンボから直行便で約4時間30分","콜롬보에서 직항 약 4시간 30분"],"≈ 11h 30m direct from Colombo":["コロンボから直行便で約11時間30分","콜롬보에서 직항 약 11시간 30분"],"≈ 13h with one stop from Colombo":["コロンボから乗り継ぎ1回で約13時間","콜롬보에서 1회 경유 약 13시간"],"≈ 10h 30m direct to Melbourne from Colombo":["コロンボからメルボルンへ直行便で約10時間30分","콜롬보에서 멜버른까지 직항 약 10시간 30분"],
// Sri Lanka guide
"Eight UNESCO World Heritage Sites, wild elephants and misty tea hills — all on one small island.":["8つのユネスコ世界遺産、野生のゾウ、霧に包まれた茶畑。すべてが一つの小さな島に。","8곳의 유네스코 세계유산, 야생 코끼리, 안개 낀 차밭이 작은 섬 하나에 모두 있습니다."],
"A 5th-century palace on top of a 200 m rock, with ancient frescoes and the giant Lion Gate.":["高さ200mの岩山の上に建つ5世紀の宮殿。古代のフレスコ画と巨大なライオンの門があります。","높이 200m 바위 위의 5세기 궁전. 고대 프레스코화와 거대한 사자 문이 있습니다."],
"Climb at 7 am, before the heat and the crowds.":["暑さと混雑を避けて朝7時に登りましょう。","더위와 인파를 피해 아침 7시에 오르세요."],
"Tea country, the Nine Arch Bridge and the famous blue train ride from Kandy.":["紅茶の里、ナイン・アーチ橋、キャンディから乗る有名な青い列車。","차 재배지, 나인 아치 브리지, 그리고 캔디에서 타는 유명한 파란 기차."],
"Reserve train seats early — they sell out.":["列車の指定席は早めに予約を。売り切れます。","기차 좌석은 일찍 예약하세요. 매진됩니다."],
"Yala National Park":["ヤーラ国立公園","얄라 국립공원"],"One of the best places on earth to see a leopard in the wild, plus elephants and sloth bears.":["野生のヒョウを見られる世界有数の場所。ゾウやナマケグマもいます。","야생 표범을 볼 수 있는 세계 최고의 장소 중 하나. 코끼리와 느림보곰도 있습니다."],
"Take the dawn safari, when animals are most active.":["動物が最も活発な早朝のサファリがおすすめ。","동물이 가장 활발한 새벽 사파리를 타세요."],
"Galle & Mirissa":["ゴールとミリッサ","골과 미리사"],"A Dutch fort town, then whale watching and palm-lined beaches down the south coast.":["オランダ時代の要塞の町と、南海岸のホエールウォッチングやヤシ並木のビーチ。","네덜란드 요새 마을, 그리고 남부 해안의 고래 관찰과 야자수 해변."],
"South-coast whale season runs roughly Nov–Apr.":["南海岸のクジラのシーズンはおよそ11〜4月です。","남부 해안 고래 시즌은 대략 11~4월입니다."],
// India
"A short hop to very different worlds — palaces, backwaters, beaches and the Himalaya.":["ひとっ飛びでまったく違う世界へ。宮殿、水郷、ビーチ、そしてヒマラヤ。","짧은 비행으로 전혀 다른 세계로. 궁전, 수로, 해변, 그리고 히말라야."],
"INR":["インド・ルピー","인도 루피"],"Taj Mahal, Agra":["タージ・マハル(アーグラ)","타지마할, 아그라"],"Perhaps the most beautiful building ever made — best seen as the sun rises.":["おそらく世界で最も美しい建物。日の出の時間がベストです。","아마도 가장 아름다운 건축물. 해 뜰 무렵이 가장 좋습니다."],"Closed on Fridays.":["金曜日は休館です。","금요일은 휴관입니다."],
"Jaipur":["ジャイプール","자이푸르"],"The Pink City: Amber Fort, palaces and bazaars full of block-printed textiles.":["ピンクシティ。アンベール城、宮殿、木版染めの布が並ぶバザール。","핑크 시티. 암베르 성, 궁전, 블록 프린트 직물로 가득한 시장."],"Pair it with Delhi and Agra on the Golden Triangle.":["デリー、アーグラと合わせてゴールデン・トライアングルで。","델리, 아그라와 함께 골든 트라이앵글로 묶으세요."],
"Kerala backwaters":["ケララのバックウォーター","케랄라 백워터"],"Slow days on a houseboat drifting through palm-lined canals.":["ヤシ並木の水路をハウスボートでのんびり進む日々。","야자수 수로를 하우스보트로 천천히 떠다니는 하루."],"One night on a houseboat from Alleppey is plenty.":["アレッピーからのハウスボートは1泊で十分です。","알레피에서 하우스보트 1박이면 충분합니다."],
"Bodh Gaya":["ブッダガヤ","보드가야"],"Where the Buddha attained enlightenment under the Bodhi tree — a key pilgrimage site.":["ブッダが菩提樹の下で悟りを開いた地。重要な巡礼地です。","부처가 보리수 아래에서 깨달음을 얻은 곳. 중요한 성지입니다."],"Go Oct–Mar; summers are very hot.":["10〜3月がおすすめ。夏はとても暑いです。","10~3월에 가세요. 여름은 매우 덥습니다."],
"Get a quote for India":["インドの見積もりを依頼","인도 견적 받기"],
// Nepal
"Ancient temples, mountain flights and the trails to Everest and Annapurna.":["古い寺院、山岳遊覧飛行、エベレストとアンナプルナへのトレイル。","고대 사원, 산악 비행, 에베레스트와 안나푸르나로 가는 트레일."],"NPR":["ネパール・ルピー","네팔 루피"],
"Kathmandu Valley":["カトマンズ盆地","카트만두 계곡"],"Three royal Durbar Squares full of carved wooden temples and palaces.":["木彫りの寺院と宮殿が並ぶ3つの王宮広場(ダルバール広場)。","목조 조각 사원과 궁전이 가득한 세 곳의 더르바르 광장."],"See Kathmandu, Patan and Bhaktapur in one long day.":["カトマンズ、パタン、バクタプルは丸1日で回れます。","카트만두, 파탄, 박타푸르를 하루에 둘러볼 수 있어요."],
"Lumbini":["ルンビニ","룸비니"],"The birthplace of the Buddha, with monasteries built by countries from around the world.":["ブッダ生誕の地。世界各国が建てた寺院があります。","부처의 탄생지. 세계 여러 나라가 지은 사원이 있습니다."],"A meaningful pilgrimage — go in the cooler months.":["意義深い巡礼地。涼しい時期に訪れましょう。","의미 있는 순례지. 선선한 달에 가세요."],
"Pokhara & Annapurna":["ポカラとアンナプルナ","포카라와 안나푸르나"],"A lakeside town with sunrise views of 8,000 m peaks and short treks.":["8,000m級の峰々の朝日が見える湖畔の町。短いトレッキングも楽しめます。","8,000m 봉우리의 일출이 보이는 호숫가 마을과 짧은 트레킹."],"Poon Hill is a 4–5 day trek suitable for beginners.":["プーンヒルは初心者向けの4〜5日のトレッキングです。","푼힐은 초보자도 가능한 4~5일 트레킹입니다."],
"Everest mountain flight":["エベレスト遊覧飛行","에베레스트 산악 비행"],"Fly past the world's highest peak in one hour — no two-week trek needed.":["2週間のトレッキングなしで、1時間で世界最高峰のそばを飛びます。","2주 트레킹 없이 1시간 만에 세계 최고봉 옆을 날아갑니다."],"Morning flights have the clearest skies.":["朝の便が最も空が澄んでいます。","아침 비행편이 하늘이 가장 맑습니다."],
"Get a quote for Nepal":["ネパールの見積もりを依頼","네팔 견적 받기"],
// Thailand
"Street food, islands and golden temples — with great value at every budget.":["屋台料理、島々、黄金の寺院。どんな予算でもお得に楽しめます。","길거리 음식, 섬, 황금 사원. 어떤 예산이든 가성비가 좋습니다."],"THB":["タイ・バーツ","태국 바트"],
"Bangkok":["バンコク","방콕"],"The Grand Palace, Wat Arun, rooftop bars and some of the best street food in Asia.":["王宮、ワット・アルン、ルーフトップバー、そしてアジア屈指の屋台料理。","왕궁, 왓 아룬, 루프톱 바, 그리고 아시아 최고의 길거리 음식."],"Use the river boats to beat the traffic.":["渋滞を避けるならリバーボートが便利です。","교통체증을 피하려면 수상 보트를 타세요."],
"Phuket & Phi Phi":["プーケットとピピ島","푸껫과 피피섬"],"Long sandy beaches and boat trips to dramatic limestone islands.":["長い砂浜と、迫力ある石灰岩の島々へのボートツアー。","긴 모래 해변과 웅장한 석회암 섬으로 가는 보트 투어."],"Book Phi Phi day trips the day before — they leave early.":["ピピ島の日帰りツアーは前日までに予約を。出発が早いです。","피피섬 당일 투어는 전날 예약하세요. 일찍 출발합니다."],
"Chiang Mai":["チェンマイ","치앙마이"],"Old-city temples, night markets and ethical elephant sanctuaries.":["旧市街の寺院、ナイトマーケット、動物に配慮したゾウの保護施設。","구시가지 사원, 야시장, 윤리적인 코끼리 보호구역."],"Choose a sanctuary with no elephant riding.":["ゾウに乗らない保護施設を選びましょう。","코끼리 타기가 없는 보호구역을 고르세요."],
"Krabi & Railay":["クラビとライレイ","끄라비와 라일레이"],"Towering cliffs and calmer beaches than Phuket.":["そびえ立つ断崖と、プーケットより静かなビーチ。","우뚝 솟은 절벽과 푸껫보다 한적한 해변."],"Railay can only be reached by boat.":["ライレイへはボートでしか行けません。","라일레이는 보트로만 갈 수 있습니다."],
"Get a quote for Thailand":["タイの見積もりを依頼","태국 견적 받기"],
// Singapore
"Clean, safe and easy — the perfect first trip abroad or family holiday.":["清潔で安全、そして簡単。初めての海外や家族旅行にぴったり。","깨끗하고 안전하고 편리해요. 첫 해외여행이나 가족 여행에 딱입니다."],"SGD":["シンガポール・ドル","싱가포르 달러"],
"Marina Bay & Gardens by the Bay":["マリーナベイとガーデンズ・バイ・ザ・ベイ","마리나 베이와 가든스 바이 더 베이"],"A futuristic skyline and a free light show among the Supertrees every night.":["未来的なスカイラインと、毎晩スーパーツリーで行われる無料の光のショー。","미래적인 스카이라인과 매일 밤 슈퍼트리에서 열리는 무료 조명 쇼."],"Shows usually start at 7:45 pm and 8:45 pm.":["ショーは通常19:45と20:45に始まります。","쇼는 보통 오후 7시 45분과 8시 45분에 시작합니다."],
"Sentosa Island":["セントーサ島","센토사섬"],"Universal Studios, beaches, an aquarium and cable cars on one island.":["ユニバーサル・スタジオ、ビーチ、水族館、ケーブルカーが一つの島に。","유니버설 스튜디오, 해변, 수족관, 케이블카가 한 섬에."],"Buy combo tickets online before you go.":["セットチケットは事前にオンラインで購入しましょう。","콤보 티켓은 미리 온라인으로 사세요."],
"Hawker centres":["ホーカーセンター","호커 센터"],"Michelin-listed dishes for a few dollars at Maxwell and Lau Pa Sat.":["マックスウェルやラオパサで、ミシュラン掲載の料理が数ドルで。","맥스웰과 라우파삿에서 미쉐린 등재 요리를 몇 달러에."],"A tissue packet on a seat means it's taken.":["席にティッシュが置いてあれば、その席は取られています。","자리에 휴지가 놓여 있으면 맡아 둔 자리예요."],
"Chinatown & Little India":["チャイナタウンとリトル・インディア","차이나타운과 리틀 인디아"],"Temples, shophouses and markets, all within walking distance.":["寺院、ショップハウス、市場がすべて徒歩圏内。","사원, 숍하우스, 시장이 모두 걸어서 갈 거리에."],"Little India is great for last-minute shopping.":["リトル・インディアは最後の買い物にぴったり。","리틀 인디아는 마지막 쇼핑에 좋아요."],
"Get a quote for Singapore":["シンガポールの見積もりを依頼","싱가포르 견적 받기"],
// Malaysia
"Twin Towers, rainforest islands and food from three cultures.":["ツインタワー、熱帯雨林の島々、3つの文化が混ざった料理。","트윈 타워, 열대우림 섬, 세 문화가 어우러진 음식."],"MYR":["マレーシア・リンギット","말레이시아 링깃"],
"Kuala Lumpur":["クアラルンプール","쿠알라룸푸르"],"The Petronas Towers, Batu Caves and huge shopping malls.":["ペトロナスツインタワー、バトゥ洞窟、巨大なショッピングモール。","페트로나스 타워, 바투 동굴, 거대한 쇼핑몰."],"Book the Petronas skybridge online in advance.":["ペトロナスのスカイブリッジは事前にオンライン予約を。","페트로나스 스카이브리지는 미리 온라인 예약하세요."],
"Langkawi":["ランカウイ","랑카위"],"A duty-free island with a sky bridge, beaches and mangrove tours.":["スカイブリッジ、ビーチ、マングローブツアーがある免税の島。","스카이 브리지, 해변, 맹그로브 투어가 있는 면세 섬."],"A great beach add-on after Kuala Lumpur.":["クアラルンプールの後のビーチ滞在に最適。","쿠알라룸푸르 다음 해변 일정으로 좋아요."],
"Penang":["ペナン","페낭"],"George Town's street art and some of Asia's best street food.":["ジョージタウンのストリートアートと、アジア屈指の屋台料理。","조지타운의 거리 예술과 아시아 최고의 길거리 음식."],"Try char kway teow and assam laksa.":["チャー・クエイ・テオとアッサム・ラクサをぜひ。","차퀘티아우와 아삼 락사를 꼭 드셔 보세요."],
"Cameron Highlands":["キャメロンハイランド","카메론 하일랜드"],"Cool tea plantations and strawberry farms — a lot like Nuwara Eliya.":["涼しい茶畑とイチゴ農園。ヌワラエリヤによく似ています。","시원한 차밭과 딸기 농장. 누와라엘리야와 많이 닮았어요."],"Pack a light jacket for the evenings.":["夜用に薄手の上着を持っていきましょう。","저녁용 가벼운 재킷을 챙기세요."],
"Get a quote for Malaysia":["マレーシアの見積もりを依頼","말레이시아 견적 받기"],
// Indonesia
"Bali's temples and rice terraces — plus volcanoes and real dragons beyond.":["バリ島の寺院と棚田。さらに火山や本物のドラゴンも。","발리의 사원과 계단식 논, 그리고 화산과 진짜 용까지."],"IDR":["インドネシア・ルピア","인도네시아 루피아"],
"Ubud, Bali":["ウブド(バリ島)","우붓, 발리"],"Rice terraces, temples and yoga in Bali's green heart.":["バリ島の緑豊かな中心地で、棚田、寺院、ヨガを。","발리의 초록빛 중심에서 계단식 논, 사원, 요가를."],"Visit the Tegallalang terraces before 8 am.":["テガラランの棚田は朝8時前に訪れましょう。","뜨갈랄랑 계단식 논은 아침 8시 전에 가세요."],
"Uluwatu Temple":["ウルワツ寺院","울루와뚜 사원"],"A clifftop temple with a fire dance at sunset.":["夕暮れにファイヤーダンスが行われる断崖の上の寺院。","해 질 녘 불의 춤이 열리는 절벽 위 사원."],"Keep sunglasses and phones away from the monkeys.":["サングラスやスマホはサルに取られないよう注意。","선글라스와 휴대폰은 원숭이에게서 멀리 두세요."],
"Mount Batur sunrise":["バトゥール山の日の出","바뚜르산 일출"],"A pre-dawn hike up an active volcano to watch the sun rise.":["夜明け前に活火山を登り、日の出を見るハイキング。","새벽에 활화산을 올라 일출을 보는 하이킹."],"Start around 4 am with a local guide.":["現地ガイドと朝4時ごろに出発します。","현지 가이드와 새벽 4시쯤 출발합니다."],
"Komodo National Park":["コモド国立公園","코모도 국립공원"],"Real Komodo dragons, pink beaches and superb snorkelling.":["本物のコモドドラゴン、ピンクビーチ、最高のシュノーケリング。","진짜 코모도 왕도마뱀, 핑크 해변, 최고의 스노클링."],"Fly to Labuan Bajo and take a boat trip.":["ラブアンバジョへ飛び、ボートツアーに参加しましょう。","라부안바조로 날아가 보트 투어를 하세요."],
"Get a quote for Indonesia":["インドネシアの見積もりを依頼","인도네시아 견적 받기"],
// Vietnam
"Limestone bays, lantern-lit towns and some of the best food for the price anywhere.":["石灰岩の湾、ランタンが灯る町、そして驚くほど安くておいしい料理。","석회암 만, 등불이 밝힌 마을, 그리고 가격 대비 최고의 음식."],"VND":["ベトナム・ドン","베트남 동"],
"Ha Long Bay":["ハロン湾","하롱베이"],"Thousands of limestone islands — stay a night on a cruise.":["何千もの石灰岩の島々。クルーズで一泊しましょう。","수천 개의 석회암 섬. 크루즈에서 하룻밤 묵어 보세요."],"Nearby Lan Ha Bay is quieter.":["近くのランハ湾はもっと静かです。","근처 란하베이가 더 한적합니다."],
"Hoi An":["ホイアン","호이안"],"A lantern-lit old town where tailors make clothes in a day.":["ランタンが灯る旧市街。仕立屋が1日で服を作ってくれます。","등불이 밝힌 구시가지. 재단사가 하루 만에 옷을 만들어 줍니다."],"Go on the monthly full-moon lantern night.":["毎月の満月のランタン祭りの夜がおすすめ。","매달 보름달 등불 축제 밤에 가세요."],
"Hanoi":["ハノイ","하노이"],"Old Quarter streets, egg coffee and street-food tours.":["旧市街の街並み、エッグコーヒー、屋台料理ツアー。","구시가지 거리, 에그 커피, 길거리 음식 투어."],"Cross the road slowly and steadily — bikes flow around you.":["道路はゆっくり一定の速さで渡りましょう。バイクが避けてくれます。","길은 천천히 일정하게 건너세요. 오토바이가 비켜 갑니다."],
"Ho Chi Minh City":["ホーチミン市","호찌민시"],"Busy and modern, close to the Mekong Delta and Cu Chi tunnels.":["活気ある近代都市。メコンデルタやクチトンネルにも近いです。","활기차고 현대적인 도시. 메콩 델타와 꾸찌 터널이 가깝습니다."],"Take a day trip on the Mekong.":["メコン川への日帰り旅行をどうぞ。","메콩강 당일 여행을 해 보세요."],
"Get a quote for Vietnam":["ベトナムの見積もりを依頼","베트남 견적 받기"],
// Japan
"Neon cities, quiet temples and the best trains in the world.":["ネオンの都市、静かな寺院、そして世界一の鉄道。","네온 도시, 고요한 사원, 그리고 세계 최고의 기차."],"JPY":["日本円","일본 엔"],
"Shibuya Crossing, Asakusa temples and endless food.":["渋谷スクランブル交差点、浅草の寺、尽きないグルメ。","시부야 스크램블 교차로, 아사쿠사 사원, 끝없는 음식."],"Add a Suica card to your phone for all trains.":["スマホにSuicaを入れれば、すべての電車に乗れます。","휴대폰에 Suica 카드를 추가하면 모든 기차를 탈 수 있어요."],
"Kyoto":["京都","교토"],"Over 1,000 temples, bamboo forests and geisha districts.":["1,000を超える寺院、竹林、花街。","1,000곳이 넘는 사원, 대나무 숲, 게이샤 거리."],"Fushimi Inari before 8 am is magical.":["朝8時前の伏見稲荷は幻想的です。","아침 8시 전의 후시미 이나리는 환상적입니다."],
"Mount Fuji & Hakone":["富士山と箱根","후지산과 하코네"],"Lake views of Fuji and traditional hot-spring inns.":["湖から望む富士山と伝統的な温泉旅館。","호수에서 보는 후지산과 전통 온천 여관."],"Fuji is clearest on winter mornings.":["富士山は冬の朝が最もよく見えます。","후지산은 겨울 아침에 가장 잘 보입니다."],
"Osaka & Nara":["大阪と奈良","오사카와 나라"],"Japan's street-food capital, and friendly deer in Nara Park.":["日本の食い倒れの街と、奈良公園の人懐っこい鹿。","일본 길거리 음식의 수도와 나라 공원의 친근한 사슴."],"Nara is an easy half-day trip.":["奈良は半日で気軽に行けます。","나라는 반나절로 쉽게 다녀올 수 있어요."],
"Get a quote for Japan":["日本の見積もりを依頼","일본 견적 받기"],
// Korea
"K-culture, royal palaces, mountains and the volcanic island of Jeju.":["韓流カルチャー、王宮、山々、そして火山島の済州島。","K-컬처, 왕궁, 산, 그리고 화산섬 제주."],"KRW":["韓国ウォン","대한민국 원"],
"Seoul":["ソウル","서울"],"Palaces, Myeongdong beauty shops and night markets.":["王宮、明洞のコスメショップ、ナイトマーケット。","궁궐, 명동 화장품 가게, 야시장."],"Wear a hanbok and palace entry is free.":["韓服を着ると王宮に無料で入れます。","한복을 입으면 궁궐 입장이 무료예요."],
"Jeju Island":["済州島","제주도"],"A volcanic coast, waterfalls and Hallasan mountain.":["火山の海岸、滝、そして漢拏山。","화산 해안, 폭포, 그리고 한라산."],"Hire a car or join a tour — the island is spread out.":["島は広いので、レンタカーかツアーがおすすめです。","섬이 넓으니 렌터카나 투어를 이용하세요."],
"Busan":["釜山","부산"],"Beaches, seafood markets and colourful Gamcheon village.":["ビーチ、海鮮市場、カラフルな甘川文化村。","해변, 수산시장, 알록달록한 감천문화마을."],"Take the KTX fast train from Seoul — about 2.5 hours.":["ソウルから高速鉄道KTXで約2.5時間です。","서울에서 KTX로 약 2시간 30분입니다."],
"The DMZ":["DMZ(非武装地帯)","DMZ (비무장지대)"],"Look across into North Korea from the border observatories.":["国境の展望台から北朝鮮を望めます。","국경 전망대에서 북한을 바라볼 수 있습니다."],"Bring your passport — it's checked on the tour.":["ツアー中に確認されるのでパスポートを持参してください。","투어 중 확인하니 여권을 챙기세요."],
"Get a quote for South Korea":["韓国の見積もりを依頼","대한민국 견적 받기"],
// Maldives
"Overwater villas and the clearest reefs in the Indian Ocean — just 80 minutes from Colombo.":["水上ヴィラとインド洋で最も透明なサンゴ礁。コロンボからわずか80分。","수상 빌라와 인도양에서 가장 맑은 산호초. 콜롬보에서 단 80분."],"MVR / USD":["ルフィヤ / 米ドル","루피야 / 미국 달러"],
"North & South Malé resorts":["北・南マレ環礁のリゾート","북·남 말레 리조트"],"Resorts a short speedboat ride from the airport, so you spend less time and money on transfers.":["空港からスピードボートですぐのリゾート。移動の時間と費用を抑えられます。","공항에서 스피드보트로 금방인 리조트. 이동 시간과 비용이 줄어듭니다."],"Under 4 nights? Choose a speedboat resort.":["4泊未満ならスピードボートで行けるリゾートを。","4박 미만이면 스피드보트 리조트를 고르세요."],
"Baa Atoll":["バア環礁","바 환초"],"A UNESCO biosphere where hundreds of manta rays gather at Hanifaru Bay.":["ハニファル湾に何百ものマンタが集まる、ユネスコの生物圏保護区。","하니파루 만에 수백 마리 쥐가오리가 모이는 유네스코 생물권 보전지역."],"Manta season peaks around Jun–Nov.":["マンタのピークはおよそ6〜11月です。","쥐가오리 시즌은 6~11월 무렵이 절정입니다."],
"Maafushi local island":["マーフシ(ローカル島)","마푸시 현지 섬"],"Guesthouses and white beaches at a fraction of resort prices.":["リゾートよりずっと安いゲストハウスと白いビーチ。","리조트보다 훨씬 저렴한 게스트하우스와 하얀 해변."],"Local islands are alcohol-free; use the marked bikini beach.":["ローカル島は飲酒禁止です。指定のビキニビーチを利用しましょう。","현지 섬은 금주 지역이에요. 지정된 비키니 해변을 이용하세요."],
"South Ari Atoll":["南アリ環礁","남 아리 환초"],"Whale shark sightings all year round on the reef edge.":["一年中、リーフの外側でジンベエザメに出会えます。","연중 산호초 가장자리에서 고래상어를 볼 수 있어요."],"Go with a licensed operator who follows distance rules.":["距離のルールを守る認可業者と行きましょう。","거리 규칙을 지키는 허가 업체와 함께 가세요."],
"Get a quote for Maldives":["モルディブの見積もりを依頼","몰디브 견적 받기"],
// UAE
"Desert safaris, record-breaking towers and giant malls — four and a half hours away.":["砂漠サファリ、記録的な高層タワー、巨大モール。わずか4時間半。","사막 사파리, 기록적인 초고층 타워, 거대한 쇼핑몰. 4시간 30분 거리."],"AED":["UAEディルハム","UAE 디르함"],
"Burj Khalifa & Downtown Dubai":["ブルジュ・ハリファとダウンタウン・ドバイ","부르즈 할리파와 다운타운 두바이"],"The world's tallest building and the Dubai Fountain show.":["世界一高いビルとドバイ・ファウンテンのショー。","세계에서 가장 높은 빌딩과 두바이 분수 쇼."],"Book a sunset slot for the observation deck.":["展望台は夕暮れの時間帯を予約しましょう。","전망대는 일몰 시간대로 예약하세요."],
"Desert safari":["砂漠サファリ","사막 사파리"],"Dune bashing, camel rides and a barbecue camp under the stars.":["砂丘ドライブ、ラクダ乗り、星空の下のバーベキューキャンプ。","모래언덕 드라이브, 낙타 타기, 별빛 아래 바비큐 캠프."],"Afternoon safaris include sunset and dinner.":["午後のサファリには夕日と夕食が含まれます。","오후 사파리는 일몰과 저녁 식사가 포함됩니다."],
"Sheikh Zayed Grand Mosque":["シェイク・ザイード・グランド・モスク","셰이크 자이드 그랜드 모스크"],"A vast white-marble mosque in Abu Dhabi, free to visit.":["アブダビにある白い大理石の巨大なモスク。見学無料です。","아부다비의 거대한 흰 대리석 모스크. 무료로 방문할 수 있어요."],"Cover arms and legs; women need a headscarf.":["腕と脚を覆い、女性はスカーフが必要です。","팔과 다리를 가리고 여성은 스카프가 필요합니다."],
"Yas Island":["ヤス島","야스섬"],"Ferrari World, Warner Bros. World and big water parks.":["フェラーリ・ワールド、ワーナー・ブラザース・ワールド、大型ウォーターパーク。","페라리 월드, 워너 브라더스 월드, 대형 워터파크."],"Multi-park passes save a lot.":["複数パーク共通パスがかなりお得です。","멀티 파크 패스가 훨씬 저렴합니다."],
"Get a quote for UAE":["アラブ首長国連邦の見積もりを依頼","아랍에미리트 견적 받기"],
// Türkiye
"Where Europe meets Asia — bazaars, hot-air balloons and a turquoise coast.":["ヨーロッパとアジアが出会う場所。バザール、熱気球、ターコイズの海岸。","유럽과 아시아가 만나는 곳. 바자르, 열기구, 청록빛 해안."],"TRY":["トルコ・リラ","튀르키예 리라"],
"Istanbul":["イスタンブール","이스탄불"],"Hagia Sophia, the Blue Mosque and the Grand Bazaar.":["アヤソフィア、ブルーモスク、グランドバザール。","아야 소피아, 블루 모스크, 그랜드 바자르."],"Take a Bosphorus ferry at sunset.":["夕暮れにボスポラス海峡のフェリーに乗りましょう。","해 질 녘 보스포루스 페리를 타세요."],
"Cappadocia":["カッパドキア","카파도키아"],"Sunrise hot-air balloon flights over fairy chimneys.":["奇岩群の上を飛ぶ日の出の熱気球。","요정의 굴뚝 위를 나는 일출 열기구."],"Stay 2–3 nights in case wind cancels a flight.":["風で欠航する場合に備えて2〜3泊しましょう。","바람으로 비행이 취소될 수 있으니 2~3박 하세요."],
"Pamukkale":["パムッカレ","파묵칼레"],"White travertine terraces with warm, shallow pools.":["温かく浅いプールがある白い石灰棚。","따뜻하고 얕은 웅덩이가 있는 하얀 석회 계단."],"Shoes are not allowed on the terraces.":["石灰棚の上は靴を脱いで歩きます。","석회 계단 위에서는 신발을 신을 수 없어요."],
"Antalya":["アンタルヤ","안탈리아"],"Beaches, a pretty old town and Roman ruins.":["ビーチ、美しい旧市街、ローマ遺跡。","해변, 예쁜 구시가지, 로마 유적."],"Visit in May or Sep to dodge the summer peak.":["夏のピークを避けて5月か9月に。","여름 성수기를 피해 5월이나 9월에 가세요."],
"Get a quote for Türkiye":["トルコの見積もりを依頼","튀르키예 견적 받기"],
// UK
"History, football and green countryside — with direct flights from Colombo.":["歴史、サッカー、緑の田園風景。コロンボから直行便もあります。","역사, 축구, 푸른 시골 풍경. 콜롬보에서 직항도 있어요."],"GBP":["英ポンド","영국 파운드"],
"Big Ben, free museums and West End shows.":["ビッグ・ベン、無料の博物館、ウエストエンドの舞台。","빅벤, 무료 박물관, 웨스트엔드 공연."],"Tap a contactless card on the Tube — daily fares are capped.":["地下鉄はタッチ決済のカードで。1日の運賃に上限があります。","지하철은 비접촉 카드로 찍으세요. 하루 요금 상한이 있어요."],
"Edinburgh":["エディンバラ","에든버러"],"A castle on a volcano, the Royal Mile and August festivals.":["火山の上の城、ロイヤル・マイル、8月のフェスティバル。","화산 위의 성, 로열 마일, 8월 축제."],"Book August stays months ahead.":["8月の宿泊は数か月前に予約を。","8월 숙박은 몇 달 전에 예약하세요."],
"Lake District":["湖水地方","레이크 디스트릭트"],"Lakes, hills and stone villages made for walking.":["歩いて楽しむ湖、丘、石造りの村。","걷기 좋은 호수, 언덕, 돌담 마을."],"Base yourself in Windermere or Keswick.":["ウィンダミアかケズィックを拠点に。","윈더미어나 케직에 머무르세요."],
"Oxford & Cambridge":["オックスフォードとケンブリッジ","옥스퍼드와 케임브리지"],"Historic university towns — ideal for students planning to study in the UK.":["歴史ある大学の町。イギリス留学を考える学生にぴったり。","역사적인 대학 도시. 영국 유학을 계획하는 학생에게 좋아요."],"Both are easy day trips by train from London.":["どちらもロンドンから電車で日帰りできます。","둘 다 런던에서 기차로 당일치기가 쉬워요."],
"Get a quote for United Kingdom":["イギリスの見積もりを依頼","영국 견적 받기"],
// France
"Paris, palaces and the sunny Riviera.":["パリ、宮殿、そして陽光あふれるリヴィエラ。","파리, 궁전, 그리고 햇살 가득한 리비에라."],"EUR":["ユーロ","유로"],
"Paris":["パリ","파리"],"The Eiffel Tower, the Louvre and a café on every corner.":["エッフェル塔、ルーヴル美術館、街角ごとのカフェ。","에펠탑, 루브르, 골목마다 있는 카페."],"Book Louvre and Eiffel tickets online for a time slot.":["ルーヴルとエッフェル塔は時間指定のチケットをオンラインで。","루브르와 에펠탑은 시간 지정 티켓을 온라인으로 예약하세요."],
"Palace of Versailles":["ヴェルサイユ宮殿","베르사유 궁전"],"The golden palace and gardens of Louis XIV.":["ルイ14世の黄金の宮殿と庭園。","루이 14세의 황금 궁전과 정원."],"Closed on Mondays.":["月曜日は休館です。","월요일은 휴관입니다."],
"French Riviera":["フレンチ・リヴィエラ","프렌치 리비에라"],"Nice, Cannes and Monaco along the blue coast.":["紺碧海岸沿いのニース、カンヌ、モナコ。","푸른 해안을 따라 니스, 칸, 모나코."],"Trains link the towns cheaply.":["町と町は安い電車で結ばれています。","도시들은 저렴한 기차로 이어져 있어요."],
"Mont-Saint-Michel":["モン・サン・ミシェル","몽생미셸"],"A medieval abbey on a tidal island.":["潮の満ち引きで島になる中世の修道院。","조수 섬 위의 중세 수도원."],"Check tide times — the bay floods fast.":["潮の時間を確認しましょう。湾はすぐに満ちます。","조수 시간을 확인하세요. 만이 빠르게 물에 잠깁니다."],
"Get a quote for France":["フランスの見積もりを依頼","프랑스 견적 받기"],
// Italy
"Ancient Rome, canals, Renaissance art and cliffside villages.":["古代ローマ、運河、ルネサンス美術、断崖の村々。","고대 로마, 운하, 르네상스 미술, 절벽 마을."],
"Rome":["ローマ","로마"],"The Colosseum, the Vatican and the Trevi Fountain.":["コロッセオ、バチカン、トレビの泉。","콜로세움, 바티칸, 트레비 분수."],"Book Colosseum tickets well ahead.":["コロッセオのチケットは早めに予約を。","콜로세움 티켓은 미리 예약하세요."],
"Venice":["ヴェネツィア","베네치아"],"Canals, gondolas and St Mark's Square.":["運河、ゴンドラ、サン・マルコ広場。","운하, 곤돌라, 산마르코 광장."],"Day-trippers pay an access fee on peak days.":["混雑日は日帰り客に入島料がかかります。","성수기에는 당일 방문객이 입장료를 냅니다."],
"Florence & Tuscany":["フィレンツェとトスカーナ","피렌체와 토스카나"],"Renaissance art, then vineyards and hill towns.":["ルネサンス美術、そしてブドウ畑と丘の町。","르네상스 미술, 그리고 포도밭과 언덕 마을."],"Book the Uffizi Gallery in advance.":["ウフィツィ美術館は事前予約を。","우피치 미술관은 미리 예약하세요."],
"Amalfi Coast":["アマルフィ海岸","아말피 해안"],"Pastel villages stacked above a turquoise sea.":["ターコイズの海の上に重なるパステルカラーの村。","청록빛 바다 위에 층층이 쌓인 파스텔 마을."],"Use ferries — the coast road jams in summer.":["夏は海岸道路が渋滞するのでフェリーを使いましょう。","여름엔 해안 도로가 막히니 페리를 타세요."],
"Get a quote for Italy":["イタリアの見積もりを依頼","이탈리아 견적 받기"],
// Switzerland
"Snow peaks, glacier trains and storybook lakes.":["雪山、氷河を走る列車、絵本のような湖。","설산, 빙하 기차, 동화 같은 호수."],"CHF":["スイス・フラン","스위스 프랑"],
"Jungfraujoch":["ユングフラウヨッホ","융프라우요흐"],"The \"Top of Europe\" railway to a glacier at 3,454 m.":["標高3,454mの氷河へ向かう「トップ・オブ・ヨーロッパ」鉄道。","해발 3,454m 빙하로 가는 '유럽의 정상' 철도."],"Check the live webcam for clouds before you go.":["出発前にライブカメラで雲の様子を確認しましょう。","출발 전 실시간 웹캠으로 구름을 확인하세요."],
"Zermatt & Matterhorn":["ツェルマットとマッターホルン","체르마트와 마터호른"],"A car-free village beneath the world's most famous peak.":["世界で最も有名な山のふもとにある、車の走らない村。","세계에서 가장 유명한 봉우리 아래의 차 없는 마을."],"Sunrise turns the Matterhorn gold.":["日の出がマッターホルンを金色に染めます。","일출이 마터호른을 황금빛으로 물들입니다."],
"Lucerne & Mount Titlis":["ルツェルンとティトリス山","루체른과 티틀리스산"],"Chapel Bridge, lake cruises and snow all year on Titlis.":["カペル橋、湖のクルーズ、一年中雪があるティトリス。","카펠교, 호수 크루즈, 연중 눈이 있는 티틀리스."],"Great for a first time in the snow.":["初めての雪体験にぴったり。","처음 눈을 보는 분께 딱이에요."],
"Glacier Express":["氷河特急","빙하 특급"],"A slow, panoramic train across the Alps.":["アルプスを横断する、ゆったりとしたパノラマ列車。","알프스를 가로지르는 느긋한 파노라마 기차."],"A Swiss Travel Pass covers most trains.":["スイストラベルパスでほとんどの列車に乗れます。","스위스 트래블 패스로 대부분의 기차를 탈 수 있어요."],
"Get a quote for Switzerland":["スイスの見積もりを依頼","스위스 견적 받기"],
// Australia
"Harbour cities, wild coast and the Great Barrier Reef.":["港町、手つかずの海岸、グレート・バリア・リーフ。","항구 도시, 야생 해안, 그레이트 배리어 리프."],"AUD":["豪ドル","호주 달러"],
"Sydney":["シドニー","시드니"],"The Opera House, Harbour Bridge and Bondi Beach.":["オペラハウス、ハーバーブリッジ、ボンダイビーチ。","오페라 하우스, 하버 브리지, 본다이 비치."],"Take the ferry to Manly for great harbour views.":["マンリー行きのフェリーで港の絶景を。","맨리행 페리에서 멋진 항구 풍경을 보세요."],
"Melbourne":["メルボルン","멜버른"],"Coffee, laneways and sport — with a large Sri Lankan community.":["コーヒー、路地裏、スポーツ。大きなスリランカ人コミュニティもあります。","커피, 골목길, 스포츠. 스리랑카 교민 사회도 큽니다."],"Weather changes fast — pack layers.":["天気が変わりやすいので重ね着を。","날씨가 빨리 변하니 겹쳐 입을 옷을 챙기세요."],
"Great Ocean Road":["グレート・オーシャン・ロード","그레이트 오션 로드"],"A coastal drive to the Twelve Apostles rock stacks.":["十二使徒の岩へ向かう海岸ドライブ。","12사도 바위로 가는 해안 드라이브."],"Allow two days rather than one.":["1日ではなく2日かけましょう。","하루보다 이틀을 잡으세요."],
"Great Barrier Reef":["グレート・バリア・リーフ","그레이트 배리어 리프"],"Snorkel or dive the world's largest reef from Cairns.":["ケアンズから世界最大のサンゴ礁でシュノーケリングやダイビングを。","케언스에서 세계 최대 산호초를 스노클링이나 다이빙으로."],"Jun–Oct is the dry season up north.":["北部は6〜10月が乾季です。","북부는 6~10월이 건기입니다."],
"Get a quote for Australia":["オーストラリアの見積もりを依頼","호주 견적 받기"],
// airlines
"Choose your airline":["航空会社を選ぶ","항공사 선택"],"Which airline is right for this trip?":["この旅に合う航空会社は?","이 여행에 맞는 항공사는?"],
"Pick a region to see the airlines our travellers use from Colombo. Compare up to three side by side, then see the best seats on board.":["地域を選ぶと、お客様がコロンボから利用する航空会社が表示されます。最大3社を並べて比較し、機内のベストシートも確認できます。","지역을 고르면 고객들이 콜롬보에서 이용하는 항공사가 나옵니다. 최대 3곳을 나란히 비교하고 기내 최고의 좌석도 확인하세요."],
"Region":["地域","지역"],"India, Nepal & Maldives":["インド・ネパール・モルディブ","인도·네팔·몰디브"],"Southeast & East Asia":["東南アジア・東アジア","동남아·동아시아"],"Middle East & Europe":["中東・ヨーロッパ","중동·유럽"],
"Full-service":["フルサービス","풀서비스"],"bag, meals and seat included":["手荷物・食事・座席込み","수하물·식사·좌석 포함"],"Hybrid":["ハイブリッド","하이브리드"],"choose a fare with or without extras":["追加サービスの有無で運賃を選べる","부가 서비스 포함 여부로 운임 선택"],"Budget":["格安","저비용"],"low fare, pay for every extra":["安い運賃、追加はすべて有料","저렴한 운임, 추가는 모두 유료"],
"SriLankan Airlines":["スリランカ航空","스리랑카항공"],"Emirates":["エミレーツ航空","에미레이트항공"],"Qatar Airways":["カタール航空","카타르항공"],"Etihad Airways":["エティハド航空","에티하드항공"],"Turkish Airlines":["ターキッシュ エアラインズ","터키항공"],"Gulf Air":["ガルフ・エア","걸프항공"],"flydubai":["フライドバイ","플라이두바이"],"Air Arabia":["エア・アラビア","에어아라비아"],"Singapore Airlines":["シンガポール航空","싱가포르항공"],"Thai Airways":["タイ国際航空","타이항공"],"Malaysia Airlines":["マレーシア航空","말레이시아항공"],"Batik Air":["バティック・エア","바틱에어"],"AirAsia":["エアアジア","에어아시아"],"IndiGo":["インディゴ","인디고"],"Air India":["エア・インディア","에어인디아"],
"On-board comfort":["機内の快適さ","기내 편안함"],"Network":["路線網","노선망"],"Extras included":["込みのサービス","포함 서비스"],"Best for":["おすすめ","추천"],"See best seats":["ベストシートを見る","최고 좌석 보기"],"✓ Comparing":["✓ 比較中","✓ 비교 중"],"+ Compare":["+ 比較","+ 비교"],
"Non-stop from Colombo on many routes":["多くの路線でコロンボから直行","여러 노선에서 콜롬보 출발 직항"],"Bag and meals included":["手荷物と食事込み","수하물과 식사 포함"],"Can cost more than Gulf airlines":["湾岸系航空会社より高いことも","걸프 항공사보다 비쌀 수 있음"],"Smaller network beyond its direct routes":["直行便以外の路線網は小さめ","직항 외 노선망은 작은 편"],"Direct flights and families who want no connections":["直行便を希望する方、乗り継ぎを避けたい家族","직항을 원하는 분, 환승을 피하고 싶은 가족"],
"Huge network to Europe, Africa and the Americas":["ヨーロッパ・アフリカ・米州への巨大な路線網","유럽·아프리카·미주로 가는 방대한 노선망"],"Excellent seat-back entertainment":["充実した座席モニターのエンタメ","훌륭한 좌석 엔터테인먼트"],"Usually a stop in Dubai":["通常ドバイ経由","보통 두바이 경유"],"Peak-season fares rise fast":["繁忙期は運賃がすぐ上がる","성수기 운임이 빨리 오름"],"Long trips to Europe and beyond, in comfort":["ヨーロッパ以遠への長距離を快適に","유럽 이상 장거리를 편안하게"],
"Highly rated service":["高評価のサービス","높은 평가의 서비스"],"Calm, easy hub airport":["落ち着いた使いやすいハブ空港","차분하고 편리한 허브 공항"],"Stop in Doha":["ドーハ経由","도하 경유"],"Premium price on busy dates":["混雑日は高め","붐비는 날엔 비쌈"],"Comfortable long-haul with one stop":["乗り継ぎ1回の快適な長距離便","1회 경유의 편안한 장거리"],
"Often good-value fares to Europe":["ヨーロッパ行きがお得なことが多い","유럽행 운임이 저렴한 편"],"Easy Abu Dhabi stopovers":["アブダビでのストップオーバーが簡単","아부다비 스톱오버가 쉬움"],"Smaller network than Dubai or Doha":["ドバイやドーハより路線網が小さい","두바이·도하보다 노선망이 작음"],"Value long-haul with full service":["フルサービスでお得な長距離","풀서비스의 가성비 장거리"],
"Flies to more countries than almost any airline":["就航国数は世界トップクラス","거의 모든 항공사보다 많은 나라에 취항"],"Good food and Istanbul stopovers":["おいしい機内食とイスタンブール立ち寄り","좋은 기내식과 이스탄불 스톱오버"],"Longer total journey to Europe":["ヨーロッパまでの総時間は長め","유럽까지 총 여정이 김"],"Very large hub — allow time":["ハブ空港が非常に大きいので時間に余裕を","허브 공항이 매우 커서 여유 시간 필요"],"Reaching smaller European cities":["ヨーロッパの地方都市へ","유럽 소도시로 갈 때"],
"Competitive fares to the Gulf and Europe":["湾岸諸国・ヨーロッパへの手頃な運賃","걸프·유럽행 경쟁력 있는 운임"],"Quiet hub with short connections":["空いていて乗り継ぎが短いハブ","한적하고 환승이 짧은 허브"],"Smaller network":["路線網が小さい","노선망이 작음"],"Fewer daily flights":["1日の便数が少ない","하루 운항편이 적음"],"Budget-minded travellers who still want full service":["節約したいがフルサービスは欲しい方","절약하면서도 풀서비스를 원하는 분"],
"Cheaper than full-service to the Gulf":["湾岸諸国へはフルサービスより安い","걸프행은 풀서비스보다 저렴"],"Business class on many flights":["多くの便にビジネスクラスあり","여러 편에 비즈니스석 있음"],"Bags and meals depend on the fare":["手荷物と食事は運賃次第","수하물과 식사는 운임에 따라 다름"],"Narrow-body plane on long legs":["長い区間も小型機","장거리 구간도 소형기"],"Gulf trips on a budget, with a bag fare if needed":["予算重視の湾岸旅行に。必要なら手荷物付き運賃で","저예산 걸프 여행, 필요하면 수하물 포함 운임으로"],
"Often the lowest fare to the UAE":["UAE行きの最安値になりやすい","UAE행 최저가인 경우가 많음"],"Simple and punctual":["シンプルで時間に正確","간편하고 정시성 좋음"],"Bags, seats and meals cost extra":["手荷物・座席・食事は別料金","수하물·좌석·식사 추가 요금"],"Sharjah is about 30 min from Dubai":["シャルジャはドバイから約30分","샤르자는 두바이에서 약 30분"],"Short Gulf trips with light luggage":["荷物の少ない短い湾岸旅行","짐이 적은 짧은 걸프 여행"],
"Benchmark service and comfort":["業界の基準となるサービスと快適さ","업계 기준이 되는 서비스와 편안함"],"Changi is one of the best airports in the world":["チャンギは世界最高クラスの空港","창이는 세계 최고 공항 중 하나"],"Usually the highest fare":["通常は最も高い運賃","보통 가장 비싼 운임"],"Stop in Singapore for most routes":["多くの路線でシンガポール経由","대부분 노선이 싱가포르 경유"],"Comfort to East Asia and Australia":["東アジア・オーストラリアへ快適に","동아시아·호주로 편안하게"],
"Direct to Bangkok with full service":["バンコクへフルサービスの直行便","방콕행 풀서비스 직항"],"Good connections across Asia":["アジア各地への乗り継ぎが便利","아시아 전역 연결이 좋음"],"Some older cabins":["一部の客室が古い","일부 기내가 낡음"],"Thailand holidays and Asia connections":["タイ旅行とアジア乗り継ぎ","태국 여행과 아시아 환승"],
"Full service at fair prices":["手頃な価格でフルサービス","합리적인 가격의 풀서비스"],"Good links to Australia and East Asia":["オーストラリア・東アジアへの接続が良い","호주·동아시아 연결이 좋음"],"Stop in Kuala Lumpur":["クアラルンプール経由","쿠알라룸푸르 경유"],"Value full-service to Asia and Australia":["アジア・オーストラリアへのお得なフルサービス","아시아·호주행 가성비 풀서비스"],
"Checked bag often included":["受託手荷物込みのことが多い","위탁 수하물 포함인 경우가 많음"],"Cheaper than full-service":["フルサービスより安い","풀서비스보다 저렴"],"Fewer frills on board":["機内サービスは控えめ","기내 서비스는 간소"],"Value trips to Malaysia and onward":["マレーシアとその先へのお得な旅","말레이시아 및 그 이상 가성비 여행"],
"Very low base fares":["基本運賃がとても安い","기본 운임이 매우 저렴"],"Wide Southeast Asia network":["東南アジアの広い路線網","넓은 동남아 노선망"],"Every extra costs money":["追加はすべて有料","모든 추가가 유료"],"Tight legroom":["足元が狭い","다리 공간이 좁음"],"Backpackers and short hops with carry-on only":["バックパッカーや機内持ち込みだけの短距離に","배낭여행자, 기내 수하물만 있는 단거리"],
"Full service to India and beyond":["インドとその先へフルサービス","인도 및 그 이상 풀서비스"],"Bag included":["手荷物込み","수하물 포함"],"Cabin quality varies by plane":["機材によって客室の質が異なる","기종마다 기내 품질이 다름"],"India trips with full service and a bag":["手荷物付きフルサービスのインド旅行","수하물 포함 풀서비스 인도 여행"],
"Low fares to many Indian cities":["インド各地への安い運賃","인도 여러 도시로 저렴한 운임"],"Very punctual":["時間にとても正確","정시성이 매우 좋음"],"Bags and meals extra":["手荷物と食事は別料金","수하물과 식사 추가 요금"],"No seat-back screens":["座席モニターなし","좌석 모니터 없음"],"Short India trips and pilgrimages":["短いインド旅行や巡礼に","짧은 인도 여행과 성지순례"],
"Side by side":["並べて比較","나란히 비교"],"Compare airlines":["航空会社を比較","항공사 비교"],"Tap “+ Compare” on up to 3 airlines":["最大3社の「+ 比較」をタップ","최대 3곳의 '+ 비교'를 누르세요"],"★ Best value":["★ 最もお得","★ 최고 가성비"],"★ Best all-round":["★ 総合ベスト","★ 종합 최고"],
"Type":["タイプ","유형"],"Checked bag":["受託手荷物","위탁 수하물"],"Seat choice":["座席指定","좌석 선택"],"Meals":["食事","식사"],"Usually included":["通常は込み","보통 포함"],"Standard seats free at check-in":["チェックイン時は普通席が無料","체크인 시 일반석 무료"],"Meals & drinks included":["食事・飲み物込み","식사·음료 포함"],
"Included on higher fares":["上位運賃で込み","상위 운임에 포함"],"Paid on the cheapest fares":["最安運賃では有料","최저 운임은 유료"],"On some fares":["一部の運賃で","일부 운임에"],"Paid extra":["別料金","추가 요금"],"Paid, or a random seat free":["有料、または自動割当で無料","유료 또는 무작위 좌석 무료"],"Buy on board":["機内で購入","기내 구매"],"Varies by plane":["機材による","기종마다 다름"],"Bring your own":["各自で用意","직접 준비"],
"Ratings are our planners' general guide. Routes, planes and fare rules change by season; your planner confirms what is flying before you book.":["評価は当社プランナーによる目安です。路線・機材・運賃規則は季節で変わるため、予約前に担当者が運航状況を確認します。","평가는 플래너의 일반적인 기준입니다. 노선·기종·운임 규정은 시즌마다 바뀌므로 예약 전에 담당 플래너가 운항 여부를 확인합니다."],
// fares
"Budget or full-service?":["格安か、フルサービスか?","저비용인가, 풀서비스인가?"],"The cheapest ticket isn't always the cheapest trip":["一番安い航空券が、一番安い旅とは限りません","가장 싼 항공권이 가장 싼 여행은 아닙니다"],
"Budget airlines sell a seat and charge for everything else. Full-service airlines include the basics. Here's what you get with each.":["格安航空会社は座席だけを売り、それ以外はすべて有料。フルサービスは基本が込みです。それぞれの違いはこちら。","저비용 항공사는 좌석만 팔고 나머지는 모두 유료입니다. 풀서비스 항공사는 기본이 포함돼 있어요. 각각의 차이를 보세요."],
"Paid, or random":["有料、または自動割当","유료 또는 무작위"],"Depends on fare":["運賃による","운임에 따라"],"Free at check-in":["チェックイン時に無料","체크인 시 무료"],"Some fares":["一部の運賃","일부 운임"],"Included":["込み","포함"],"Entertainment":["エンタメ","엔터테인먼트"],"Varies":["さまざま","다양함"],"Seat-back screens":["座席モニター","좌석 모니터"],"Date changes":["日付変更","날짜 변경"],"Fee + fare difference":["手数料+差額","수수료 + 차액"],"Fee on cheap fares":["安い運賃は手数料あり","저가 운임은 수수료"],"Flexible fares available":["変更可能な運賃あり","유연한 운임 있음"],"Legroom":["足元の広さ","다리 공간"],"Tightest":["最も狭い","가장 좁음"],"Standard":["標準","표준"],"Standard or better":["標準以上","표준 이상"],"Short trips, light bags":["短い旅、少ない荷物","짧은 여행, 가벼운 짐"],"Mid-range trips":["中距離の旅","중거리 여행"],"Long-haul, families, big bags":["長距離、家族、大きな荷物","장거리, 가족, 큰 짐"],
"True-cost check":["実質コストチェック","실제 비용 확인"],"Example fares in US dollars, to show how extras add up. These are not live prices.":["追加料金がどう積み重なるかを示す米ドルの例です。実際の料金ではありません。","추가 요금이 어떻게 쌓이는지 보여주는 미국 달러 예시입니다. 실시간 가격이 아닙니다."],
"Route":["路線","노선"],"Colombo → Kuala Lumpur":["コロンボ → クアラルンプール","콜롬보 → 쿠알라룸푸르"],"Colombo → Dubai":["コロンボ → ドバイ","콜롬보 → 두바이"],"Colombo → Chennai":["コロンボ → チェンナイ","콜롬보 → 첸나이"],"Extras you need":["必要な追加サービス","필요한 추가 서비스"],
"Checked bag (20 kg)":["受託手荷物(20kg)","위탁 수하물 (20kg)"],"Choose my seat":["座席を指定","좌석 지정"],"Hot meal":["温かい食事","따뜻한 식사"],"Change date later":["後で日付変更","나중에 날짜 변경"],"Budget airline":["格安航空会社","저비용 항공사"],"Full-service airline":["フルサービス航空会社","풀서비스 항공사"],"Fare":["運賃","운임"],"Bag":["手荷物","수하물"],"Seat":["座席","좌석"],"Meal":["食事","식사"],"Change":["変更","변경"],"All-in fare":["すべて込みの運賃","모두 포함 운임"],"Change fee":["変更手数料","변경 수수료"],
"with these extras — but expect less legroom and no entertainment.":["(この追加サービスの場合)。ただし足元は狭く、エンタメはありません。","(이 추가 서비스 기준). 다만 다리 공간이 좁고 엔터테인먼트가 없어요."],"once you add everything you need — and you get meals and more comfort.":["(必要なものをすべて足すと)。しかも食事付きで快適です。","(필요한 것을 모두 더하면). 게다가 식사와 더 편안한 좌석까지."],"Same price":["同じ料金","같은 가격"],"— so full-service gives you more for your money.":["。それならフルサービスの方がお得です。","— 그렇다면 풀서비스가 더 이득이에요."],
// seats
"Best seats on board":["機内のベストシート","기내 최고의 좌석"],"Seat guide":["座席ガイド","좌석 가이드"],"Airline":["航空会社","항공사"],"What matters most to you?":["何を一番重視しますか?","무엇이 가장 중요한가요?"],
"Sleep":["眠りたい","수면"],"Get off fast":["早く降りたい","빨리 내리기"],"With a baby":["赤ちゃん連れ","아기 동반"],"Window views":["窓からの景色","창밖 풍경"],"Lowest cost":["最安","최저 비용"],
"Choose what matters most and the best seats light up — or tap any seat.":["重視することを選ぶとベストな席が光ります。席をタップしても確認できます。","중요한 것을 고르면 최고의 좌석이 빛나요. 좌석을 직접 눌러도 됩니다."],
"Typical wide-body · e.g. A330 / 777 / 787":["一般的なワイドボディ機 · 例:A330 / 777 / 787","일반적인 광동체기 · 예: A330 / 777 / 787"],"Typical narrow-body · e.g. A320":["一般的なナローボディ機 · 例:A320","일반적인 협동체기 · 예: A320"],"Typical narrow-body · e.g. Boeing 737":["一般的なナローボディ機 · 例:ボーイング737","일반적인 협동체기 · 예: 보잉 737"],
"Business":["ビジネス","비즈니스"],"Economy":["エコノミー","이코노미"],"Door · galley · toilets":["ドア · ギャレー · トイレ","출입문 · 갤리 · 화장실"],"EXIT":["非常口","비상구"],
"Tap a seat":["席をタップ","좌석을 누르세요"],"Exit row":["非常口座席","비상구 좌석"],"Bulkhead":["最前列(バルクヘッド)","벌크헤드 (맨 앞줄)"],"Recommended":["おすすめ","추천"],
"Window seats":["窓側の席","창가 좌석"],"in the middle of the cabin — something to lean on, nobody climbing over you, away from toilets and galleys.":["(客室の中ほど)。もたれられて、誰にもまたがれず、トイレやギャレーから離れています。","(객실 중간). 기댈 곳이 있고, 아무도 넘어가지 않으며, 화장실과 갤리에서 멀어요."],
"Exit rows and bulkheads":["非常口座席と最前列","비상구 좌석과 맨 앞줄"],"have the most knee room. Exit rows need you to be 15+ and able to help in an emergency.":["は足元が最も広い席です。非常口座席は15歳以上で、緊急時に援助できる方に限られます。","은 다리 공간이 가장 넓어요. 비상구 좌석은 15세 이상, 비상시 도울 수 있어야 합니다."],
"Aisle seats near the front":["前方の通路側の席","앞쪽 통로 좌석"],"— you're among the first off, which matters for tight connections.":["。最初の方に降りられるので、乗り継ぎ時間が短いときに重要です。","— 먼저 내릴 수 있어 환승 시간이 짧을 때 중요해요."],
"Bulkhead rows":["最前列(バルクヘッド)","맨 앞줄 (벌크헤드)"],"are where bassinets clip on (on long-haul planes). Ask for one when you book — babies can't sit in exit rows.":["は(長距離機で)ベビーベッドを取り付ける場所です。予約時に依頼してください。赤ちゃんは非常口座席に座れません。","은 (장거리 기종에서) 아기 침대를 거는 자리예요. 예약할 때 요청하세요. 아기는 비상구 좌석에 앉을 수 없어요."],
"Window seats in front of or behind the wing":["翼の前か後ろの窓側の席","날개 앞이나 뒤 창가 좌석"],"give clear views for take-off and landing photos.":["は離着陸の写真がきれいに撮れます。","은 이착륙 사진을 찍기 좋아요."],
"Standard seats mid-to-back":["中ほど〜後方の普通席","중간~뒤쪽 일반석"],"are the cheapest (or free at check-in). Sitting at the back also gives you the best chance of an empty seat beside you.":["が最も安い(またはチェックイン時に無料)席です。後方なら隣が空席になる可能性も高まります。","이 가장 저렴해요 (또는 체크인 시 무료). 뒤쪽에 앉으면 옆자리가 빌 가능성도 높아요."],
"Window":["窓側","창가"],"Aisle":["通路側","통로"],"Middle":["中央","가운데"],"Front":["前方","앞쪽"],"Rear":["後方","뒤쪽"],"Over wing":["翼の上","날개 위"],"Good for:":["おすすめ:","추천:"],"Legroom":["足元の広さ","다리 공간"],
"Why you'll like it":["ここが良い","좋은 점"],"Watch out for":["注意点","주의할 점"],"Cost:":["費用:","비용:"],
"Much wider seat — lie-flat on many long-haul planes":["ずっと広い座席。長距離機の多くはフルフラット","훨씬 넓은 좌석. 장거리 기종은 대부분 풀플랫"],"Lounge access and priority boarding":["ラウンジ利用と優先搭乗","라운지 이용과 우선 탑승"],"A wall to lean on for sleeping":["壁にもたれて眠れる","벽에 기대어 잘 수 있음"],"Views at take-off and landing":["離着陸時の景色","이착륙 때 풍경"],"No one climbs over you":["誰にもまたがれない","아무도 넘어가지 않음"],"You climb over others to get out":["出るときに隣の人をまたぐ","나갈 때 옆사람을 넘어가야 함"],"Costs several times an economy fare":["エコノミーの数倍の料金","이코노미의 몇 배 가격"],"Included with a business-class fare.":["ビジネスクラス運賃に含まれます。","비즈니스석 운임에 포함됩니다."],
"Get up any time without asking":["断らずにいつでも立てる","언제든 양해 없이 일어날 수 있음"],"Stretch a leg into the aisle":["通路に脚を伸ばせる","통로로 다리를 뻗을 수 있음"],"Quicker off the plane":["早く降りられる","더 빨리 내릴 수 있음"],"Bumped by trolleys and passers-by":["カートや通る人にぶつかる","카트와 지나가는 사람에 부딪힘"],"Neighbours wake you to get out":["隣の人が出るときに起こされる","옆사람이 나갈 때 깨움"],
"No seat in front reclining into you":["前の席がリクライニングしてこない","앞좌석이 젖혀지지 않음"],"Bassinet position on long-haul planes":["長距離機ではベビーベッドの位置","장거리 기종의 아기 침대 위치"],"Tray table and screen fold out of the armrest":["テーブルとモニターはひじ掛けから出す","테이블과 모니터가 팔걸이에서 나옴"],"Families with babies often sit here":["赤ちゃん連れの家族がよく座る","아기 동반 가족이 자주 앉음"],"Next to toilets or galley — light and noise":["トイレやギャレーの隣で、光と音がある","화장실이나 갤리 옆이라 빛과 소음"],
"Often a paid \"preferred\" seat — sometimes free for families or frequent flyers.":["有料の「指定席」のことが多いです。家族や上級会員は無料の場合もあります。","유료 '선호 좌석'인 경우가 많아요. 가족이나 우수 회원은 무료일 때도 있어요."],
"Often the last seats sold — cheapest or free":["最後まで残りやすく、最安か無料","마지막까지 남는 경우가 많아 가장 저렴하거나 무료"],"Sometimes the only way to sit with family":["家族と並ぶ唯一の方法のことも","가족과 함께 앉는 유일한 방법일 때도"],"Least personal space":["最も窮屈","개인 공간이 가장 좁음"],"Sharing two armrests":["両側のひじ掛けを共有","양쪽 팔걸이를 공유"],
"First off the plane and first to get meals":["最初に降りられ、食事も最初","가장 먼저 내리고 식사도 먼저"],"Smoothest ride in turbulence":["揺れが最も少ない","난기류에 가장 덜 흔들림"],"Wing blocks the view down":["翼で下の景色が見えない","날개가 아래 풍경을 가림"],"Usually free when online check-in opens.":["通常、オンラインチェックイン開始時に無料で選べます。","보통 온라인 체크인이 열리면 무료입니다."],
"The most legroom in economy":["エコノミーで最も足元が広い","이코노미에서 다리 공간이 가장 넓음"],"Must be 15+ and willing to help in an emergency":["15歳以上で、緊急時に援助できること","15세 이상, 비상시 도울 수 있어야 함"],"No bags at your feet during take-off and landing":["離着陸時は足元に荷物を置けない","이착륙 때 발밑에 짐을 둘 수 없음"],"No babies or infants":["赤ちゃん・乳児は不可","아기·유아 불가"],
"More chance of an empty seat beside you":["隣が空席になりやすい","옆자리가 빌 가능성이 높음"],"Noisier, last off the plane, meal choices may run out":["うるさめで降りるのが最後、食事の選択肢がなくなることも","시끄럽고 마지막에 내리며 식사 메뉴가 떨어질 수 있음"],
"Paid extra on budget airlines — or accept a random free seat at check-in.":["格安航空会社では有料です。チェックイン時の自動割当なら無料です。","저비용 항공사는 유료예요. 체크인 때 무작위 배정을 받으면 무료입니다."],"Usually a paid seat; free on top fares.":["通常は有料。上位運賃なら無料です。","보통 유료이며 상위 운임은 무료예요."],"Free on higher fares, paid on the cheapest ones.":["上位運賃は無料、最安運賃は有料です。","상위 운임은 무료, 최저 운임은 유료예요."],
// planning
"How to plan a flight":["フライトの計画方法","항공편 계획 방법"],"The best way to plan, in six steps":["6つのステップで上手に計画","6단계로 똑똑하게 계획하기"],"Tap each step. The plane follows your progress.":["各ステップをタップしてください。飛行機が進み具合に合わせて動きます。","각 단계를 누르세요. 비행기가 진행에 따라 움직여요."],"Planning steps":["計画のステップ","계획 단계"],
"Pick your dates":["日程を決める","날짜 정하기"],"Book at the right time":["良いタイミングで予約","적절한 때 예약하기"],"Compare the total price":["総額で比べる","총액으로 비교하기"],"Choose a smart route":["賢いルートを選ぶ","똑똑한 경로 고르기"],"Pick seats & meals":["座席と食事を選ぶ","좌석과 식사 고르기"],"Get documents ready":["書類を準備する","서류 준비하기"],
"Fix the trip loosely, then stay flexible by a few days. Mid-week flights are often cheaper than weekends.":["旅程はおおまかに決め、数日の余裕を持たせましょう。週末より平日の便の方が安いことが多いです。","일정은 대략 정하고 며칠 여유를 두세요. 주말보다 주중 항공편이 저렴한 경우가 많아요."],
"Avoid Sinhala & Tamil New Year (April) and Christmas if you can":["できればシンハラ・タミル新年(4月)とクリスマスは避けましょう","가능하면 싱할라·타밀 새해(4월)와 크리스마스는 피하세요"],"Check the destination's holidays too — like Golden Week in Japan":["日本のゴールデンウィークなど、旅行先の祝日も確認を","일본 골든위크처럼 여행지의 연휴도 확인하세요"],"Use a fare calendar to spot the cheapest days":["運賃カレンダーで最安日を見つけましょう","운임 달력으로 가장 싼 날을 찾으세요"],
"← Back":["← 戻る","← 이전"],"Next step →":["次のステップ →","다음 단계 →"],"Pro tip":["プロのヒント","전문가 팁"],"Flexible by ±3 days? Tell your planner — it often saves more than any sale.":["±3日ずらせますか?担当者に伝えてください。どんなセールよりお得になることが多いです。","±3일 조정이 가능한가요? 플래너에게 알려 주세요. 어떤 세일보다 더 아낄 때가 많아요."],
"For Asia and the Gulf, booking 4–8 weeks ahead usually gets fair prices. For Europe, Australia and peak dates, aim for 3–5 months.":["アジアや湾岸諸国なら4〜8週間前の予約で適正価格になりやすいです。ヨーロッパ、オーストラリア、繁忙期は3〜5か月前を目安に。","아시아와 걸프는 4~8주 전에 예약하면 보통 적정 가격이에요. 유럽, 호주, 성수기는 3~5개월 전을 목표로 하세요."],
"Cheap fare classes sell out first, then prices climb":["安い運賃クラスから売り切れ、その後値上がりします","저렴한 운임 등급이 먼저 팔리고 가격이 오릅니다"],"Last-minute deals on long-haul are rare":["長距離の直前割はまれです","장거리 막판 특가는 드뭅니다"],"Book visa appointments before you lock in flights":["フライト確定前にビザの予約を","항공편 확정 전에 비자 예약을 하세요"],"Share your dates early and Deima will tell you when it's a good moment to book.":["早めに日程を共有いただければ、予約に良いタイミングをDeimaがお知らせします。","날짜를 일찍 알려 주시면 예약하기 좋은 때를 Deima가 알려 드려요."],
"A cheap ticket plus a bag, a seat and a meal can cost more than a full-service fare.":["安い航空券に手荷物・座席・食事を足すと、フルサービスより高くなることがあります。","싼 항공권에 수하물, 좌석, 식사를 더하면 풀서비스보다 비쌀 수 있어요."],"Add every extra you actually need":["本当に必要な追加をすべて足す","실제로 필요한 추가를 모두 더하기"],"Check the bag allowance on both legs":["往復両方の手荷物許容量を確認","왕복 모두 수하물 허용량 확인"],"Watch for card or payment fees":["カードや決済の手数料に注意","카드·결제 수수료 주의"],"Use the true-cost check above before you choose.":["選ぶ前に上の実質コストチェックを使いましょう。","고르기 전에 위의 실제 비용 확인을 써 보세요."],
"Direct is fastest. One stop can be much cheaper and gives you a bonus stopover city.":["直行便が最速です。乗り継ぎ1回ならずっと安く、途中の都市にも立ち寄れます。","직항이 가장 빨라요. 1회 경유는 훨씬 싸고 경유 도시도 덤으로 즐길 수 있어요."],"On one ticket, 1½–2 hours is usually enough to connect":["1枚の航空券なら、乗り継ぎは通常1.5〜2時間で十分","한 장의 항공권이면 보통 1시간 30분~2시간이면 환승 가능"],"On separate tickets, leave 3–4 hours — you collect and re-check bags":["別々の航空券なら3〜4時間を。荷物を受け取って預け直します","별도 항공권이면 3~4시간을 두세요. 짐을 찾아 다시 부칩니다"],"Check transit-visa rules for your stop country":["経由国のトランジットビザの規則を確認","경유 국가의 환승 비자 규정 확인"],"Long stop in Dubai, Doha or Singapore? Turn it into a 1–2 night stopover.":["ドバイ、ドーハ、シンガポールで長い乗り継ぎ?1〜2泊のストップオーバーにしましょう。","두바이, 도하, 싱가포르에서 오래 경유하나요? 1~2박 스톱오버로 바꿔 보세요."],
"Choose seats as soon as booking or online check-in opens. Order special meals at least 24–48 hours ahead.":["予約時またはオンラインチェックイン開始と同時に座席を選びましょう。特別食は少なくとも24〜48時間前に注文を。","예약할 때나 온라인 체크인이 열리자마자 좌석을 고르세요. 특별식은 최소 24~48시간 전에 주문하세요."],"Vegetarian, Hindu, Muslim, child and baby meals are usually free on full-service airlines":["フルサービスではベジタリアン、ヒンドゥー、ムスリム、子ども、乳児向けの食事は通常無料","풀서비스 항공사는 채식, 힌두, 무슬림, 어린이, 아기 식사가 보통 무료"],"Request a bassinet early if you fly with an infant":["乳児連れならベビーベッドを早めにリクエスト","유아와 함께라면 아기 침대를 일찍 요청"],"Use the seat guide above to choose well":["上の座席ガイドで上手に選びましょう","위의 좌석 가이드로 잘 고르세요"],"Travelling as a couple on a 3-3 plane? Book window + aisle — the middle often stays empty.":["3-3配列の機体に2人で?窓側と通路側を予約すると、真ん中が空席のまま残ることが多いです。","3-3 배열 비행기에 둘이 타나요? 창가와 통로를 예약하면 가운데가 비어 있는 경우가 많아요."],
"Most countries want a passport valid for 6 months beyond your trip, plus the right visa.":["多くの国では旅行後も6か月以上有効なパスポートと、適切なビザが必要です。","대부분의 나라는 여행 후 6개월 이상 유효한 여권과 맞는 비자가 필요합니다."],"Apply for visas early — some take weeks":["ビザは早めに申請を。数週間かかるものもあります","비자는 일찍 신청하세요. 몇 주 걸리는 것도 있어요"],"Buy travel insurance before you fly":["出発前に旅行保険に加入","출발 전 여행자 보험 가입"],"Keep digital copies of everything":["すべての書類をデジタルで保存","모든 서류를 디지털로 보관"],"Plan my trip with Deima":["Deimaと旅を計画する","Deima와 여행 계획하기"],"Deima prepares visa papers and checks every document before you go.":["Deimaがビザ書類を準備し、出発前にすべての書類を確認します。","Deima가 비자 서류를 준비하고 출발 전 모든 서류를 확인합니다."],
// services, how, group, contact, footer
"One desk for the whole trip":["旅のすべてを一つの窓口で","여행 전체를 한 창구에서"],"Tell us once. We book the seats, file the visa, hold the room and stay on the phone until you are home.":["一度伝えるだけ。座席の予約、ビザの申請、部屋の確保をして、帰国までずっと電話でサポートします。","한 번만 말씀하세요. 좌석 예약, 비자 신청, 객실 확보까지 하고 귀국할 때까지 전화로 함께합니다."],
"Packaged tours":["パッケージツアー","패키지 투어"],"Ready-made and tailor-made holidays, abroad and around Sri Lanka.":["海外とスリランカ国内の、既成プランとオーダーメイドの旅。","해외와 스리랑카 국내의 기성 및 맞춤 여행."],"Flights, hotels and transfers in one price":["航空券・ホテル・送迎がひとつの料金に","항공·호텔·이동을 한 가격에"],"Family, honeymoon and group trips":["家族旅行、ハネムーン、グループ旅行","가족, 신혼, 단체 여행"],"Local guides at the destination":["現地ガイド付き","현지 가이드"],"Ask for a package":["パッケージを相談する","패키지 문의하기"],
"Air tickets":["航空券","항공권"],"Fares compared across airlines for one-way, return and multi-city trips.":["片道・往復・周遊の運賃を航空会社間で比較します。","편도, 왕복, 다구간 운임을 항공사별로 비교합니다."],"Students, workers and families":["学生、就労者、家族","학생, 근로자, 가족"],"Date changes handled for you":["日付変更も代行","날짜 변경도 처리"],
"Visas":["ビザ","비자"],"Forms, documents and appointments prepared and checked before you file.":["申請前に申請書・書類・予約を準備して確認します。","신청 전에 서류와 예약을 준비하고 확인합니다."],"Visit, study and work visa support":["訪問・留学・就労ビザのサポート","방문·유학·취업 비자 지원"],"Checklist per country":["国別チェックリスト","국가별 체크리스트"],
"Hotels":["ホテル","호텔"],"Stays matched to budget and plan, from city hotels to island resorts.":["都市のホテルから島のリゾートまで、予算とプランに合う宿泊先を。","도시 호텔부터 섬 리조트까지 예산과 일정에 맞는 숙소."],"Booked with your flights":["航空券と一緒に予約","항공권과 함께 예약"],
"Corporate travel":["法人出張","기업 출장"],"One account for company trips, with simple monthly reporting.":["会社の出張をひとつのアカウントで。月次レポートもシンプル。","회사 출장을 한 계정으로, 간단한 월간 보고서와 함께."],"Team and event travel":["チーム・イベントの旅行","팀·행사 여행"],"A named travel planner":["専任のトラベルプランナー","전담 여행 플래너"],
"From idea to boarding gate":["アイデアから搭乗ゲートまで","아이디어부터 탑승구까지"],"Tell us where":["行き先を伝える","목적지 알려주기"],"Send the destination, dates and budget by phone, WhatsApp or the form above.":["電話、WhatsApp、または上のフォームで行き先・日程・予算をお送りください。","전화, WhatsApp, 또는 위 양식으로 목적지·날짜·예산을 보내 주세요."],
"We plan and book":["私たちが計画・予約","저희가 계획하고 예약"],"You get options and a clear price. Once you choose, we book tickets, hotels and file visa papers.":["選択肢とわかりやすい料金をご提示。お選びいただいたら、航空券・ホテルを予約し、ビザ書類を申請します。","선택지와 명확한 가격을 드립니다. 고르시면 항공권과 호텔을 예약하고 비자 서류를 제출합니다."],
"You travel, we stay on call":["旅の間もずっとサポート","여행 중에도 늘 대기"],"Tickets and documents in one folder, and a real person to call if plans change.":["航空券と書類はひとつのフォルダに。予定が変わっても、電話すれば担当者が対応します。","항공권과 서류는 한 폴더에. 일정이 바뀌면 전화할 실제 담당자가 있어요."],
"Part of Deima Group":["Deimaグループの一員","Deima 그룹의 일원"],"Deima Travels works alongside the group's job placement, language and skills teams — so a visa, a ticket and a new career can be planned together.":["Deima Travelsはグループの人材紹介・語学・スキルのチームと連携しているので、ビザ、航空券、新しいキャリアをまとめて計画できます。","Deima Travels는 그룹의 취업 알선, 어학, 직업 교육 팀과 함께 일해 비자, 항공권, 새로운 커리어를 함께 계획할 수 있습니다."],
"Deima Travels":["Deima Travels","Deima Travels"],"Air tickets, visas, packaged tours, hotels and corporate travel.":["航空券、ビザ、パッケージツアー、ホテル、法人出張。","항공권, 비자, 패키지 투어, 호텔, 기업 출장."],"Deima Consultancy":["Deima コンサルタンシー","Deima 컨설턴시"],"Overseas job placement. SLBFE licence no. 3533.":["海外就職の斡旋。SLBFE認可番号3533。","해외 취업 알선. SLBFE 허가 번호 3533."],"Deima Language Academy":["Deima 語学アカデミー","Deima 어학원"],"Language classes for study, work and life abroad.":["留学・就労・海外生活のための語学クラス。","해외 유학, 취업, 생활을 위한 어학 수업."],"Deima Campus":["Deima キャンパス","Deima 캠퍼스"],"Digital and career skills courses. Coming 2027.":["デジタル・キャリアスキル講座。2027年開講予定。","디지털 및 커리어 기술 과정. 2027년 개설 예정."],
"Talk to a travel planner":["トラベルプランナーに相談","여행 플래너와 상담"],"Walk in, call, or send a message. Quotes are free and come back the same working day.":["来店、電話、メッセージでどうぞ。お見積もりは無料で、当日中(営業日)にお返事します。","방문, 전화, 메시지로 연락하세요. 견적은 무료이며 같은 영업일에 답변드립니다."],"Start an enquiry":["問い合わせを始める","문의 시작하기"],
"Head office, Colombo":["本社(コロンボ)","본사, 콜롬보"],"No 483, Galle Road, Colombo 3":["No 483, Galle Road, Colombo 3","No 483, Galle Road, Colombo 3"],"Embilipitiya branch":["エンビリピティヤ支店","엠빌리피티야 지점"],"Embilipitiya, Sri Lanka":["エンビリピティヤ、スリランカ","엠빌리피티야, 스리랑카"],"Phone and WhatsApp":["電話とWhatsApp","전화 및 WhatsApp"],
"© 2026 Deima Travels, a Deima Group company · Colombo, Sri Lanka":["© 2026 Deima Travels(Deimaグループ)· スリランカ・コロンボ","© 2026 Deima Travels, Deima 그룹 회사 · 스리랑카 콜롬보"],"Concept site. Location videos from Pixabay. Phone, email and same-day quote promise are placeholders to confirm before launch.":["コンセプトサイトです。動画はPixabayより。電話・メール・当日見積もりの約束は公開前に確認する仮の内容です。","콘셉트 사이트입니다. 영상 출처 Pixabay. 전화, 이메일, 당일 견적 약속은 오픈 전 확인할 임시 내용입니다."],
// quick quote
"Quick quote request":["簡単お見積もり依頼","간단 견적 요청"],"Flights, holidays, visas and hotels anywhere. We'll reply with options.":["航空券、旅行、ビザ、ホテル、どこへでも。選択肢をご返信します。","항공권, 여행, 비자, 호텔 어디든. 선택지를 보내 드릴게요."],"What do you need?":["何が必要ですか?","무엇이 필요하신가요?"],"Flights":["航空券","항공권"],"Holidays":["旅行","여행"],"Visa":["ビザ","비자"],"From":["出発地","출발"],"To":["目的地","도착"],"City or country":["都市または国","도시 또는 나라"],"Travel date":["出発日","여행 날짜"],"Family (2 + kids)":["家族(大人2名+子ども)","가족 (성인 2 + 아이)"],"Group (6+)":["グループ(6名以上)","단체 (6명 이상)"],"Corporate team":["法人チーム","기업 팀"],"Get my quote":["見積もりを受け取る","견적 받기"],"Your enquiry is ready.":["お問い合わせの準備ができました。","문의가 준비되었습니다."],"Copy enquiry":["内容をコピー","문의 복사"],"Copied — paste it into WhatsApp or email.":["コピーしました。WhatsAppやメールに貼り付けてください。","복사했어요. WhatsApp이나 이메일에 붙여 넣으세요."],"Select the text above to copy it.":["上のテキストを選択してコピーしてください。","위 텍스트를 선택해 복사하세요."],"Where to? Add a destination":["どちらへ?目的地を入力","어디로? 목적지를 입력하세요"],
"Get a quote":["見積もりを依頼","견적 받기"],"· build your trip in 6 steps":["· 6ステップで旅程を作成","· 6단계로 여행 만들기"],"Get a quote: build your trip":["見積もりを依頼:旅程を作成","견적 받기: 여행 만들기"],
// ad
"Ad · New app":["広告 · 新アプリ","광고 · 새 앱"],"Bingo by Deima":["Bingo by Deima","Bingo by Deima"],"Bingo · a Deima Travels app":["Bingo · Deima Travelsのアプリ","Bingo · Deima Travels 앱"],"Watch the Bingo app video from Deima Travels":["Deima TravelsのBingoアプリの動画を見る","Deima Travels의 Bingo 앱 영상 보기"],"Hide ad":["広告を閉じる","광고 숨기기"],"Bingo app video":["Bingoアプリの動画","Bingo 앱 영상"],"Close video":["動画を閉じる","영상 닫기"],
// aria / misc
"Main":["メイン","메인"],"Deima Travels home":["Deima Travels ホーム","Deima Travels 홈"],"Language":["言語","언어"],"Open menu":["メニューを開く","메뉴 열기"],"Featured destinations":["注目の旅行先","추천 여행지"],"Choose featured location":["注目の場所を選ぶ","추천 장소 선택"],"Filter destinations":["旅行先を絞り込む","여행지 필터"],
// trip builder
"DT":["DT","DT"],"TRIP BUILDER":["旅行プランナー","여행 플래너"],"Next":["次へ","다음"],"Deima Travels trip builder":["Deima Travels 旅行プランナー","Deima Travels 여행 플래너"],"Steps":["ステップ","단계"],"Close trip builder":["旅行プランナーを閉じる","여행 플래너 닫기"],"Your trip card":["旅のカード","여행 카드"],
"Where & when":["行き先と時期","장소와 시기"],"Travel style":["旅のスタイル","여행 스타일"],"Your route":["ルート","경로"],"Stay & extras":["宿泊と追加","숙박과 추가"],"Your details":["お客様情報","고객 정보"],"Review":["確認","확인"],
"Where would you like to go?":["どこへ行きたいですか?","어디로 가고 싶나요?"],"Pick a destination and tell us when, and who's coming.":["行き先を選び、時期と一緒に行く人を教えてください。","목적지를 고르고 언제, 누구와 가는지 알려 주세요."],"Destination":["行き先","목적지"],"Culture, wildlife, tea country and beaches":["文化、野生動物、紅茶の里、ビーチ","문화, 야생동물, 차 재배지, 해변"],"Coming soon":["近日公開","곧 오픈"],"Soon":["近日","곧"],
"Type of trip":["旅のタイプ","여행 유형"],"Holiday":["休暇","휴가"],"Family":["家族","가족"],"Adventure":["アドベンチャー","모험"],"Length of stay":["滞在期間","체류 기간"],"Nights":["泊数","박"],"Adults":["大人","성인"],"12 years and over":["12歳以上","12세 이상"],"Children":["子ども","어린이"],"Under 12":["12歳未満","12세 미만"],
"How do you like to travel?":["どんな旅がお好みですか?","어떤 여행을 좋아하세요?"],"Your choices light up the best places on the map in the next step.":["選んだ内容に合わせて、次のステップの地図でおすすめの場所が光ります。","선택하신 내용에 따라 다음 단계 지도에서 추천 장소가 빛나요."],"What would you like to do?":["何をしたいですか?","무엇을 하고 싶나요?"],"Pick as many as you like":["いくつでも選べます","원하는 만큼 고르세요"],
"Culture & heritage":["文化と遺産","문화와 유산"],"Wildlife & safari":["野生動物とサファリ","야생동물과 사파리"],"Beaches & ocean":["ビーチと海","해변과 바다"],"Tea & hill country":["紅茶と高原","차와 고원"],"Nature & hiking":["自然とハイキング","자연과 하이킹"],"Adventure & surf":["アドベンチャーとサーフィン","모험과 서핑"],"Wellness & Ayurveda":["ウェルネスとアーユルヴェーダ","웰니스와 아유르베다"],"Food & local life":["グルメと地元の暮らし","음식과 현지 생활"],"Temples & pilgrimage":["寺院と巡礼","사원과 순례"],
"Where would you like to stay?":["どこに泊まりたいですか?","어디에 머물고 싶나요?"],"Top resorts and heritage hotels":["一流リゾートと歴史あるホテル","최고급 리조트와 헤리티지 호텔"],"Premium":["プレミアム","프리미엄"],"Well-known 4–5★ hotels":["有名な4〜5つ星ホテル","유명한 4~5성급 호텔"],"Boutique":["ブティック","부티크"],"Small, characterful places":["小さく個性的な宿","작고 개성 있는 숙소"],"Comfort":["コンフォート","컴포트"],"Good value, comfortable":["お手頃で快適","가성비 좋고 편안함"],"Mix it up":["組み合わせ","섞어서"],"Let Deima choose per stop":["滞在先ごとにDeimaにおまかせ","머무는 곳마다 Deima가 선택"],
"Pace":["ペース","속도"],"Relaxed":["ゆったり","여유롭게"],"Fewer stops, longer stays · about 3 nights per stop":["立ち寄り少なめ、長めの滞在 · 1か所約3泊","적은 장소, 긴 체류 · 장소당 약 3박"],"Balanced":["バランス","균형"],"A good mix · about 2 nights per stop":["ほどよい組み合わせ · 1か所約2泊","적당한 조합 · 장소당 약 2박"],"See it all":["たくさん見る","모두 보기"],"More places, shorter stays · about 1 night per stop":["多くの場所、短い滞在 · 1か所約1泊","많은 장소, 짧은 체류 · 장소당 약 1박"],
"Best matches for you:":["あなたにぴったりの場所:","가장 잘 맞는 곳:"],"Pick a few interests to see your best matches.":["興味をいくつか選ぶと、ぴったりの場所が表示されます。","관심사를 몇 개 고르면 잘 맞는 곳이 보여요."],
"Build your route on the map":["地図でルートを作る","지도에서 경로 만들기"],"Tap a place to see what you can do and where you can stay, then add it to your route. Brighter rings mean a better match for you.":["場所をタップすると、できることと泊まれる場所が見られます。ルートに追加しましょう。輪が明るいほどあなたにぴったりです。","장소를 누르면 할 수 있는 것과 묵을 곳이 보여요. 경로에 추가하세요. 고리가 밝을수록 더 잘 맞아요."],
"Good match":["ぴったり","잘 맞음"],"In your route":["ルートに追加済み","경로에 포함"],"Tap to explore":["タップして見る","눌러서 보기"],"Start here":["ここから","여기서 시작"],"Tap a pin on the map, or pick one of your best matches:":["地図のピンをタップするか、おすすめから選んでください:","지도의 핀을 누르거나 추천 장소를 고르세요:"],
"+ Add to route":["+ ルートに追加","+ 경로에 추가"],"Remove":["削除","삭제"],"Best months":["ベストシーズン","좋은 달"],"rough guide":["目安","대략적 기준"],"Things to do":["できること","할 수 있는 것"],"· add to route to choose":["· ルートに追加すると選べます","· 경로에 추가하면 선택 가능"],"Matches you":["あなた向け","나와 맞음"],"Where to stay":["宿泊先","숙소"],
"Let Deima choose the best fit":["最適なホテルをDeimaにおまかせ","가장 잘 맞는 곳을 Deima가 선택"],"Luxury hotel":["ラグジュアリーホテル","럭셔리 호텔"],"Premium hotel":["プレミアムホテル","프리미엄 호텔"],"Boutique hotel":["ブティックホテル","부티크 호텔"],"Comfort hotel":["コンフォートホテル","컴포트 호텔"],"Deima picks hotel":["ホテルはDeimaが選択","호텔은 Deima가 선택"],
"No stops yet. Tap a place on the map and press \"Add to route\".":["まだ立ち寄り先がありません。地図の場所をタップして「ルートに追加」を押してください。","아직 경유지가 없어요. 지도의 장소를 누르고 '경로에 추가'를 누르세요."],"⇅ Suggest the best order":["⇅ 最適な順番を提案","⇅ 최적 순서 제안"],"Map of Sri Lanka with places to visit":["観光地を示したスリランカの地図","방문지가 표시된 스리랑카 지도"],
"Stay and extras":["宿泊と追加サービス","숙박과 추가 서비스"],"We've suggested rooms and a vehicle for your group. Change anything you like.":["グループに合わせて部屋と車両をご提案しました。自由に変更できます。","일행에 맞춰 객실과 차량을 제안했어요. 원하는 대로 바꾸세요."],
"Bed & breakfast":["朝食付き","조식 포함"],"BB":["朝食","조식"],"Half board":["朝夕食付き","조·석식 포함"],"Breakfast + dinner":["朝食+夕食","조식 + 석식"],"Full board":["3食付き","3식 포함"],"All three meals":["3食すべて","세 끼 모두"],"All inclusive":["オールインクルーシブ","올 인클루시브"],"Where the hotel offers it":["ホテルが提供している場合","호텔이 제공하는 경우"],
"Rooms":["部屋","객실"],"Single rooms":["シングルルーム","싱글룸"],"Double / twin":["ダブル / ツイン","더블 / 트윈"],"Triple rooms":["トリプルルーム","트리플룸"],"Transport":["移動手段","교통"],"Guide language":["ガイドの言語","가이드 언어"],
"English":["英語","영어"],"Sinhala":["シンハラ語","싱할라어"],"Tamil":["タミル語","타밀어"],"German":["ドイツ語","독일어"],"French":["フランス語","프랑스어"],"Russian":["ロシア語","러시아어"],"Chinese":["中国語","중국어"],"Japanese":["日本語","일본어"],"Hindi":["ヒンディー語","힌디어"],"Arabic":["アラビア語","아랍어"],"Italian":["イタリア語","이탈리아어"],"Spanish":["スペイン語","스페인어"],
"I need flights":["航空券も必要","항공권도 필요해요"],"Deima's ticketing team will add flight options.":["Deimaの発券チームが航空便の選択肢を追加します。","Deima 발권팀이 항공편 옵션을 추가합니다."],"Help me with the visa / ETA":["ビザ / ETAの手続きを手伝ってほしい","비자 / ETA를 도와주세요"],"Deima will tell you what you need and can apply for you.":["必要なものをお知らせし、代理申請もできます。","필요한 것을 알려 드리고 대신 신청도 해 드려요."],
"Flying from":["出発地","출발지"],"city or airport":["都市または空港","도시 또는 공항"],"e.g. London Heathrow, Chennai":["例:東京 成田、大阪 関西","예: 서울 인천, 부산 김해"],"Budget per person":["1人あたりの予算","1인당 예산"],"optional, excluding flights":["任意、航空券を除く","선택, 항공권 제외"],"Currency":["通貨","통화"],"e.g. 1500":["例:1500","예: 1500"],"Special requests":["特別なご要望","특별 요청"],"optional":["任意","선택"],"Anniversary, dietary needs, accessibility, a hotel you love…":["記念日、食事制限、バリアフリー、お気に入りのホテルなど…","기념일, 식이 제한, 접근성, 좋아하는 호텔 등…"],
"Where should we send your quote?":["お見積もりの送付先は?","견적을 어디로 보내 드릴까요?"],"A Deima travel consultant will check your plan and send you prices.":["Deimaの旅行コンサルタントがプランを確認し、料金をお送りします。","Deima 여행 상담원이 계획을 확인하고 가격을 보내 드립니다."],"Full name":["氏名","성명"],"Email":["メール","이메일"],"Contact number":["電話番号","연락처"],"Country code":["国番号","국가 번호"],"Travelling from":["お住まいの国","출발 국가"],"Choose a country":["国を選択","나라 선택"],
"Germany":["ドイツ","독일"],"United Arab Emirates":["アラブ首長国連邦","아랍에미리트"],"United States":["アメリカ","미국"],"China":["中国","중국"],"Russia":["ロシア","러시아"],"Netherlands":["オランダ","네덜란드"],"Other":["その他","기타"],
"My WhatsApp number is the same as my contact number":["WhatsAppの番号は電話番号と同じ","WhatsApp 번호가 연락처와 같아요"],"WhatsApp number":["WhatsAppの番号","WhatsApp 번호"],"Best way to reach you":["ご希望の連絡方法","선호하는 연락 방법"],"WhatsApp":["WhatsApp","WhatsApp"],"Phone call":["電話","전화"],"Deima Travels may contact me about this trip by email, phone or WhatsApp.":["この旅行についてDeima Travelsからメール、電話、WhatsAppで連絡を受けることに同意します。","Deima Travels가 이 여행에 대해 이메일, 전화, WhatsApp으로 연락하는 것에 동의합니다."],
"Here's your trip so far":["ここまでの旅程","지금까지의 여행"],"This is a draft. A Deima consultant will check it, add prices and send you a full quote.":["これは下書きです。Deimaの担当者が確認し、料金を加えて正式なお見積もりをお送りします。","이것은 초안입니다. Deima 상담원이 확인하고 가격을 넣어 전체 견적을 보내 드립니다."],
"Arrival":["到着","도착"],"Length":["期間","기간"],"Trip":["旅のタイプ","여행"],"Extras":["追加","추가"],"Day by day":["日ごとの予定","일자별 일정"],"Flights · Visa help":["航空券 · ビザサポート","항공권 · 비자 지원"],"Flights":["航空券","항공권"],"Visa help":["ビザサポート","비자 지원"],"None":["なし","없음"],
"Extra day — Deima will suggest":["予備日 — Deimaがご提案","추가 일정 — Deima가 제안"],"Transfer to the airport and depart":["空港へ移動して出発","공항으로 이동 후 출발"],"We'll reply by":["ご連絡方法:","답변 방법:"],"Demo mode.":["デモモード。","데모 모드."],"Nothing is sent yet. You'll see exactly what Deima would receive.":["まだ何も送信されません。Deimaに届く内容をそのまま確認できます。","아직 아무것도 전송되지 않아요. Deima가 받게 될 내용을 그대로 볼 수 있어요."],
"What Deima receives (quotation-template format)":["Deimaに届く内容(見積もりテンプレート形式・英語)","Deima가 받는 내용 (견적 템플릿 형식 · 영어)"],"Copy request":["リクエストをコピー","요청 복사"],"Copied — paste it into WhatsApp or email.":["コピーしました。WhatsAppやメールに貼り付けてください。","복사했어요. WhatsApp이나 이메일에 붙여 넣으세요."],
"DEIMA TRAVELS · TRIP REQUEST":["DEIMA TRAVELS · 旅行リクエスト","DEIMA TRAVELS · 여행 요청"],"ARRIVE":["到着","도착"],"NIGHTS":["泊数","박"],"TRAVELLERS":["旅行者","여행자"],"STAY":["宿泊","숙박"],"TRIP":["旅","여행"],"MEALS":["食事","식사"],"HB":["朝夕食","조·석식"],"FB":["3食","3식"],"AI":["オールイン","올인"],"YOU":["あなた","고객"],"Your country":["お住まいの国","거주 국가"],
"fills in as you go. Your progress is saved on this device.":["は入力に合わせて埋まっていきます。進捗はこの端末に保存されます。","은 입력하면서 채워집니다. 진행 상황은 이 기기에 저장돼요."],"Nothing is booked or paid here. A Deima consultant checks your plan and sends you a priced quote.":["ここでは予約も支払いも行われません。Deimaの担当者がプランを確認し、料金付きのお見積もりをお送りします。","여기서는 예약이나 결제가 이뤄지지 않아요. Deima 상담원이 계획을 확인하고 가격 견적을 보내 드립니다."],
"Start over":["最初からやり直す","처음부터 다시"],"Send to Deima →":["Deimaに送る →","Deima에 보내기 →"],"Request ready ✓":["リクエスト準備完了 ✓","요청 준비 완료 ✓"],"Request ready.":["リクエストの準備ができました。","요청이 준비되었습니다."],"In the live site this goes straight to the Deima Travels team. For now, copy it below and send it by WhatsApp or email.":["本番サイトではこのままDeima Travelsのチームに届きます。今は下の内容をコピーして、WhatsAppかメールで送ってください。","실제 사이트에서는 바로 Deima Travels 팀에 전송됩니다. 지금은 아래 내용을 복사해 WhatsApp이나 이메일로 보내 주세요."],
"No route yet. Go back to step 3 to add places, or send it and Deima will plan the route for you.":["まだルートがありません。ステップ3に戻って場所を追加するか、このまま送ればDeimaがルートを計画します。","아직 경로가 없어요. 3단계로 돌아가 장소를 추가하거나, 그냥 보내시면 Deima가 경로를 짜 드려요."],
"Choose your arrival date to continue.":["続けるには到着日を選んでください。","계속하려면 도착일을 선택하세요."],"Add your name to continue.":["続けるにはお名前を入力してください。","계속하려면 이름을 입력하세요."],"Add a valid email to continue.":["続けるには正しいメールアドレスを入力してください。","계속하려면 올바른 이메일을 입력하세요."],"Add a contact number to continue.":["続けるには電話番号を入力してください。","계속하려면 연락처를 입력하세요."],"Choose where you are travelling from.":["お住まいの国を選んでください。","출발 국가를 선택하세요."],
"Car with a chauffeur guide":["運転手兼ガイド付きの車","운전기사 겸 가이드가 있는 승용차"],"Van with a chauffeur guide":["運転手兼ガイド付きのバン","운전기사 겸 가이드가 있는 밴"],"Mini-coach with a guide":["ガイド付きのマイクロバス","가이드가 있는 미니버스"],"Coach with a guide":["ガイド付きの大型バス","가이드가 있는 대형버스"],"Car":["車","승용차"],"Van":["バン","밴"],"Mini-coach":["マイクロバス","미니버스"],"Coach":["大型バス","대형버스"],
// builder regions and places
"WEST COAST":["西海岸","서해안"],"SOUTH COAST":["南海岸","남부 해안"],"SOUTH":["南部","남부"],"HILL COUNTRY":["高原地帯","고원 지대"],"CULTURAL TRIANGLE":["文化三角地帯","문화 삼각지대"],"NORTH-WEST":["北西部","북서부"],"EAST COAST":["東海岸","동해안"],"NORTH":["北部","북부"],
"Beach town 20 minutes from the airport, handy for the first or last night.":["空港から20分のビーチの町。初日や最終日の宿泊に便利です。","공항에서 20분 거리의 해변 마을. 첫날이나 마지막 날 묵기 좋아요."],
"The capital: busy markets, colonial streets and a lively food scene.":["首都。にぎやかな市場、植民地時代の街並み、活気ある食文化。","수도. 붐비는 시장, 식민지 시대 거리, 활기찬 음식 문화."],
"Long beach with river safaris, water sports and Ayurveda resorts.":["リバーサファリ、マリンスポーツ、アーユルヴェーダリゾートのある長いビーチ。","강 사파리, 수상 스포츠, 아유르베다 리조트가 있는 긴 해변."],
"A walled Dutch fort town of cafés, boutiques and ocean ramparts.":["カフェやブティック、海沿いの城壁があるオランダ時代の要塞都市。","카페, 부티크, 바다 성벽이 있는 네덜란드 요새 도시."],
"Palm-lined beaches, whale watching and easy beginner surf.":["ヤシ並木のビーチ、ホエールウォッチング、初心者向けのサーフィン。","야자수 해변, 고래 관찰, 초보자도 쉬운 서핑."],
"Wide, quiet beaches and turtle nesting at Rekawa.":["広く静かなビーチと、レカワでのウミガメの産卵。","넓고 한적한 해변과 레카와의 바다거북 산란."],
"Open grasslands with large elephant herds.":["ゾウの大群がいる開けた草原。","큰 코끼리 무리가 있는 탁 트인 초원."],
"Sri Lanka's best-known safari park for leopards, elephants and birds.":["ヒョウ、ゾウ、鳥で知られるスリランカで最も有名なサファリパーク。","표범, 코끼리, 새로 유명한 스리랑카 대표 사파리 공원."],
"Mountain village of the Nine Arches Bridge, Little Adam's Peak and scenic train rides.":["ナイン・アーチ橋、リトル・アダムスピーク、絶景列車の山あいの村。","나인 아치 브리지, 리틀 아담스 피크, 경치 좋은 기차의 산골 마을."],
"Cool tea town with colonial bungalows and Horton Plains nearby.":["植民地時代のバンガローがある涼しい紅茶の町。近くにホートン・プレインズ。","식민지 시대 방갈로가 있는 시원한 차 마을. 근처에 호튼 플레인스."],
"The hill capital: Temple of the Tooth, Kandyan dancing and botanical gardens.":["高原の古都。仏歯寺、キャンディアンダンス、植物園。","고원의 수도. 불치사, 캔디 전통춤, 식물원."],
"Cave temples filled with ancient paintings and Buddha statues.":["古代の壁画と仏像で埋め尽くされた石窟寺院。","고대 벽화와 불상으로 가득한 동굴 사원."],
"The Lion Rock fortress, Pidurangala sunrise hike and village life around the lakes.":["ライオンロックの要塞、ピドゥランガラの朝日ハイク、湖のほとりの村の暮らし。","사자 바위 요새, 피두랑갈라 일출 하이킹, 호숫가 마을 생활."],
"National park known for elephant gatherings in the dry season.":["乾季のゾウの大集合で知られる国立公園。","건기의 코끼리 대집결로 유명한 국립공원."],
"Medieval royal capital with the stone Buddhas of Gal Vihara.":["ガル・ヴィハーラの石仏がある中世の王都。","갈 비하라 석불이 있는 중세 왕도."],
"Sacred ancient city of giant stupas and the Sri Maha Bodhi tree.":["巨大な仏塔とスリー・マハー菩提樹がある聖なる古都。","거대한 불탑과 스리 마하 보리수가 있는 신성한 고대 도시."],
"The largest national park, known for leopards and natural lakes.":["ヒョウと天然の湖で知られる最大の国立公園。","표범과 자연 호수로 유명한 가장 큰 국립공원."],
"Quiet beaches, Pigeon Island snorkelling and whale watching in season.":["静かなビーチ、ピジョン島のシュノーケリング、季節のホエールウォッチング。","한적한 해변, 피전섬 스노클링, 시즌별 고래 관찰."],
"A shallow, calm bay that suits families and swimmers.":["家族連れや海水浴に向いた浅く穏やかな湾。","가족과 수영하기 좋은 얕고 잔잔한 만."],
"Surf town with long right-hand breaks and lagoon safaris.":["長いライトの波とラグーンサファリのサーフタウン。","긴 라이트 파도와 석호 사파리가 있는 서핑 마을."],
"Tamil culture, Hindu temples, island ferries and distinctive food.":["タミル文化、ヒンドゥー寺院、島へのフェリー、独特の料理。","타밀 문화, 힌두 사원, 섬 페리, 독특한 음식."],
"Lagoon boat ride":["ラグーンのボート遊覧","석호 보트 투어"],"Fish market visit":["魚市場の見学","어시장 방문"],"Dutch canal tour":["オランダ運河ツアー","네덜란드 운하 투어"],"Pettah market walk":["ペター市場散策","페타 시장 산책"],"Gangaramaya Temple":["ガンガラーマ寺院","강가라마야 사원"],"Galle Face Green at sunset":["夕暮れのゴール・フェイス・グリーン","해 질 녘 골 페이스 그린"],"National Museum":["国立博物館","국립 박물관"],
"Madu River boat safari":["マドゥ川ボートサファリ","마두강 보트 사파리"],"Water sports":["マリンスポーツ","수상 스포츠"],"Ayurveda treatment":["アーユルヴェーダ施術","아유르베다 치료"],"Galle Fort walking tour":["ゴール要塞ウォーキングツアー","골 요새 도보 투어"],"Maritime Museum":["海洋博物館","해양 박물관"],"Stilt fishermen at Koggala":["コッガラの竹馬漁","코갈라 장대 낚시꾼"],"Turtle hatchery":["ウミガメ孵化場","바다거북 부화장"],"Cooking class":["料理教室","요리 수업"],
"Whale watching":["ホエールウォッチング","고래 관찰"],"Beginner surf lesson":["初心者サーフレッスン","초보자 서핑 강습"],"Coconut Tree Hill":["ココナッツ・ツリー・ヒル","코코넛 트리 힐"],"Rekawa turtle watch":["レカワのウミガメ観察","레카와 거북 관찰"],"Mulkirigala rock temple":["ムルキリガラ岩寺","물키리갈라 바위 사원"],"Beach yoga":["ビーチヨガ","해변 요가"],
"Udawalawe jeep safari":["ウダワラウェのジープサファリ","우다왈라웨 지프 사파리"],"Elephant Transit Home":["ゾウの孤児保護施設","코끼리 보호소"],"Yala jeep safari":["ヤーラのジープサファリ","얄라 지프 사파리"],"Bundala bird safari":["ブンダラのバードサファリ","분달라 새 사파리"],"Kataragama temple":["カタラガマ寺院","카타라가마 사원"],
"Nine Arches Bridge":["ナイン・アーチ橋","나인 아치 브리지"],"Little Adam's Peak hike":["リトル・アダムスピーク登山","리틀 아담스 피크 하이킹"],"Scenic train ride":["絶景列車の旅","경치 좋은 기차 여행"],"Ravana Falls":["ラーワナの滝","라와나 폭포"],"Tea estate and factory tour":["茶園と紅茶工場ツアー","차 농장과 공장 투어"],"Horton Plains & World's End hike":["ホートン・プレインズとワールズエンドのハイク","호튼 플레인스와 월드 엔드 하이킹"],"Gregory Lake":["グレゴリー湖","그레고리 호수"],
"Temple of the Tooth Relic":["仏歯寺","불치사"],"Peradeniya Botanical Garden":["ペラデニア植物園","페라데니야 식물원"],"Kandyan dance show":["キャンディアンダンスショー","캔디 전통춤 공연"],"Spice garden visit":["スパイスガーデン見学","향신료 정원 방문"],"Tea factory visit":["紅茶工場見学","차 공장 방문"],
"Dambulla Cave Temple":["ダンブッラ石窟寺院","담불라 동굴 사원"],"Golden Temple":["黄金寺院","황금 사원"],"Fruit and vegetable market":["果物と野菜の市場","과일·채소 시장"],"Sigiriya Rock Fortress":["シーギリヤ・ロック","시기리야 바위 요새"],"Pidurangala Rock hike":["ピドゥランガラ・ロック登山","피두랑갈라 바위 하이킹"],"Sigiriya Museum":["シーギリヤ博物館","시기리야 박물관"],"Village tour and cooking demo":["村ツアーと料理実演","마을 투어와 요리 시연"],
"Elephant jeep safari":["ゾウのジープサファリ","코끼리 지프 사파리"],"Hurulu Eco Park safari":["フルル・エコパークのサファリ","후룰루 에코 파크 사파리"],"Gal Vihara":["ガル・ヴィハーラ","갈 비하라"],"Royal Palace ruins":["王宮跡","왕궁 유적"],"Cycling the ancient city":["古都をサイクリング","고대 도시 자전거 투어"],"Sri Maha Bodhi":["スリー・マハー菩提樹","스리 마하 보리수"],"Ruwanwelisaya stupa":["ルワンウェリ・サーヤ大塔","루완웰리사야 불탑"],"Cycling the ruins":["遺跡をサイクリング","유적 자전거 투어"],"Wilpattu jeep safari":["ウィルパットゥのジープサファリ","윌파투 지프 사파리"],
"Pigeon Island snorkelling":["ピジョン島シュノーケリング","피전섬 스노클링"],"Koneswaram Temple":["コーネーシュワラム寺院","코네스와람 사원"],"Swimming and snorkelling":["海水浴とシュノーケリング","수영과 스노클링"],"Batticaloa lagoon trip":["バッティカロアのラグーン旅","바티칼로아 석호 여행"],"Surf lesson":["サーフレッスン","서핑 강습"],"Kumana lagoon safari":["クマナのラグーンサファリ","쿠마나 석호 사파리"],"Elephant Rock sunset":["エレファント・ロックの夕日","엘리펀트 록 일몰"],
"Nallur Kandaswamy Temple":["ナッルール・カンダスワミー寺院","날루르 칸다스와미 사원"],"Jaffna Fort":["ジャフナ要塞","자프나 요새"],"Ferry to Delft Island":["デルフト島へのフェリー","델프트섬 페리"],"Jaffna crab curry":["ジャフナのカニカレー","자프나 게 커리"],
"Sun":["日","일"],"Mon":["月","월"],"Tue":["火","화"],"Wed":["水","수"],"Thu":["木","목"],"Fri":["金","금"],"Sat":["土","토"],
// v3 additions: toolkit, packages, itinerary stops, Airline Studio, shortened copy
"Packages":["パッケージ","패키지"],"Flights, visas, holidays and hotels. One team in Colombo.":["航空券、ビザ、旅行、ホテル。コロンボの一つのチームで。","항공권, 비자, 여행, 호텔. 콜롬보의 한 팀이 모두."],
"Travel toolkit":["旅のツールキット","여행 도구"],"Trip builder":["旅程づくり","여행 만들기"],"Globe":["地球儀","지구본"],"Seat finder":["座席さがし","좌석 찾기"],"True cost":["実質コスト","실제 비용"],"Flight plan":["フライト計画","항공편 계획"],"Quick quote":["簡単見積もり","빠른 견적"],
"Tap a glowing country for the best places to go.":["光る国をタップして、おすすめの場所をチェック。","빛나는 나라를 누르면 가볼 곳이 나와요."],"Trending now":["今人気","지금 인기"],
"≈ 9h direct to Tokyo":["東京へ直行約9時間","도쿄 직항 약 9시간"],"≈ 3h 20m direct":["直行約3時間20分","직항 약 3시간 20분"],"≈ 1h 20m direct":["直行約1時間20分","직항 약 1시간 20분"],"≈ 4h 30m direct":["直行約4時間30分","직항 약 4시간 30분"],
"Real footage. Tap a gate to plan it.":["実際の映像。ゲートをタップして計画しよう。","실제 영상. 게이트를 눌러 계획하세요."],
"Tour packages":["ツアーパッケージ","투어 패키지"],"Ready-made trips, priced and planned":["料金も行程も決まった旅","가격과 일정이 정해진 여행"],"Fixed dates, flights sorted. Tap for the full itinerary.":["日程も航空券も決定済み。タップで全行程を表示。","날짜와 항공편 확정. 눌러서 전체 일정을 보세요."],
"Photo: Chainwit. / Wikimedia Commons, CC BY 4.0":["写真:Chainwit. / Wikimedia Commons, CC BY 4.0","사진: Chainwit. / Wikimedia Commons, CC BY 4.0"],
"Christmas special":["クリスマス特別企画","크리스마스 특가"],"Bangkok Christmas Getaway":["バンコク・クリスマス旅行","방콕 크리스마스 여행"],"23–27 December":["12月23日〜27日","12월 23~27일"],"5 days · 4 nights":["5日間 · 4泊","5일 · 4박"],"6 days · 5 nights":["6日間 · 5泊","6일 · 5박"],"Special air fare":["特別航空運賃","특별 항공 운임"],
"SriLankan Airlines – direct flights both ways":["スリランカ航空 – 往復直行便","스리랑카항공 – 왕복 직항"],
"Fly to Bangkok":["バンコクへ出発","방콕으로 출발"],"Temples and Christmas Eve on the river":["寺院めぐりと川のクリスマスイブ","사원 투어와 강 위의 크리스마스이브"],"Christmas Day shopping":["クリスマスのショッピング","크리스마스 쇼핑"],"Markets and malls":["マーケットとモール","시장과 쇼핑몰"],"Last shopping and fly home":["最後のショッピングと帰国","마지막 쇼핑 후 귀국"],
"View itinerary & map →":["行程と地図を見る →","일정과 지도 보기 →"],"Family favourite":["家族に人気","가족 인기"],"Dubai & Abu Dhabi, UAE":["ドバイ&アブダビ(UAE)","두바이 & 아부다비, UAE"],"Dubai City & Desert":["ドバイ 都市と砂漠","두바이 도시 & 사막"],"Flexible dates":["日程は自由","날짜 자유"],
"Flights, hotel and tours":["航空券・ホテル・ツアー","항공·호텔·투어"],"Price on request":["料金はお問い合わせ","가격 문의"],"South Malé Atoll, Maldives":["南マレ環礁(モルディブ)","남 말레 환초, 몰디브"],"Maldives Honeymoon Escape":["モルディブ・ハネムーン","몰디브 신혼여행"],"Flights, resort and transfers":["航空券・リゾート・送迎","항공·리조트·이동"],
"School holidays":["学校の休みに","방학 시즌"],"Singapore Family Fun":["シンガポール家族旅行","싱가포르 가족 여행"],"Flights, hotel and passes":["航空券・ホテル・入場パス","항공·호텔·입장권"],"Visiting Sri Lanka":["スリランカを訪れる方へ","스리랑카 방문객용"],"Sri Lanka Cultural Triangle":["スリランカ文化三角地帯","스리랑카 문화 삼각지대"],"Hotels, car and guide":["ホテル・車・ガイド","호텔·차량·가이드"],
"Airline Studio":["エアライン・スタジオ","항공사 스튜디오"],"Choose your airline like a pro":["プロのように航空会社を選ぶ","전문가처럼 항공사 고르기"],"Carriers, true costs and seats, in one app.":["航空会社、実質コスト、座席をひとつのアプリで。","항공사, 실제 비용, 좌석을 한 앱에서."],"Open Airline Studio":["エアライン・スタジオを開く","항공사 스튜디오 열기"],"by Deima Travels":["Deima Travels","Deima Travels"],
"Choose an airline":["航空会社を選ぶ","항공사 고르기"],"Compare up to 3":["最大3社を比較","최대 3곳 비교"],"Budget vs full-service":["格安 vs フルサービス","저비용 vs 풀서비스"],"Best seats":["ベストシート","최고 좌석"],"Tap the seat map":["座席表をタップ","좌석표를 누르세요"],"Plan in 6 steps":["6ステップで計画","6단계 계획"],"When and how to book":["いつ・どう予約するか","언제, 어떻게 예약할지"],
"Quick pick":["かんたん選択","빠른 선택"],"Direct, with family":["家族で直行便","가족과 직항"],"No connections from Colombo":["コロンボから乗り継ぎなし","콜롬보에서 환승 없음"],"Comfort via the Gulf":["湾岸経由で快適に","걸프 경유로 편안하게"],"Big network to Europe":["ヨーロッパへの広い路線網","유럽행 넓은 노선망"],"Lowest fare to the UAE":["UAEへ最安","UAE행 최저가"],"Pay only for extras you need":["必要な追加だけ支払う","필요한 추가만 결제"],"Value to Asia":["アジアへお得に","아시아행 가성비"],
"Seats":["座席","좌석"],"Plan":["計画","계획"],"Pick a region. Compare up to three.":["地域を選んで、最大3社を比較。","지역을 고르고 최대 3곳을 비교하세요."],"Tell us once. We handle the rest.":["一度伝えるだけ。あとはお任せください。","한 번만 말씀하세요. 나머지는 저희가."],"See packages":["パッケージを見る","패키지 보기"],"Send dates and budget.":["日程と予算を送るだけ。","날짜와 예산을 보내세요."],"Clear options, then we book.":["わかりやすい選択肢を提示し、予約します。","명확한 선택지 후 예약."],"One folder. One number to call.":["書類はひとつに。連絡先もひとつ。","서류 한 폴더, 연락처 하나."],
"Visas, tickets and careers, planned together.":["ビザ、航空券、キャリアをまとめて計画。","비자, 항공권, 커리어를 함께 계획."],"Free quotes, back the same working day.":["お見積もり無料、当日中にお返事。","무료 견적, 당일 답변."],
"Concept site. Location videos from Pixabay. Bangkok photo: Chainwit., Wikimedia Commons, CC BY 4.0. Phone, email and same-day quote promise are placeholders to confirm before launch.":["コンセプトサイトです。動画はPixabay、バンコクの写真はChainwit.(Wikimedia Commons、CC BY 4.0)。電話・メール・当日見積もりは公開前に確認する仮の内容です。","콘셉트 사이트입니다. 영상 출처 Pixabay, 방콕 사진 Chainwit.(Wikimedia Commons, CC BY 4.0). 전화, 이메일, 당일 견적은 오픈 전 확인할 임시 내용입니다."],
"Airline Studio shortcuts":["エアライン・スタジオのショートカット","항공사 스튜디오 바로가기"],"Airline Studio sections":["エアライン・スタジオの項目","항공사 스튜디오 메뉴"],"Close Airline Studio":["エアライン・スタジオを閉じる","항공사 스튜디오 닫기"],
"Hotel":["ホテル","호텔"],"Transfers":["送迎","이동"],"Sightseeing":["観光","관광"],"Safari":["サファリ","사파리"],"Resort":["リゾート","리조트"],"Guide":["ガイド","가이드"],
"Ground arrangements can be arranged.":["現地手配も承ります。","현지 일정도 준비해 드립니다."],"This is our suggested plan. Times, hotels and stops can be changed to suit you; your planner confirms prices and availability before you book.":["これはおすすめの行程です。時間・ホテル・立ち寄り先はご希望に合わせて変更でき、予約前に担当者が料金と空き状況を確認します。","추천 일정입니다. 시간, 호텔, 장소는 원하는 대로 바꿀 수 있으며 예약 전 담당 플래너가 가격과 예약 가능 여부를 확인합니다."],
"Tap a day to zoom to its stops · tap a pin for details":["日をタップするとその日の場所へ · ピンをタップで詳細","날짜를 누르면 해당 장소로 · 핀을 누르면 상세 정보"],"Request this package":["このパッケージを依頼","이 패키지 요청"],"Map of the itinerary stops":["行程の立ち寄り先の地図","일정 장소 지도"],"Close popup":["閉じる","닫기"],"Fly with":["利用航空会社","이용 항공사"],"Customise this trip":["この旅をカスタマイズ","이 여행 맞춤 설정"],
"Fly there with":["この航空会社で行く","이 항공사로 가기"],"Tap an airline to compare it and see seats":["航空会社をタップして比較・座席を確認","항공사를 눌러 비교하고 좌석을 확인하세요"],"Arrival":["到着","도착"],"Departure":["出発","출발"],
// Bangkok stops
"Suvarnabhumi Airport (BKK)":["スワンナプーム国際空港(BKK)","수완나품 공항 (BKK)"],"Land on SriLankan Airlines' direct flight from Colombo. Meet and transfer to your hotel.":["コロンボからスリランカ航空の直行便で到着。お出迎えのうえホテルへ。","콜롬보에서 스리랑카항공 직항으로 도착. 마중 후 호텔로 이동."],
"Asiatique The Riverfront":["アジアティーク・ザ・リバーフロント","아시아티크 더 리버프런트"],"Riverside night market and Ferris wheel, lit up for Christmas.":["クリスマスに彩られた川沿いのナイトマーケットと観覧車。","크리스마스 조명으로 빛나는 강변 야시장과 대관람차."],
"Grand Palace":["王宮","왕궁"],"The royal palace and the Temple of the Emerald Buddha.":["王宮とエメラルド寺院。","왕궁과 에메랄드 사원."],"Wat Pho":["ワット・ポー","왓 포"],"Home of the giant golden Reclining Buddha.":["巨大な黄金の寝釈迦仏がある寺院。","거대한 황금 와불이 있는 사원."],
"Wat Arun":["ワット・アルン","왓 아룬"],"Cross by river ferry to the Temple of Dawn — best at sunset.":["渡し船で暁の寺へ。夕暮れが最も美しい時間です。","강 페리로 새벽 사원에. 해 질 녘이 가장 아름다워요."],"ICONSIAM pier":["アイコンサイアム桟橋","아이콘시암 선착장"],"Christmas Eve dinner cruise on the Chao Phraya river.":["チャオプラヤー川のクリスマスイブ・ディナークルーズ。","짜오프라야강 크리스마스이브 디너 크루즈."],
"Siam Paragon":["サイアム・パラゴン","시암 파라곤"],"Luxury brands, a food hall and festive displays.":["高級ブランド、フードホール、華やかな装飾。","명품 브랜드, 푸드홀, 화려한 장식."],"CentralWorld":["セントラルワールド","센트럴월드"],"Giant Christmas tree and one of Asia's biggest malls.":["巨大なクリスマスツリーと、アジア最大級のモール。","거대한 크리스마스트리와 아시아 최대급 쇼핑몰."],
"Platinum Fashion Mall":["プラチナム・ファッションモール","플래티넘 패션몰"],"Wholesale fashion at low prices.":["卸値で買えるファッション。","도매가 패션."],"Yaowarat (Chinatown)":["ヤワラート(中華街)","야오와랏 (차이나타운)"],"Evening street-food crawl under the neon lights.":["ネオンの下で屋台グルメの食べ歩き。","네온 아래 길거리 음식 투어."],
"Chatuchak Weekend Market":["チャトゥチャック・ウィークエンドマーケット","짜뚜짝 주말 시장"],"Thousands of stalls — clothes, crafts, plants and snacks. Open weekends.":["服、雑貨、植物、軽食など数千の店。週末のみ営業。","옷, 공예품, 식물, 간식 등 수천 개의 가게. 주말 영업."],"ICONSIAM":["アイコンサイアム","아이콘시암"],"Riverside mega-mall with an indoor floating market.":["屋内水上マーケットがある川沿いの巨大モール。","실내 수상시장이 있는 강변 초대형 몰."],
"MBK Center":["MBKセンター","MBK 센터"],"Phones, gadgets and souvenirs before you leave.":["帰る前にスマホ、ガジェット、おみやげを。","떠나기 전 휴대폰, 전자기기, 기념품 쇼핑."],"Direct flight back to Colombo.":["直行便でコロンボへ。","직항으로 콜롬보 귀국."],
// Dubai
"Arrive in Dubai":["ドバイ到着","두바이 도착"],"Dubai International Airport (DXB)":["ドバイ国際空港(DXB)","두바이 국제공항 (DXB)"],"Meet and transfer to your hotel.":["お出迎えのうえホテルへ。","마중 후 호텔로 이동."],"Dubai Marina":["ドバイ・マリーナ","두바이 마리나"],"Evening dhow dinner cruise past the Marina towers.":["マリーナのタワー群を眺めるダウ船ディナークルーズ。","마리나 타워를 지나는 다우선 디너 크루즈."],
"Old Dubai and the tallest tower":["オールドドバイと世界一のタワー","올드 두바이와 최고층 타워"],"Al Fahidi Historical Neighbourhood":["アル・ファヒディ歴史地区","알 파히디 역사 지구"],"Wind towers, galleries and old lanes.":["風の塔、ギャラリー、古い路地。","바람탑, 갤러리, 옛 골목."],"Dubai Creek abra ride":["ドバイ・クリークのアブラ乗船","두바이 크리크 아브라 탑승"],"Cross the creek on a traditional wooden boat.":["伝統的な木造船でクリークを渡ります。","전통 나무배로 크리크를 건너요."],
"Gold Souk":["ゴールド・スーク","골드 수크"],"Gold and spice markets in Deira.":["デイラの金とスパイスの市場。","데이라의 금·향신료 시장."],"Burj Khalifa & Dubai Mall":["ブルジュ・ハリファとドバイモール","부르즈 할리파 & 두바이 몰"],"Observation deck at sunset, then the Dubai Fountain show.":["夕暮れの展望台、そしてドバイ・ファウンテンのショー。","일몰 전망대 후 두바이 분수 쇼."],
"Desert camp, Lahbab dunes area":["砂漠キャンプ(ラバブ砂丘エリア)","사막 캠프, 라흐밥 사구 지역"],"Dune bashing, camel ride, henna and a barbecue dinner under the stars.":["砂丘ドライブ、ラクダ乗り、ヘナ、星空の下のバーベキュー。","모래언덕 드라이브, 낙타, 헤나, 별빛 아래 바비큐."],"Abu Dhabi day trip":["アブダビ日帰り旅行","아부다비 당일 여행"],"One of the world's largest mosques, in white marble.":["白い大理石の世界最大級のモスク。","흰 대리석의 세계 최대급 모스크."],
"Ferrari World, Yas Island":["フェラーリ・ワールド(ヤス島)","페라리 월드, 야스섬"],"Optional theme park afternoon.":["午後はオプションでテーマパーク。","오후 선택 테마파크."],"Palm Jumeirah and fly home":["パーム・ジュメイラと帰国","팜 주메이라 후 귀국"],"Palm Jumeirah & Atlantis":["パーム・ジュメイラとアトランティス","팜 주메이라 & 아틀란티스"],"Photo stop on the famous palm-shaped island.":["有名なヤシの木型の島で写真撮影。","유명한 야자수 모양 섬에서 사진."],"Flight back to Colombo.":["コロンボへの帰国便。","콜롬보행 귀국편."],
// Maldives
"Fly to paradise":["楽園へ","낙원으로"],"Velana International Airport (MLE)":["ヴェラナ国際空港(MLE)","벨라나 국제공항 (MLE)"],"80-minute flight from Colombo.":["コロンボから80分のフライト。","콜롬보에서 80분 비행."],"Your resort, South Malé Atoll":["ご宿泊リゾート(南マレ環礁)","숙소 리조트, 남 말레 환초"],"Speedboat transfer to an overwater villa (resort chosen with you).":["スピードボートで水上ヴィラへ(リゾートはご相談で決定)。","스피드보트로 수상 빌라로 (리조트는 함께 선택)."],
"Reef and sunset":["サンゴ礁と夕日","산호초와 일몰"],"House reef":["ハウスリーフ","하우스 리프"],"Snorkel straight from your villa.":["ヴィラから直接シュノーケリング。","빌라에서 바로 스노클링."],"Sunset dolphin cruise":["サンセット・ドルフィンクルーズ","일몰 돌고래 크루즈"],"Watch spinner dolphins as the sun goes down.":["夕日の中でハシナガイルカを観察。","해 질 녘 스피너 돌고래 관찰."],
"Sandbank picnic":["サンドバンクでピクニック","샌드뱅크 피크닉"],"Private sandbank":["プライベート・サンドバンク","프라이빗 샌드뱅크"],"A picnic for two on a strip of white sand in the lagoon.":["ラグーンに浮かぶ白い砂州で二人だけのピクニック。","석호 위 하얀 모래톱에서 둘만의 피크닉."],"Spa and Malé city":["スパとマレ市内","스파와 말레 시내"],"Old Friday Mosque (Hukuru Miskiy)":["オールド・フライデーモスク(フクル・ミスキ)","올드 프라이데이 모스크 (후쿠루 미스키)"],"Coral-stone mosque from 1658.":["1658年に建てられたサンゴ石のモスク。","1658년에 지어진 산호석 모스크."],
"Malé fish market":["マレの魚市場","말레 수산시장"],"See the day's tuna catch come in.":["その日に獲れたマグロの水揚げを見学。","그날 잡은 참치 하역을 구경하세요."],"Fly home":["帰国","귀국"],"Speedboat to the airport and fly back to Colombo.":["スピードボートで空港へ、コロンボへ帰国。","스피드보트로 공항 이동 후 콜롬보 귀국."],
// Singapore
"Arrive and see the lights":["到着して夜景を楽しむ","도착 후 야경 감상"],"Jewel Changi Airport":["ジュエル・チャンギ・エアポート","주얼 창이 공항"],"See the indoor Rain Vortex waterfall on arrival.":["到着後、屋内の滝レイン・ボルテックスを見学。","도착 후 실내 폭포 레인 보텍스 감상."],"Evening light show among the Supertrees.":["スーパーツリーの夜の光のショー。","슈퍼트리 사이 저녁 조명 쇼."],
"Sentosa island":["セントーサ島","센토사섬"],"Gardens by the Bay":["ガーデンズ・バイ・ザ・ベイ","가든스 바이 더 베이"],"Universal Studios Singapore":["ユニバーサル・スタジオ・シンガポール","유니버설 스튜디오 싱가포르"],"Rides and shows for every age.":["どの年齢でも楽しめるアトラクションとショー。","모든 연령을 위한 놀이기구와 쇼."],"S.E.A. Aquarium":["S.E.A.アクアリウム","S.E.A. 아쿠아리움"],"Walk under huge ocean tanks.":["巨大な水槽の下を歩けます。","거대한 수조 아래를 걸어요."],
"Zoo and Night Safari":["動物園とナイトサファリ","동물원과 나이트 사파리"],"Singapore Zoo":["シンガポール動物園","싱가포르 동물원"],"Open-concept zoo with orangutans and white tigers.":["オランウータンやホワイトタイガーがいるオープン型動物園。","오랑우탄과 백호가 있는 개방형 동물원."],"Night Safari":["ナイトサファリ","나이트 사파리"],"Tram ride through the world's first nocturnal zoo.":["世界初の夜の動物園をトラムで巡ります。","세계 최초 야간 동물원을 트램으로."],
"City neighbourhoods":["街の各エリア","도시 동네 탐방"],"Chinatown":["チャイナタウン","차이나타운"],"Temples, markets and hawker food.":["寺院、市場、屋台料理。","사원, 시장, 호커 음식."],"Little India":["リトル・インディア","리틀 인디아"],"Colourful streets and Mustafa Centre shopping.":["カラフルな街並みとムスタファ・センターでの買い物。","알록달록한 거리와 무스타파 센터 쇼핑."],
"Marina Bay Sands SkyPark":["マリーナベイ・サンズ スカイパーク","마리나 베이 샌즈 스카이파크"],"City views from 57 floors up.":["57階からの街の眺め。","57층에서 보는 도시 전망."],"Changi Airport (SIN)":["チャンギ空港(SIN)","창이 공항 (SIN)"],
// Sri Lanka package
"Arrive in Sri Lanka":["スリランカ到着","스리랑카 도착"],"Bandaranaike International Airport (CMB)":["バンダラナイケ国際空港(CMB)","반다라나이케 국제공항 (CMB)"],"Meet your chauffeur guide.":["運転手兼ガイドがお出迎え。","운전기사 겸 가이드와 만납니다."],"Negombo":["ニゴンボ","네곰보"],"Beach and lagoon town for the first night.":["初日の夜はビーチとラグーンの町で。","첫날 밤은 해변과 석호 마을에서."],
"Cave temples":["石窟寺院","동굴 사원"],"Five caves of ancient paintings and Buddha statues.":["古代の壁画と仏像がある5つの洞窟。","고대 벽화와 불상이 있는 다섯 동굴."],"Lion Rock and elephants":["ライオンロックとゾウ","사자 바위와 코끼리"],"Climb the 5th-century rock palace at sunrise.":["5世紀の岩の宮殿に朝日とともに登ります。","5세기 바위 궁전을 일출에 올라요."],"Minneriya National Park":["ミンネリヤ国立公園","민네리야 국립공원"],"Jeep safari to see elephant herds.":["ゾウの群れを見るジープサファリ。","코끼리 무리를 보는 지프 사파리."],
"Ancient capital":["古都","고대 도시"],"Polonnaruwa":["ポロンナルワ","폴론나루와"],"Cycle between royal ruins and the Gal Vihara Buddhas.":["王宮跡とガル・ヴィハーラの仏像を自転車で巡ります。","왕궁 유적과 갈 비하라 불상을 자전거로."],"Kandy":["キャンディ","캔디"],"Sri Lanka's most sacred temple.":["スリランカで最も神聖な寺院。","스리랑카에서 가장 신성한 사원."],"Orchids, spice trees and giant bamboo.":["ラン、スパイスの木、巨大な竹。","난초, 향신료 나무, 거대한 대나무."],
"Colombo and fly home":["コロンボと帰国","콜롬보 후 귀국"],"Galle Face Green, Colombo":["ゴール・フェイス・グリーン(コロンボ)","골 페이스 그린, 콜롬보"],"Sea-front walk and street food.":["海辺の散歩と屋台グルメ。","해변 산책과 길거리 음식."],"Transfer for your flight.":["空港へお送りします。","공항으로 이동."],

"A rough guide.":["目安です。","대략적인 기준입니다."],"Hello Deima Travels,":["Hello Deima Travels,","Hello Deima Travels,"]
};

const MONS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let L=0; // 0 en, 1 ja, 2 ko
const LANGS=['en','ja','ko'];
const look=s=>{const e=T[s];return e?e[L-1]:null};
const tw=s=>look(s)||s; // translate a fragment or keep it
const pick=(ja,ko)=>L===1?ja:ko;
const plural=n=>n;
// patterns for text with numbers, names and dates
const P=[
 [/^Hub: (.+)$/,m=>pick(`ハブ空港:${m[1]}`,`허브 공항: ${m[1]}`)],
 [/^Get a quote for (.+)$/,m=>pick(`${tw(m[1])}の見積もりを依頼`,`${tw(m[1])} 견적 받기`)],
 [/^Ask about (.+)$/,m=>pick(`${tw(m[1])}について相談`,`${tw(m[1])} 문의하기`)],
 [/^Open (.+) guide$/,m=>pick(`${tw(m[1])}のガイドを開く`,`${tw(m[1])} 가이드 열기`)],
 [/^Show (.+)$/,m=>pick(`${tw(m[1])}を表示`,`${tw(m[1])} 보기`)],
 [/^Best months: (.+)$/,m=>pick('ベストシーズン:','좋은 달: ')+m[1].split(', ').map(tw).join(pick('、',', '))],
 [/^(.+) · Deima destination guide$/,m=>pick(`${tw(m[1])} · Deima旅行ガイド`,`${tw(m[1])} · Deima 여행 가이드`)],
 [/^We don't have a guide for (.+) on the globe yet — but our planners can still put a trip together\.$/,m=>pick(`${tw(m[1])}のガイドはまだありませんが、プランナーが旅程を作成できます。`,`${tw(m[1])} 가이드는 아직 없지만 플래너가 여행을 꾸려 드릴 수 있어요.`)],
 [/^Seat (\w+), (window|aisle|middle)(, exit row)?(, bulkhead)?$/,m=>{const p={window:pick('窓側','창가'),aisle:pick('通路側','통로'),middle:pick('中央','가운데')}[m[2]];return pick(`座席 ${m[1]}、${p}${m[3]?'、非常口座席':''}${m[4]?'、最前列':''}`,`좌석 ${m[1]}, ${p}${m[3]?', 비상구 좌석':''}${m[4]?', 맨 앞줄':''}`)}],
 [/^Budget is \$(\d+) cheaper$/,m=>pick(`格安の方が$${m[1]}安い`,`저비용이 $${m[1]} 더 저렴`)],
 [/^Full-service is \$(\d+) cheaper$/,m=>pick(`フルサービスの方が$${m[1]}安い`,`풀서비스가 $${m[1]} 더 저렴`)],
 [/^· (\d+) seats glow on this plane\.$/,m=>pick(` · この機体では${m[1]}席が光っています。`,` · 이 비행기에서 ${m[1]}개 좌석이 빛나요.`)],
 [/^Seat guide · (.+)$/,m=>pick(`座席ガイド · ${tw(m[1])}`,`좌석 가이드 · ${tw(m[1])}`)],
 [/^(Business|Economy) · (.+)$/,m=>`${tw(m[1])} · ${tw(m[2])}`],
 [/^(.+) · (Full-service|Hybrid|Budget)$/,m=>`${tw(m[1])} · ${tw(m[2])}`],
 [/^See what it's really like — the good, the bad, and what it usually costs on (.+)\.$/,m=>pick(`実際の乗り心地、良い点・悪い点、そして${tw(m[1])}での一般的な料金がわかります。`,`실제 느낌, 장단점, 그리고 ${tw(m[1])}에서의 일반적인 비용을 확인하세요.`)],
 [/^(\d) of 3 selected · tap “\+ Compare” to change$/,m=>pick(`3社中${m[1]}社を選択中 · 「+ 比較」で変更`,`3곳 중 ${m[1]}곳 선택 · '+ 비교'로 변경`)],
 [/^Step (\d) of (\d)$/,m=>pick(`ステップ ${m[1]} / ${m[2]}`,`${m[2]}단계 중 ${m[1]}단계`)],
 [/^(Fewer|More) (.+)$/,m=>pick(`${tw(m[2])}を${m[1]==='Fewer'?'減らす':'増やす'}`,`${tw(m[2])} ${m[1]==='Fewer'?'줄이기':'늘리기'}`)],
 [/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat), (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d+)$/,m=>{const mo=MONS.indexOf(m[2])+1;return pick(`${mo}月${m[3]}日(${tw(m[1])})`,`${mo}월 ${m[3]}일 (${tw(m[1])})`)}],
 [/^Day (\d+)$/,m=>pick(`${m[1]}日目`,`${m[1]}일차`)],
 [/^Arrive in Sri Lanka, transfer to (.+)$/,m=>pick(`スリランカ到着、${tw(m[1])}へ移動`,`스리랑카 도착, ${tw(m[1])}(으)로 이동`)],
 [/^Travel to (.+)$/,m=>pick(`${tw(m[1])}へ移動`,`${tw(m[1])}(으)로 이동`)],
 [/^Explore (.+)$/,m=>pick(`${tw(m[1])}を観光`,`${tw(m[1])} 둘러보기`)],
 [/^At leisure in (.+)$/,m=>pick(`${tw(m[1])}で自由時間`,`${tw(m[1])}에서 자유 시간`)],
 [/^≈(\d+) km · ([\d.]+)h by road from (.+)$/,m=>pick(`${m[3]==='the airport'?'空港':tw(m[3])}から車で約${m[1]}km・${m[2]}時間`,`${m[3]==='the airport'?'공항':tw(m[3])}에서 차로 약 ${m[1]}km · ${m[2]}시간`)],
 [/^≈(\d+) km · ([\d.]+)h by road$/,m=>pick(`車で約${m[1]}km・${m[2]}時間`,`차로 약 ${m[1]}km · ${m[2]}시간`)],
 [/^(\d+) nights$/,m=>pick(`${m[1]}泊`,`${m[1]}박`)],
 [/^(\d+) days$/,m=>pick(`${m[1]}日間`,`${m[1]}일`)],
 [/^(\d+)n$/,m=>pick(`${m[1]}泊`,`${m[1]}박`)],
 [/^(\d+) of (\d+) nights planned$/,m=>pick(`${m[2]}泊中${m[1]}泊を計画済み`,`${m[2]}박 중 ${m[1]}박 계획됨`)],
 [/^(From the airport|Drive|Back to the airport) · (\d+) km · ([\d.]+)h( · long drive, consider a stop between)?$/,m=>{const a={'From the airport':pick('空港から','공항에서'),'Drive':pick('移動','이동'),'Back to the airport':pick('空港へ戻る','공항으로 복귀')}[m[1]];return `${a} · ${m[2]} km · ${m[3]}${pick('時間','시간')}${m[4]?pick(' · 長距離です。途中で1泊するのも検討を',' · 장거리이니 중간 경유를 고려하세요'):''}`}],
 [/^(\d+) activities · (.+)$/,m=>pick(`アクティビティ${m[1]}件 · ${tw(m[2])}`,`액티비티 ${m[1]}개 · ${tw(m[2])}`)],
 [/^(\d+) nights? left\. Add another place, or leave them for Deima to suggest\.$/,m=>pick(`残り${m[1]}泊。場所を追加するか、Deimaの提案にまかせましょう。`,`${m[1]}박 남았어요. 장소를 추가하거나 Deima의 제안에 맡기세요.`)],
 [/^That's (\d+) nights? more than your stay\. Reduce a stop or add nights in step 1\.$/,m=>pick(`滞在より${m[1]}泊多くなっています。立ち寄り先を減らすか、ステップ1で泊数を増やしてください。`,`체류 기간보다 ${m[1]}박 많아요. 경유지를 줄이거나 1단계에서 박수를 늘리세요.`)],
 [/^(.+), in your route$/,m=>pick(`${tw(m[1])}(ルートに追加済み)`,`${tw(m[1])}, 경로에 포함`)],
 [/^Move (.+) (earlier|later)$/,m=>pick(`${tw(m[1])}を${m[2]==='earlier'?'前':'後ろ'}へ移動`,`${tw(m[1])}을(를) ${m[2]==='earlier'?'앞으로':'뒤로'} 이동`)],
 [/^One night (less|more) in (.+)$/,m=>pick(`${tw(m[2])}の宿泊を1泊${m[1]==='less'?'減らす':'増やす'}`,`${tw(m[2])} 1박 ${m[1]==='less'?'줄이기':'늘리기'}`)],
 [/^Hotel preference for (.+)$/,m=>pick(`${tw(m[1])}のホテルの希望`,`${tw(m[1])} 호텔 선호`)],
 [/^suggested for (\d+) adults?( and (\d+) child(ren)?)?$/,m=>pick(`大人${m[1]}名${m[3]?`・子ども${m[3]}名`:''}向けの提案`,`성인 ${m[1]}명${m[3]?`, 어린이 ${m[3]}명`:''} 기준 제안`)],
 [/^based on (\d+) travellers$/,m=>pick(`旅行者${m[1]}名の場合`,`여행자 ${m[1]}명 기준`)],
 [/^🚗 (.+) for the whole trip\.$/,m=>pick(`🚗 全行程:${tw(m[1])}`,`🚗 전 일정: ${tw(m[1])}`)],
 [/^ℹ Travellers from (.+) usually need a Sri Lanka visa or ETA before arrival\. Deima will confirm and can apply for you\.$/,m=>pick(`ℹ ${tw(m[1])}からの旅行者は通常、到着前にスリランカのビザまたはETAが必要です。Deimaが確認し、代理申請もできます。`,`ℹ ${tw(m[1])}에서 오는 여행자는 보통 도착 전에 스리랑카 비자나 ETA가 필요해요. Deima가 확인하고 대신 신청해 드릴 수 있어요.`)],
 [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) is a good time for:$/,m=>pick(`${tw(m[1])}のおすすめ:`,`${tw(m[1])}에 좋은 곳:`)],
 [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec):$/,m=>tw(m[1])+':'],
 [/^few places are at their best this month( \(best: (.+)\))?\. Deima will suggest the best mix for your dates\. A rough guide\.$/,m=>pick(`今月がベストの場所は多くありません${m[2]?`(おすすめ:${m[2]})`:''}。日程に合う組み合わせをDeimaがご提案します。目安です。`,`이번 달이 가장 좋은 곳은 많지 않아요${m[2]?` (추천: ${m[2]})`:''}. 날짜에 맞는 조합을 Deima가 제안해 드려요. 대략적인 기준입니다.`)],
 [/^(.+)\. A rough guide\.$/,m=>`${m[1]}${pick('。目安です。','. 대략적인 기준입니다.')}`],
 [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) isn't the best month here\. Deima can suggest an alternative\.$/,m=>pick(`${tw(m[1])}はここのベストシーズンではありません。Deimaが代わりの場所をご提案できます。`,`${tw(m[1])}은(는) 이곳에 가장 좋은 달이 아니에요. Deima가 대안을 제안해 드릴 수 있어요.`)],
 [/^(\d+) adults?(, (\d+) child)?$/,m=>pick(`大人${m[1]}名${m[3]?`・子ども${m[3]}名`:''}`,`성인 ${m[1]}명${m[3]?`, 어린이 ${m[3]}명`:''}`)],
 [/^(.+) · (\d+) rooms?$/,m=>pick(`${tw(m[1])} · ${m[2]}室`,`${tw(m[1])} · 객실 ${m[2]}개`)],
 [/^(.+) · (.+) guide$/,m=>pick(`${tw(m[1])} · ${tw(m[2])}ガイド`,`${tw(m[1])} · ${tw(m[2])} 가이드`)],
 [/^to (.+)\.$/,m=>pick(`(${m[1]==='your email'?'メールアドレス':m[1]==='your number'?'電話番号':m[1]})`,`(${m[1]==='your email'?'이메일':m[1]==='your number'?'전화번호':m[1]})`)],
 [/^: (.+)$/,m=>': '+tw(m[1])],
 [/^(\d+)A( (\d+)C)?$/,m=>pick(`大人${m[1]}${m[3]?` 子${m[3]}`:''}`,`성인 ${m[1]}${m[3]?` 아이 ${m[3]}`:''}`)],
 [/^(\d+)\. (.+)$/,m=>`${m[1]}. ${tw(m[2])}`],
 [/^Day (\d+) · (.+)$/,m=>`${pick(`${m[1]}日目`,`${m[1]}일차`)} · ${tr(m[2])}`],
 [/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) (\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/,m=>{const mo=MONS.indexOf(m[3])+1;return pick(`${mo}月${m[2]}日(${tw(m[1])})`,`${mo}월 ${m[2]}일 (${tw(m[1])})`)}],
 [/^(.+): \$(\d+)$/,m=>`${tw(m[1])}: $${m[2]}`],
 [/^≈ (\d+)h( (\d+)m)? (direct|with one stop)( to (.+))?$/,m=>{const t=pick(`${m[1]}時間${m[3]?m[3]+'分':''}`,`${m[1]}시간${m[3]?' '+m[3]+'분':''}`);const k=m[4]==='direct'?pick('直行','직항'):pick('乗り継ぎ1回','1회 경유');return m[6]?pick(`${tw(m[6])}へ${k}約${t}`,`${tw(m[6])} ${k} 약 ${t}`):pick(`${k}約${t}`,`${k} 약 ${t}`)}],
 [/^WhatsApp (\w+)( · (.+))?$/,m=>pick(`WhatsAppで${m[1]}に連絡${m[3]?' · '+m[3]:''}`,`WhatsApp으로 ${m[1]}에게 문의${m[3]?' · '+m[3]:''}`)],
 [/^Call (.+)$/,m=>pick(`${m[1]}に電話`,`${m[1]}로 전화`)],
 [/^Fewer$/,()=>pick('減らす','줄이기')]
];
function tr(raw){
 if(!L)return raw;
 const lead=raw.match(/^\s*/)[0],trail=raw.match(/\s*$/)[0],s=raw.replace(/\s+/g,' ').trim();
 if(!s||!/[A-Za-z]/.test(s))return raw;
 let out=look(s);
 if(out==null)for(const [re,fn] of P){const m=s.match(re);if(m){out=fn(m);break}}
 if(out==null){ // lists like "Legroom, With a baby" or "Flights · Visa help"
  for(const sep of [', ',' · ']){if(s.includes(sep)){const parts=s.split(sep);if(parts.every(p=>look(p)!=null)){out=parts.map(look).join(sep===', '?pick('、',', '):sep);break}}}
 }
 return out==null?raw:lead+out+trail;
}
// ---- DOM swapping ----
const ORIG=new WeakMap(),SHOWN=new WeakMap(),AORIG=new WeakMap();
const ATTRS=['placeholder','aria-label','title'];
const skip=el=>!el||el.closest('script,style,pre,[translate=no],#langSel,textarea,code');
function doText(n){
 const p=n.parentElement;if(skip(p))return;
 const cur=n.nodeValue;
 if(SHOWN.get(n)!==cur)ORIG.set(n,cur); // app wrote fresh English
 const o=ORIG.get(n),v=L?tr(o):o;
 if(v!==cur)n.nodeValue=v;
 SHOWN.set(n,v);
}
function doAttrs(el){
 if(skip(el))return;
 let rec=AORIG.get(el);if(!rec){rec={};AORIG.set(el,rec)}
 for(const a of ATTRS){if(!el.hasAttribute(a))continue;const cur=el.getAttribute(a);
  if(!rec[a]||rec[a].shown!==cur)rec[a]={orig:cur};
  const v=L?tr(rec[a].orig):rec[a].orig;if(v!==cur)el.setAttribute(a,v);rec[a].shown=v}
}
function walk(root){
 if(root.nodeType===3){doText(root);return}
 if(root.nodeType!==1)return;
 const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())doText(n);
 doAttrs(root);root.querySelectorAll('[placeholder],[aria-label],[title]').forEach(doAttrs);
}
const mo=new MutationObserver(ms=>{
 for(const m of ms){
  if(m.type==='childList')m.addedNodes.forEach(walk);
  else if(m.type==='characterData')doText(m.target);
  else if(m.type==='attributes')doAttrs(m.target);
 }
 mo.takeRecords();
});
function apply(lang){
 L=Math.max(0,LANGS.indexOf(lang));
 document.documentElement.lang=LANGS[L];
 mo.disconnect();walk(document.body);mo.takeRecords();
 mo.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
 try{localStorage.setItem('deimaLang',LANGS[L])}catch(e){}
 const sel=document.getElementById('langSel');if(sel)sel.value=LANGS[L];
}
const sel=document.getElementById('langSel');
if(sel){sel.setAttribute('translate','no');sel.addEventListener('change',()=>apply(sel.value))}
let saved='en';try{saved=localStorage.getItem('deimaLang')||'en'}catch(e){}
const q=new URLSearchParams(location.search).get('lang');if(q&&LANGS.includes(q))saved=q;
apply(saved);
window.DeimaLang={set:apply,get:()=>LANGS[L]};
})();
