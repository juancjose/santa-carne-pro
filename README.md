# Santa Carne — Pro

Rediseño de alto nivel para **Santa Carne**, carnicería de oficio. Sitio estático, sin dependencias, desplegado en GitHub Pages.

**En vivo:** https://juancjose.github.io/santa-carne-pro/

## Dirección de diseño
*Libro del carnicero*: papel crema, tinta y bordó, serif editorial (Fraunces) con etiquetas mono (IBM Plex Mono). Hero en arco, pizarra de cortes oscura, ticket de pedido.

## Destacado
- **Armador de pedido**: sumá cortes, elegí cantidades y se genera el mensaje de WhatsApp listo para enviar.
- Filtro por familia (Vacuno, Cerdo, Pollo, Embutidos), 27 cortes con fotos reales.
- Accesible (navegación por teclado, `aria-pressed`, `aria-live`, contraste AA, `prefers-reduced-motion`).
- Imágenes WebP responsivas, fuentes no bloqueantes, SEO + Open Graph + JSON-LD (`ButcherShop`), sitemap y robots.

## Estructura
```
index.html   css/site.css   js/site.js   img/   og.jpg   sitemap.xml   robots.txt
```

## Placeholders a reemplazar
- Dirección, horarios y número de WhatsApp (`5491100000000` en `js/site.js` e `index.html`), marcados en el sitio como `placeholder`.
