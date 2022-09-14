// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "dscountdown";
import "jquery.countdown";

import jquery from "jquery";
window.jQuery = jquery;
window.$ = jquery;

$(function () {
  $(".demo1").dsCountDown({
    endDate: new Date("December 23, 2017 17:59:00"),
  });
});
