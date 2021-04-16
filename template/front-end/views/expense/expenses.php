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
    <link rel="stylesheet" href="../../assets/css/expenses/expenses.css">
    <title>login</title>
</head>

<body>

    <div class="error_handler warning_error <?php echo $main -> safeGET('msg')?>">
        <i class="fas alert_icon"></i>
        <p></p>
        <i class="fal fa-times remove_error"></i>
    </div>

    <?php require_once '../layout/dashboard.php'?>

    <section class="main_field">
        <div class="add_expensses_field">
            <h3 class="h3__header">Daily Expenses</h3>
            <small class="h3__small_header">Add new daily expensess</small>

            <form action="" method="POST" autocomplete="off">
                <div class="input_group main">
                    <label for="title">Title</label>
                    <input type="text" id="title">
                </div>
                <div class="input_group main">
                    <label for="spend">Amount spent</label>
                    <input type="text" id="spend">
                </div>
                <div class="input_group main chose__data">
                    <div>
                        <label for="day">Day</label>
                        <input type="text" id="day">
                    </div>
                    /
                    <div>
                        <label for="month">Month</label>
                        <input type="text" id="month">
                    </div>
                    /
                    <div>
                        <label for="year">Year</label>
                        <input type="text" id="year">
                    </div>
                </div>
                <div class="input_group main chose__time">
                    <div>
                        <label for="hour">hour</label>
                        <input type="text" id="hour">
                    </div>
                    :
                    <div>
                        <label for="minute">minute</label>
                        <input type="text" id="minute">
                    </div>
                </div>
                <div class="input_group main">
                    <label for="description">Descriptiom</label>
                    <textarea type="text" id="description"></textarea>
                </div>
                <button class="btn Sub__info" type="button">Submit information</button>
            </form>

        </div>
        <div class="expenses_table"></div>
    </section>

    <script src="../../assets/js/general/jquery.js"></script>
    <script src="../../assets/js/custom/error.js"></script>
    <script src="../../assets/js/expenses/expenses.js"></script>
</body>

</html>