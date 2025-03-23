// Typed.js Animation
var typed = new Typed(".text", {
    strings: ["Firmware Developer", "Frontend Developer", "Backend Developer", "PCB Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// EmailJS Integration
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("oPYQyw5dOPn8hMheM"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let statusMessage = document.getElementById("status");

        // Send email via EmailJS
        emailjs.send("my_portfoliow_request", "template_2ijjbod", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }).then(
            function (response) {
                statusMessage.innerHTML = "✅ Email sent successfully!";
                statusMessage.style.color = "green";
                document.getElementById("contact-form").reset();
            },
            function (error) {
                statusMessage.innerHTML = "❌ Error sending email. Try again!";
                statusMessage.style.color = "red";
            }
        );
    });
});
