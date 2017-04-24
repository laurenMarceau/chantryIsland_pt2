(function() {

  var screenPOS,
      content,
      windowHeight = window.innerHeight,
      nav = document.querySelector('#navCon'),
      navDrop = document.querySelector('#dropDown'),
      siteCon = document.querySelector('#siteCon');


//checks page width initially
  var windowWidth = window.innerWidth;
  if (windowWidth < 959) {
    window.addEventListener("scroll", shrinkHeader, false);
    }else{
      window.removeEventListener("scroll",shrinkHeader,false);
    }


//checks page width on resize
  $(window).on("resize", resizeNav);

  function resizeNav( e ) {
    var windowWidth = window.innerWidth;

    if (windowWidth < 959) {
      window.addEventListener("scroll", shrinkHeader, false);
      }else{
        window.removeEventListener("scroll",shrinkHeader,false);

      }
  }


//changes nav sizing
  function shrinkHeader () {
  	screenPOS = window.scrollY;

    if (screenPOS>1) {
      nav.style.height = "17vh";
      navDrop.style.height = "84vh";
  	}else{
      nav.style.height = "30vh";
      navDrop.style.height = "74vh";
    }
  }

})();
