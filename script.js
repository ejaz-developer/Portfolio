emailjs.init("service_r22rsoc"); // Replace with your actual EmailJS user ID

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send the email using EmailJS
  emailjs
    .send("service_r22rsoc", "template_ufya4pm", {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Ejaz Ali", // Optional if used in the template
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
      },
      function (error) {
        console.error("Failed to send message:", error); // Logs detailed error to console
        alert("Failed to send message. Please try again.");
      }
    );
});
