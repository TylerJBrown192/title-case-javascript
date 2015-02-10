var titleCase = function(user_string) {
  var initialResults = user_string.toLowerCase().split(" ");
  var results = [];
  var moreResults = [];
  var exceptions = "Of";

  initialResults.forEach(function(singled_word) {
    var new_capitalized_words = singled_word.charAt(0).toUpperCase() + singled_word.slice(1);
    results.push(new_capitalized_words);
    results.forEach(function(small_word) {
      if (small_word === exceptions) {
        var new_small_word = small_word.toLowerCase();
        moreResults.push(new_small_word);
    } else {
        moreResults.push(small_word)
      };
    });
  });
  return moreResults.join(" ");
};
