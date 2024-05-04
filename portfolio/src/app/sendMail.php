<?php

// CORS-Konfiguration: Erlaube POST-Anfragen von der spezifischen Angular-Anwendungsdomäne
header("Access-Control-Allow-Origin: http://verenaschranz.de");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Überprüfe den Typ der Anfrage (OPTIONS für Preflight-Requests und POST für echte Anfragen)
switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS':
        // Erlaube Preflight-Requests
        header('HTTP/1.1 200 OK');
        exit();
    case 'POST':
        // Lese den JSON-Payload aus dem Request-Body
        $json = file_get_contents('php://input');
        // Dekodiere den JSON-Payload in ein PHP-Objekt
        $params = json_decode($json);

        // Überprüfe, ob der JSON-Payload gültig ist
        if (!$params) {
            header('HTTP/1.1 400 Bad Request');
            echo json_encode(['error' => 'Invalid JSON payload']);
            exit();
        }

        // Extrahiere Daten aus dem Payload
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        // E-Mail-Empfänger und Betreff
        $recipient = 'info@verenaschranz.de';
        $subject = "Contact Form <$email>";
        // Formatiere den E-Mail-Inhalt
        $body = "From: $name <br><br> $message";
        // E-Mail-Header
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            "From: noreply@verenaschranz.de"
        ];

        // Sende die E-Mail und überprüfe den Erfolg
        if (mail($recipient, $subject, $body, implode("\r\n", $headers))) {
            echo json_encode(['success' => true]);
        } else {
            // Bei einem Fehler den entsprechenden HTTP-Status und Fehlermeldung zurückgeben
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => 'Failed to send email']);
        }
        break;
    default:
        // Bei nicht erlaubten Methoden einen Fehler zurückgeben
        header("HTTP/1.1 405 Method Not Allowed");
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}
