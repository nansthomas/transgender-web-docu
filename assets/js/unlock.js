/* SLIDE TO UNLOCK */

$(function () {
  $('#unlock .drag').draggable({
    axis: 'x',
    containment: 'parent',
    drag: function (event, ui) {
      $('#unlock .content .drop').addClass('active');
      if (ui.position.left > 105) {
        $('#unlock .content .drop').addClass('hover');
      }
    },

    stop: function (event, ui) {
      if (ui.position.left < 105) {
        $(this).animate({
          left: 0,
        });

        $('#unlock .content .drop').removeClass('hover');
        $('#unlock .content .drop').removeClass('active');

      } else {
        $(this).animate({
          left: 0,
        });

        $('#unlock .content .drop').removeClass('hover');
        $('#unlock .content .drop').removeClass('active');

        // UNLOCK
        $('#unlock').addClass('unlock');
        $('#home').addClass('unlock');
        window.location.href = 'http://google.fr';
      }
    },
  });
});
