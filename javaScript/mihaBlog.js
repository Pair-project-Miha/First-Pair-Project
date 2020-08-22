
$(document).ready(function(){
	var $body=$('body');
  var $feed=$('.Feed')
	  $(".FeedBack").hide();
    
  $(".typeFeed").click(function(){
    $(".FeedBack").show();
  });



$('#myBtn').click(function(){
           
           var fullName=$('#fname').val();
         
          var $text1=$('<div></div>');
          var d=new Date();
          var n=d.toGMTString();
          $text1.text(fullName+': ' +(($('#myText').val())+' '+n));
          $('#myText').val('');
          $('#fname').val('');
          $text1.appendTo($feed)
});

 $(".FeedB").hide();
    
  $(".typeF").click(function(){
    $(".FeedB").show();
  });
  

$('#myBtt').click(function(){
           
          var $text2=$('#Text').val();
          $('#Text').val('');
          $($body).append($(`<p></p>`).text($text2));
          
        
});
});



