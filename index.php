<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require('libs/Smarty.class.php'); 

$smarty = new Smarty();

$smarty->display('tpl/header.tpl');
$smarty->display('tpl/home.tpl');
$smarty->display('tpl/footer.tpl');

?>
