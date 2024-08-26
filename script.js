const contactForm = document.getElementById("contact_form");
emailjs.init("znEzWThcFUhb_ljBl");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the form values
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Send the email using EmailJS with dynamic data
  emailjs
    .send("service_r22rsoc", "template_ufya4pm", {
      from_name: name, // Use the name from the form
      from_email: email, // Use the email from the form
      message: message, // Use the message from the form
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!"); // Alert on success
      },
      function (error) {
        console.error("FAILED...", error); // Log the error to the console
        alert("Failed to send message. Please try again."); // Alert on failure
      }
    );
});
