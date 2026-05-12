
# AI-támogatott nyelvtanuló webalkalmazás

## Projekt célja

A projekt célja egy oktatási célú nyelvtanuló webalkalmazás készítése,
amelyben a felhasználó egy mesterséges intelligenciával tud adott nyelven
és adott nyelvi szinten gyakorolni.

A projekt nem egy teljes értékű termék, hanem egy jól strukturált,
bemutatható prototípus, amelynek fókuszában:
- a frontend és backend szétválasztása,
- az objektumorientált szemlélet alkalmazása,
- egy külső AI szolgáltatás integrációja áll.

---

## Funkcionalitás

Az alkalmazás működése:

1. A felhasználó kiválasztja a tanulni kívánt nyelvet
2. Kiválasztja a nyelvi szintet (például A1, A2)
3. Egy chat felületen üzenetet ír
4. Az alkalmazás a backend segítségével választ ad

Amennyiben a külső AI szolgáltatás nem érhető el,
az alkalmazás demonstrációs (fallback) módban is működik.

---

## Alkalmazott technológiák

### Frontend
- HTML
- CSS
- JavaScript (keretrendszer nélkül)

A frontend objektumorientált felépítést használ.
Az OOP kizárólag a felhasználói felület logikai részeire vonatkozik
(nyelv- és szintválasztás, chat felület, backend kommunikáció).

Az AI működésének logikája nem része a frontendnek.

### Backend
- JavaScript (Node.js)
- Express.js

A backend különálló szolgáltatásként működik, és HTTP kéréseken keresztül
kommunikál a frontenddel.

Feladata:
- a frontendtől érkező adatok fogadása,
- az AI-logika kezelése,
- a válaszok visszaküldése a frontendnek.

---

## Projekt struktúra

A projekt egyetlen GitHub repository-ban található.

Fő mappák:
- frontend
- backend

### Frontend mappa tartalma

frontend/
- index.html
- style.css
- js/

frontend/js/
- app.js
- ui/
- services/

frontend/js/ui/
- LanguageSelector.js
- ChatUI.js

frontend/js/services/
- ApiClient.js

### Backend mappa tartalma

backend/
- server.js
- ai/

backend/ai/
- AIService.js
- GeminiService.js
- FakeAIService.js

---

## Objektumorientált megközelítés a frontenden

A frontend három fő osztályra épül:

- LanguageSelector  
  A nyelv és nyelvi szint kiválasztásáért felel.

- ChatUI  
  A chat felület megjelenítését és a felhasználói interakciókat kezeli.

- ApiClient  
  A backenddel történő kommunikációért felel
  (HTTP POST kérések küldése és válaszok fogadása).

Az AI-kezelés kizárólag a backend felelősségi körébe tartozik.

---

## AI integráció

Az alkalmazás külső, ingyenes, limitált AI API-t használ
(például Google Gemini).

A backend AI-független architektúrával rendelkezik:
- valódi AI használata, ha elérhető,
- szabályalapú demonstrációs mód, ha nem.

Ez biztosítja, hogy az alkalmazás minden körülmények között bemutatható maradjon.

---

## Biztonsági megfontolások

Az AI API kulcs nem része a repository-nak.
A kulcs környezeti változóként van kezelve,
és értékelés céljából külön csatornán megosztható.

---

## Csapatmunka

A projekt két fő együttműködésével készült:
- egyikük a frontend fejlesztéséért felel,
- másikuk a backend és az AI-integráció kezeléséért.

A közös GitHub repository és a frontend/backend elkülönítése
lehetővé teszi a párhuzamos munkavégzést.

---

## Projekt hatókör

A projekt célja egy működő, oktatási célú prototípus elkészítése,
nem egy teljes körű nyelvtanuló rendszer megvalósítása.
