/*this is the front end logic or*/
$(document).ready(fuction() {
  $("#form").submit(function(){
    var javascript = $("input :radio[name = javascript]:checked").val();
    var datatypes= $("input :radio[name = datatypes]:checked").val();
    var punctuation = $("input :radio[name = punctuation]:checked").val();
    var wow = $("input :radio[name = wow]:checked").val();

    var results = javascript + datatypes + punctuation + wow ;
    $("score").text("your score is" + result)
  })
});
