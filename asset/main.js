$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrolltotop").fadeIn();
    } else {
      $("#scrolltotop").fadeOut();
    }
  });

  $("#scrolltotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

});
