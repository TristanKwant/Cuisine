

$(document).ready(function() {



  $(".authors .plus").click( function(){

    $(".author-list").slideUp();
    $(".author-list:hidden").slideDown();

  });

  $(".filter-bar :checkbox").click(function() {
   $("div.book").hide();

   $(".filter-bar :checkbox:checked").each(function() {
       //console.log($(this).attr("class"));
      $("." + $(this).attr("class")).show();
      checker();
   });
  });


  var BookNone = $("div.book").css("display", "none");
  var david = $(".david").prop("checked");
  var klaas = $(".klaas").prop("checked");
  var vegan = $(".vegan").prop("checked");
  //
  // // filterbar catagories
   $(".catagories .plus").click( function(){

  $(".catagorie-list").slideUp();
   $(".catagorie-list:hidden").slideDown();

  });


// single book page



// cta-fav
var clicked = 0;

$(".btn-fav").mouseover(function() {

  $(".btn-fav img").attr("src", "../assets/icons/hart.png");

});

$(".btn-fav").click(function() {

  if(clicked == 0){
    $(".btn-fav img").attr("src", "../assets/icons/hart.png");
    clicked = 1
  } else {
    $(".btn-fav img").attr("src", "../assets/icons/hart-outline.png");
    clicked = 0
  }
});

$(".btn-fav").mouseout(function() {

  if(clicked == 1){
    $(".btn-fav img").attr("src", "../assets/icons/hart.png");
  } else {
    $(".btn-fav img").attr("src", "../assets/icons/hart-outline.png");
  }
});
//cta-fave end

// content-bar
$(".content-bar li").click(function() {
 $(".content-area").hide();
 $(".content-bar li").css("background-color", "#dee8ea").css("color", "#0f323a");
 $("." + $(this).attr("class")).show();
 $(this).css("background-color", "#406b76").css("color", "white");
});
// end content-bar







//
// $(".vegan").click(function() {
//   veganCheck();
//   checker();
// });
//
//
//
//
//
//
// $(".david").click(function() {
//   davidCheck();
//   checker();
//
//
// });
//
// $(".klaas").click(function() {
//   KlaasCheck();
//   //davidCheck();
//   checker();
//
//
// });
//
// function veganCheck(){
//   if($(".vegan").prop("checked")){
//     $("div.vegan").css("display", "block");
//
//   } else if(!$(".vegan").prop("checked")){
//     $("div.vegan").css("display", "none");
//     davidCheck();
//   }
// };
//
// function davidCheck(){
//
//   if($(".david").prop("checked")){
//     $("div.david").css("display", "block");
//
//   } else if(!$(".david").prop("checked")){
//     $("div.david").css("display", "none");
//     //veganCheck();
//     KlaasCheck();
//   }
//
//
// };
//
// function KlaasCheck(){
//
//   if($(".klaas").prop("checked")){
//     $("div.klaas").css("display", "block");
//
//   } else if(!$(".klaas").prop("checked")){
//     $("div.klaas").css("display", "none");
//     veganCheck();
//   }
//
//
// };
//
function checker(){

  if( david && vegan ){
    $("div.book").css("display", "none");
    $("div.david.vegan").css("display", "block");
  }
  if(klaas && vegan ){
    $("div.book").css("display", "none");
    $("div.klaas.vegan").css("display", "block");
  }
  if(klaas && david ){
    $("div.book").css("display", "none");
    $("div.klaas, div.david").css("display", "block");
  }


  if(klaas && vegan && david ){
    $("div.book").css("display", "none");
    $("div.klaas.vegan, div.david.vegan").css("display", "block");
  }

};



  // $(".vegan").click(function() {
  //   if($(".vegan").prop("checked")){
  //     $("div.vegan").css("display", "block");
  //
  //   } else {
  //     $("div.vegan").css("display", "none");
  //     checkDavid();
  //     checkKlaas()
  //
  //   }
  //   multi()
  // });
  //
  // $(".david").click(function() {
  //   david();
  //   if($(".david").prop("checked")){
  //   $("div.david").fadeIn().css("display", "block");
  //   } else {
  //     $("div.david").css("display", "none");
  //     // checkKlaas()
  //     // checkVegan();
  //     // multi();
  //
  //   }
  //
  // });
  //
  //
  // $(".klaas").click(function() {
  //   if($(".klaas").prop("checked")){
  //   $("div.klaas").fadeIn().css("display", "block");
  //   } else {
  //     $("div.klaas").css("display", "none");
  //
  //     // checkDavid();
  //     // checkVegan();
  //     // checkKlaas()
  //   }
  //   multi()
  // });

// function checkDavid(){
//   if($(".david").prop("checked")){
//     $("div.david").css("display", "block");
//   } else {
//     $("div.david").css("display", "none");
//   }
//
// }
//
// function checkVegan(){
//   if($(".vegan").prop("checked")){
//     $("div.vegan").css("display", "block");
//   } else {
//     $("div.vegan").css("display", "none");
//   }
// }
//
// function checkKlaas(){
//   if($(".klaas").prop("checked")){
//     $("div.klaas").css("display", "block");
//   } else {
//     $("div.klaas").css("display", "none");
//   }
//
// }

// function david(){
//
//   if($(".david").prop("checked") && $(".vegan").prop("checked")){
//     $("div.book").css("display", "none");
//     $("div.david.vegan").css("display", "block");
//
//   } else if($(".vegan").prop("checked")){
//     $("div.book").css("display", "none");
//     $("div.vegan").css("display", "block");
//
//   }
//
// }
//
//
//
// function multi(){
//
//
//   if($(".david").prop("checked") && $(".vegan").prop("checked")){
//     $("div.book").css("display", "none");
//     $("div.david.vegan").css("display", "block");
//
//   } else if($(".vegan").prop("checked")){
//     $("div.book").css("display", "none");
//     $("div.vegan").css("display", "block");
//
//   }

  // if($(".klaas").prop("checked") && $(".vegan").prop("checked")){
  //   $("div.book").css("display", "none");
  //   $("div.klaas.vegan").css("display", "block");
  //
  // } else if($(".vegan").prop("checked")){
  //   $("div.book").css("display", "none");
  //   $("div.vegan").css("display", "block");
  //
  // }



  // if($(".david").prop("checked") && $(".klaas").prop("checked")){
  // $("div.book").css("display", "none");
  // $("div.klaas.david").css("display", "block");
  //
  // }






// }


  // $(".vegan").click(function() {
  //   if(){
  //
  //
  //
  //   }
  //   $("div.vegan").fadeToggle(this.checked);
  // });









});
