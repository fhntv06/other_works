
$(document).ready(function () {
});

//$('.phone').mask("+375(99) 999-99-99"); // маска для полей ввода телефона

$('.phone').on('keyup', function () {
    var st = $(this).val();
    st = st.replace(/[^\+\-\)\(\d]/g, '');
    $(this).val(st);
});

$('#filtPro').change(function (e) {
    var link = $('#filtPro').val();
    //var link = 'f[like][project.branch][]=63357';

    var index = location.pathname.indexOf('/--');

    if (index != -1) {
        var pathname = location.pathname.slice(0, index);

    } else {

        var pathname = location.pathname;

    }

    var gpath = location.host + pathname + '?';
    gpath = gpath.replace(/\/\//g, "/");

    var url = location.protocol + '//' + gpath;
    url = url + link;

    var catalog = x4.getModule('catalogFront');
    var pages = x4.getModule('pagesFront');
    var res = pages.renderSlot(url, ['center'],
        function (xres, bres) {
            var slots = bres.result.slots;
            $('#now').replaceWith(slots['center']);
            catalog.execute({ buildUrlTransformation: { url: url } });
            window.history.replaceState("object or string", "Title", catalog.connector.result.url);
        }
    );
    catalog.execute({ clearSessionFilter: true });

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });
});
/* OLD
$('.reCheck').change(function (e) {
    var formId = '#formSubmitId';
    name = $(formId).find("input[name=name]").val();
    email = $(formId).find("input[name=email]").val();
    phone = $(formId).find("input[name=phone]").val();
    if (name.length > 0 && phone.length > 0 && validateemail(email)) {
        $('.g-recaptcha-div').show();
    }
    else {
        $('.g-recaptcha-div').hide();
    }
});*/
function reCheckValid(formId)
{
    var len = 0;
    $("#"+formId).find('input,textarea').each(function ()
    {
        if ($(this).attr('name') !== undefined)
        {
            if ($(this).hasClass('reCheck'))
            {
                var val = $(this).val();
                if (val.length < 1)
                {
                    len++;
                }
            }
            if ($(this).hasClass('reCheckEmail'))
            {
                var val = $(this).val();
                if (!validateemail(val))
                {
                    len++;
                }
            }
        }
    });
    return len;
}
$('.reCheck').change(function (e) {
    var formId = '';
	$(".formSubmit").each(function ()
	{
        if ($(this).attr('id') !== undefined)
        {
            formId = $(this).attr('id');
        }
    });
    var len = reCheckValid(formId);

    if (len==0) {
        $('.g-recaptcha-div').show();
    }
    else {
        $('.g-recaptcha-div').hide();
    }
});

$('.formSubmitBtnJobs').on('click', function (e) { //Клик по кнопке отправить форму вакансии
    e.preventDefault();
	var formId = '';
	$(".formSubmit").each(function ()
	{
        if ($(this).attr('id') !== undefined)
        {
            formId = $(this).attr('id');
        }
    });
	
    
	    
    $('#sendFileError').hide();
    $("#"+formId).find('#successMessIndex').hide();
    $("#"+formId).find('#errorMessIndex').hide();
    $("#"+formId).find('#errorMessIndex2').hide();


    var len = reCheckValid(formId);
    var formData = xoad.html.exportForm(formId);
    formData['email'] = $('#email1').val();
    formData['phone'] = $('#phone1').val();
    if (len==0)
    {
        var $input = $('#sendFile');
        var fd = new FormData;
        fd.append('file', $input.prop('files')[0]);
        $.ajax({
            url: '/file.php',
            method: "POST",
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (filename)
            {
				if(filename.length > 0)
                { 
                    var catalog = x4.getModule('catalogFront');
                    catalog.connector.execute({
                        saveVacancyForm:
                            {
                                file: filename,
                                data: formData
                            }
                    });

                    if (catalog.connector.result['success'] === true)
                    {
                        $("#"+formId).find('#successMessIndex').show();
                        $("#"+formId)[0].reset();
						$('.g-recaptcha-div').hide();
                    } else {
                        $("#"+formId).find('#errorMessIndex').show();
                    }
                }
                else
                {
                    $('#sendFileError').show();
					$("#"+formId).find('#errorMessIndex2').show();
                }
                return false;
            }
            
        });
        
    }
	else
    {
		$("#"+formId).find('#errorMessIndex2').show();
    }
    return false;
});

