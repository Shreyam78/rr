const firebaseConfig = {
      apiKey: "AIzaSyCYYLBX-cemsO8PTCOpsGHUR9al0w60fI0",
      authDomain: "kwitter-ffb41.firebaseapp.com",
      databaseURL: "https://kwitter-ffb41-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffb41",
      storageBucket: "kwitter-ffb41.appspot.com",
      messagingSenderId: "797474293258",
      appId: "1:797474293258:web:689a1eef0034a82bd081f3",
      measurementId: "G-SVE91ZSTMV"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("key");
document.getElementById("3g").innerHTML = "Welcome  " + user_name
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("tbd").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; 
                  document.getElementById("tbd").innerHTML += row;
                  //End code
            });
      });
}
getData();
function rm() {
      room_name = document.getElementById("rn").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      localStorage.setItem("Room_name", name);
      window.location = "kwitter_page.html";
}

function ad() {
 localStorage.removeItem("key");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}