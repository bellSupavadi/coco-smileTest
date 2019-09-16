var firebaseConfig = {
    apiKey: "AIzaSyB04DETpF2qpWHijCGtyjgPP5IKRA2vjro",
    authDomain: "versatiletest-b0c48.firebaseapp.com",
    databaseURL: "https://versatiletest-b0c48.firebaseio.com",
    projectId: "versatiletest-b0c48",
    storageBucket: "versatiletest-b0c48.appspot.com",
    messagingSenderId: "576666561037",
    appId: "1:576666561037:web:db53b3b776d25322a40344"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  allProducts()

var html=''
  function allProducts() {
  
    db.collection("products").get()
            .then(function (querySnapshot) {
                // doc.data() is never undefined for query doc snapshots
             
                querySnapshot.docs.forEach(function(data) {
              
                   
                    
                   html += '<div class="col-md-3">'+'<img class="card-img-top"" src="'+data.data().pic[0]+'">' +
                  
                   '<div class="card-body" >'+data.data().volumeProduct+'</div> '+
                   '<div class="ingredient" >'+'  <h4 class="card-title">ส่วนประกอบ</h4>'+
                  ' <p class="card-text">'+data.data().ingredient+'</p>'+'</div> '+'</div>'
               });
               document.getElementById("show").innerHTML = html;
               console.log(html);
               
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

}