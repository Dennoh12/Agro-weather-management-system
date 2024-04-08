    <style>
      .notification{
        position: relative;
      }
      .notification span{
        position: absolute;
        width: 7px;
        height: 7px;
        background-color: red;
        border-radius: 50%;
        top: 0px;
        left: 50%;
      }
    </style>
    <?php
include ('fsession.php');
ini_set('memory_limit', '-1');

if(!isset($_SESSION['farmer_login_user'])){
header("location: ../index.php");} // Redirecting To Home Page
$query4 = "SELECT * from farmerlogin where email='$user_check'";
              $ses_sq4 = mysqli_query($conn, $query4);
              $row4 = mysqli_fetch_assoc($ses_sq4);
              $para1 = $row4['farmer_id'];
              $para2 = $row4['farmer_name'];
			  
?>

<?php

$display_district_name ="";

$display_district="Select F_District from farmerlogin WHERE email='$user_check'";
$display_district_result=mysqli_query($conn,$display_district);
$display_district_name = mysqli_fetch_array($display_district_result);
$District_name_farmer=$display_district_name[0];


// WeatherApi City_Id Code : 
ini_set('memory_limit', '-1');
$url = 'static/citylist.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$district= json_decode($data); // decode the JSON feed

$district_weather_id=0;

foreach ($district as $district) {
        
    if ($district->name == trim($District_name_farmer)) {
        $district_weather_id=$district->id;
    }
}
if ($district_weather_id <= 0) {
    $district_weather_id = 184745; // Nairobi city ID
}
$city_weather_id=strval($district_weather_id);




date_default_timezone_set("Africa/Nairobi");
$apiKey = "870887df4d2b01335921fe396c69a360"; //Your API KEY 
$cityId = $city_weather_id;


// https://api.openweathermap.org/data/2.5/forecast?id=1275339&lang=en&units=metric&APPID=870887df4d2b01335921fe396c69a360;

$googleApiUrl ="https://api.openweathermap.org/data/2.5/forecast?id=" . $cityId . "&lang=en&units=metric&APPID=" . $apiKey;
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);

curl_close($ch);
$data = json_decode($response);
$currentTime = time();
$forecast = $data->list;


