const fadeDelay = 250;
let timeoutId;

$(document).ready(() => {
  $(".category-btn:first").addClass("active");

  $(".category-btn").on("click", onMouseClick);
  $(".search-btn").on("click", onSearchClick);
});

function onMouseClick(e) {
  if ($(this).hasClass("active")) {
    return;
  }

  const imgSrc = $(this).attr("data-src");

  $(".category-btn").removeClass("active");
  $(this).addClass("active");
  $(".overlay").animate({ opacity: 1 }, fadeDelay);

  // Fade in background image
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    $(".img-wrapper").css("background-image", `url(${imgSrc})`);
    $(".overlay").animate({ opacity: 0 }, fadeDelay);
  }, 300);
}

function onSearchClick(e) {
  $(".inventory-grid").empty();

  for (let i = 0; i < 5; i++) {
    let newDiv = $("<div>");
    let img = $("<img>").attr("src", "assets/images/orange-mclaren.jpg");
    newDiv.append(img);
    $(".inventory-grid").append(img);
  }
}
