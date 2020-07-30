// Your web app's Firebase configuration
  var firebaseConfig = {

    // Profe
    /*apiKey: "AIzaSyCxLf-ZuhLH6ORb2E-Jlqo8hEKftZz29Gk",
    authDomain: "ejemploclaseiot.firebaseapp.com",
    databaseURL: "https://ejemploclaseiot.firebaseio.com",
    projectId: "ejemploclaseiot",
    storageBucket: "ejemploclaseiot.appspot.com",
    messagingSenderId: "79594302393",
    appId: "1:79594302393:web:be75ee515da164bf472468",
    measurementId: "G-14P4N6TSS7" 
  };  */

    apiKey: "AIzaSyCVvKqrpGcyZ1gHEgOBhpBHzCCiOXZtMxg",
    authDomain: "claseiot-ceb75.firebaseapp.com",
    databaseURL: "https://claseiot-ceb75.firebaseio.com",
    projectId: "claseiot-ceb75",
    storageBucket: "claseiot-ceb75.appspot.com",
    messagingSenderId: "383312113432",
    appId: "1:383312113432:web:234c30ddd52c43b568786d",
    measurementId: "G-QGC9GYG3P9"
  }; 

    /*apiKey: "AIzaSyDNSAsOvNnhEw7gGl4XM1zzYLp-eusuhcw",
    authDomain: "sensores-iot-b3412.firebaseapp.com",
    databaseURL: "https://sensores-iot-b3412.firebaseio.com",
    projectId: "sensores-iot-b3412",
    storageBucket: "sensores-iot-b3412.appspot.com",
    messagingSenderId: "706373490296",
    appId: "1:706373490296:web:ccc83a266daa538139ff8d",
    measurementId: "G-QGC9GYG3P9"
  };  */
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var ref = firebase.database().ref('/');

  ref.on("value", function(snapshot){
  	var data = snapshot.val();
  	document.getElementById("temperatura").innerHTML = data.temperatura;
  	document.getElementById("humedad").innerHTML = data.humedad;
  	document.getElementById("luz").innerHTML = data.luz;
  	document.getElementById("gas").innerHTML = data.gas;
  	document.getElementById("led").innerHTML = data.EstadoLED;
  });
  
  function encender() {
  	firebase.database().ref('/').child('EstadoLED').set("1");
	}

   function apagar() {
  	firebase.database().ref('/').child('EstadoLED').set("0");
   }
	
