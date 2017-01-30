function Furby(name, age, color, url) {
  this.furbyName = name;
  this.age = age;
  this.furbyColor = color;
  this.furbyPic = url;
  this.adoptionStatus = false;
}
var furby1 = new Furby("Lola", 3, "gray, white");

$(document).ready(function() {

  $("div.container").on('click', '.furby-box button.adopt-me', function(event) {
    $(this).parent().addClass("adopted");
    $(this).parent().find(".overlay").show();
    $(this).parent().removeClass("available");
    $(this).parent().append("I'm adopted!");
    console.log("I'm adopted!");
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

  $("form").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#furby-name-input").val();
    var inputAge = $("input#furby-age-input").val();
    var inputColor = $("input#furby-color-input").val();
    var inputPic = $("input#furby-pic-input").val();

    var newFurby = new Furby(inputName, inputAge, inputColor, inputPic);
    console.log(newFurby);


    $(".col-md-9").append('<div class="furby-box available">'+
    '<div class="overlay">' +
    '</div>' +
    '<img src="' + inputPic + '" alt="Bubbles the Furby" />' +
      '<h2>' + inputName + '</h2>' +
      '<span class="age">' + inputAge + '</span>' +
      '<span class="color">' + inputColor + '</span>' +
      '<button type="button" class="adopt-me btn btn-danger btn-lg">Adopt me!</button>' +
    '</div>');
  });


});
