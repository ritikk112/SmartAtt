<?php
    $CN=mysqli_connect("localhost","root","");
    $DB=mysqli_select_db($CN,"studentrecords");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $RollNo=$DecodedData['RollNoo'];
    $StudentName=$DecodedData['StudentNamee'];
    // $Course=$_POST['Coursee'];

    $IQ="insert into temping(name, rollnumber) values('$StudentName', '$RollNo')";

    $R=mysqli_query($CN,$IQ);

    if($R){
        $Message="Attendance Marked!";
    }
    else{
        $Message="Server Error...Please try later";
    }

    $Response[]=array("Message"=>$Message);
    echo json_encode($Response);
?>