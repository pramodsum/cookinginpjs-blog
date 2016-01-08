(function ($, undefined) {
  var feed = new Instafeed({
    get: 'user',
    userId: 2462667315,
    accessToken: '2462667315.467ede5.6a8150827314439e9d18ba4c52596886',
    sortBy: 'most-liked',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" class="overlay" style="background-image:url({{image}})"><div class="likes">&hearts; {{likes}}</div></a>'
  });
  feed.run();
})(jQuery);
