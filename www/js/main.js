

$(document).ready(function() {
  $('img[usemap]').rwdImageMaps();

  if(!$("#theTarget").length == 0){
    $("#theTarget").skippr({
      autoPlay: true,
    });
  };

  // header

  var cl = 0;
  $(".search img").click( function(){

    if(cl == 0){
      $(".search-input").show().animate({width: "300px"});
      cl = 1;
    } else if(cl == 1){
      $(".search-input").animate({width: "0px"}, function(){
        $(".search-input").hide();
      });

      cl = 0
    }



  });



// filter bar
  $(".filter-bar :checkbox").click(function() {
    $("input").prop( "checked", false);
    $(this).prop( "checked", true);
    $(".maps").slideUp(500);
    filterRecipie();

   if(!$(".filter-bar :checkbox").is(":checked")){

     $("div.flex").fadeIn();
     $("div.book").fadeIn();
   }

   if($(this).hasClass("region")){
     setImg(this);
   }


  });

  function filterRecipie(){
    $("div.book").hide();
    $("div.flex").hide();
    $("div.banner-recipies").hide();
    $(".filter-bar :checkbox:checked").each(function() {
        //console.log($(this).attr("class"));
       $("." + $(this).attr("class")).fadeIn();
       //checker();
    });



  }


// recipie filter animatie
  $(".filter-group").click(function() {
   $(this).next().slideUp();
     $("div.flex").fadeIn();

   $("input").prop( "checked", false);
   if($(this).next().css("display") == "none"){
     $(".filter-list").slideUp();
     $(this).next().slideDown();

   };
  });



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



// function checker(){
//
//   if( david && vegan ){
//     $("div.book").css("display", "none");
//     $("div.david.vegan").css("display", "block");
//   }
//   if(klaas && vegan ){
//     $("div.book").css("display", "none");
//     $("div.klaas.vegan").css("display", "block");
//   }
//   if(klaas && david ){
//     $("div.book").css("display", "none");
//     $("div.klaas, div.david").css("display", "block");
//   }
//
//
//   if(klaas && vegan && david ){
//     $("div.book").css("display", "none");
//     $("div.klaas.vegan, div.david.vegan").css("display", "block");
//   }
//
// };

loop();
	function loop(){
	$(".banner-content").delay(1000).animate({opacity: "1", left: "2%"}, 500, function(){

		$(".banner-content h2").animate({opacity: "1"},500, function(){
			$(".cta-menu").animate({opacity: "1", height: "inherit", opacity: "1"}, 300, function(){
				$(".banner-content").delay(4000).animate({opacity: "0", left: "-100%"},500, function(){
          $(".banner-content h2").css("opacity", 0);
          $(".cta-menu").css("opacity",0);
          loop();
        });

			});

		});
	});
	}


// map
  $(".map").click(function(){

    $(".maps").slideToggle(500);

  });

  $("area").click(function(){
    $("input").prop( "checked", false);
    $("." + $(this).attr("id")).prop( "checked", true);
    $(".maps").slideUp(500)
    filterRecipie()


  });

  function setImg(i){
    var img = "../assets/images/map/map-" + $(i).attr("class") + ".jpg";
    $("#map-original").delay(500).attr("src", img);
  }



// $("form").submit(function(){
//
//   var fname = $("#fist-name").val();
//   if(fname.length <= 1 || naam == ""){
//     $(".error").show();
//   };






// })






});



// image map


		//  kent de browser afbeeldingen??
		var canSwap = document.images? true : false;
		// het geselecteerde plaatjes als de pagina geladen is
		var selImage = 0;


		// de afbeeldingen die ingeladen moeten worden
		// afbeeldingen van imac pagina
		var plaatjesArray = [
			"imac-speakers.jpg",
			"imac-fans.jpg",
			"imac-geheugen.jpg",
			"imac-io.jpg",
		];
		//afbeeldingen van accoires pagina
		var plaatjesArray2 = [
			"imac-keyboard.jpg",
			"imac-mouse.jpg",
			"imac-trackpad.jpg"
		];

		var ingeladenPlaatjes = [];



// Preloader afmaken
		function preloadImages(){

			if( canSwap ){
				var array

				if (document.getElementById("map-imac")) {
					array = plaatjesArray;
				}
				if (document.getElementById("map-acc")) {
					array = plaatjesArray2;
				}

				for( var i = 0; i < array.length; i++ ){

					// maak een virtueel plaatje aan
					ingeladenPlaatjes[i] = new Image();
					// ken daar een src aan toe
					ingeladenPlaatjes[i].src = imagePad + array[i];

				}

			}

		}




		function swapImage( welkPlaatje, waarin, imageId, loc ){
			var id = imageId;
			var plaatje = document.getElementById(welkPlaatje);

			if( canSwap ){ // als canSwap true is


					plaatje.src = "../assets/images/map/" + waarin;

					//contentSwap(id, loc);
			}

		}

		function contentSwap(id, loc){
			var content = document.getElementById(id);
				if (loc == "over"){
					document.getElementById("original").style.display = "none";
					content.style.display = "block";

				} else {
					document.getElementById("original").style.display = "block";
					content.style.display = "none";
				}





		}
// preloader afmaken

		// window.onload = function(){
		// 	preloadImages();
    //
    //
		// }
