<?php
// charge la librairie Smarty
require('Smarty.class.php');

// le fichier setup.php est un bon
// endroit pour charger les fichiers
// de librairies de l'application et vous pouvez
// faire celà juste ici. Par exemple :
// require('livredor/livredor.lib.php');

class Smarty_livredor extends Smarty {

 function Smarty_setup() {

 // Constructeur de la classe.
 // Appelé automatiquement à l'instanciation de la classe.

 $this->Smarty();

 $this->template_dir = '/tpl/';

 $this->assign('app_name', 'Minnakwaii');
 }

}
?>