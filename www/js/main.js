

$(document).ready(function() {


  $(".authors .plus").click( function(){

    $(".author-list").slideUp();
    $(".author-list:hidden").slideDown();

  });

  $(".catagories .plus").click( function(){

    $(".catagorie-list").slideUp();
    $(".catagorie-list:hidden").slideDown();

  });

});
