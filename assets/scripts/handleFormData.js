const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  result.innerHTML = "Submitting...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const resultData = await response.json();
    result.textContent = "Form submitted successfully!";

    setTimeout(() => {
      result.textContent = "";
      form.reset();
    }, 3000);
  } catch (error) {
    result.textContent = "Error submitting form: " + error.message;
  }
});
