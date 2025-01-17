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
				  <span class=" text-info display-4" > Yield Prediction  </span>	
				  
				  </div>

				  <div class="card-body text-dark">
					 
				<table class="table table-striped table-hover table-bordered bg-gradient-white text-center display" id="myTable">

    <thead>
					<tr class="font-weight-bold text-default">
					<th><center> Country</center></th>
					<th><center>County</center></th>
					<th><center>Season</center></th>
					<th><center>Crop</center></th>
					<th><center>Area</center></th>
					<th><center>Prediction</center></th>
					
					
        </tr>
    </thead>
 <tbody>
                                 <tr class="text-center">

                                   <td>
                                    	<div class="form-group">
										<select  name="state" class="form-control" required>
											<option value="Karnataka">Kenya</option>
										</select>
																				
										</div>
                                    </td>

									<td>
										<div class="form-group ">
										<select id="district" name="district" class="form-control" required>
										  <option value="">Select a district</option>
										  <option value="BAGALKOT">Baringo</option>
										  <option value="BANGALORE_RURAL">Bungoma</option>
										  <option value="BELGAUM">Busia</option>
										  <option value="BELLARY">Bomet</option>
										  <option value="BENGALURU_URBAN">Elgeyo Marakwet</option>
										  <option value="BIDAR">Embu</option>
										  <option value="BIJAPUR">Garissa</option>
										  <option value="CHAMARAJANAGAR">Homa Bay</option>
										  <option value="CHIKBALLAPUR">Isiolo</option>
										  <option value="CHIKMAGALUR">Kwale</option>
										  <option value="CHITRADURGA">Kilifi</option>
										  <option value="DAKSHIN_KANNAD">Kirinyaga</option>
										  <option value="DAVANGERE">Kiambu</option>
										  <option value="DHARWAD">Kajiado</option>
										  <option value="GADAG">Kericho</option>
										  <option value="GULBARGA">Kisumu</option>
										  <option value="HAVERI">Machakos</option>
										  <option value="HASSAN">Makueni</option>
										  <option value="KODAGU">Meru</option>
										  <option value="KOLAR">Migori</option>
										  <option value="KOPPAL">Mombasa</option>
										  <option value="MANDYA">Muranga</option>
										  <option value="MYSORE">Nairobi</option>
										  <option value="RAMANAGARA">Nakuru</option>
										  <option value="RAICHUR">Nandi</option>
										  <option value="SHIMOGA">Nyandarua</option>
										  <option value="TUMKUR">Samburu</option>
										  <option value="UDUPI">Taita Taveta</option>
										  <option value="UTTAR_KANNAD">Uasin Gishu</option>
										  <option value="YADGIR">Vihiga</option>
										</select>

										</div>
                                    </td>
									
									<td>
										<div class="form-group ">
									
													<select name="Season" class="form-control" id="season" required>
													<option value="">Select Season ...</option>
													<option name="Kharif" value="Kharif">Hot and wet</option>
													<option name="Rabi" value="Rabi">Rabi</option>
													<option name="Summer" value="Summer">Summer</option>
													<option name="WholeYear" value="WholeYear">Whole Year</option>
											
													</select>
										</div>

									</td>
									
									<td>
                                    	<div class="form-group" >
										<select id="crop" class="form-control" name="crops" required>
									  <option value="">Select crop</option>
									</select>
											
										</div>
                                    </td>
									<script> 
										document.getElementById("season").addEventListener("change", function() {  
										
										const districtDropdown = document.getElementById('district');
										const seasonDropdown = document.getElementById('season');
										const cropDropdown = document.getElementById('crop');

										console.log(districtDropdown);
										console.log(seasonDropdown);
										console.log(cropDropdown);
										
										const selectedDistrict = districtDropdown.value;
										const selectedSeason = seasonDropdown.value;

										// Clear the current crop options
										cropDropdown.innerHTML = '<option value="">Select crop</option>';
										
										// If both district and season are selected, add the corresponding crop options to the dropdown
										if (selectedDistrict && selectedSeason) {
										const options = cropOptions[selectedDistrict][selectedSeason];
										for (const option of options) {
											const optionElement = document.createElement('option');
											optionElement.value = option; // Set the value to the option text
											optionElement.text = option;
											cropDropdown.appendChild(optionElement);
										}
										}
										
										}); 
										</script>  
									<td>
                                    	<div class="form-group">
											<input type = "number" step=0.01 name="area" placeholder="Area in Hectares" required class="form-control">
											
										</div>
                                    </td>
									
									<td>
                                    <center>
										<div class="form-group ">
											<button type="submit" value="Yield" name="Yield_Predict" class="btn btn-success btn-submit">Predict</button>
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
					
					
					if(isset($_POST['Yield_Predict'])){

					$state=trim($_POST['state']);
					$district=trim($_POST['district']);
					$season=trim($_POST['Season']);
					$crops=trim($_POST['crops']);
					$area=trim($_POST['area']);


					echo "Predicted crop yield (in Kgs) is: ";

					$Jstate=json_encode($state);
					$Jdistrict=json_encode($district);
					$Jseason=json_encode($season);
					$Jcrops=json_encode($crops);
					$Jarea=json_encode($area);

					$command = escapeshellcmd("/Users/HomePC/AppData/Local/Programs/Python/Python38/python.exe ML/yield_prediction/yield_prediction.py $Jstate $Jdistrict $Jseason $Jcrops $Jarea ");
                    $output = passthru($command);
					echo $output*100;	
					
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

