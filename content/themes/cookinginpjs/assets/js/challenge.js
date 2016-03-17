var anagha = 0, sumedha = 0;
var firebaseUrl = "https://cookinginpajamas.firebaseio.com/donations/";

/**
 * [appendPostCount description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function appendPostCount(data) {
  // console.log('tags: ' + data.tags);
  $.each(data.tags, function (i, tag) {
    // console.log(tag);
    if(tag.slug == "anuchallenge2016") {
      anagha = tag.count.posts;
      $('#anagha-count').text(anagha + " posts");
    } else if(tag.slug == "sumuchallenge2016") {
      sumedha = tag.count.posts;
      $('#sumedha-count').text(sumedha + " posts");
    }
  });
}

/**
 * [calculateDonations description]
 * @param  {[type]} authors [description]
 * @return {[type]}         [description]
 */
function calculateDonations(authors) {
  $.each(authors, function(id, author) {
    var owed = 0,
        person = author[0],
        postDate = author[1],
        authorRef = new Firebase(firebaseUrl + person);

    var deadline = getLocalPostTime(person, postDate);
    // var lastPublished = getLastPublishedPost(person);
    console.log(person + ": " + deadline)

    // if(failedToPostOnTime(lastPublished, deadline)) {
    //   //increment donations count?
    //   console.log("FAILED TO POST");
    // }

    // Append donations amount to page
    authorRef.on("value", function(snapshot) {
      $('#' + person + '-donate').text("$" + snapshot.val() + " owed");
      if(snapshot.val() > 0) $('#' + person + '-donate').css("color", "red");
      else $('#' + person + '-donate').css("color", "green");
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  });
}

/**
 * [getLocalTime description]
 * @param  {[type]} person [description]
 * @return {[type]}        [description]
 */
function getLocalPostTime(person, postDate) {
  var locale = (person == "sumedha") ? "Los_Angeles" : "New_York",
      offset = (person == "sumedha") ? 4 : 1,
      timestamp = moment().isoWeekday(offset);
  return moment.tz(timestamp, "America/" + locale).startOf('day').format();
}

/**
 * [getLastPublishedPost description]
 * @param  {[type]} person [description]
 * @return {[type]}        [description]
 */
function getLastPublishedPost(person) {
  return (published < deadline) ? true : false;
}

/**
 * [failedToPostOnTime description]
 * @param  {[type]} published [description]
 * @param  {[type]} deadline  [description]
 * @return {[type]}           [description]
 */
function failedToPostOnTime(published, deadline) {
  return (published < deadline) ? true : false;
}

jQuery(document).ready(function () {
  $.get(
    ghost.url.api('tags', {limit: 'all', include: 'count.posts'})
  ).done(appendPostCount)
  .fail(function (err){ console.log(err); });

  var authors = [["anagha", "Monday"], ["sumedha", "Thursday"]];
  calculateDonations(authors);
});
