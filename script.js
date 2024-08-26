document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send the email using EmailJS
  emailjs
    .send("service_r22rsoc", "template_ufya4pm", {
      from_name: name, // Dynamic name from the form
      from_email: email, // Dynamic email from the form
      message: message, // Dynamic message from the form
    })
    .then(
      function (response) {
        alert("Message sent successfully!"); // Alert on success
      },
      function (error) {
        console.error("Failed to send message:", error); // Log error to console
        alert("Failed to send message. Please try again."); // Alert on failure
      }
    );
});
