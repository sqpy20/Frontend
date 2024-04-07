document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".my-login-validation");
  const errorMessageContainer = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Serialize form data
    const formData = new FormData(form);

    // Submit form data asynchronously
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "contests.html";
        } else {
          errorMessageContainer.textContent =
            "Form submission failed. Please try again.";
          errorMessageContainer.classList.add("show");
          setTimeout(function () {
            errorMessageContainer.classList.remove("show");
          }, 3000);
        }
      })
      .catch((error) => {
        errorMessageContainer.textContent =
          "An error occurred. Please try again later.";
        errorMessageContainer.classList.add("show");
        setTimeout(function () {
          errorMessageContainer.classList.remove("show");
        }, 3000);
      });
  });
});
