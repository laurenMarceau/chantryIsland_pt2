// JavaScript Document

// JavaScript Document PHP Test

(function() {

  var months = document.querySelectorAll ('.month'),
      base = document.querySelector ('#baseTime'),
      tour = document.querySelector ('#tourTime');

	[].forEach.call(months, function(selectedMonth) {
	selectedMonth.addEventListener('click', changeTimes, false);});

	function changeTimes() {

		[].forEach.call(months, function(allMonths) {
			allMonths.classList.remove("current");
		});

    var monthClicked = this.id;

    this.classList.add("current");
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      return false;
    }
    httpRequest.onreadystatechange = infoChange;
    httpRequest.open('GET', 'includes/getSchedule.php' + '?time=' + monthClicked);
    httpRequest.send();
	}

  function infoChange() {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      //parse stringified result
      var scheduleInfo = JSON.parse(httpRequest.responseText);
      tour.innerHTML = scheduleInfo.schedule_tourTime;
      base.innerHTML = scheduleInfo.schedule_tourBase;
/*      mainImg.src = "images/" + imgData.gallery_photo + '.jpg';
      desc.innerHTML = imgData.gallery_desc;
      cred.innerHTML = imgData.gallery_credit;
      */
    }
  }

})();
