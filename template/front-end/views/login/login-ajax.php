<?php
    require_once '../../../../init.php';

    $CW = $main -> safePOST('CW');

    if($CW =='login'){

        // get POST info
        $email = $main -> safePOST('email');
        $pass = $main -> safePOST('pass');

        // check email and combina pass with privet key
        $validEmail = $main -> validEmail($email);
        $safePass = $main -> safePassword($pass);

        // form validation
        if($email == '' || $pass == '')
            echo 'empty-input';
        
        else if($validEmail == '')
            echo 'invalid-email';

        else{

            // find user in DB
            $SQ = "SELECT id FROM `users` WHERE email = '$validEmail' AND password = '$safePass'";
            $result = $main -> query($SQ);
            $fetch = $main -> getRow($result); 

            if($fetch == '')
                echo 'login-denied';

            else{

                $_SESSION['user_login'] = $fetch['id'];
                echo 'login-success';

            }

        }
            

    }

?>