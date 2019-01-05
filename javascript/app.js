var config = {
    apiKey: "AIzaSyC_79yJeCyENgs7waligHQZqTK5teqZqRk",
    authDomain: "portfolio-messages-24899.firebaseapp.com",
    databaseURL: "https://portfolio-messages-24899.firebaseio.com",
    projectId: "portfolio-messages-24899",
    storageBucket: "portfolio-messages-24899.appspot.com",
    messagingSenderId: "543681536415"
  };
  firebase.initializeApp(config);

  let database = firebase.database();
  $("#msg").on('click', function(){
      event.preventDefault();
      let name = $("#input1").val().trim();
      let email = $("#input2").val().trim();
      let msg = $("#textArea1").val().trim();

    let newForm = {
        newName: name,
        newEmail: email,
        newMsg: msg,
    };
    database.ref().push(newForm);
    console.log(newForm.name);
    console.log(newForm.email);
    console.log(newForm.msg);

    alert("Thanks for the message! I'll get back you");
    $('#input1').val("");
    $('#input2').val("");
    $('#textArea1').val("");
  });
  database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
    let name = childSnapshot.val().newName;
    let email = childSnapshot.val().newEmail;
    let msg = childSnapshot.val().newMsg;
  });