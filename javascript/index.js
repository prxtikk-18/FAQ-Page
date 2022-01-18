// $("#q1").click(function () {
//   // console.log($("#q1"));
//   $("#a1").fadeToggle("fast");
//   $("#arrow1-down, #arrow1-up").toggleClass("collapse");
// });

// $("#q2").click(function () {
//   $("#a2").fadeToggle("fast");
//   $("#arrow2-down, #arrow2-up").toggleClass("collapse");
// });

// $("#q3").click(function () {
//   $("#a3").fadeToggle("fast");
//   $("#arrow3-down, #arrow3-up").toggleClass("collapse");
// });

$(".question").click(function () {
  $(this).next().fadeToggle("fast");
  $(this).children().toggleClass("collapse");
});
