# Auditoría y Rediseño UX/UI - App de Notas

## 1. Tabla de Auditoría (Heurísticas de Nielsen)

| Heurística | Problema Original | Solución Aplicada |
| :--- | :--- | :--- |
| *Visibilidad del estado* | Al agregar o eliminar una nota no aparecía ningún mensaje visual que confirmara la acción. | Se programó un mensaje dinámico de estado ("Nota agregada con éxito"). |
| *Coincidencia con el mundo real* | Los botones y alertas usaban términos técnicos o vacíos. | Se adaptó un lenguaje natural y cercano al usuario ("Guardar nota", "Eliminar"). |
| *Control y libertad* | Al hacer clic en eliminar nota, se borraba de inmediato sin dar oportunidad de cancelar. | Se agregó una ventana de confirmación (confirm) antes de eliminar registros. |
| *Prevención de errores* | Permitía registrar notas completamente vacías saturando la interfaz. | Se añadió validación en JavaScript para bloquear notas vacías y prevenir el error. |
| *Reconocer, no recordar* | Se usaban marcadores temporales que desaparecían al escribir. | Se implementaron etiquetas <label> permanentes y claras para cada campo. |

## 2. Aplicación de Leyes de Usabilidad
* *Ley de Fitts:* El botón principal de "Guardar nota" se amplió en tamaño y se ubicó en una zona de fácil alcance, separado de los botones secundarios para evitar clics accidentales.
* *Ley de Hick:* Se simplificó la interfaz reduciendo las opciones visuales iniciales a lo estrictamente necesario para que el usuario decida rápido.
* *Ley de Miller:* Se estructuró el contenido en bloques cortos y visuales para no saturar la memoria a corto plazo del usuario.

## 3. Accesibilidad y Principios Visuales
* *Contraste:* Se ajustó el color del texto y de los fondos para superar la relación mínima de 4.5:1 (nivel AA).
* *Foco visible:* Se implementó :focus-visible con un borde naranja de 3px para garantizar la navegación fluida exclusivamente con el teclado (Tab).
* *Tamaño táctil:* Todos los botones y campos de entrada tienen un alto mínimo de 44px para facilitar su uso en dispositivos móviles.
