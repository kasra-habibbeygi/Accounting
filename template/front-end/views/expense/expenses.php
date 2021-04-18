<?php

    require_once '../../../../init.php';

    $expenses_result = $main -> expenses_select('select-row');

    // if(isset($_GET['del-row'])){

        print_r($main -> expenses_delete('single')) ;

    // }

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
            <h3 class="h3__header">Add Expenses</h3>
            <small class="h3__small_header">Add new daily expensess</small>

            <form action="" method="POST" autocomplete="off">
                <div class="input_group main">
                    <label for="title">Title</label>
                    <input type="text" id="title">
                </div>
                <div class="input_group main checkbox_field">
                    <div>
                        <input class="inp-cbx" id="CB__1" type="radio" style="display: none" name="action_type">
                        <label class="cbx" for="CB__1">
                            <span>
                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            <span>Expense</span>
                        </label>
                    </div>
                    <div>
                        <input class="inp-cbx" id="CB__2" type="radio" style="display: none" name="action_type">
                        <label class="cbx" for="CB__2">
                            <span>
                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            <span>Income</span>
                        </label>
                    </div>
                </div>
                <div class="input_group main">
                    <label for="spend">Spend amount</label>
                    <input type="text" id="spend">
                </div>
                <div class="input_group main chose__data">
                    <div>
                        <label for="year">Year</label>
                        <input type="text" id="year">

                    </div>
                    /
                    <div>
                        <label for="month">Month</label>
                        <input type="text" id="month">
                    </div>
                    /
                    <div>
                        <label for="day">Day</label>
                        <input type="text" id="day">
                    </div>
                </div>
                <div class="input_group main chose__time">
                    <div>
                        <label for="hour">Hour</label>
                        <input type="text" id="hour">
                    </div>
                    :
                    <div>
                        <label for="minute">Minute</label>
                        <input type="text" id="minute">
                    </div>
                </div>
                <div class="input_group main">
                    <label for="description">Descriptiom <span class="optional_text">(Optional)</span></label>
                    <textarea type="text" id="description"></textarea>
                </div>
                <button class="btn Sub__info" type="button">Submit information</button>
            </form>

        </div>
        <div class="expenses_table">
            <h3 class="h3__header">Daily Expenses Table</h3>
            <small class="h3__small_header">You can see all your expenses in the table below</small>

            <?php
                $is_exist = mysqli_fetch_assoc($expenses_result);
                if($is_exist == NULL){
                    ?>
                        <div class="empty_table">
                            No items to display !
                        </div>
                    <?php
                }else{
                    ?>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>
                                        <div>
                                            <input class="inp-cbx" id="CB_all" type="checkbox" style="display: none"
                                                name="action_type">
                                            <label class="cbx CB__no__label" for="CB_all">
                                                <span>
                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </th>
                                    <th>Titile</th>
                                    <th>Spend Amount</th>
                                    <th>Data</th>
                                    <th>Time</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    mysqli_data_seek($expenses_result , 0);
                                    while($rows = $main -> getRow($expenses_result)){
                                        ?>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <input class="inp-cbx" id="<?php echo $rows['id']?>" type="checkbox" style="display: none"
                                                            name="action_type">
                                                        <label class="cbx CB__no__label" for="<?php echo $rows['id']?>">
                                                            <span>
                                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                </svg>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="text_limited TLW_150">
                                                        <?php echo $rows['title']?>
                                                    </div>
                                                </td>
                                                <td class="<?php echo $rows['action_type'] == 0 ? 'Negative' : 'Positive'?>">
                                                    <?php echo $rows['action_type'] == 0 ? '-' : '+'?> 
                                                    <?php echo number_format($rows['spend'])?> T
                                                </td>
                                                <td><?php echo $rows['date']?></td>
                                                <td>
                                                    <?php 
                                                        $time_arr = explode(':' , $rows['time']);
                                                        unset($time_arr[2]);
                                                        echo implode(':' , $time_arr);
                                                    ?>
                                                </td>
                                                <td>
                                                    <div class="option_group" data-id="<?php echo $rows['id']?>">
                                                        <button class="more_detail"><i class="fal fa-info"></i></button>
                                                        <button><i class="fal fa-pencil-alt"></i></button>
                                                        <button class="delete_row"><i class="fal fa-trash-alt"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        <?php
                                    }                    
                                ?>
                            </tbody>
                        </table>
                    <?php
                }
            ?>

        </div>
    </section>

    <!-- more information modal -->
    <div class="MIM">
        <div class="modal_main_field">
            <div class="content">
            
                <h3 class="h3__header">More information</h3>
                <small class="h3__small_header">You can see all the information recorded in the selected row</small>
                <hr>

            </div>
        </div>
    </div>

    <!-- delete modal -->
    <div class="DRM">
        <div class="delete_main_field">
            <div class="content">
                
                <p>Are you sure you want to delete this row?</p>
                <div class="D_btn_group">
                    <a>Delete</a>
                    <button type="button" class="close_delete_modal">Cancel</button>
                </div>

            </div>
        </div>
    </div>    

    <script src="../../assets/js/general/jquery.js"></script>
    <script src="../../assets/js/custom/error.js"></script>
    <script src="../../assets/js/custom/logout.js"></script>
    <script src="../../assets/js/expenses/expenses.js"></script>
</body>

</html>