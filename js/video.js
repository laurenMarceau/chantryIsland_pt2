
	var theVideo = document.querySelector("video"); // get the video element
	var theControls = document.querySelector(".controls"); // get the custom controls container
	var currentSource = theVideo.currentSrc; // gets the source of the currently-playing video

		// take the currently-playing video source and get its extension, because if it's playing, we know it's supported and we can use it
		// substr is a built-in JS method - this looks at the last instance of a dot in the string, and grabs that and everything after it (which will be the file extension)
	//var theExt = currentSource.substr(currentSource.lastIndexOf("."));
	//var buttonGroup = document.querySelectorAll(".vidLoader");
	var seekslider = document.getElementById("seekslider");
  var curtimetext = document.getElementById("curtimetext");
  var durtimetext = document.getElementById("durtimetext");
	var volumeslider = document.getElementById("volumeslider");
	var muteVideo = document.querySelector("#volMute");
	var pPlay = document.querySelector("input");

	theControls.classList.remove("hideMe");
	theVideo.controls = false;
	//console.log(theExt);


	function vidSeek() {
	  var seekto = theVideo.duration * (seekslider.value / 100);
	  theVideo.currentTime = seekto;
	}

	function seektimeupdate() {
	  var nt = theVideo.currentTime * (100 / theVideo.duration);
	  seekslider.value = nt;
	  var curmins = Math.floor(theVideo.currentTime / 60);
	  var cursecs = Math.floor(theVideo.currentTime - curmins * 60);
	  var durmins = Math.floor(theVideo.duration / 60);
	  var dursecs = Math.floor(theVideo.duration - durmins * 60);
	  if (cursecs < 10) {
	    cursecs = "0" + cursecs;
	  }
	  if (dursecs < 10) {
	    dursecs = "0" + dursecs;
	  }
	  if (curmins < 10) {
	    curmins = "0" + curmins;
	  }
	  if (durmins < 10) {
	    durmins = "0" + durmins;
	  }
	  curtimetext.innerHTML = curmins + ":" + cursecs;
	  durtimetext.innerHTML = durmins + ":" + dursecs;
	}

	function setvolume() {
  theVideo.volume = volumeslider.value / 100;
}

	function muteVid() {
		if (theVideo.muted) {
    theVideo.muted = false;
    muteVideo.src = "images/mute.png";
  } else {
    theVideo.muted = true;
    muteVideo.src = "images/vol.png";
  }
	}

	function pausePlay() {
		if (theVideo.paused) {
			theVideo.play();
			pPlay.src = "images/pause.png";
		} else {
			theVideo.pause();
			pPlay.src = "images/play.png";
		}
	}

	function bringBack() {
			theControls.style.opacity = "1";
			TweenLite.to(theControls, .1, {delay:0, opacity:1,repeat: 0});

			TweenLite.to(theControls, .5, {delay:3, opacity:0,repeat: 0});

		}

	seekslider.addEventListener("change", vidSeek, false);
  theVideo.addEventListener("timeupdate", seektimeupdate, false);
	volumeslider.addEventListener("input", setvolume, false);
	muteVideo.addEventListener("click", muteVid, false);
	pPlay.addEventListener("click", pausePlay, false);
	theVideo.addEventListener("mouseover", bringBack, false);
	theVideo.addEventListener("mousemove", bringBack, false);
