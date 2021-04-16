<?php

    defined("DB_HOST")
        or die;

    abstract class Base {

        private $dblink = null;

        // conect to db
        public function __construct(){
            
            $this -> dblink = mysqli_connect(DB_HOST , DB_USERNAME , DB_PASSWORD)
                or die(mysqli_connect_error());

            mysqli_select_db($this -> dblink , DB_NAME)
                or die(mysqli_connect_error($this -> dblink));

            $this -> query("SET NAMES 'UTF-8'");

        }

        // close db conection
        public function __destruct(){
            
            if(is_resource($this -> dblink))
                mysqli_close($this -> dblink);

        }


        // query
        public function query($val){

            $result = mysqli_query($this -> dblink , $val);
            
            if(strstr($val , 'INSERT'))
                return mysqli_insert_id($this -> dblink);

            else if (strstr($val , 'UPDATE') || stristr($val , 'DELETE'))
                return mysqli_affected_rows($this -> dblink);

            else
                return $result;

        }

        // get database record
        public function getRow($val){

            return mysqli_fetch_assoc($val);

        }

        // clear fetch history
        public function freeResult($val){

            return mysqli_free_result($val); 

        }

        //  safe GET method
        public function safeGET($val){

            return isset($_GET[$val]) == '' ? '' : htmlentities(trim($_GET[$val]) , ENT_QUOTES , 'UTF-8');
            
        }

        //  safe POST method
        public function safePOST($val){

            return isset($_POST[$val]) == '' ? '' : htmlentities(trim($_POST[$val]) , ENT_QUOTES , 'UTF-8');
            
        }

        // redirect
        public function redirect($val){

            return header("location:$val");
            die;

        }

        // safe password
        public function safePassword($val){

            $safe_pass = PASS_KEY . $val .PASS_KEY;
            return md5(sha1($safe_pass));

        }

        // email validation
        public function validEmail($val){

            return filter_var($val , FILTER_VALIDATE_EMAIL);

        }

        // check numeric input
        public function numericInput($val , $type){

            if($type == 'float')
                return filter_var($val, FILTER_VALIDATE_FLOAT);

            else
                return filter_var($val, FILTER_VALIDATE_INT);

        }
        
    }

?>