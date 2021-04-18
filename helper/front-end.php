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

        public function user_info(){
            
            $user_id = $_SESSION['user_login'];
            $expenses_select_Q = "SELECT * FROM `users` WHERE id = '$user_id'";
            $result = $this -> query($expenses_select_Q);
            return $this -> getRow($result);

        }

        public function expenses_select(){

            $expenses_select_Q = "SELECT * FROM `expenses` ORDER BY date DESC , time DESC";
            return $this -> query($expenses_select_Q);

        }

        public function expenses_delete($val){

            if($val === 'single'){

                $user_info = $this -> user_info();
                $user_id = $user_info['id'];
                $row_id = (int)$this -> safeGET('del-row');
                // select query 
                $select_row_Q = "SELECT * FROM `expenses` WHERE id = '$row_id'";
                $S_result = $this -> query($select_row_Q);
                $spend = $this -> getRow($S_result);
                
                // update wallet balance
                if($spend['action_type'] == 0)
                    $update_balance = $user_info['wallet_balance'] + $spend['spend'];

                else if($spend['action_type'] == 1)
                    $update_balance = $user_info['wallet_balance'] - $spend['spend'];

                // update wallet balance
                $U_B_Q = "UPDATE `users` SET wallet_balance = '$update_balance' WHERE id = '$user_id'";
                $this -> query($U_B_Q);
                
                // delete query
                $del_row_Q = "DELETE FROM `expenses` WHERE id = '$row_id'";
                $result = $this -> query($del_row_Q);

                if($result > 0)
                    $this -> redirect('?msg=delete-success');

            }
            
        }

    }

?>