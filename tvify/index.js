$(function(){
  /*Submit search form*/
  $('#app-body')
  .find('form')
  .submit(function(ev){
    ev.preventDefault();
    var busqueda = $(this).find('input[type="text"]').val();
    alert('El valor de la busqueda es: ' + busqueda);
  });

  var template = '<article class="tv-show">' +
                    '<div class="left img-container">' +
                      '<img src=":img:" alt=":img alt:" />' +
                    '</div>' +
                    '<div class="left info">' +
                      '<h1>:name:</h1>' +
                      '<p>:summary:</p>' +
                    '</div>' +
                  '</article>';

  $.ajax({
    url: 'http://api.tvmaze.com/shows',
    success: function(shows, textEstatus, xhr){
      var $tvShowsContainer = $('#app-body').find('.tv-shows');
      shows.forEach(function(show){
          var article = template
          .replace(':img:', show.image.medium)
          .replace(':img alt:', show.name + 'Logo')
          .replace(':name:', show.name)
          .replace(':summary:', show.summary);

          $tvShowsContainer.append($(article));  
      });
    }
  });

});