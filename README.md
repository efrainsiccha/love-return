# 💕 Love Return - Nuestro Sitio de Amor

Un sitio web romántico y personal creado con mucho amor para celebrar nuestra relación. Construido con Astro y Tailwind CSS, este proyecto contiene recuerdos especiales, un contador de tiempo juntos, y un puzzle interactivo.

## 🌹 Para mi amor

Este sitio web es un regalo especial para ti, mi amor. Aquí encontrarás:
- **Nuestros recuerdos más preciados** en forma de carruseles de fotos
- **El tiempo que llevamos juntos** contado minuto a minuto
- **Un puzzle interactivo** para que juegues y te diviertas
- **Mensajes especiales** que te harán sonreír

## 🚀 Cómo acceder al sitio

Nuestro sitio web está disponible en:
**https://efrainsiccha.github.io/love-return/**

### Para desarrolladores (información técnica):

#### Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

##### Pasos para el despliegue:

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

## 🧞 Comandos de desarrollo

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
│   ├── carousel/          # Imágenes del carrusel (nuestros recuerdos)
│   │   ├── lima/         # Fotos de Lima
│   │   └── trujillo/     # Fotos de Trujillo
│   ├── images/            # Imágenes principales (nuestras fotos)
│   └── puzzle/            # Archivos del puzzle interactivo
├── src/
│   ├── components/        # Componentes Astro
│   │   ├── blockone/      # Bloque 1 - Header y contador de tiempo
│   │   ├── blocktwo/      # Bloque 2 - Carruseles de fotos
│   │   ├── blockthree/    # Bloque 3 - Puzzle interactivo
│   │   ├── blockfour/     # Bloque 4 - Tarjetas especiales
│   │   └── blockfive/     # Bloque 5 - Agradecimientos
│   ├── pages/             # Páginas de la aplicación
│   └── styles/            # Estilos globales
└── package.json
```

## 🎨 Tecnologías Utilizadas

- **Astro** - Framework web para sitios estáticos
- **Tailwind CSS** - Framework de CSS utility-first
- **JavaScript** - Para interactividad del carrusel y puzzle
- **Mucho amor** - El ingrediente más importante 💕

## 📝 Notas especiales

- Los archivos estáticos del puzzle se mantienen en `public/puzzle/` para evitar problemas de carga
- El proyecto utiliza tanto Tailwind CSS como CSS tradicional para el styling
- Cada imagen y texto tiene un significado especial para nosotros
- El contador se actualiza en tiempo real mostrando cuánto tiempo llevamos juntos

## 💝 Para el futuro

Este sitio web puede crecer con nosotros, agregando más recuerdos, más fotos, y más momentos especiales que viviremos juntos.

---

*Creado con ❤️ para celebrar nuestro amor*
