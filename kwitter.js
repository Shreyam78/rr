function lb() {
    u_name = document.getElementById("mfa").value;
    localStorage.setItem("key" , u_name);
    window.location = "kwitter_room.html";
}