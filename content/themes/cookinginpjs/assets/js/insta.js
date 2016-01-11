(function ($, undefined) {
  var accessToken = '2462667315.467ede5.6a8150827314439e9d18ba4c52596886';

  $.ajax({
    type: "POST",

    url: 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + accessToken,
    dataType: "jsonp",

    success: function(results){
      if(results.meta.code == 200){
        console.log(results);
        for(var i = 0; i < results.data.length; i++) {
          var obj = results.data[i];
          console.log(obj);
          var html = '<a href="' + obj.link + '" class="overlay" >' +
            '<img src="' + obj.images.standard_resolution.url + '">' +
            '<div class="likes"><i class="ion-ios-heart"></i>' + obj.likes.count + ' ' +
            '<i class="ion-chatbubble"></i> ' + obj.comments.count + '</div></a>';
          $("#instafeed").append(html);
        }
      } else{
        console.log(results.meta.error_message);
      }
    }
  });
})(jQuery);