$('.formSubmitBtn').on('click', function (e) { //Клик по кнопке отправить форму главная страница
	e.preventDefault();
    var formId = $(this).parents('.formSubmit');
    name = $(formId).find("input[name=name]").val();
    email = $(formId).find("input[name=email]").val();
    phone = $(formId).find("input[name=phone]").val();
    message = $(formId).find("textarea[name=message]").val();
    var calcForm = '';
    if ($(formId).find("input[name=calcForm]").length > 0) {
        calcForm = $(formId).find("input[name=calcForm]").val();
    }
    $('#successMessIndex' + calcForm).hide();
    $('#errorMessIndex' + calcForm).hide();
	formId = $('.formSubmit').attr('id');
    var formData = xoad.html.exportForm(formId);

    if (name.length > 0 && phone.length > 0 && validateemail(email)) {
        var catalog = x4.getModule('catalogFront');
        catalog.connector.execute({
            saveTestdriveForm: {
                name: name,
                email: email,
                phone: phone,
                message: message,
                data: formData
            }
        });

        if (catalog.connector.result['success'] === true) {
            $('#successMessIndex' + calcForm).show();
            $("#"+formId)[0].reset();
        } else {
            $('#errorMessIndex' + calcForm).show();
        }
		return false;
    }

    return false;
});

// $('#testdriveFormBut2').click(function (e) { //Клик по кнопке отправить форму страница контакты
//     var formId = 'testdriveForm2';
//     var validat = validator(formId);
//     if(validat==true) {
//         var name = $("#name2").val();
//         var email = $("#email2").val();
// 		var phone = $("#phone2").val();
//         var message = $("#message2").val();

//         var catalog = x4.getModule('catalogFront');
//         var formData = xoad.html.exportForm(formId);
//         if (formData) {
//             catalog.connector.execute({
//                 saveTestdriveForm2: {
//                     data: formData,
//                     formId: formId
//                 }
//             });
//             if (catalog.connector.result['success'] === true) {
//                 document.getElementById(formId).reset();
//                 $('#messageBoxTitle').text('Успешная отправка формы');
//                 $('#messageBoxMessage').text(catalog.connector.result['mess']);
//                 $('#messageBox').show();
//                 $('.dimmed').show();
//             } else {
//                 $('#messageBoxTitle').text('Ошибка отправки формы');
//                 $('#messageBoxMessage').text(catalog.connector.result['mess']);
//                 $('#messageBox').show();
//                 $('.dimmed').show();
//             }
//         }
//     }
//     else
//     {
//         $('#messageBoxTitle').text('Ошибка заполнения формы');
//         $('#messageBoxMessage').text(validat);
//         $('#messageBox').show();
//         $('.dimmed').show();
//     }
// });

$(document).ready(
    function initMap() {
        var lt = + $('#map').attr('data-lt');
        lg = + $('#map').attr('data-lg');
        gps = { lat: lt, lng: lg };
        text = $('#map').attr('data-text');

        var map = new google.maps.Map(document.getElementById('map'), {
            center: gps,
            zoom: 12,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#333333' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#272727' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#515151' }] },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#272727' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#272727' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515151' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#272727' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#333333' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#272727' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#333333' }]
                }
            ]
        });

        var marker = new google.maps.Marker({
            position: gps,
            icon: '/media/img/svg/placeholder.png',
            map: map,
            size: new google.maps.Size(40, 60),
            title: text
        });
    }
);
function validateemail(email) {  //Проверяем Email на корректность
    var pattern = /^[a-z0-9._-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    if (!(email.length > 0) || email.search(pattern) != 0) {
        return false;
    }
    else {
        return true;
    }

}





document.addEventListener('DOMContentLoaded', () => {

    const formsNew = document.querySelectorAll('form');
    const inputFileNew = document.querySelectorAll('.upload-file__input');

    /////////// Кнопка «Прикрепить файл» /////////// 
    inputFileNew.forEach(function (el) {
        let textSelector = document.querySelector('.upload-file__text');
        let fileList;

        // Событие выбора файла(ов) 
        el.addEventListener('change', function (e) {

            // создаём массив файлов 
            fileList = [];
            for (let i = 0; i < el.files.length; i++) {
                fileList.push(el.files[i]);
            }

            // вызов функции для каждого файла 
            fileList.forEach(file => {
                uploadFile(file);
            });
        });

        // Проверяем размер файлов и выводим название 
        const uploadFile = (file) => {

            // файла <5 Мб 
            if (file.size > 5 * 1024 * 1024) {
                alert('Файл должен быть не более 5 МБ.');
                return;
            }

            // Показ загружаемых файлов 
            if (file && file.length > 1) {
                if (file.length <= 4) {
                    textSelector.textContent = `Выбрано ${file.length} файла`;
                }
                if (file.length > 4) {
                    textSelector.textContent = `Выбрано ${file.length} файлов`;
                }
            } else {
                textSelector.textContent = file.name;
            }
        }

    });

});



$(document).ready(function ()
{
    $('.close-modal-jobs').click(function ()
    {
        $('.parent-jobs').hide();
    });
    $('button.link-mailto').on('click', function () {
        $(".parent-jobs").fadeIn();
    });
});

$(".parent-jobs").fadeOut();