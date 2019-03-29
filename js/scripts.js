var javscript = parseInt($('input:radio[name = javascript]:checked').val());
var datatypes = parseInt($('input:radio[name = datatypes]:checked').val());
var punctuation = parseInt($('input:radio[name = punctuation]:checked').val());
var wow = parseInt($("input:radio[name=wow]:checked").val());



var results= javscript + datatypes + punctuation + wow ;

/*this is the front end logic or*/
$(document).ready(function(){
    $("#form").submit(function(event){
       event.preventDefault();
       $("#display").text(results);
      
       if(results > 75){
         $("#display").text ("your marks are" + results + "you are good at it!")
       }else{

       }
    });










});
