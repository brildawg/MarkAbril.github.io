const users = [{ username: "admin", password: "password" }];

function validateLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login Successful!");
        
        window.location.href="home.php";
        return false;
    } else {
        alert("Login failed. Check your username and password.");
        return false;
    }
}
 function logout() {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
                
        alert("Logout successful!");
        window.location.href = "login.php";
        
        }
}
