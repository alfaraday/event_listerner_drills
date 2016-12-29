//Cat carousel
var changeImg = function(){
$(".thumbnail").on("click", function(event) {
  var imgSrc = $(this).find("img").attr("src");
  console.log(imgSrc);
  $(".js-main-image").attr("src", imgSrc);
 
})
};

$(document).ready(changeImg())

//Return of FizzBuzz
$('#number-chooser').submit(function(event){
    event.preventDefault();
    var result = $('input#number-choice').val();
    getValues(result);
  });


function getValues(counter) {
  for (var i=0; i<= counter; i++) {
    if (i%15 === 0 && i !== 0) {
      $('.js-results').append(
        '<div class="fizz-buzz-item fizzbuzz">' +
          '<span>fizzbuzz</span>' +
        '</div>'
      );
    }
    else if (i%3 === 0 && i !== 0) {
      $('.js-results').append(
        '<div class="fizz-buzz-item fizz">' +
          '<span>fizz</span>' +
        '</div>'
      )
    }
    else if (i%5 === 0 && i !== 0) {
      $('.js-results').append(
        '<div class="fizz-buzz-item buzz">' +
          '<span>buzz</span>' +
        '</div>'
      )
    }
    else {
      $('.js-results').append(
        '<div class="fizz-buzz-item">' +
          '<span>' + i + '</span>' +
        '</div>'
      )
    }
  }
}

//Lightbulb toggle
$('.js-lightbulb').click(function(event){
   $(this).toggleClass('bulb-on');
 });