<?php
// Activer l'affichage des erreurs pour le développement
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Connexion à la base de données
$host = '127.0.0.1';
$db   = 'metana_gestion_finances';
$user = 'root'; // Remplacez par votre nom d'utilisateur pour MySQL
$pass = 'Metana22++'; // Remplacez par votre mot de passe pour MySQL
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Exemple de récupération de données
header("Content-Type: application/json");
$stmt = $pdo->query('SELECT * FROM customers');
$results = $stmt->fetchAll();

echo json_encode($results);
?>

