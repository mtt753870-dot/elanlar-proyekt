<?php include("db.php"); ?>
<h2>Qeydiyyat</h2>
<form method="post">
  <input type="text" name="username" placeholder="İstifadəçi adı"><br>
  <input type="password" name="password" placeholder="Şifrə"><br>
  <button type="submit" name="register">Qeydiyyat</button>
</form>

<?php
if (isset($_POST['register'])) {
    $u = $_POST['username'];
    $p = $_POST['password'];
    $sql = "INSERT INTO users (username, password) VALUES ('$u','$p')";
    if (mysqli_query($conn, $sql)) {
        echo "Qeydiyyat uğurlu!";
    } else {
        echo "Xəta: " . mysqli_error($conn);
    }
}
?>
