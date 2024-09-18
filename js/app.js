/* Code for the slider adjusting the number of pain the patient is feeling */
let slider = document.getElementById("health")
  let output = document.getElementById("healthValue")
  output.innerHTML = slider.value;
  slider.oninput = function () {output.innerHTML = this.value;};

/* Code for linking to my Path of Exile character from the Settlers of Kalguur league after you submit your form */
// document.getElementById("submitButton").onclick = function () {
//   location.href = "hw1-thankyou.html"
// }

/* Get the current date */
const today = new Date();

/* Formatting the date */
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

/* Displaying the date */
document.getElementById('date').textContent = formattedDate;
