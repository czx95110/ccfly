(function(){
  var carouselContentLists = $('.carousel .carousel-content li');
  var carouselIndicatorLists = $('.carousel .carousel-indicator li');

  $('.carousel .carousel-indicator').on('mouseover','li', function (e) {
    var me = $(e.target);
    var currentIndicator = me.data('indicator');

    indicatorAddClass(e);
    contentAddClass(e,currentIndicator);

  });

  // 切换轮播小圆点
  function contentAddClass(e,indicator) {
    var currentContent = $('[data-content="' + indicator + '"]');
    currentContent.addClass('active').siblings().removeClass('active');
  }
  // 切换轮播图片
  function indicatorAddClass(e) {
    var me = $(e.target);
    me.addClass('active').siblings().removeClass('active');
  }

})();