<?php
	error_reporting(E_ALL);
	ini_set("display_errors", 1);

	require 'api-autoloader.php';
	use Viion\Lodestone\LodestoneAPI;

	$API = new LodestoneAPI();

	$FreeCompany = $API->Search->FreeCompany('9234631035923261616', true);

	/*echo "<pre>";
	var_dump($FreeCompany);
	echo "</pre>";*/
?>