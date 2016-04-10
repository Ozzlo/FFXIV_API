<?php include 'header.php'; ?>

<section class="presentation">
	<img src="src/images/logo_kawaii.png" alt="logo">
	<p>KAWAII</p>
	<i><?= $FreeCompany->slogan ?></i>
</section>

<section class="description">
	<p>Kawaii is a free company in Cerberus server that plays for fun and good mood !<br/>
	We are not looking for hardcore gamer, but people with a good mentality.<br/>
	We are all from different horizon.</p>

	<p>Our motto is to help our comrades in need.<br/>
	We are active, doing events often.<br/>
	The stronger helps lower to become their equal.</p>

	<p>Come join us if you want to live a great adventure !</p>
</section>

<section class="executive">
	<h2>EXECUTIVE</h2>
	<ul>
		<?php
		$members = $FreeCompany->members;
		for ($i=0; $i <= 2 ; $i++):
		?>
		<li>
			<a href="character.php?id=<?= $members[$i]['id'] ?>">
				<img src="<?= $members[$i]['avatar'] ?>" alt="avatar">
				<p><?= ucfirst ( $members[$i]['name'] )?></p>
				<p><img src="<?= $members[$i]['rank']['icon'] ?>" alt="logo_grade"> <?= ucfirst ( $members[$i]['rank']['title'] ) ?></p>
			</a>
		</li>
		<?php endfor;?>
	</ul>
</section>

<section class="info">
	<p>We are currently <?=	$FreeCompany->memberCount; ?> members.<br/>
	We are hiring !</p>
</section>

<?php include 'footer.php'; ?>