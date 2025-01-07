!(function (e) {
  "use strict";
  e("#foo4").carouFredSel({
    prev: "#prev4",
    next: "#next4",
    auto: !1,
    responsive: !0,
    width: "100%",
    scroll: 1,
    items: { width: 400, height: "auto", visible: { min: 1, max: 8 } },
  });
})(jQuery);

!(function (e) {
  "use strict";
  e("#foo42").carouFredSel({
    prev: "#prev45",
    next: "#next45",
    auto: !1,
    responsive: !0,
    width: "100%",
    scroll: 1,
    items: { width: 400, height: "auto", visible: { min: 1, max: 8 } },
    afterShow: function () {
      console.log("here it is");
    },
  });
  e("#foo42 .fancybox").click(function () {
    let id = e(this).attr("href");
    const videoEl = e(id).find("video")[0];
    videoEl.currentTime = 0;
    videoEl.play();
  });
  e("body").click(function (e) {
    if (
      e.target.classList.contains(".fancybox-nav") ||
      e.target.closest(".fancybox-nav")
    ) {
      restartPopupVideo();
    }
  });
  function restartPopupVideo() {
    e(".fancybox-overlay video").each(function (i, el) {
      el.currentTime = 0;
      el.play();
    });
  }
})(jQuery);
