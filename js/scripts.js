var javascript = parseInt($('input:radio[name = "javascript"].checked').val());
var datatypes = parseInt($('input:radio[name = "datatypes"].checked').val());
var punctuation = parseInt($('input:radio[name = "punctuation"].checked').val());
var wow = parseInt($('input:radio[name = "wow"].checked').val());

var correctPoint = 25;

var results= javascript + datatypes + punctuation + wow ;
if (javascript === undefined || datatypes === undefined || punctuation === undefined || wow === undefined) {
$('#form').text('Please Complete questions Before Submitting');
$('#form').fadeOut(10000);
} else {
    if (javascript === javascript[0]) {
score += correctPoint;
}
    if (datatypes === dataypes[2]) {
score += correctPoint;
}
    if (punctuation === punctuation[3]) {
score += correctPoint;
}
    if (wow === wow [1]) {
score += correctPoint;
    }
}

/*this is the front end logic or*/
$(document).ready(function(){
  $("input[type = 'button']").click(function(event){
    $("#form").submit(function(event){


  });



  /*$("score").text("your marks are"+ results);*/

  document.getElementById("display").innerHTML=results;



});
});
