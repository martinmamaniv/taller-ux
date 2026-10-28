# Auditoría y Rediseño UX/UI - Sistema de Notas

## 1. Tabla de Auditoría (Heurísticas de Nielsen)

| Heurística | Problema Original (Interfaz Antigüa) | Solución Aplicada (Rediseño) |
| :--- | :--- | :--- |
| *Visibilidad del estado del sistema* | Al guardar o eliminar una nota, la interfaz no daba ningún aviso visual. | Se añadió un mensaje dinámico de confirmación de éxito en pantalla. |
| *Coincidencia con el mundo real* | Se usaban códigos y términos técnicos incomprensibles para el usuario. | Se cambió a lenguaje natural ("Guardar nota", "Cancelar", "Eliminar"). |
| *Control y libertad del usuario* | Las notas se borraban al hacer un solo clic sin opción de marcha atrás. | Se implementó una alerta de confirmación antes de eliminar permanentemente. |
| *Prevención de errores* | El sistema permitía registrar notas vacías que desordenaban el panel. | Se añadió validación en JavaScript para bloquear campos vacíos antes de enviar. |
| *Reconocer en lugar de recordar* | Los campos usaban placeholders temporales que desaparecían al escribir. | Se colocaron etiquetas <label> fijas y permanentes sobre cada campo. |

## 2. Leyes de Usabilidad Aplicadas
* *Ley de Fitts:* El botón principal de acción se rediseñó con un tamaño grande y un área táctil superior a 44px, separado de los botones secundarios para evitar clics erróneos.
* *Ley de Hick:* Se simplificaron las opciones visuales iniciales de la interfaz para evitar la saturación mental y agilizar la toma de decisiones del usuario.
* *Ley de Miller:* Se agrupó la información en bloques lógicos y reducidos para no sobrecargar la memoria a corto plazo.

## 3. Accesibilidad y Estándares Técnicos
* *Contraste:* Se ajustó la paleta de colores para cumplir con una relación de contraste mínima de 4.5:1 (Nivel AA).
* *Foco visible:* Se implementó :focus-visible con un borde naranja destacado para facilitar la navegación exclusiva por teclado (Tab).
* *Lighthouse:* Se alcanzó un puntaje superior a 90 en la auditoría de accesibilidad.