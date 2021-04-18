<?php

    require_once '../../../../init.php';

    $CW = $main -> safePOST('CW');

    if($CW == 'AE'){

        $title = $main -> safePOST('title');
        $spend = $main -> safePOST('spend');
        $year = $main -> safePOST('year');
        $month = $main -> safePOST('month');
        $day = $main -> safePOST('day');
        $hour = $main -> safePOST('hour');
        $minute = $main -> safePOST('minute');
        $description = $main -> safePOST('description');
        $action_type = (int)$main -> safePOST('action-type');

        // check invalid number
        $C_spend =  $main -> numericInput($spend , 'float') == NULL ? 'invalid_num' : $spend ; 
        $C_year =  $main -> numericInput($year , 'int') == NULL ? 'invalid_num' : $year ; 
        $C_month =  $main -> numericInput($month , 'int') == NULL ? 'invalid_num' : $month ; 
        $C_day =  $main -> numericInput($day , 'int') == NULL ? 'invalid_num' : $day ; 
        $C_minute =  $main -> numericInput($minute , 'int') == NULL ? 'invalid_num' : $minute ; 
        $C_hour =  $main -> numericInput($hour , 'int') == NULL ? 'invalid_num' : $hour ; 

        // form validation
        if($title == '' || $spend == '' || $year == '' || $month == '' || $day == '' || $hour == '' || $minute == '' || $action_type == 2)
            echo 'empty-input';
        
        else if(strlen($title) >= 60)
            echo 'invalid-title-len';

        else if($spend < 0 || $year < 0 || $month < 0 || $day < 0 || $minute < 0 || $hour < 0)
            echo 'negetive-num';

        else if(strlen($spend) > 12)
            echo 'invalid-spend-len';

        else if($C_spend == 'invalid_num' || $C_year == 'invalid_num' || $C_month == 'invalid_num' || $C_day == 'invalid_num' || $C_hour == 'invalid_num' || $C_minute == 'invalid_num')
            echo 'NAN';
            
        else if ($month > '12' & $day > '31')
            echo 'invalid-date';
            
        else if(strlen($year) < 4 || strlen($year) > 4)
            echo 'invalid-date-len';

        else if($minute < 0 || $hour < 0 || $minute > 60 || $hour > 24)
            echo 'invalid-time';

        else if(strlen($description) >= 1000)
            echo 'invalid-des';

        else{

            // insert expenses
            $user_id = $_SESSION['user_login'];
            $date = $year . '-' . $month . '-' . $day;
            $time = $hour . ':' . $minute; 
            $I_Q = "INSERT INTO `expenses` VALUES ('NULL' , '$user_id' , '$title' , '$action_type' , '$spend' , '$date' , '$time' , '$description')";
            $I_result = $main -> query($I_Q);
            
            // update user wallet balance
            if($I_result > 0){

                $user_info = $main ->user_info();
                $user_id = $user_info['id'];
                
                if($action_type == 0)
                    $update_balance = $user_info['wallet_balance'] - $spend;

                else if($action_type == 1)
                    $update_balance = $user_info['wallet_balance'] + $spend;

                $U_B_Q = "UPDATE `users` SET wallet_balance = '$update_balance' WHERE id = '$user_id'";
                $U_result = $main -> query($U_B_Q);
                echo 'insert-success';
                
            }
            
            else    
                echo 'insert-denied';   

        }

    // select expenses row and response to js for show details
    }else if($CW = 'MI'){

        $data_id = (int)$main -> safePOST('data-id');

        $MI_select = "SELECT * FROM `expenses` WHERE id = '$data_id'";
        $MIS_send = $main -> query($MI_select);
        $result = mysqli_fetch_assoc($MIS_send);
        $spend = number_format($result['spend']);

        $arr = array('title' => $result['title'] , 'action_type' => $result['action_type'] , 'spend' => $spend , "date" => $result['date'] , 'time' => $result['time'] , 'description' => $result['description']);

        echo json_encode($arr);

    }    

?>