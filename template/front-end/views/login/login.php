<?php

    require_once '../../../../init.php';
    
    // check if user login later, redirect to index page
    if($main -> checkLogin())
        $main -> redirect('../index/index.php');

    
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../assets/css/general/general-css.css">
    <link rel="stylesheet" href="../../assets/css/general/fontAwsome.css">
    <link rel="stylesheet" href="../../assets/css/login/login.css">
    <title>login</title>
</head>

<body>

    <section class="main_field">

        <div class="error_handler warning_error <?php echo $main -> safeGET('msg')?>">
            <i class="fas alert_icon"></i>
            <p></p>
            <i class="fal fa-times remove_error"></i>
        </div>

        <div class="content">
            <img src="../../assets/img/LL00.PNG" alt="">
            <h3><span>LOGIN TO </span>YOUR ACOUNT</h3>
            <p>Financial Management Of Daily Expenses</p>

            <form action="" method="POST" autocomplete="off">
                <div class="input_group">
                    <i class="fal fa-envelope"></i>
                    <input type="text" id="email" name="email" placeholder="email">
                </div>
                <div class="input_group">
                    <i class="fal fa-lock-alt"></i>
                    <input type="password" id="password" name="password" placeholder="password">
                </div>
                <button class="btn login" type="button">LOGIN</button>
                <div class="log_issue">
                    <a href="forget-password">Forget My Password ?</a>
                </div>
            </form>

        </div>
    </section>

    <script src="../../assets/js/general/jquery.js"></script>
    <script src="../../assets/js/custom/error.js"></script>
    <script src="../../assets/js/login/login.js"></script>
</body>

</html>