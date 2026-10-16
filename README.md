# CV web · Marco Castillo

CV de una sola página con Vue 3 y Vite. Diseño responsive, navegación por anclas, menú móvil, estilos de impresión y descarga del CV original. No requiere backend.

## Desarrollo

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

Para generar y revisar la versión estática:

```bash
npm run build
npm run preview
```

El resultado queda en `dist/`.

## Publicar en castillodelgado.github.io

1. Inicia sesión en GitHub como `castillodelgado` y crea un repositorio público llamado exactamente `castillodelgado.github.io`. Si ya existe, revisa su contenido antes de reemplazarlo.
2. Desde esta carpeta, para un repositorio nuevo y vacío:

```bash
git init -b main
git add .
git commit -m "Create Vue CV website"
git remote add origin https://github.com/castillodelgado/castillodelgado.github.io.git
git push -u origin main
```

3. En el repositorio, abre **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` compila y publica al subir cambios a `main`. Si el primer workflow falló antes de habilitar Pages, vuelve a ejecutarlo desde **Actions → Deploy CV to GitHub Pages → Run workflow**.
5. Revisa que la ejecución finalice correctamente y visita https://castillodelgado.github.io/.

No necesitas comprar un dominio, configurar DNS ni agregar un archivo CNAME para esta dirección. La configuración `base: '/'` corresponde al sitio principal de usuario. Si lo publicas bajo otro repositorio (por ejemplo `/cv/`), hay que adaptar el base de Vite y las rutas de los archivos públicos.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Editar contenido

- `src/App.vue`: textos, experiencia, proyectos y habilidades. Los datos de experiencia y conocimientos están al principio del archivo.
- `src/style.css`: colores, tipografía, diseño responsive e impresión.
- `public/Marco_Castillo_CV_Software.pdf`: CV descargable.
- `index.html`: título, descripción y metadatos para compartir.

El contenido profesional proviene del CV final de software; el segundo PDF se usa como referencia visual. No se agregaron métricas, certificaciones, enlaces de proyectos ni responsabilidades no documentadas. Las ilustraciones de proyectos son composiciones gráficas, no capturas reales.

Las fuentes se solicitan a Google Fonts, con fuentes de sistema como respaldo. El teléfono y correo del CV aparecen como enlaces públicos de contacto.
# cv
