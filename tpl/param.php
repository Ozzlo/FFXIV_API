<?php
	// FREE COMPAGNY
	error_reporting(E_ALL);
	ini_set("display_errors", 1);

	require 'api-autoloader.php';
	use Viion\Lodestone\LodestoneAPI;

	$api = new LodestoneAPI();

	$FreeCompany = $api->Search->FreeCompany('9234631035923261616', true);

	/*echo "<pre>";
	var_dump($FreeCompany);
	echo "</pre>";*/

	// CHARACTER
	$start = microtime(true);

	// debug function
	function show($data) { echo '<pre>'. print_r($data, true) .'</pre>'; }
	function cMem($size) { $tmp = array('b','kb','mb','gb','tb','pb'); return @round($size/pow(1024,($i=floor(log($size,1024)))),2).' '.$tmp[$i]; }

	require 'api-autoloader.php';

	# -------------------------------

	if (isset($_GET['basic']))
	{
	    $api->useBasicParsing();
	}

	if (isset($_GET['id']))
	{
	    $id = $_GET['id'];
	}

	$data = $api->Search->Character($id);
	if ($api->Search->isMaintenance())
	{
		show('Lodestone is under maintenance');
	}

	if (isset($_GET['id']) == NULL)
	{
	    header('Location: ./');   
	}

	/*echo "<pre>";
	var_dump($data);
	echo "</pre>";*/
?>