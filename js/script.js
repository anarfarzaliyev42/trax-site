$(document).ready(function () {
  scrollWorks();
  $("#services .owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
        onDragged: getActiveSmallScreen,
      },
      576: {
        items: 3,
        onDragged: getActiveLargeScreen,
      },
    },
  });
  $(".apps-image .owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
        onDragged: getActiveSmallScreen,
      }
      
    },
  });


  //--------------------------------------

  $(document).on("click", ".nav-item .nav-link", function () {
    let allNavLinks = $(".nav-item .nav-link");

    allNavLinks.each(function (index, element) {
      $(element).removeClass("nav-link-active");
    });
    $(this).addClass("nav-link-active");
  });
  $(document).on("click", ".side-navbar li a", function () {
    console.log("asda");

    let allNavLinks = $(".side-navbar li a");

    allNavLinks.each(function (index, element) {
      $(element).removeClass("side-link-active");
    });
    $(this).addClass("side-link-active");
  });
  //Nav active end
  //--------------------------------------
  $(document).on("click", ".left-numbers span", function () {
    clearInterval(timer);
    let allLeftNumbers = $(".left-numbers span");
    let allBgImages = $(".background-image img");

    let currentIndex = $(this).index();
    headerCondition(currentIndex);

    allBgImages.each(function (index, element) {
      if ($(element).index() == currentIndex) {
        $(element).addClass("active-bg-image");
      } else {
        $(element).removeClass("active-bg-image");
      }
    });

    allLeftNumbers.each(function (index, element) {
      $(element).removeClass("left-active-number");
    });
    $(this).addClass("left-active-number");
  });

  let counter = 1;
  let timer;
  function sliderTimer() {
    counter++;

    let sliderImages = $(".background-image img");
    sliderImages.each(function (index, element) {
      $(element).removeClass("active-bg-image");
    });
    if (counter == 4) {
      counter = 1;
    }
    $($(".background-image img")[counter - 1]).addClass("active-bg-image");
    let currentIndex = $($(".background-image img")[counter - 1]).index();
    let allLeftNumbers = $(".left-numbers span");
    allLeftNumbers.each(function (index, element) {
      if ($(element).index() == currentIndex) {
        $(element).addClass("left-active-number");
      } else {
        $(element).removeClass("left-active-number");
      }
    });
    textChange();
  }

  //timer = setInterval(sliderTimer, 5000);
  // Slider end
  function getActiveLargeScreen() {
    let activeOwlItemActives = $(".owl-stage .active");
    activeOwlItemActives.each(function (index, element) {
      if (index == 1) {
        $(element).find(".service-box").addClass("active-service-box");
      } else {
        $(element).find(".service-box").removeClass("active-service-box");
      }
    });
  }
  function textChange() {
    let currentLeftNumber = ".left-active-number";
    let currentLeftNumberIndex = $(currentLeftNumber).index();

    headerCondition(currentLeftNumberIndex);
  }
  function headerCondition(currentIndex) {
    let allBannerTexts = $(".background-image-text .content");

    allBannerTexts.each(function (index, element) {
      if (currentIndex == $(element).index()) {
        $(element).find(".light-header").addClass("light-header-active");
        $(element).find(".light-header").removeClass("light-header-deactive");
        $(element).find(".heavy-header").addClass("heavy-header-active");
        $(element).find(".heavy-header").removeClass("heavy-header-deactive");
        $(element).find(".small-header").addClass("small-header-active");
        $(element).find(".small-header").removeClass("small-header-deactive");
      } else {
        $(element).find(".light-header").removeClass("light-header-active");
        $(element).find(".light-header").addClass("light-header-deactive");
        $(element).find(".heavy-header").addClass("heavy-header-deactive");
        $(element).find(".heavy-header").removeClass("heavy-header-active");
        $(element).find(".small-header").addClass("small-header-deactive");
        $(element).find(".small-header").removeClass("small-header-active");
      }
    });
  }
  // side menu opener

  $(document).on("click", ".sidemenu-btn", function () {
    $(".side-menu-overlay").addClass("side-overlay-active");
    $(".side-menu ").addClass("side-menu-active");
    $("body").css("overflow-y", "hidden");
    let allSideLinks = $(".side-navbar li");
    allSideLinks.each(function (index, element) {
      $(element).addClass("side-link-anime");
    });
  });
  $(document).on("click", ".close-icon i", function () {
    $(".side-menu-overlay").removeClass("side-overlay-active");
    let allSideLinks = $(".side-navbar li");
    $("body").css("overflow-y", "auto");
    $(".side-menu ").removeClass("side-menu-active");
    allSideLinks.each(function (index, element) {
      $(element).removeClass("side-link-anime");
    });
  });
  //Process hover and Iphone lock-btn hover down
  $(document).on("mouseenter", ".process-bottom li", function () {
    let allProcessLi = $(".process-bottom li");

    allProcessLi.each(function (index, element) {
      $(element).find("span").removeClass("process-span-active");
    });
    $(this).find("span").addClass("process-span-active");
  });
  $(document).on("mouseleave", ".process-bottom li", function () {
    let allProcessLi = $(".process-bottom li");
    allProcessLi.each(function (index, element) {
      $(element).find("span").removeClass("process-span-active");
    });
    $(".process-bottom li:nth-child(3)")
      .find("span")
      .addClass("process-span-active");
  });
  $(document).on("mouseenter", ".iphone-frame,#apps-slider", function () {
    //Iphone ******************
    let lockBtn = $(".apps-image .lock-icon-btn");
    lockBtn.addClass("lock-icon-btn-active");
  });
  $(document).on("mouseleave", ".iphone-frame,#apps-slider", function () {
    //Iphone ******************
    let lockBtn = $(".apps-image .lock-icon-btn");
    lockBtn.removeClass("lock-icon-btn-active");
  });
  
  //Process hover and Iphone lock-btn hover up

  function getActiveSmallScreen() {
    let activeOwlItemActives = $(".owl-stage .active");
    activeOwlItemActives.each(function (index, element) {
      $(element).find(".service-box").removeClass("active-service-box");
    });
  }
  function scrollWorks() {
    window.onscroll = function () {
      getScroll();
    };
    function getScroll() {
      let scrollTop = window.pageYOffset;
      if (scrollTop > 350) {
        $(".logo-default").hide();
        $(".logo-scrolled").show();
        $(".nav-link").addClass("dark-text-color");
        $(".sidemenu-btn span").addClass("side-btn-span-dark");
        $("nav").addClass("fixedmenu");
      } else {
        $(".logo-default").show();
        $(".logo-scrolled").hide();
        $(".nav-link").removeClass("dark-text-color");
        $(".sidemenu-btn span").removeClass("side-btn-span-dark");
        $("nav").removeClass("fixedmenu");
      }
    }
  }
  //Iphone lock btn
  $(document).on('click','.lock-icon-btn',function () {
    $('#apps-slider').toggle();
    
  })
});
