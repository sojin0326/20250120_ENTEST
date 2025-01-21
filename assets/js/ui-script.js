$(function () {
  // side-nav
  var $navBtn = $(".side-toggle");
  var $navWrap = $(".side-wrap");

  $navBtn.click(function () {
    $navWrap.fadeToggle();
    $(this).toggleClass("active");
  });

  // key-visual
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // tabs
  var tabList = $(".tab-nav .tab-item");
  var contents = $(".tab-panel");

  tabList.each(function () {
    $(this)
      .find(".tab-link")
      .on("click", function (e) {
        var activeCont = $(this).attr("href");

        e.preventDefault();

        tabList.removeClass("is-active");
        contents.removeClass("is-active");

        $(this).parent().addClass("is-active");

        $(activeCont).addClass("is-active");
      });
  });

  // aos
  AOS.init({
    offset: 120,
    delay: 200,
    duration: 500,
    easing: "ease",
    once: false,
    mirror: true,
    anchorPlacement: "top-bottom",
  });
});
