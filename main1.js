var firebaseConfig = {
      apiKey: "AIzaSyAYDDuee9PP_0fOSNxJAzzB4hlIjPpXGa8",
      authDomain: "chat-project-e35c8.firebaseapp.com",
      databaseURL: "https://chat-project-e35c8-default-rtdb.firebaseio.com",
      projectId: "chat-project-e35c8",
      storageBucket: "chat-project-e35c8.appspot.com",
      messagingSenderId: "424847949366",
      appId: "1:424847949366:web:31ec0d19951480ddba2297",
      measurementId: "G-STBM6NDPJY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    x1 = localStorage.getItem("name");
    console.log(x1);
    document.getElementById("user_name").innerHTML = "Welcome  "+x1+"!";
    function addRoom(){
          a = document.getElementById("room_name").value;
          console.log(a);
          firebase.database().ref("/").child(a).set({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("room",a);
          window.location="index2.html";
    }
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("RoomName-",Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >Room name is - "+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();
function redirectToRoomName(y){
      console.log(y);
      localStorage.setItem("room",y);
      window.location="index2.html";
}
function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room");
      window.location="index.html";
}