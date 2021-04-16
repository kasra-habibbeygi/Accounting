<?php

    ini_set('display_errors' , 'on');
    error_reporting(-1);
    ob_start();
    session_start();
    date_default_timezone_set('Asia/tehran'); 
    require_once 'config.php';
    require_once 'helper/base.php';

    if(strstr($_SERVER['REQUEST_URI'], 'front-end')){

        require_once 'helper/front-end.php';
        $main = new Frontend ;

    }else{

        require_once 'helper/back-end.php';
        $main = new Backend ;

    }

?>