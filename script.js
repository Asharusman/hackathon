// Your web app's Firebase configuration
 // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyBLAQpwOdYlzF3ZtlWITICD_ox1t0dKMnU",
    authDomain: "hackathon-50045.firebaseapp.com",
    projectId: "hackathon-50045",
    storageBucket: "hackathon-50045.appspot.com",
    messagingSenderId: "706794023581",
    appId: "1:706794023581:web:100b713d15c3f416b08274",
    measurementId: "G-L83Z7YXE9Y"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

function login() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    if (validate_email(email) == false || validate_password(password) == false) {
    alert("Please All Fields Required !!");
    return;
    }

    auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
        var user = auth.currentUser;
        var database_ref = database.ref();
        var user_data = {
        last_login: Date.now(),
        };
        database_ref.child("users/" + user.uid).update(user_data);
        alert("User Logged In!!");
        location.href="./nextpage.html"
    })
    .catch(function (error) {
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message);
    });
}
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) {
    return true;
    } else {
    return false;
    }
}
function validate_password(password) {
    if (password < 6) {
    return false;
    } else {
    return true;
    }
}
function validate_field(field) {
    if (field == null) {
    return false;
    }
    if (field.length <= 0) {
    return false;
    } else {
    return true;
    }
}