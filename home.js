function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var user="vaishivaofficial"
    var pass="vaishiva@1234"
    // Perform validation here (e.g., check against a database)
    // For simplicity, we'll just check if both fields are filled
    if (username==user && password==pass) {
        window.location.href="attendance.html";
        alert('Logged in successfully!');
        
        // Redirect to another page or perform further actions here
    } else {
        alert('Please fill in both fields');
    }
}