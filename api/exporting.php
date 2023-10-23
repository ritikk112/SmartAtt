<?php
    $CN = mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "studentrecords");

    $SQ="select * from temping";

    $Table=mysqli_query($CN,$SQ);

    if(mysqli_num_rows($Table)>0){
        // (B) CREATE EMPTY CSV FILE ON SERVER
	$handle = fopen("export.csv", "w");
	if ($handle === false) { exit("Error creating $csvFile"); }
	 
	// (C) GET USERS FROM DATABASE + WRITE TO FILE
	$stmt = $pdo->prepare("SELECT * FROM `temping`");
	$stmt->execute();
	while ($row = $stmt->fetch()) { fputcsv($handle, $row); }
	fclose($handle);
	echo "DONE!";
    }
    $IQ="DROP TABLE temping";
    
    $R=mysqli_query($CN,$IQ);

    if($R){
        $Message="Succesful";
    }
    else{
        $Message="Server Error...Please try later";
    }

    $Response[]=array("Message"=>$Message);
    echo json_encode($Response); 
exit; 
?>
