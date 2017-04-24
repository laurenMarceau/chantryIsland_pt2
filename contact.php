<!doctype html>
<html>
<head>
<meta charset="utf-8" name="viewport" content="width=device-width"/>
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
<title>Chantry Island</title>
<link href="css/foundation.min.css" rel="stylesheet" type="text/css" media="screen">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<link href="css/main.css" rel="stylesheet" type="text/css" media="screen">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7mhRlaavnD0c_4LBngSYEuU8T6V9xmL0&libraries=places"></script>
</head>
<body>

<div id="movingClouds"></div>
<div id="movingCloudsTwo"></div>

<header>
  <?php include 'includes/nav.php'; ?>
</header>

  <div id="siteCon">

    <div class="mapCon">

      <div id="map">
        <div class="preload-wrapper">
          <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
          <p class="loadingMessage">Loading map, please wait <span>.</span><span>.</span><span>.</span></p>
        </div>
      <div class="map-wrapper"></div>
      </div>

      <div id="directionText">
        <h1>Directions</h1>
        <p>
          From Highway 21 in Southampton, turn west on Clarendon and follow the signs, or From High Street, (the main street), turn north on Huron or Grosvenor Street and look for the signs.
        </p>

        <label>Fill in your address here for the route to Chantry Island:</label>
        <input type="text" class="address" placeholder="Address, City, Province">
        <button class="geocode">Find a route!</button>

      </div>
      <div class="stretcher"></div>
    </div>

    <div id="mobileDirections">
    <h1>Directions</h1>
      <p>
      From Highway 21 in Southampton, turn west on Clarendon and follow the signs, or From High Street, (the main street), turn north on Huron or Grosvenor Street and look for the signs.
      </p>
      <input type="text" class="address">
      <button class="geocode">Find a route!</button>
      <div class="stretcher"></div>
    </div>
    <div class="divider mobileOnly"></div>
    <div id="contactInfo">
      <h2>Contact Information</h2>

      <p>Call:</p>
      <a href="tel:519-797-5862">
        519-797-5862
      </a>
      <br>
      <br>
      <p>Toll Free:</p>
      <a href="tel:1-866-767-5862">
        1-866-767-5862
      </a>

      <div id="mailing">
      <h2>Mailing Address</h2>
      <p>
        Marine Heritage Society
        <br>
        Box 421
        <br>
        Southampton, Ontario
        <br>
        Canada, N0H
      </p>
      </div>
    </div>

    <form id="emailField">
      <h2>Contact us</h2>
      <input type="text" id="fname" name="firstname" placeholder="Name" class="field">
      <input type="email" id="lname" name="email" placeholder="E-mail address" class="field">
      <textarea rows="6" cols="50" name="message" placeholder="Enter your message here..." class="field"></textarea>
      <input type="submit" value="SEND" id="submitButton">
    </form>

    <br class="stretcher">



    <div class="divider"></div>

    <?php include 'includes/contact.php'; ?>

    <br class="siteConStretcher"> <!--Clears floats to make the site continue to bottom-->


</div> <!-- End of siteCon-->
<footer>
  <?php include 'includes/footer.php'; ?>
</footer>

<script src="js/vendor/jquery.min.js"></script>
<script src="js/vendor/what-input.min.js"></script>
<script src="js/foundation.min.js"></script>
<script src="js/TweenLite.min.js"></script>
<script src="js/TweenMax.min.js"></script>
<script src="js/ScrollToPlugin.min.js"></script>
<script src="js/main.js"></script>
<script src="js/mobileNav.js"></script>
<script src="js/map.js"></script>
</body>
</html>
