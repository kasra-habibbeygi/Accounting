// add new expenses
$('.Sub__info').click(function () {

    let title = $('#title').val().trim();
    let spend = $('#spend').val().trim().replace(/,/g, '');
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

    });

});

// if new expenses add successfully alert will be show 
if ($('.error_handler').hasClass('insert-success'))
    ASE('You have been logged in successfully');

if ($('.error_handler').hasClass('delete-success'))
    ASE('The desired row was successfully removed');




// more detail modal
$('.more_detail').click(function () {

    let data_id = $(this).parent().attr('data-id');
    let query = `CW=MI&data-id=${data_id}`;

    $.post('../../views/expense/e_ajax.php', query, function (result) {

        // render ajax respond in temp and append in html
        let info = $.parseJSON(result);
        let description = info.description == '' ? '-' : info.description;
        let mark = info.action_type == '0' ? '-' : '+';
        let spend_color = mark == '-' ? 'Negative' : 'Positive';
        let balance = info.balance;
        let after_spend = info.action_type == '0' ? parseInt(balance) - parseInt(info.spend) : parseInt(balance) + parseInt(info.spend);

        let temp = `
        <div class="detail_field">

            <div class="DF_box">
                <p class="title">Title</p>
                <p class="info">${info.title}</p>
            </div>
            <div class="DF_box">
                <p class="title">Date and Time</p>
                <p class="info">${info.date} / ${info.time}</p>
            </div>
            <div class="DF_box">
                <p class="title">Spend Amount</p>
                <p class="info ${spend_color}">${mark} ${Separator(info.spend)} T</p>
            </div>
            <div class="DF_box">
                <p class="title">Total Money</p>
                <p class="info">${Separator(balance)}</p>
            </div>
            <div class="DF_box">
                <p class="title">Total money after spend</p>
                <p class="info">${Separator(after_spend)}</p>
            </div>
            <div class="DF_box">
                <p class="title">Description</p>
                <p class="info">${description}</p>
            </div>
            <button class="close_MIM_modal">Close</button>

        </div>
        `
        $('.MIM .content .detail_field').remove();
        $('.MIM .content').append(temp);

    });

    // fade in and fade out modal
    $('.MIM').fadeIn();

    $(document).on('click', '.close_MIM_modal', function () {

        $('.MIM').fadeOut();

    });

});

// edit modal
$('.edit_row').click(function(){

    let data_id = $(this).parent().attr('data-id');
    let query = `CW=ER&data-id=${data_id}`;

    $.post('../../views/expense/e_ajax.php', query , function(result){

        let info = $.parseJSON(result);
        let temp =`
        <form action="" method="POST" autocomplete="off">
            <div class="input_group main">
                <label for="E_title">Title</label>
                <input type="text" id="E_title" value="${info.title}">
            </div>
            <div class="input_group main checkbox_field">
                <div>
                    <input class="inp-cbx" id="CB__3" type="radio" style="display: none" name="action_type" ${info.action_type == '0' ? 'checked' : ''}>
                    <label class="cbx" for="CB__3">
                        <span>
                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                        </span>
                        <span>Expense</span>
                    </label>
                </div>
                <div>
                    <input class="inp-cbx" id="CB__4" type="radio" style="display: none" name="action_type" ${info.action_type == '1' ? 'checked' : ''}>
                    <label class="cbx" for="CB__4">
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
                <label for="E_spend">Spend amount</label>
                <input type="text" id="E_spend" value="${info.spend}">
            </div>
            <div class="input_group main chose__data">
                <div>
                    <label for="E_year">Year</label>
                    <input type="text" id="E_year" value="${info.year}">

                </div>
                /
                <div>
                    <label for="E_month">Month</label>
                    <input type="text" id="E_month" value="${info.month}">
                </div>
                /
                <div>
                    <label for="E_day">Day</label>
                    <input type="text" id="E_day" value="${info.day}">
                </div>
            </div>
            <div class="input_group main chose__time">
                <div>
                    <label for="E_hour">Hour</label>
                    <input type="text" id="E_hour" value="${info.hour}">
                </div>
                :
                <div>
                    <label for="E_minute">Minute</label>
                    <input type="text" id="E_minute" value="${info.min}">
                </div>
            </div>
            <div class="input_group main">
                <label for="E_description">Descriptiom <span class="optional_text">(Optional)</span></label>
                <textarea type="text" id="E_description">${info.description}</textarea>
            </div>
            <div class="D_btn_group">
                <button type="button edit_modal">Edit</button>
                <button type="button" class="close_edit_modal">Cancel</button>
            </div>
        </form>
        `
        $('.EEM .content form').remove();
        $('.EEM .content').append(temp);

    });

    $('.EEM').fadeIn();

    $(document).on('click', '.close_edit_modal', function () {

        $('.EEM').fadeOut();

    });

});


// open delete modal
$('.delete_row').click(function () {

    $('.DRM').fadeIn();

    let locaton = $(this).parent().attr('data-id')
    $('.DRM .D_btn_group a').attr('href', `?del-row=${locaton}`);

    $('.close_delete_modal').click(function () {

        $('.DRM').fadeOut();

    })

});

// when user type and left spend input , comma will be added to number
$('#spend , #E_spend').change(function () {

    let num = $(this).val().replace(/,/g, '');
    $(this).val(Separator(num));

});

// number separator
function Separator(num) {

    var str = num.toString().split('.');

    if (str[0].length >= 4) {

        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');

    }

    if (str[1] && str[1].length >= 4) {

        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }

    return str.join('.');
}