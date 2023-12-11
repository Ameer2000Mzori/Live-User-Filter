// selecting our elements
var usersWrapper = document.getElementsByClassName("users-Wrapper")[0];
var textInput = document.getElementsByClassName("text-Input")[0];
// global varibal
// api key
// fetch api function
// functions
//eventlisnters
window.addEventListener("load", function () {
    console.log("hallo world");
});
textInput.addEventListener("input", function (e) {
    console.log("you entered ", e.target.value);
});
// our html loop up
// <div class="profile-Card">
// <img
//   class="profile-Img"
//   src="https://randomuser.me/api/portraits/men/0.jpg"
//   alt=""
// />
// <div class="info-Wrap">
//   <h3>Ameer Ameen</h3>
//   <p>Amsterdam, Netherlands</p>
// </div>
// </div>
