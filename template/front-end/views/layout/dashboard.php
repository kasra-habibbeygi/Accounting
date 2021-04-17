<!-- <?php

    if(!$main -> checkLogin())
    $main -> redirect('../login/login.php?msg=access-denied');

    if($main -> safeGET('logout') == 1){

        $main -> logout();
        $main -> redirect('../login/login.php?msg=logout');

    }

?>

<aside class="dashboard">
    <h1>notelock</h1>
    <img src="../../assets/img/AA00.jpg" alt="">
    <div class="DS_header">
        <p>kasra habibbeygi</p>
        <span>3,450,000T</span>
    </div>

    <ul>
        <li class="DSI_header">MAIN</li>
        <li <?php echo strstr($_SERVER['REQUEST_URI'] , 'index.php') ? 'class="active"' : ''?>>
            <a href="../index/index.php">
            <i class="fad fa-chart-pie"></i>
                Dashboard
            </a>
        </li>
        <li <?php echo strstr($_SERVER['REQUEST_URI'] , 'profile.php') ? 'class="active"' : ''?>>
            <a href="../profile/profile.php">
                <i class="fad fa-user-crown"></i>
                Profile
            </a>
        </li>
        <li <?php echo strstr($_SERVER['REQUEST_URI'] , 'expenses.php') ? 'class="active"' : ''?>>
            <a href="../expense/expenses.php">
                <i class="fad fa-calculator-alt"></i>
                Daily Expenses
            </a>
        </li>
        <li>
            <a href="?logout=1">
                <i class="fad fa-sign-out"></i>
                Logout
            </a>
        </li>
    </ul>

</aside> -->