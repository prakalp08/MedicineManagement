function openTab(tabName, element) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    element.classList.add("active");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your login logic here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Example: validate credentials and proceed with login
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your registration logic here
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    // Example: validate registration data and proceed with registration
});
