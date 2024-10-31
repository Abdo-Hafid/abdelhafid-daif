document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("navbar-toggler");
    const navMenu = document.getElementById("nav-menu");

    toggler.addEventListener("click", function () {
        navMenu.classList.toggle("hide");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-whatsapp").addEventListener("click", function() {
        const message = document.getElementById("whatsapp-message").value;
        const phoneNumber = "212643349787"; // Replace with your actual phone number
        const encodedMessage = encodeURIComponent(message);
        
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappLink, "_blank");
    });
});