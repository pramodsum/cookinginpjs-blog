var loadRecentPosts = function(amount, cb) {
  var rss = $('link[type="application/rss+xml"]').attr('href');
  $.get(rss, function(data) {
    var parsed = $.parseXML(data);
    // Only display the first number of posts (defined by amount)
    var posts = $(data).find('item').slice(0, amount);
    var recent = [];
    // Loop posts
    for (var i = 0; posts && i < posts.length; i++) {
      var post = posts.eq(i);
      recent.push({
        title: post.find('title').text(),
        link: post.find('link').text(),
        date: post.find('pubDate').text()
      });
    }
    cb(recent);
  });
};

// Gets called on document ready
$(function() {
  // Display 5 posts
  loadRecentPosts(5, function(posts) {
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      // Post is an object with a title, link and date property
      // Create a wrapper with jQuery and append/insert anywhere
      $("#latest-posts").append("<li><a href=\"" + post.link + "\">" + post.title + "</a></li>");
    }
  });
});

var Instafeed = require("instafeed.js");
var feed = new Instafeed({
    get: 'user',
    userId: '2462667315',
    sortBy: 'most-liked',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
    clientId: '72bfc048bd36447fa3d50e3725fa31ed'
});
feed.run();
