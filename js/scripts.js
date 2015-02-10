var titleCase = function(user_string) {
  var fields = user_string.toLowerCase().split(" ");
  var results = [];

  fields.forEach(function(user_array) {
    var new_array = user_array.charAt(0).toUpperCase() + user_array.slice(1);
    results.push(new_array);
  });
  return results.join(" ")
};
