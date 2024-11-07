<?php

require_once './config.php';

header('Content-Type: application/json');

// optional amount field
// For testing purpose we generate random amount
$amount = sprintf('%0.2f',rand(1,100));
$params = ['amount' => $amount];

$url = $api_base_url."/api/v1/paymentintent";

$resp = curlCall($url, json_encode($params), $api_key, $secret_key);

$result = json_decode($resp);

$data = [
    'client_token' => $result->client_token,
    'amount' => $amount
];

echo json_encode($data);

function curlCall($url='', $params='', $api_key='', $api_secret='')
{
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST,1);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_HTTPHEADER,array("X-Api-Key: " . $api_key,"X-Api-Secret: " . $api_secret, "User-Agent: JSSDK"));
	curl_setopt($ch, CURLOPT_POSTFIELDS,$params);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$results= curl_exec($ch);
	return $results;
}

