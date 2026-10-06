<?php
$host = "localhost";   // XAMPP-da server adı
$user = "root";        // Default istifadəçi
$pass = "";            // Default parol boşdur
$dbname = "003moto";   // phpMyAdmin-də yaratdığın baza adı

// Bağlantı yarat
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Bağlantını yoxla
if (!$conn) {
    die("Bağlantı xətası: " . mysqli_connect_error());
}
?>
