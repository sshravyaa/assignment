
// hover effects
$(document).ready(function() {
  var oldSize = parseFloat($("#content").css('font-size'));
  var newSize = oldSize  * 1.1;
  $("#content").hover(
    function() {
     $("#content").animate({ fontSize: newSize}, 100);
    },
    function() {
    $("#content").animate({ fontSize: oldSize}, 50);
   }
 );
});
