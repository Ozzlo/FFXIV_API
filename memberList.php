<?php
/**
 * Created by PhpStorm.
 * User: Julien
 * Date: 13/01/2016
 * Time: 01:23
 */

error_reporting(E_ALL);
ini_set("display_errors", 1);

require 'api-autoloader.php';
use Viion\Lodestone\LodestoneAPI;

$API = new LodestoneAPI();

$FreeCompany = $API->Search->FreeCompany('9234631035923261616', true);

include 'tpl/header.php';

?>
<section class="FC_informations">
    <div class="FC_informations_ressources">
        <img src="src/images/logo_kawaii.png" alt="Logo">
        <ul>
            <li><?= $FreeCompany->name ?></li>
            <li>Member count : <?= $FreeCompany->memberCount ?></li>
            <li>Level : <?= $FreeCompany->ranking['current'] ?></li>
            <li>Ranking of the month : <?= $FreeCompany->ranking['monthly'] ?></li>
        </ul>
    </div>
</section>
<section class="FC_members">
    <h2>Member List</h2>
    <div class="FC_members_all">
        <?php
        $members = $FreeCompany->members;
        foreach ($members as $key):
            ?>
            <div class="FC_one_member">
                <a class="FC_one_member_link" href="character.php?id=<?= $key['id'] ?>">
                    <div class="FC_members_avatar">
                        <img src="<?= $key['avatar'] ?>">
                    </div>
                    <div class="FC_members_info">
                        <p><?= $key['name'] ?></p>
                        <p>Lv : <?= $key['class']['level'] ?></p>
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

<?php include 'tpl/footer.php'; ?>
