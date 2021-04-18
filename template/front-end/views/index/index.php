<?php

    require_once '../../../../init.php';
    
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../assets/css/general/general-css.css">
    <link rel="stylesheet" href="../../assets/css/general/fontAwsome.css">
    <link rel="stylesheet" href="../../assets/css/layout/layout.css">
    <link rel="stylesheet" href="../../assets/css/index/index.css">
    <title>login</title>
</head>

<body>

    <div class="error_handler warning_error <?php echo $main -> safeGET('msg')?>">
        <i class="fas alert_icon"></i>
        <p></p>
        <i class="fal fa-times remove_error"></i>
    </div>

    <?php require_once '../layout/dashboard.php'?>

    <script src="../../assets/js/general/jquery.js"></script>
    <script src="../../assets/js/custom/error.js"></script>
    <script src="../../assets/js/custom/logout.js"></script>
    <script src="../../assets/js/index/index.js"></script>
</body>

</html>