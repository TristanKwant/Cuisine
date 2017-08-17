function valideerForm(){

      // initialiseer de var's
      var correct = true; // de scheidsrechter, houdt bij of er een fout is gemaakt

      //alert( "In de functie" );
      // haal de inhoud van het naamveld op...
      var naam = document.getElementById( "first-name" ).value;
      var dnaam = document.getElementById( "first-name" ).defaultValue;

      // valideer de inhoud van naam...
      if( naam.length <= 1 || naam == dnaam ){
        // als de conditie waar is, dus het is FOUT...
        correct = false;
         // tel deze string op bij de error var
        document.getElementById( "fname-error" ).style.visibility = "visible";// zet de error span op de pagina aan
      } else {
        // als het GOED is...

        document.getElementById( "fname-error" ).style.visibility = "hidden";
      }



      // haal de inhoud van het last naamveld op...
      naam = document.getElementById( "last-name" ).value;
      dnaam = document.getElementById( "last-name" ).defaultValue;

      // valideer de inhoud van naam...
      if( naam.length <= 1 || naam == dnaam ){
        // als de conditie waar is, dus het is FOUT...
        correct = false;

        document.getElementById( "lname-error" ).style.visibility = "visible";// zet de error span op de pagina aan
      } else {
        // als het GOED is...

        document.getElementById( "lname-error" ).style.visibility = "hidden";
      }






      // // haal de inhoud uit het emailveld
      var email = document.getElementById( "email" ).value;
      var demail = document.getElementById( "email" ).defaultValue;

      // stuur de email var naar de functie valideerEmail...true of false antwoord
      var res = valideerEmail( email );

      // valideer de inhoud van email
      if( !res || email == demail ){
        // als de conditie waar is, dus als het FOUT is
        correct = false;

        document.getElementById( "email-error" ).style.visibility = "visible";// zet de error span op de pagina aan
      } else {
        document.getElementById( "email-error" ).style.visibility = "hidden";
      }

      // // valideer de inhoud van bedrijf
      // var bedrijf = document.getElementById( "bedrijf" ).value;
      // var dbedrijf = document.getElementById( "bedrijf" ).defaultValue;
      //
      // if( bedrijf == "" || bedrijf == dbedrijf){
      // 	// als de conditie waar is, dus als het FOUT is
      // 	correct = false;
      // 	error += "Een bedrijfsnaam is verplicht!\n"; // tel deze string op bij de error var
      // 	document.getElementById( "bedrijf_error" ).style.display = "inline";// zet de error span op de pagina aan
      // } else {
      // 	// als de conditie niet waar is...dus er is iets ingevuld
      // 	document.getElementById( "bedrijf_error" ).style.display = "none";
      // }
      //
      // valideer de inhoud van telefoonnummer
      var tel = document.getElementById( "tel" ).value;
      var dtel = document.getElementById( "tel" ).defaultValue;

      if( tel.length != 10 || tel == dtel ){ // als tel niet gelijk is aan 10 karakters...letters of cijfers
        // dus het is fout..
        correct = false;

        // voor de zekerheid de tweede foutmelding uitzetten
        //document.getElementById( "tel-error" ).style.visibility = "hidden";
        // presenteer de goede foutmelding
        document.getElementById( "tel-error" ).style.visibility = "visible";
      } else if( isNaN( tel ) ){ // is tel wel een nummer
        // dus het zijn geen cijfers
        correct = false;

        // we zetten de eerste foutmelding uit
        //document.getElementById( "tel-error" ).style.visibility = "hidden";
        // presenteer de goede foutmelding
        document.getElementById( "tel-error" ).style.visibility = "visible";
      } else { // als het goed is
        // foutmeldingen verbergen

        document.getElementById( "tel-error" ).style.visibility = "hidden";
        document.getElementById( "tel-error" ).style.visibility = "hidden";

      }

      // haal de inhoud van het country naamveld op...
      var country = document.getElementById( "country" ).value;
      var dcountry = document.getElementById( "country" ).defaultValue;

      // valideer de inhoud van naam...
      if(country == "" ){
        // als de conditie waar is, dus het is FOUT...
        correct = false;

        document.getElementById( "con-error" ).style.visibility = "visible";// zet de error span op de pagina aan
      } else {
        // als het GOED is..

        document.getElementById( "con-error" ).style.visibility = "hidden";
      }

      // haal de inhoud van het last naamveld op...
      var sub = document.getElementById( "sub" ).value;
      var dsub = document.getElementById( "sub" ).defaultValue;

      // valideer de inhoud van naam...
      if( naam.length <= 1 || sub == dsub ){
        // als de conditie waar is, dus het is FOUT...
        correct = false;

        document.getElementById( "sub-error" ).style.visibility = "visible";// zet de error span op de pagina aan
      } else {
        // als het GOED is...

        document.getElementById( "sub-error" ).style.visibility = "hidden";
      }


      // haal de inhoud van het last naamveld op...
      var mes = document.getElementById( "mes" ).value;
      var dmes = document.getElementById( "mes" ).defaultValue;

      // valideer de inhoud van naam...
      if( mes.length <= 1 || mes == dmes ){
        // als de conditie waar is, dus het is FOUT...
        correct = false;

        document.getElementById( "mes-error" ).style.visibility = "visible";// zet de error span op de pagina aan
      } else {
        // als het GOED is...

        document.getElementById( "mes-error" ).style.visibility = "hidden";
      }

      // als alles goed is verstuur dan het formulier
      if( !correct ){ // correct == false
// eerst de alert, dan pas de return false
        return false;
      } else {
        return true; // verzend het formulier als er geen fouten zijn gemaakt
      }



    } // sluit curly van valideerForm

