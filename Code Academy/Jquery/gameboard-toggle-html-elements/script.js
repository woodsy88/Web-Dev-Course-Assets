var main = function() {

  // Toggle the more-menu
  
  $('.more-btn').click(function(){
    
    $('.more-menu').toggle();
    
  });
  
  // toggle the share-menu
  
  $('.share').click(function(){
    
    $('.share-menu').toggle();
    
  });
  
  //toggle the bell icons css class on and off
  
  $('.notification').click(function(){
    
    $(this).toggleClass('bell-yellow');
    
  });
  
  
};

$(document).ready(main);