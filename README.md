# week2_day2

> Async programming
>
> Callbacks
>
> Testing & Jasmine

## Main points: async programming

- Javascript es un lenguaje <strong>de subproceso único</strong> (<a href="https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading">single-threaded</a>), por lo que no puede performar múltiples tareas a la vez.
- Asimismo es <strong>síncrono</strong>, dado que las tareas se ejecutan una detrás de otra siguiendo la secuencia del programa, donde tareas de alto coste en términos de tiempo generan cuellos de botella naturales en el flujo de la misma.
- En base a esta naturaleza, dispone de diversos recursos de carácter asíncrono que permiten gestionar tareas programadas y/o paralelas.

## Main points: callbacks

Un <em>callback</em> es una función que recibe como parámetro otra función, invocándola en su interior:
````javascript
function foo = callback => callback()
````

## Extra: data attributes in DOM
Los atributos `data-` son atributos de HTML que permiten incluir informaciones variadas que no se asjutan a ninguno de los atributos estándar disponibles en etiquetas:
````html
<div id="first" data-color="red">...</div>
<div id="second" data-age="81">...</div>
````
Su estructura se basa en un prefijo `data-` seguido de un sufijo a elección, cuyo valor es accedido a través de Javascirpt mediante la propiedad `.dataset` y el sufijo elegido:

````javascript
const colorValue = document.querySelector('#first').dataset.color   // red
const ageValue = document.querySelector('#second').dataset.age    // 81
````
