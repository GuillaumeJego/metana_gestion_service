<?php
// Activer l'affichage des erreurs pour le développement
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Connexion à la base de données
$dsn = "mysql:host=localhost;dbname=metana_gestion_finances;charset=utf8mb4";
$dbUser = getenv('DB_USER');
$dbPass = getenv('DB_PASS');

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $dbUser, $dbPass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Ajouter des entêtes CORS
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json');

// Ajouter cette réponse pour les requêtes OPTIONS utilisées par CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Credentials: true');
    header('HTTP/1.1 204 No Content', true, 204);
    exit;
}

// Traiter la requête POST pour ajouter un nouveau client
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Ajouter une validation des données ici si nécessaire

    $stmt = $pdo->prepare("INSERT INTO customers (firstname, lastname, address, mail, phone) VALUES (:firstname, :lastname, :address, :mail, :phone)");
    $stmt->bindParam(':firstname', $data['firstname']);
    $stmt->bindParam(':lastname', $data['lastname']);
    $stmt->bindParam(':address', $data['address']);
    $stmt->bindParam(':mail', $data['mail']);
    $stmt->bindParam(':phone', $data['phone']);

    try {
        $stmt->execute();
        $response = ['message' => 'Client ajouté avec succès', 'client_id' => $pdo->lastInsertId()];
        http_response_code(201); // Created
    } catch (\PDOException $e) {
        $response = ['error' => $e->getMessage()];
        http_response_code(500); // Internal Server Error
    }

    echo json_encode($response);
    exit;
}

// Traiter la requête GET pour récupérer la liste des clients
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query('SELECT * FROM customers ORDER BY lastname');
    $results = $stmt->fetchAll();
    echo json_encode($results);
    exit;
}

// Si la méthode HTTP n'est pas prise en charge
http_response_code(405); // Method Not Allowed
echo json_encode(['error' => 'Method Not Allowed']);
exit;
?>
