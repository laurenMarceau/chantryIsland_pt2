// JavaScript Document

// JavaScript Document PHP Test

(function() {

  var aboutHeading = document.querySelector('#aboutChantry h1'),
      aboutText = document.querySelector('#aboutChantry p');

    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      return false;
    }
    httpRequest.onreadystatechange = infoText;
    httpRequest.open('GET', 'includes/getText.php' + '?id=' + '3');
    httpRequest.send();

  function infoText() {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {

      //parse stringified result
      var aboutText = JSON.parse(httpRequest.responseText);
      aboutHeading.innerHTML = aboutText.content_heading;
      aboutText.innerHTML = aboutText.content_article;
    }
  }

})();

(function() {
  var lightHouseHeading = document.querySelector('#lightHouseHistory h2'),
      lightHouseText = document.querySelector('#lightHouseHistory p');

      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        return false;
      }
      httpRequest.onreadystatechange = infoText;
      httpRequest.open('GET', 'includes/getText.php' + '?id=' + '10');
      httpRequest.send();

    function infoText() {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {

        //parse stringified result
        var lighthText = JSON.parse(httpRequest.responseText);
        lightHouseHeading.innerHTML = lighthText.content_heading;
        lightHouseText.innerHTML = lighthText.content_article;
      }
    }

})();

(function() {
  var birdHeading = document.querySelector('#BirdSanc h2'),
      birdText = document.querySelector('#BirdSanc p');

      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        return false;
      }
      httpRequest.onreadystatechange = infoText;
      httpRequest.open('GET', 'includes/getText.php' + '?id=' + '4');
      httpRequest.send();

    function infoText() {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {

        //parse stringified result
        var textBird = JSON.parse(httpRequest.responseText);
        birdHeading.innerHTML = textBird.content_heading;
        birdText.innerHTML = textBird.content_article;
      }
    }
})();

(function() {
  var beforeHeading = document.querySelector('#BeforeRestoration h2'),
      beforeText = document.querySelector('#BeforeRestoration p');

      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        return false;
      }
      httpRequest.onreadystatechange = infoText;
      httpRequest.open('GET', 'includes/getText.php' + '?id=' + '5');
      httpRequest.send();

    function infoText() {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {

        //parse stringified result
        var textBefore = JSON.parse(httpRequest.responseText);
        beforeHeading.innerHTML = textBefore.content_heading;
        beforeText.innerHTML = textBefore.content_article;
      }
    }
})();

(function() {
  var lightKeeperHeading = document.querySelector('#lightKeeperCottage h2'),
      lightKeeperText = document.querySelector('#lightKeeperCottage p');

      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        return false;
      }
      httpRequest.onreadystatechange = infoText;
      httpRequest.open('GET', 'includes/getText.php' + '?id=' + '11');
      httpRequest.send();

    function infoText() {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {

        //parse stringified result
        var keepersText = JSON.parse(httpRequest.responseText);
        lightKeeperHeading.innerHTML = keepersText.content_heading;
        lightKeeperText.innerHTML = keepersText.content_article;
      }
    }
})();
