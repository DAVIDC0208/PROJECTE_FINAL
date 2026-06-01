# St. Homes — Documentació del Projecte

Pàgina web per a l'empresa **St. Homes**, orientada a ajudar estudiants a trobar pisos i beques durant el seu curs acadèmic.

---

## Tecnologies utilitzades

- **HTML5** — Estructura i contingut de la pàgina
- **CSS3** — Estils, disseny responsive i animacions
- **JavaScript (Vanilla)** — Interactivitat i funcionalitats dinàmiques
- **Google Fonts (Oswald)** — Tipografia principal

---

## Estructura de fitxers

st-homes/
├── index.html        # Pàgina principal
├── index.css         # Estils globals
├── index.js          # JavaScript
├── beques.html       # Pàgina de login per a beques
├── beques.css        # Estils específics de beques
└── images/
├── St.homes_logo.png
├── estudiantescaminando.avif
├── pisosestudiantes.webp
├── piso2.webp
└── st.homes.png

---

## Pàgines

### `index.html` — Pàgina principal

| Secció | ID / Element | Descripció |
|---|---|---|
| Navegació | `nav` | Menú fix amb logo, enllaços i botó "Consultar Beques" |
| Hero | `#hero` | Títol, descripció, botons CTA i imatge d'estudiants |
| Serveis | `#oferim` | Dues targetes: pisos i beques, amb imatge |
| Història | `#nosotros` | Imatge + text amb llista de 3 punts i botó de contacte |
| Contacte | `#contacto` | Info (email, telèfon, adreça) + formulari complet |
| Footer | `footer` | Logo, descripció, columnes de navegació i xarxes socials |

### `beques.html` — Pàgina de beques

Pàgina independent amb fons degradat i targeta de login centrada. Carrega `index.css` i `beques.css`.

| Element | Descripció |
|---|---|
| `nav` | Mateixa navegació que `index.html`, amb enllaços relatius (`index.html#oferim`) |
| `.beques-fons` | Fons fix amb gradient radial de color porpra/blau |
| `.login-card` | Targeta blanca centrada amb logo, formulari d'accés i opcions |
| Formulari | Camps d'email i contrasenya, checkbox "Recorda'm", link de contrasenya oblidada |
| Registre | Enllaç "Registra't aquí" al peu de la targeta |

---

## Funcionalitats JavaScript (`index.js`)

### 1. Confirmació d'enviament del formulari

```js
document.querySelector('.enviament-formulari button').addEventListener('click', () => {
  document.querySelector('.enviament-formulari').insertAdjacentHTML(
    'afterend',
    '<p style="color: #4caf50; margin-top: 0.75rem;">Formulari enviat!</p>'
  );
});
```

---

## Estils CSS

Els estils no utilitzen variables CSS. Tots els valors estan escrits directament:

| Valor | Ús |
|---|---|
| `#eeebeb` | Fons general de la pàgina |
| `rgb(130, 95, 185)` | Color principal (botons, etiquetes, superfícies) |
| `#000000` | Color de text principal |
| `12px` | Border-radius global |
| `1100px` | Amplada màxima del contenidor |
| `"Oswald", Georgia, serif` | Tipografia de títols |
| `"Oswald", sans-serif` | Tipografia general |

---

## David Cristóbal Ruiz

Projecte desenvolupat com a pràctica de desenvolupament web frontend.  
**© 2026 St. Homes. Tots els drets reservats.**