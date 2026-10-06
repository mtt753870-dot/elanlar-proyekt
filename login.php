<?php include("db.php"); ?>
<?php
// Bazaya qoşulma faylını daxil edirik
include("db.php");

if (isset($_POST['login'])) {
    $u = $_POST['username'];
    $p = $_POST['password'];

    // İstifadəçini bazadan yoxlayırıq
    $sql = "SELECT * FROM users WHERE username='$u' AND password='$p'";
    $res = mysqli_query($conn, $sql);

    if ($res && mysqli_num_rows($res) > 0) {
        echo "Uğurla daxil oldun!";
    } else {
        echo "İstifadəçi adı və ya şifrə səhvdir.";
    }
}
?>

<h2>Login</h2>
<form method="post">
  <input type="text" name="username" placeholder="İstifadəçi adı"><br>
  <input type="password" name="password" placeholder="Şifrə"><br>
  <button type="submit" name="login">Daxil ol</button>
</form>
