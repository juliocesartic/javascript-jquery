/*window.onload = function(){
  alert('loaded');
}*/

 /*$(document).ready(function(){
   alert('Esta lista la ejecucion')
 })*/

/*
--Cuando tienes mas de un js usando $
$.noConflict();
jQuery(document).ready(function ($){})
*/
$(function(){
  //var header = document.getElementById('app-header');
  //console.log(header);

  //var header = $('header');
  //var title = $('h1', header[0]);
  //console.log(title);

  //var header = document.getElementById('app-header');
  // var $header = $(header);
  //var $header = $(header);
  //console.log($header);

  //var headings = $('h1, h2');
  //console.log(headings);
  var a = $('<a>', {
    href : 'http://platzi.com',
    target: '_blank',
    html: 'Ir a Platzi'
  });

  $("#app-body").append(a);

  console.log(a.attr('href'));

  a.attr({
    href: 'http://google.com',
    html: 'Ir a Google'
  });
  a.html('Ir a Google');

  var $h1 = $('h1');
  $h1.addClass('danger');

  setTimeout(function(){
    $h1.removeClass('danger');
  }, 1500);

  var $h1 = $('h1');
  var $h1b = $('h1');
  console.log($h1 === $h1b);
  console.log($h1[0] === $h1b[0]);

  /*$('h1').css({
    'font-size': '70px'
  });*/

  //$('<p>', {html: 'Me acaban de crear'}).appendTo($('header#app-header'));
});
