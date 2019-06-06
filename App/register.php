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
$name = $obj['name'];

$CheckSQL = "SELECT * FROM usuarios WHERE user='$email'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
if(isset($check)){
 
 $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 
 
 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into usuarios (names,user,pwd) values ('$name','$email','$password')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Data Matched' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 }
 mysqli_close($con);
?>