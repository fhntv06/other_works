$(document).ready(function() {

    var forms = x4.getModule('formsFront');

    function validPhone() {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = $('input#phone').val();
        var valid = re.test(myPhone);

        $('.phone-number').addClass('is-visible');

        return valid;
    }

    $('#calc').submit(function(e) {
        e.preventDefault();
        var data = new FormData(this);

        if ($('input#name').val() != '' &&  $('input#phone').val() != '' && validPhone()) {
            $.ajax({
                url: '/',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
            });

            $(this).parents('.calculator-modal').removeClass('active');
            $(this).parents('.overlay').removeClass('active');
        }
    });
});