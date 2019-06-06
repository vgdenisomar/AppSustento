<?PHP
$hostname="localhost";
$database="bd_prueba";
$username="root";
$passwordd="";
$con = mysqli_connect($hostName,$username,$passwordd,$database);
 
$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$email = $obj['email'];

$password = $obj['password'];

$Sql_Query = "SELECT * from usuarios where user = '{$email}' AND pwd = '{$password}' ";

$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));


if(isset($check)){

$SuccessLoginMsg = 'Data Matched';

$SuccessLoginJson = json_encode($SuccessLoginMsg);

echo $SuccessLoginJson ; 

}

else{

$InvalidMSG = 'Invalid Username or Password Please Try Again' ;

$InvalidMSGJSon = json_encode($InvalidMSG);

echo $InvalidMSGJSon ;

}

mysqli_close($con);

?>