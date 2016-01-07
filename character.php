<?php
$start = microtime(true);
//show("Memory: ". cMem(memory_get_usage()) .' - start');

// debug function
function show($data) { echo '<pre>'. print_r($data, true) .'</pre>'; }
function cMem($size) { $tmp = array('b','kb','mb','gb','tb','pb'); return @round($size/pow(1024,($i=floor(log($size,1024)))),2).' '.$tmp[$i]; }

// require auto loader
//require 'vendor/autoload.php';
//show("Memory: ". cMem(memory_get_usage()) .' - before autoloader');
require 'api-autoloader.php';
use Viion\Lodestone\LodestoneAPI;
//show("Memory: ". cMem(memory_get_usage()) .' - after autoloader');

// new API
$api = new LodestoneAPI();
//show("Memory: ". cMem(memory_get_usage()) .' - after new api instance');



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
else
{
	// show($data->dump());
	// show($data->getGearBonus());
}

if (isset($_GET['id']) == NULL)
{
    header('Location: ./');   
}

/*echo "<pre>";
var_dump($data);
echo "</pre>";*/

?>

<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?= $data->name ?></title>
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
	<h1 class="col-md-12 text-center">
		<?= $data->name ?>
	</h1>

	<div class="avatar center-block">
		<img src="<?= $data->avatar . '?' . time() ?>">
	</div>
	<section class="info text-center">
		<p>Date of birth : <?= $data->nameday ?></p>
		<p>Guardian : <img src="<?= $data->guardianIcon ?>"><?= $data->guardian ?></p>
	</section>
	<section class="company">
		<div class="grandCompany text-center">
			<h2>Grand Company</h2>
			<ul>
				<li><?php echo $data->grandCompany ?></li>
				<li>
					<img src="<?= $data->grandCompanyIcon ?>">
					 - 
					<?= $data->grandCompanyRank ?>
				</li>
			</ul>
		</div>

		<div class="freeCompany">
			<h2>Free Company</h2>
			<p class="text-center"><?= $data->freeCompany ?></p>
			<img src="src/images/logo_kawaii.png" alt="logo">
		</div>
	</section>

	<section class="character">

		<div class="character_stuff">
			<h2>Stuff</h2>
			<div class="gear">
				<?php
					$gear = $data->gear;
					foreach ($gear as $item) {

					// var_dump($item);
				?>
					<img class="gear_item" src="<?= $item['icon'] ?>" data-gear-id="<?= $item['id'] ?>">
				<?php } ?>

				<div class="gear_hover">
					<?php
						$gear = $data->gear;
						foreach ($gear as $item) {
					?>
							<div class="thumbnail" data-gear-id="<?= $item['id'] ?>">
								<div class="caption">
									<h3><?= $item['name'] ?></h3>
									<img src="<?= $item['icon'] ?>">
									<p>Gear lv : <?= $item['gearlevel'] ?></p>
									<p>iLvl : <?= $item['ilv'] ?></p>
									<p>Bonuses : </p>
									<ul>
										<?php foreach ($item['bonuses'] as $bonus): ?>
										<li>+<?= $bonus['value'] ?> - <?= $bonus['type'] ?></li>
										<?php endforeach;	 ?>
									</ul>
								</div>
							</div>
					<?php } ?>
				</div>
			</div>
		</div>

		<div class="character_portrait">
			<img src="<?= $data->portrait . '?' . time() ?>">
		</div>
	</section>

	<section class="jobs text-center">
		<h2>Jobs</h2>
		<h3>Class : <?= $data->activeClass ?></h3>
		<h3>
			Job : 
			<?php
				if ($data->activeJob == NULL) {
					echo "None";
				}else{
					echo $data->activeJob;
				}
			?>
		</h3>
		<?php
			$classjobs = $data->classjobs;
			foreach ($classjobs as $key) {
		?>
			<div class="jobs_info">
				<div class="jobs_image">
					<img src="<?= $key['icon'] ?>">
				</div>
				<p class="text-center"><?= $key['level'] ?></p>
			</div>
		<?php
			}
		?>
	</section>
	<section class="stats text-center">
		<h2>Stats</h2>
		<?php
			$stats = $data->attributes;
		?>
			<p>HP : <?= $stats['hp'] ?></p>
			<p>MP : <?= $stats['mp'] ?></p>
			<p>TP : <?= $stats['tp'] ?></p>
	</section>
	<section class="minion text-center">
		<h2>Minions</h2>

		<ul class="minion_item">
			<?php 
			$minions = $data->minions;
			foreach ($minions as $mascotte): 
			?>

			<li>
				<img src="<?= $mascotte['icon'] ?>">
				<p><?= $mascotte['name'] ?></p>
			</li>
			<?php endforeach;	 ?>
		</ul>
	</section>

	<section class="mounts text-center">
		<h2>Mounts</h2>

		<ul class="mounts_item">
			<?php 
			$mounts = $data->mounts;
			foreach ($mounts as $monture): 
			?>

			<li>
				<img src="<?= $monture['icon'] ?>">
				<p><?= $monture['name'] ?></p>
			</li>
			<?php endforeach;	 ?>
		</ul>
	</section>
</div>

<script src="src/js/app.js"></script>
</body>
</html>