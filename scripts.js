function send() {
   
    var NAME = document.getElementById("NAME").value;
    var email = document.getElementById("email").value;
    var plant = document.getElementById("plant").value;
    

    var body = "NMAE:" + NAME + "<br/> email:" + email + "<br/> plant:" + plant;
    console.log("function call");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ravirajk802@gmail.com",
        Password : "3D02ADD96F7D195E3EF2D8099D82DF51A501",
        To : 'ravirajk802@gmail.com',
        From : "ravirajk802@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert(message)
    );
}