$(document).ready(() => {
  $(".category-btn:first").addClass("active");

  $(".category-btn").on("click", onMouseClick);
});

function onMouseClick(e) {
  const imgSrc = $(this).attr("data-src");

  $(".img-wrapper").css("background-image", `url(${imgSrc})`);
  $(".category-btn").removeClass("active");
  $(this).addClass("active");
}