foreach ($forecast as $f) {
    $date = substr($f->dt_txt, 0, 10);
    $time = substr($f->dt_txt, 11);
    $temp_max = $f->main->temp_max;
    $temp_min = $f->main->temp_min;
    $description = $f->weather[0]->main . ', ' . $f->weather[0]->description;
    $humidity = $f->main->humidity;
    $wind_speed = $f->wind->speed;

    // Prepare SQL statement to insert data into your table
    $sql = "INSERT INTO forecast (date, description)
            VALUES ('$date', '$description')";

    mysqli_query($conn, $sql);
}
?>
    <nav
      id="navbar-main"
      class="
        navbar navbar-main navbar-expand-lg
        bg-default
        navbar-light
        position-sticky
        top-0
        shadow
        py-0
      "
    >
      <div class="container-fluid">
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <li class="nav-item dropdown">
            <a href="../index.php" class="navbar-brand mr-lg-5 text-white">
                               <!-- <img src="../assets/img/nav.png" /> -->
                               Agro weather management system
            </a>
          </li>
        </ul>

        <button
          class="navbar-toggler bg-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbar_global"
          aria-controls="navbar_global"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div class="navbar-collapse collapse bg-default" id="navbar_global">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-10 collapse-brand">
                <a href="../index.html">
                  <!-- <img src="../assets/img/nav.png" /> -->
                  Agro weather management system
                </a>
              </div>
              <div class="col-2 collapse-close bg-danger">
                <button
                  type="button"
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar_global"
                  aria-controls="navbar_global"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <li class="nav-item notification">
            <div class="dropdown show ">
               <?php
                $fetch_forecast = "SELECT * FROM forecast WHERE date = (SELECT MAX(date) FROM forecast)";
                $forecast_run = mysqli_query($conn, $fetch_forecast);
                $count = mysqli_num_rows($forecast_run);
                $details = mysqli_fetch_assoc($forecast_run);
                if ($count > 0) {
                 if ($details['view'] != 1) { ?>
                <span></span>
                <?php
                 }
                }?>
              <a class="nav-link dropdown-toggle text-white " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="text-white fas fa-bell"></i></a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#" id="actual-notification">
                <?php
                $fetch_forecast = "SELECT * FROM forecast WHERE date = (SELECT MAX(date) FROM forecast)";
                $forecast_run = mysqli_query($conn, $fetch_forecast);
                $count = mysqli_num_rows($forecast_run);
                $details = mysqli_fetch_assoc($forecast_run);
                if ($count > 0) {
                  if ($details['view'] != 1) {
                    echo "It is expected to have " . $details['description'] . " on " . $details['date'];
                  }
                  else{
                     echo "No notification";
                  }
                }
                else{
                  echo "No notification";
                }?>
              </a>
              </div>
              </div>
            </div>
          </li>
          <ul class="navbar-nav align-items-lg-center ml-auto topnav" id="nav">

		  
	 <li class="nav-item" id="prediction">
			   <div class="dropdown show ">
		  <a class="nav-link dropdown-toggle text-white " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                  <span class="text-white nav-link-inner--text"
                  ><i class="text-white fas fa-magic"></i> Prediction</span>
		  </a>
		   <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
		   <a class="dropdown-item" href="fcrop_prediction.php">Crop Prediction​</a>
		   <a class="dropdown-item" href="fyield_prediction.php">Yield Prediction​</a>
			<a class="dropdown-item" href="frainfall_prediction.php">Rainfall Prediction​</a>
		  </div>
		</div>
			</li>
			
			
			
			 <li class="nav-item" id="recommendation">
			   <div class="dropdown show ">
		  <a class="nav-link dropdown-toggle text-white " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                  <span class="text-white nav-link-inner--text"
                  ><i class="text-white fas fa-gavel"></i> Recommendation</span
                >
		  </a>

		   <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
			<a class="dropdown-item" href="fcrop_recommendation.php">Crop Recommendation​</a>
			<a class="dropdown-item" href="ffertilizer_recommendation.php">Fertilizer Recommendation​</a>
		  </div>
		</div>
			</li>
			

		  
			 <!-- <li class="nav-item" id="trade">
			   <div class="dropdown show ">
		  <a class="nav-link dropdown-toggle text-white " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                  <span class="text-white nav-link-inner--text"
                  ><i class="text-white fas fa-shopping-cart"></i> Trade</span
                >
		  </a>

		   <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
			<a class="dropdown-item" href="ftradecrops.php">Trade Crops​</a>
			<a class="dropdown-item" href="fstock_crop.php">Crop Stocks​</a>
			<a class="dropdown-item" href="fselling_history.php">Selling History​</a>
		  </div>
		</div>
			</li> -->
			

			 
			
						 <li class="nav-item " id="tools">
			   <div class="dropdown show ">
		  <a class="nav-link dropdown-toggle text-white " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                  <span class="text-white nav-link-inner--text"
                  ><i class="text-white fas fa-gear"></i> Tools</span
                >
		  </a>

		   <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
		   <!-- <a class="dropdown-item" href="fchatgpt.php"> <i class="text-dark fad fa-robot"></i>Chat Bot​</a> -->
			<a class="dropdown-item" href="fweather_prediction.php"><i class="text-dark fas fa-cloud"></i> Weather Forecast​</a>
			<a class="dropdown-item" href="fnewsfeed.php"> <i class="text-dark fas fa-newspaper"></i>News Feed​</a>
		  </div>
		</div>
			</li>
			
		
		
		   <li class="nav-item" id="profile">
              <a href="fprofile.php" class="nav-link">
                <span class="text-white nav-link-inner--text font-weight-bold"
                  ><i class="text-white fas fa-user"></i> Profile </span
                >
              </a>
            </li>
			
			
		  
		   <li class="nav-item">
              <a href="flogout.php" class="nav-link">
                <span class="text-white nav-link-inner--text font-weight-bold"
                  ><i class="text-danger fas fa-power-off"></i> Logout </span
                >
              </a>
            </li>



          </ul>
        </div>
      </div>
    </nav>
	
	

<style>
.topnav a {
  border-bottom: 3px solid transparent;
}

.topnav a:hover {
  border-bottom: 3px solid red;
}

.topnav a.activa {
  border-bottom: 3px solid red;
}

</style>
  <script>
$("#nav li a").each(function() {   
    if (this.href == window.location.href) {
        $(this).addClass("activaa");
    }
});
  </script>