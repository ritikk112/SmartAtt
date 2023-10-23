<?php
    $CN = mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "studentrecords");

    $IQ="CREATE TABLE temping ( `name` VARCHAR(128) NOT NULL , `rollnumber` VARCHAR(256) NOT NULL , PRIMARY KEY (`rollnumber`), UNIQUE (`rollnumber`))";

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