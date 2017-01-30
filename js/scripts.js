function Furby(name, age, color, url) {
  this.furbyName = name;
  this.age = age;
  this.furbyColor = color;
  this.furbyPic = url;
  this.adoptionStatus = false;
}
var furby1 = new Furby("Lola", 3, "gray, white");

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#furby-name-input").val();
    var inputAge = $("input#furby-age-input").val();
    var inputColor = $("input#furby-color-input").val();
    var inputPic = $("input#furby-pic-input").val();

    var newFurby = new Furby(inputName, inputAge, inputColor, inputPic);

    $("span#furbyName").append(newFurby.furbyName, newFurby.age, newFurby.furbyColor, newFurby.furbyPic, newFurby.adoptionStatus);
  });

  $("button.adopt-me").click(function() {
    $(this).parent().addClass("adopted");
    $(this).parent().removeClass("available");
  })

  $("#show-adopted").click(function() {
    $(".adopted").show();
    $(".available").hide();
  })

  $("#show-available").click(function() {
    $(".adopted").hide();
    $(".available").show();
  })

  $("#show-all").click(function() {
    $(".adopted").show();
    $(".available").show();
  })

});
