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
├── beques.html       # Pàgina de beques
└── images/           # Imatges del projecte
├── St.homes_logo.png
├── estudiantescaminando.avif
├── pisosestudiantes.webp
├── piso2.webp
└── st.homes.png

---

## Seccions de la pàgina

| Secció | ID | Descripció |
|---|---|---|
| Navegació | `nav` | Menú fix amb enllaços i botó de beques |
| Hero | `#hero` | Presentació principal amb imatge i CTAs |
| Què oferim | `#oferim` | Targetes de serveis (pisos i beques) |
| Història | `#nosotros` | Missió i valors de l'empresa |
| Contacte | `#contacto` | Formulari i informació de contacte |
| Footer | `footer` | Enllaços i xarxes socials |

---

## Funcionalitats JavaScript

### 1. Navbar amb efecte scroll
```js
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.borderBottomColor = window.scrollY > 50
    ? 'rgba(255,255,255,0.1)'
    : 'transparent';
});
```

### 2. Scroll suau als enllaços
```js
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
  });
});
```

### 3. Animació d'entrada (fade-in)
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.targeta-oferim, .quadricula-nosaltres, .quadricula-contacte')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
```

### 4. Enllaç actiu a la navegació
```js
const seccions = document.querySelectorAll('section[id]');
const enllacos = document.querySelectorAll('.nav-enllacos a');

window.addEventListener('scroll', () => {
  let actual = '';
  seccions.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) actual = s.id;
  });
  enllacos.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${actual}`
      ? 'var(--accent)'
      : '#ffffff';
  });
});
```

### 5. Confirmació d'enviament del formulari
```js
document.querySelector('.enviament-formulari button').addEventListener('click', () => {
  document.querySelector('.enviament-formulari').insertAdjacentHTML(
    'afterend',
    '<p style="color: #4caf50; margin-top: 0.75rem;">Formulari enviat!</p>'
  );
});
```

---

## Variables CSS principals

| Variable | Valor | Ús |
|---|---|---|
| `--fons` | `#eeebeb` | Fons general de la pàgina |
| `--accent` | `rgb(130, 95, 185)` | Color principal (botons, etiquetes) |
| `--superficie` | `rgb(130, 95, 185)` | Fons de targetes i inputs |
| `--text` | `#000000` | Color de text principal |
| `--radi` | `12px` | Border-radius global |
| `--max` | `1100px` | Amplada màxima del contenidor |
| `--serifa` | `Oswald` | Tipografia de títols |

---

## Autor

Projecte desenvolupat com a pràctica de desenvolupament web frontend.  
**© 2026 St. Homes. Tots els drets reservats.**