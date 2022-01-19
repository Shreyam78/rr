//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("key");
room_name = localStorage.getItem("room_name");

function sb() {
      msg = document.getElementById("bla").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("bla").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("o").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        names = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        v1 = "<h4> " + names + "<img class='user_tick' src='tick.png'> </h4>";
                        v2 = "<h4 class='message_h4'>" + message + "</h4>";
                        v3 = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        v4 = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = v1 + v2 + v3 + v4;
                        document.getElementById("o").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function d() {
      localStorage.removeItem("key");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updateLike(message_id) {
      v5 = message_id;
      likes = document.getElementById(v5).value;
      updated_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}