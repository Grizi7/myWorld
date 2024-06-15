$(document).ready(function () {
  $(".dropdown-item").click(function () {
    var quality = $(this).text();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".quality").text(quality);
    if (quality == "1080p") {
      $("img").addClass("d-none");
      var video = $("video");
      video.removeClass("d-none");
      video[0].play();
    } else {
      var video = $("video");
      video[0].pause();
      video.addClass("d-none");
      $("img").removeClass("d-none");
      $("img").attr("src", "layout/images/" + quality + ".png");
    }
  });
});