// deze functie verwacht een argument, zonder arg zal de functie niets doen
// valideerEmail( email );
function valideerEmail( emailadres ){

  var patroon = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return patroon.test( emailadres );

}

//reset de foutmeldingen in de pagina als er op de reset knop geklikt wordt
// function resetForm(){
// 	// zet de foutmeldingen uit
// 	document.getElementById( "fname-error" ).style.visibility = "hidden";
// 	document.getElementById( "lname-error" ).style.visibility = "hidden";
// 	//document.getElementById( "bedrijf_error" ).style.visibility = "hidden";;
// 	document.getElementById( "tel-error" ).style.visibility = "hidden";
//   document.getElementById( "email-error" ).style.visibility = "hidden";
//   document.getElementById( "phone-error" ).style.visibility = "hidden";
//   document.getElementById( "country-error" ).style.visibility = "hidden";
//   document.getElementById( "sub-error" ).style.visibility = "hidden";
//   document.getElementById( "mes-error" ).style.visibility = "hidden";
// 	//document.getElementById( "tel_error2" ).style.visibility = "hidden";;
// 	// zet de textkleur en font style weer op default...grijs en italic
// 	// document.getElementById( "naam" ).style.color = "#AAA";
// 	// document.getElementById( "naam" ).style.fontStyle = "italic";
// 	// document.getElementById( "email" ).style.color = "#AAA";
// 	// document.getElementById( "email" ).style.fontStyle = "italic";
// 	// document.getElementById( "bedrijf" ).style.color = "#AAA";
// 	// document.getElementById( "bedrijf" ).style.fontStyle = "italic";
// 	// document.getElementById( "tel" ).style.color = "#AAA";
// 	// document.getElementById( "tel" ).style.fontStyle = "italic";
// }

//als er een focus op het veld plaatsvind wis dan de defaultValue als die gelijk is aan de value
function wisText( veld ){
  if( veld.defaultValue == veld.value ){
    veld.value = "";
    veld.style.color = "#000";
    veld.style.fontStyle = "normal";
  }
}

function resetText( veld ){
  if( veld.value == "" ){
    veld.value = veld.defaultValue;
    veld.style.color = "#AAA";
    veld.style.fontStyle = "italic";
  }
}

// de anonieme functie die wordt aangeroepen door het onload event van de pagina
window.onload = function(){

  // als js aanstaat dan...
  //document.getElementById( "formholder" ).style.display = "block";
  //document.getElementById( "jsUit" ).style.visibility = "hidden";;

  // bind de onsubmit en onreset aan het formulier

  document.getElementById( "contactForm" ).onsubmit = valideerForm;

  // document.getElementById( "reset" ).onclick = function(){
  // 	return confirm( "Weet u het zeker?" );
  // };
  //document.getElementById( "contactForm" ).onreset = resetForm;

  // bind de onfocus en onblur events aan de formfields
  document.getElementById( "first-name" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "first-name" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "email" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "email" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "tel" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "tel" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "sub" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "sub" ).onblur = function(){
    resetText( this );
  };
  document.getElementById( "mes" ).onfocus = function(){
    wisText( this );
  };
  document.getElementById( "mes" ).onblur = function(){
    resetText( this );
  };


  // zet de default waardes van de velden neer
  document.getElementById( "first-name" ).defaultValue = "your first name";
  document.getElementById( "last-name" ).defaultValue = "your last name";
  document.getElementById( "email" ).defaultValue = "bv naam@domein.nl";
  document.getElementById( "tel" ).defaultValue = "bv 0612345678";
  document.getElementById( "mes" ).defaultValue = "bv message";
  document.getElementById( "sub" ).defaultValue = "bv subject";


}
