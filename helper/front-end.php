<?php

    defined("DB_HOST")
    or die;

    class Frontend extends Base{

        public function checkLogin(){

            if(isset($_SESSION['user_login']))
                return true;

            else    
                return false;

        }

        public function logout(){

            if(isset($_SESSION['user_login'])){

                unset($_SESSION['user_login']);
                session_destroy();  

            }

        }

        public function expenses(){

            

        }

    }

?>