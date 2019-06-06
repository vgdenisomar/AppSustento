<?PHP
$hostname="localhost";
$database="bd_prueba";
$username="root";
$passwordd="";
$con = mysqli_connect($hostname,$username,$passwordd,$database);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$email = $obj['email'];
$password = $obj['password'];
$name = $obj['name'];

$sql = "SELECT names FROM usuarios";
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem);
 
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>