(function ($, undefined) {
  var feed = new Instafeed({
    get: 'user',
    userId: 2462667315,
    accessToken: '2462667315.467ede5.6a8150827314439e9d18ba4c52596886',
    sortBy: 'most-liked',
    resolution: 'standard_resolution',
    after: function () {
      var images = $("#instafeed").find('a');
      $.each(images, function(index, image) {
        var delay = (index * 75) + 'ms';
        $(image).css('-webkit-animation-delay', delay);
        $(image).css('-moz-animation-delay', delay);
        $(image).css('-ms-animation-delay', delay);
        $(image).css('-o-animation-delay', delay);
        $(image).css('animation-delay', delay);
        $(image).addClass('animated flipInX');
      });
    },
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
  });
  feed.run();
})(jQuery);
