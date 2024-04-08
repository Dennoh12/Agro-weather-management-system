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

<!DOCTYPE html>
<html>
<?php include ('fheader.php');  ?>

  <body class="bg-white" id="top">
  
<?php include ('fnav.php');  ?>

 
  <section class="section section-shaped section-lg">
    <div class="shape shape-style-1 shape-primary">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
<!-- ======================================================================================================================================== -->

<div class="container ">
    
    	 <div class="row">
          <div class="col-md-8 mx-auto text-center">
            <span class="badge badge-danger badge-pill mb-3">Prediction</span>
          </div>
        </div>
		
          <div class="row row-content">
            <div class="col-md-12 mb-3">

				<div class="card text-white bg-gradient-success mb-3">
				<form role="form" action="#" method="post" >  
				  <div class="card-header">
				  <span class=" text-info display-4" > Rainfall Prediction  </span>	
				  
				  </div>

				  <div class="card-body text-dark">
					 
				<table class="table table-striped table-hover table-bordered bg-gradient-white text-center display" id="myTable">

    <thead>
					<tr class="font-weight-bold text-default">
					<th><center>County</center></th>
					<th><center>Month</center></th>
					<th><center>Prediction</center></th>
					
					
        </tr>
    </thead>
 <tbody>
                                 <tr class="text-center">

                                   <td>
                                    	<div class="form-group ">
											    <select id="region-select" name="region" class="form-control" required>
													<option value="">Select County</option>
													<option value="ANDAMAN & NICOBAR ISLANDS">Bomet</option>
													<option value="ARUNACHAL PRADESH">Baringo</option>
													<option value="ASSAM & MEGHALAYA">Bungoma</option>
													<option value="NAGA MANI MIZO TRIPURA">Busia</option>
													<option value="SUB HIMALAYAN WEST BENGAL & SIKKIM">Elgeyo Marakwet</option>
													<option value="GANGETIC WEST BENGAL">Embu</option>
													<option value="ORISSA">Garissa</option>
													<option value="JHARKHAND">Homa Bay</option>
													<option value="BIHAR">Isiolo</option>
													<option value="EAST UTTAR PRADESH">Kwale</option>
													<option value="WEST UTTAR PRADESH">Kilifi</option>
													<option value="UTTARAKHAND">Kirinyaga</option>
													<option value="HARYANA DELHI & CHANDIGARH">Kiambu</option>
													<option value="PUNJAB">Kajiado</option>
													<option value="HIMACHAL PRADESH">Kericho</option>
													<option value="JAMMU & KASHMIR">Kakamega</option>
													<option value="WEST RAJASTHAN">Kisumu</option>
													<option value="EAST RAJASTHAN">Kisii</option>
													<option value="WEST MADHYA PRADESH">Laikipia</option>
													<option value="EAST MADHYA PRADESH">Kitui</option>
													<option value="GUJARAT REGION">Lamu</option>
													<option value="SAURASHTRA & KUTCH">Machakos</option>
													<option value="KONKAN & GOA">Makueni</option>
													<option value="MADHYA MAHARASHTRA">Mandera</option>
													<option value="MATATHWADA">Meru</option>
													<option value="VIDARBHA">Migori</option>
													<option value="CHHATTISGARH">Marsabit</option>
													<option value="COASTAL ANDHRA PRADESH">Mombasa</option>
													<option value="TELANGANA">Muranga</option>
													<option value="RAYALSEEMA">Nairobi</option>
													<option value="TAMIL NADU">Nakuru</option>
													<option value="COASTAL KARNATAKA">Nandi</option>
													<option value="NORTH INTERIOR KARNATAKA">Narok</option>
													<option value="SOUTH INTERIOR KARNATAKA">Nyamira</option>
													<option value="KERALA">Nyandarua</option>
													<option value="LAKSHADWEEP">Nyeri</option>
												</select>
												<!-- <script language="javascript"> print_region("region-select"); </script> -->
										</div>
                                    </td>

									<td>
										<div class="form-group ">
											    <select id="month-select" name="month" class="form-control" required>
													<option value="">Select Month</option>
												</select>
												<script language="javascript"> print_months("month-select"); </script>
										</div>
                                    </td>
									
									<td>
                                    <center>
										<div class="form-group ">
											<button type="submit" value="Yield" name="Rainfall_Predict" class="btn btn-success btn-submit">Predict</button>
										</div>
                                    
                                    </center>
                                    </td>
                                </tr>
                            </tbody>
							
					
	</table>
	</div>
	</form>
</div>

<div class="card text-white bg-gradient-success mb-3">
				  <div class="card-header">
				  <span class=" text-success display-4" > Result  </span>					
				  </div>

					<h4>
					<?php 
					
					
					if(isset($_POST['Rainfall_Predict'])){

					$region=trim($_POST['region']);
					$month=trim($_POST['month']);

					echo "Predicted Rainfall for the Region in the month $month is (in mm) : ";

					$Jregion=json_encode($region);
					$Jmonth=json_encode($month);

					$command = escapeshellcmd("/Users/HomePC/AppData/Local/Programs/Python/Python38/python.exe ML/rainfall_prediction/rainfall_prediction.py $Jregion $Jmonth ");
                    $output = passthru($command);
					echo $output;	
					
					}

                    ?>
					</h4>
            </div>
 
	
	
            </div>
          </div>  
       </div>
		 
</section>

    <?php require("footer.php");?>

</body>
</html>

