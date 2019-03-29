
/*this is the Back end logic */
$(document).ready(function(){

    $("#form").submit(function(event){
       event.preventDefault();
       $("#display").text(results);
       var javscript = parseInt($("input:radio[name = javscript]:checked").val());
       var datatypes = parseInt($("input:radio[name = datatypes]:checked").val());
       var punctuation = parseInt($("input:radio[name = punctuation]:checked").val());
       var wow = parseInt($("input:radio[name=wow]:checked").val());
       var short = parseInt($("input:radio[name=short]:checked").val());


       var results= javscript + datatypes + punctuation + wow + short;



       if(results > 80){
         $("#display").text ("Your marks are " +  results  + " You are good at it!")
       }else if (results >= 60){
         $("#display").text("AVERAGE");
       }else {
         $("#display").text("FAIL");
       }


    });
});
// front end logic
$(document).ready(function() {
  $("p").click(function() {
    $(".image-showing").toggle();
    $(".image-hidden").toggle();
  });
});
