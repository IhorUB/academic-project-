document.querySelector('.form input[type="submit"]').addEventListener('click', sendFormAjax);
function sendFormAjax(ev) {
    if (document.querySelector('.form form').checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/FORM_ID",
            method: "POST",
            data: $('.form form').serializeArray(),
            dataType: "json"
        });
    }
}