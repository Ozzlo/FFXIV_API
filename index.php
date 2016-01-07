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

<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?= $FreeCompany->name ?></title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

	<link rel="stylesheet" type="text/css" href="src/styles/stylesheets/styles.css" >
</head>	
<body>

<div class="content">
	<section class="FC_logo">
		<img src="src/images/logo_kawaii.png" alt="logo">
	</section>
<!-- 	<section class="FC_focus">
			<?php 
				$focus = $FreeCompany->focus;
				foreach ($focus as $key):
			?>
			<li><img src="<?= $key['icon'] ?>"></li>
		<?php endforeach; ?>
	</section> -->
	<section class="FC">
		<h1 class="text-center"><?= $FreeCompany->name ?></h1>
		<i class="text-center"><?= $FreeCompany->slogan ?></i>
		<p class="text-center">Recruitment : <?= $FreeCompany->recruitment ?></p>
		<p class="text-center">Members : <?= $FreeCompany->memberCount ?></p>
		<div class="FC_members">
			<?php 
			$members = $FreeCompany->members;
			foreach ($members as $key):
			?>
			<div class="FC_one_member text-center">
				<a href="character.php?id=<?= $key['id'] ?>">
					<div class="FC_members_avatar">
						<img src="<?= $key['avatar'] . '?' . time() ?>">
					</div> 
					<div class="FC_members_info">
						<p>
							<?= $key['name'] ?>
						</p>
						<p>
							<img src="<?= $key['rank']['icon'] ?>"> 
							<?= $key['rank']['title'] ?>
						</p>
					</div>
				</a>
			</div>
			<?php endforeach; ?>
		</div>
	</section>
</div>

<script src="src/js/app.js"></script>
</body>
</html>