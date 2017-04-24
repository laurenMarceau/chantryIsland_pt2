<?php
 include ('config.php');

 $mysqli = new mysqli($connect['mysql_server'], $connect['mysql_user'], $connect['mysql_password'], $connect['mysql_db']);
	if ($mysqli->connect_errno) {
		printf("Connection failed: %s \n", $mysqli->connect_error);
		exit();
	}

	$mysqli->set_charset("utf8");

	$month = $_GET["time"];

	$myQuery = "SELECT * FROM tbl_schedules WHERE schedule_id='$month'";



	$result = mysqli_query($mysqli, $myQuery);

	//echo mysqli_num_rows($result);
	echo json_encode(mysqli_fetch_assoc($result));

 ?>
