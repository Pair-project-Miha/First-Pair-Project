var $span = $("<span></span>");
 $('#output').append($span);

$('#getPrineButton').on('click', function(){
  var value=$('#b').val();
  console.log(value);
  $span.text(value*1.5);

})

$(document).ready(function(){
 
    $(".price").hide();
 
  $("#perchase").click(function(){
    $(".price").show();
  });
});
