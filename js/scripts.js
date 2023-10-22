window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");

    var nameInvalid = document.getElementById("name-invalid");
    var emailInvalid = document.getElementById("email-invalid");
    var phoneInvalid = document.getElementById("phone-invalid");
    var messageInvalid = document.getElementById("message-invalid");

    // cek yang invalid
    if (name.value == "") {
        name.focus();
        nameInvalid.style.display = "block";
        return false;
    }

    if (email.value == "") {
        email.focus();
        emailInvalid.style.display = "block";
        return false;
    }

    if (phone.value == "") {
        phone.focus();
        phoneInvalid.style.display = "block";
        return false;
    }

    if (message.value == "") {
        message.focus();
        messageInvalid.style.display = "block";
        return false;
    }
}
