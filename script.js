const contactForm = document.getElementById("contact_form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  emailjs.send("service_r22rsoc", "template_ufya4pm", {
    from_name: "Ejaz",
    from_email: "devpro.ejazali34@gmail.com",
    message: "This is test message",
  });
  alert("Message Sent");
});
