$('#app-header').find('h1');//
$('#app-header').has('.title');
$('#app-header').not('.title');
$('p').filter('.text');//<p class="text"></p>
$('p').filter('.text').first();
$('p').filter('.text').has('a').first();
$('p').filter('.text').has('a').eq(1);

var ps = $('p');// cuando vamos a volver a utilizar varias veces
ps.filter('.text').has('a').eq(1);

//Las selecciones no se actualizan

var p = document.createElement('p');
document.body.appendChild(p);
//actualizamos la seleccion pasada
ps.add(p);


var p = document.createElement('p');
p.innerHTML = "Hola a todos";
document.body.appendChild(p);
//
$(function(){
  var a = $('<a>', {
    href : 'http://platzi.com',
    target: '_blank'
    html: 'Ir a Platzi'
  });

  $("#app-body").append(a);

  console.log(a.attr('href'));

  a.attr({
    href: 'http://google.com',
    html: 'Ir a Google'
  });
----------------------------------
  $('h1').addClass('danger');

  setTimeout(function(){
    $('h1').removeClass('danger');
    $('h1').toggleClass('danger');
  }, 1500);

------------------------------------
  var $h1 = $('h1');
  $h1.addClass('danger');

  setTimeout(function(){
    $h1.removeClass('danger');
  }, 1500);
----------------------------------
var $h1 = $('h1');
var $h1b = $('h1');
console.log($h1 === $h1b);
------------------------------
$('h1').css({
  'font-size': '70px'
});

  $('header#app-header').append($('<p>', {html: 'Me acaban de crear'}));
  $('<p>', {html: 'Me acaban de crear'}).appendTo($('header#app-header'));

});
