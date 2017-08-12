var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  
  
    // adds the new to-do
    $('form').submit(function() {
      
    var text = $('#todo').val();
    
    if (text !== ""){
      
      var html = template(text);
      $(html).appendTo('.list');
      $('#todo').val('');
      
    }
    
    
    
    return false;  
  });
  
  //toggles the star on and off
  
$('.list').on('click','.glyphicon-star', function(){
   $(this).toggleClass('active');
   
 }); 
  
    // allows you to delete the list item
$('.list').on('click', '.glyphicon-remove', function() { 
$(this).parent().remove(); 
});
  
};

$(document).ready(main);