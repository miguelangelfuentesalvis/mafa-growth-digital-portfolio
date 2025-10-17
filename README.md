# MAFA Growth Portfolio

Este proyecto replica el diseño del sitio de Junio Marketing adaptándolo a la identidad visual de MAFA Growth. A continuación encontrarás instrucciones en español para instalar, ejecutar y navegar la aplicación.

## Requisitos previos
- Node.js 18 o superior
- npm (viene incluido con Node.js)

## Instalación
1. Clona el repositorio en tu equipo:
   ```bash
   git clone https://github.com/usuario/mafa-growth-portfolio.git
   ```
2. Entra al directorio del proyecto y descarga las dependencias:
   ```bash
   cd mafa-growth-portfolio
   npm install
   ```

## Ejecutar en modo desarrollo
1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev -- --host 0.0.0.0 --port 4173
   ```
2. Abre tu navegador y visita `http://localhost:4173`.
3. Usa el menú superior para navegar entre las secciones:
   - **Inicio**: Hero con llamada a la acción para agendar una consulta.
   - **Nosotros**: Resumen de la misión, valores y enfoque de MAFA Growth.
   - **Servicios**: Tarjetas con los principales servicios de marketing y crecimiento.
   - **Portafolio**: Proyectos destacados con breves descripciones.
   - **Contacto**: Formulario para enviar un mensaje y acceso directo a WhatsApp.

## Construir para producción
1. Ejecuta el comando de build:
   ```bash
   npm run build
   ```
2. El resultado quedará en la carpeta `dist/`, lista para desplegar en un servicio estático.

## Consejos de navegación
- El encabezado permanece fijo para que puedas cambiar de sección rápidamente.
- El botón flotante de WhatsApp abre un chat directo con el equipo de MAFA Growth.
- El botón "Volver arriba" aparece cuando haces scroll para regresar al inicio con un clic.

## Actualizar colores o contenido
- Los estilos principales se encuentran en `src/App.css`.
- El contenido de cada sección está en los componentes dentro de `src/components/`.
- Puedes modificar textos e imágenes directamente en cada componente para personalizarlo.

¡Disfruta explorando y personalizando tu clon en español!
