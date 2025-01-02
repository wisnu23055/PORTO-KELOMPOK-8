<?php
// Koneksi ke database
$host = 'localhost';
$username = 'root'; // default XAMPP username
$password = ''; // default XAMPP password
$dbname = 'web_komentar';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    // Ambil data dari form
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $saran = $_POST['saran'];

    // Query untuk menyimpan data
    $sql = "INSERT INTO saran (nama, email, saran) VALUES ('$nama', '$email', '$saran')";

    if ($conn->query($sql) === TRUE) {
        echo "Saran atau komentar berhasil dikirim!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
