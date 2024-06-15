// function on(eventName, selector, handler) {
//   document.addEventListener(
//     eventName,
//     function (event) {
//       const elements = document.querySelectorAll(selector);
//       const path = event.composedPath();
//       path.forEach(function (node) {
//         elements.forEach(function (elem) {
//           if (node === elem) {
//             handler.call(elem, event);
//           }
//         });
//       });
//     },
//     true
//   );
// }

// Esta funcion permite ejecutar otra funcion cuando se agrega dinámicamente un elemento al DOM
function on(eventName, selector, handler) {
  document.addEventListener(eventName, function (event) {
    const targetElement = event.target.closest(selector);
    if (targetElement) {
      handler.call(targetElement, event);
    }
  });
}
