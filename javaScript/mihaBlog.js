
$(document).ready(function(){
	var $body=$('body');
	  $(".FeedBack").hide();
    
  $(".typeFeed").click(function(){
    $(".FeedBack").show();
  });



$('#myBtn').click(function(){
           
           var fullName=$('#fname').val();
         
          var $text1=$('<div></div>');
          var d=new Date();
          var n=d.toGMTString();
          $text1.text(fullName+' ' +(($('#myText').val())+' '+n));
          
          $text1.appendTo($body)
});
});



