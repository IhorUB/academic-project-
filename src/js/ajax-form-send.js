document.querySelector('.send-form button[type="submit"]').addEventListener('click', sendFormAjax);

function sendFormAjax(ev) {
    if (document.querySelector('.send-form').checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/FORM_ID",
            method: "POST",
            data: $('.send-form').serializeArray(),
            dataType: "json"
        });
    }
}
