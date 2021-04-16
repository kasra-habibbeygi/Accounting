$('.login').click(function () {
    
    let email = $('#email').val();
    let pass = $('#password').val();

    let query = `CW=login&email=${email}&pass=${pass}`;

    $.post('../../views/login/login-ajax.php', query, function (result) {

        if (result == 'empty-input')
            AWE('Please enter all inputs');

        else if (result == 'invalid-email')
            AWE('The entered email is not valid');

        else {

            if (result == 'login-denied')
                AWE('User not found, please try again');

            else if (result == 'login-success') 
                window.location.href = '../../views/index/index.php?msg=login-in';

        }

    })

});

if ($('.error_handler').hasClass('logout'))
    ASE('You have successfully logged out');

if ($('.error_handler').hasClass('access-denied'))
    AWE('You dont have access to this page');