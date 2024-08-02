const heading = document.querySelector(".heading");
const mainSection = document.querySelector(".main-section");
// console.log(heading);

let loggedIn = false;
let userName;

while (!loggedIn) {
  userName = prompt("Please enter userName");

  if (userName !== null) {
    loggedIn = true;
    alert(`Hello ${userName} your Logged in`);
    mainSection.innerHTML = `
     <div class="hero-section">
      <h2 class="heading"> Hello ${userName}</h2>
      <h3 class="heading2">Welcome To Node.Js</h3>
    </div>
   `;
  } else {
    alert("Please Enter your userName ");
  }
}
