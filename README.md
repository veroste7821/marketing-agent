# Bravera Soft — Kit de lanzamiento

Software house liderada 100% por mujeres, con alcance panamericano (Norteamérica,
Centroamérica, Caribe, Sudamérica y Brasil). Este repo contiene todo lo necesario para
lanzar la marca al mercado: identidad, sitio web, kit de redes sociales y activos
visuales.

## Qué hay en este repo

| Carpeta / archivo | Contenido |
|---|---|
| `BRAND.md` | Brand book: nombre, posicionamiento, misión, pilares, paleta, tipografía, voz de marca, audiencia. Fuente única de verdad — si algo cambia (nombre, colores, tagline), actualizar primero acá. |
| `website/` | Sitio estático (HTML/CSS/JS, sin frameworks), bilingüe ES/EN con toggle, mobile-first. |
| `social-media/` | Kit listo para copiar y pegar: bios, primeros posts y calendario para LinkedIn, Instagram y Threads. |
| `brand-assets/` | Logo (`logo.svg`), isotipo (`logo-icon.svg`), favicon (`favicon.svg`) y PNGs para redes (`brand-assets/social/`). |

## Plan de lanzamiento (orden sugerido)

### Semana 0 — Antes de salir en público
1. **Verificar disponibilidad legal del nombre.** `BRAND.md` ya marca un riesgo: existe
   "Brava Software Solutions" (bravasoftware.com) en el mismo rubro, a una letra de
   distancia de "Bravera". Hacer una búsqueda formal de marca registrada en los países
   donde se va a operar antes de registrar "Bravera Soft" legalmente. Esto es lo único
   bloqueante — el resto del kit ya está listo para usarse en paralelo a ese trámite.
2. **Registrar el dominio.** Sugerido: `braverasoft.dev` (alternativas: `.com`, `.io`,
   `getbravera.com`). Verificar disponibilidad antes de comprar.
3. **Publicar el sitio.** El sitio en `website/` es estático: se puede desplegar tal cual
   en Netlify, Vercel, GitHub Pages o Cloudflare Pages sin build step. Apuntar el dominio
   registrado ahí.
4. **Conectar el formulario de contacto.** Hoy el formulario de `website/index.html`
   solo muestra un mensaje de éxito en pantalla (no envía nada — ver comentario en
   `website/js/main.js`). Antes de lanzar, conectarlo a un servicio real (Formspree,
   un email `hola@braverasoft.dev`, o un backend propio).

### Semana 1 — Cuentas y primer contenido
5. **Crear las cuentas sociales** siguiendo `social-media/README.md` (LinkedIn, Instagram,
   Threads) — toma minutos porque las bios, fotos de perfil y banner ya están listos en
   `brand-assets/social/`.
6. **Publicar el primer post** en cada red el mismo día de creación de la cuenta, usando
   el post #1 de cada archivo (`linkedin.md`, `instagram.md`, `threads.md`).
7. **Actualizar los links del footer** del sitio (`website/index.html`, sección
   `footer-social`) con las URLs reales una vez creadas las cuentas — hoy son placeholders
   (`href="#"`, marcados con un comentario TODO en el HTML).

### Semana 2-4 — Cadencia de contenido
8. Seguir `social-media/content-calendar.md` para las primeras 4 semanas de publicaciones
   en las tres redes.
9. Empezar a recolectar leads desde el formulario del sitio y desde los CTAs de "Cotiza tu
   proyecto" / "Únete al equipo".

## Pendientes conocidos (no bloqueantes para lanzar, pero a resolver pronto)
- El formulario de contacto no tiene backend real todavía (ver punto 4).
- Tamaño de equipo y ubicación legal en `social-media/linkedin.md` están con valores
  placeholder — ajustar con el headcount real antes de publicar la página de LinkedIn.
- Verificar disponibilidad de los handles `@braverasoft` en las tres redes antes de
  crear las cuentas; las alternativas sugeridas están documentadas en
  `social-media/README.md`.
