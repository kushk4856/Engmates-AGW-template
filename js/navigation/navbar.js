$(document).ready(function () {
  ($.fn.scrollTo = function (o) {
    var e = { offset: -74, speed: "slow", override: null, easing: null };
    return (
      o &&
        (o.override &&
          (o.override = -1 != override("#") ? o.override : "#" + o.override),
        $.extend(e, o)),
      this.each(function (o, t) {
        $(t).click(function (o) {
          var s;
          null !== $(t).attr("href").match(/#/) &&
            (o.preventDefault(),
            (s = e.override ? e.override : $(t).attr("href")),
            history.pushState
              ? (history.pushState(null, null, s),
                $("html,body")
                  .stop()
                  .animate(
                    { scrollTop: $(s).offset().top + e.offset },
                    e.speed,
                    e.easing
                  ))
              : $("html,body")
                  .stop()
                  .animate(
                    { scrollTop: $(s).offset().top + e.offset },
                    e.speed,
                    e.easing,
                    function (o) {
                      window.location.hash = s;
                    }
                  ));
        });
      })
    );
  }),
    $(
      "#GoToHome, #GoToPricing, #GoToEarth, #GoToSky, #GoToMaster, #GoToArchitect, #GoToGallery, #GoToLocation, #GoTomyModal, #GoToContact,.btn-scroll"
    ).scrollTo({ speed: 1400 }),
    (headerWrapper = parseInt($(".navbar").height())),
    (offsetTolerance = 77),
    $(window).scroll(function () {
      (scrollPosition = parseInt($(this).scrollTop())),
        $(".navbar-nav li a").each(function () {
          (thisHref = $(this).attr("href")),
            (thisTruePosition = parseInt($(thisHref).offset().top)),
            (thisPosition = thisTruePosition - headerWrapper - offsetTolerance),
            scrollPosition >= thisPosition &&
              ($(".selected").removeClass("selected"),
              $(".navbar-nav li a[href=" + thisHref + "]").addClass(
                "selected"
              ));
        }),
        (bottomPage =
          parseInt($(document).height()) - parseInt($(window).height())),
        (scrollPosition == bottomPage || scrollPosition >= bottomPage) &&
          ($(".selected").removeClass("selected"),
          $("navbar-nav li a:last").addClass("selected"));
    });
});
