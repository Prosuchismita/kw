
var firebaseConfig = {
      apiKey: "AIzaSyDHMuxzH7Y2D00b0bK7g7Q5COvrK8DO1mM",
      authDomain: "kwitter-3c143.firebaseapp.com",
      databaseURL: "https://kwitter-3c143-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c143",
      storageBucket: "kwitter-3c143.appspot.com",
      messagingSenderId: "533772851941",
      appId: "1:533772851941:web:89269e43ad81ea8571520c"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}