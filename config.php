<?php
// Sample configuration for create.php.
//
// Never hard-code your API key and secret in source control. Set them as
// environment variables on the server that runs this sample:
//
//   LYFEPAY_API_KEY     your x-apikey
//   LYFEPAY_API_SECRET  your x-apisecret
//   LYFEPAY_API_URL     https://sandbox-api.sandbox-lyfepay.io (sandbox, default)
//                       https://api.lyfepay.io                 (production)

$api_key = getenv('LYFEPAY_API_KEY') ?: '';
$secret_key = getenv('LYFEPAY_API_SECRET') ?: '';
$api_base_url = getenv('LYFEPAY_API_URL') ?: 'https://sandbox-api.sandbox-lyfepay.io';

if ($api_key === '' || $secret_key === '') {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['message' => 'Set LYFEPAY_API_KEY and LYFEPAY_API_SECRET']);
    exit;
}
