<?php
// Receive form data
$n = $_POST['n'];
$p = $_POST['p'];
$k = $_POST['k'];
$t = $_POST['t'];
$h = $_POST['h'];
$ph = $_POST['ph'];
$r = $_POST['r'];

// Execute Python script with the provided parameters
$command = escapeshellcmd("/Users/HomePC/AppData/Local/Programs/Python/Python38/python.exe  ML/crop_recommendation/recommend.py $n $p $k $t $h $ph $r");
$output = shell_exec($command);

// Return the output
echo $output;