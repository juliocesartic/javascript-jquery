// (javascript)Insertar HTML en un elemento DOM.
/*var target = document.getElementById('target');
target.innerHTML = "<td>Hello World</td>";*/

//(jquery)Insertar HTML en un elemento DOM
/*var target = document.getElementById('target');
$(target).html("<td>Hello World</td>");*/
 //Equivalencia a lo anterior
 //$('#target').html("<td>Hello World</td>");


/*Crear un nuevo div para el elemento con id target
  - Despues (target.nextSimbling)
  - Antes (target)

  var newElement = document.createElement('div');
  target.parentNode.insertBefore(newElement, target.nextSimbling);
*/

/*Crear un nuevo div al elemento DOM con id target
  - .after()(Despues)
  - .before()(Antes)
  var newElement = document.createElement('div');
  $('#target').after(newElement);
*/

/*pseudo selectores*/
$('section').html("<p>Esto es un componente section</p>");
