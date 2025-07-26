# Love Return

Un proyecto web romántico construido con Astro y Tailwind CSS.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Pasos para el despliegue:

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Preparando para despliegue"
   git push origin main
   ```

2. **Configura GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Ve a Settings > Pages
   - En "Source", selecciona "GitHub Actions"

3. **Actualiza la configuración:**
   - En `astro.config.mjs`, cambia `[TU_USUARIO]` por tu nombre de usuario de GitHub
   - Si tu repositorio se llama diferente a `love-return`, actualiza también el `base`

4. **El despliegue se ejecutará automáticamente** cada vez que hagas push a la rama main.

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye tu sitio de producción en `./dist/`    |
| `npm run preview`         | Previsualiza tu build localmente antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |

## 🏗️ Estructura del Proyecto

```
/
├── public/                 # Archivos estáticos
│   ├── carousel/          # Imágenes del carrusel
│   ├── images/            # Imágenes generales
│   └── puzzle/            # Archivos del puzzle
├── src/
│   ├── components/        # Componentes Astro
│   │   ├── blockone/      # Bloque 1 - Header y contador
│   │   ├── blocktwo/      # Bloque 2 - Carrusel
│   │   ├── blockthree/    # Bloque 3 - Puzzle
│   │   ├── blockfour/     # Bloque 4 - Tarjetas
│   │   └── blockfive/     # Bloque 5 - Agradecimientos
│   ├── pages/             # Páginas de la aplicación
│   └── styles/            # Estilos globales
└── package.json
```

## 🎨 Tecnologías Utilizadas

- **Astro** - Framework web para sitios estáticos
- **Tailwind CSS** - Framework de CSS utility-first
- **JavaScript** - Para interactividad del carrusel y puzzle

## 📝 Notas

- Los archivos estáticos del puzzle se mantienen en `public/puzzle/` para evitar problemas de carga
- El proyecto utiliza tanto Tailwind CSS como CSS tradicional para el styling
