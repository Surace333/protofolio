function sendMail() {

 
  var params = {
    name: document.getElementById("name").value,
    subject:document.getElementById("subject").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_dmfuart";
  const templateID = "template_vky7jrc";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value ="";
        console.log(res);
      
        alert('Your message sent successfully!!');

    })
    .catch(err=>console.log(err));

}
 