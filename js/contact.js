/*===========================================
                    Firebase
============================================*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#config-web-app

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeNPKyc8ukPEWuHB03keGSNhQg0JL6PpI",
    authDomain: "final-portfolio-867bf.firebaseapp.com",
    databaseURL: "https://final-portfolio-867bf.firebaseio.com",
    projectId: "final-portfolio-867bf",
    storageBucket: "final-portfolio-867bf.appspot.com",
    messagingSenderId: "971384324879",
    appId: "1:971384324879:web:be24f6e88120b0c9"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// // Lets us connect to the firestore db
var db = firebase.firestore();


// =========================================
function SendData(){
    fname = document.querySelector("#first-name").value;
    lname = document.querySelector("#last-name").value;
    email = document.querySelector("#email").value;
    subject = document.querySelector("#subject").value;
    message = document.querySelector("#message").value;

    // Save contact input to Firebase db
    db.collection("contact-form").add({
        firstname: fname,
        lastname: lname,
        email: email,
        subject: subject,
        message: message
    });

    // Show success alert
    document.querySelector("#alert").style.display = "block";

    // Hide alert after 3s
    setTimeout(function(){
        document.querySelector("#alert").style.display = "none";
    }, 3000);

    // Clear form fields
    document.querySelector("#contact-form").reset();
}