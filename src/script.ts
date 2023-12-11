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
    laodProfiles(usersInfo);
  } catch (error) {
    console.log("you got an error in :", error);
  }
}

// functions
const laodProfiles = (usersInfo) => {
  for (let data of usersInfo) {
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-Card");

    const profileImg = document.createElement("img");
    profileImg.src = data.picture.medium;
    profileImg.classList.add("profile-Img");
    profileCard.appendChild(profileImg);

    const infoWrap = document.createElement("div");
    infoWrap.classList.add("info-Wrap");
    profileCard.appendChild(infoWrap);

    const h3Text = document.createElement("h3");
    h3Text.textContent = data.name.first;
    infoWrap.appendChild(h3Text);

    const pText = document.createElement("p");
    pText.textContent = `${data.location.city}, ${data.location.state}`;
    infoWrap.appendChild(pText);

    usersWrapper.appendChild(profileCard);
  }
};

//eventlisnters
window.addEventListener("load", () => {
  listData(API_KEY);
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
