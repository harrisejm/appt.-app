$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var enter = $("input#enter-Name").val();
    var desc = $("input#des").val();
    var appt = $("input#app").val();
    var startTime = $("input#start").val();


    $(".enter-Name").text(enter);
    $(".des").text(desc);
    $(".app").text(appt);
    $(".start").text(startTime);

    $("#story").show();

    event.preventDefault();
  });
});
