// selecting our elements
const usersWrapper = document.getElementsByClassName("users-Wrapper")[0];
const textInput = document.getElementsByClassName("text-Input")[0];
// global varibal

// api key
const API_KEY = `https://randomuser.me/api/?results=10`;
// fetch api function
async function listData(API_KEY) {
  try {
    const res = await fetch(API_KEY);

    const data = await res.json();
    let usersInfo = data.results;
    console.log(usersInfo);
  } catch (error) {
    console.log("you got an error in :", error);
  }
}

listData(API_KEY);
// functions

//eventlisnters
window.addEventListener("load", () => {
  console.log("hallo world");
});
textInput.addEventListener("input", (e) => {
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
