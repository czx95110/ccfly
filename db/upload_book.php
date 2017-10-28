<?php
header('Content-Type:text/plain');
@$bn=$_REQUEST['bookName'] or die('-2 need book name');
@$ba=$_REQUEST['bookAuthor'] or die('-3 need book author');
@$bt=$_REQUEST['bookTransfer'];
@$bp=$_REQUEST['bookPublish'];
@$bv=$_REQUEST['bookVersion'];

require('connect_db.php');

$sql = "INSERT INTO my_book VALUES(NULL,'$bn','$ba','$bt','$bp','$bv')";
$result= mysqli_query($conn,$sql);
if($result===false){
    echo '-1';
}
echo 'add success The new book id is: ' . mysqli_insert_id($conn);