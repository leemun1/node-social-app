const moment = require('../public/js/lib/moment');

module.exports = {
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = (new_str.length > 0) ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str; 
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, '');
  },
  formatDate: function (input) {
    return moment(input.date).format("dddd, MMMM Do YYYY");
  }
}