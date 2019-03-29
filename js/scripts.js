var javascript = parseInt($('input:radio[name = "javascript"].checked').val());
var datatypes = parseInt($('input:radio[name = "datatypes"].checked').val());
var punctuation = parseInt($('input:radio[name = "punctuation"].checked').val());
var wow = parseInt($('input:radio[name = "wow"].checked').val());

var results= javascript + datatypes + punctuation + wow ;

/*this is the front end logic or*/
$(document).ready(function(){
  $("input[type = 'button']").click(function(event){
    $("#form").submit(function(event){
      $("#display").show(results);

  });



  /*$("score").text("your marks are"+ results);*/

  document.getElementById("display").innerHTML=results;



});
});
