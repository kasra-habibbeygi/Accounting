$('.Sub__info').click(function () {

    let title = $('#title').val().trim();
    let spend = $('#spend').val().trim();
    let year = $('#year').val().trim();
    let month = $('#month').val().trim();
    let day = $('#day').val().trim();
    let hour = $('#hour').val().trim();
    let minute = $('#minute').val().trim();
    let description = $('#description').val().trim();
    let action_type = 2;

    if ($('#CB__1').is(":checked"))
        action_type = 0

    else if ($('#CB__2').is(":checked"))
        action_type = 1;

    let query = `CW=AE&title=${title}&spend=${spend}&year=${year}&month=${month}&day=${day}&hour=${hour}&minute=${minute}&description=${description}&action-type=${action_type}`

    $.post('../../views/expense/e_ajax.php', query, function (result) {

        // alert(result)

        if (result == 'empty-input')
            AWE('Please enter all inputs');

        else if (result == 'invalid-title-len')
            AWE('The title can not be more than 60 characters');

        else if (result == 'negetive-num')
            AWE('Numbers cannot be negative');

        else if (result == 'invalid-spend-len')
            AWE('The amount spent can not be more than 12 digits');

        else if (result == 'NAN')
            AWE('spend amount , date and time must be a number');

        else if (result == 'invalid-date')
            AWE('The date entered is incorrect');

        else if (result == 'invalid-date-len')
            AWE('The date entered is incorrect');

        else if (result == 'invalid-time')
            AWE('The time entered is incorrect');

        else if (result == 'invalid-des')
            AWE('The description should not exceed 1000 words');

        else if (result == 'insert-denied')
            AWE('Your request has encountered a problem')

        else if (result == 'insert-success')
            window.location.href = 'expenses.php?msg=insert-success';

    })

});

if($('.error_handler').hasClass('insert-success'))
    ASE('You have been logged in successfully');