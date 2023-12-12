// selecting our elements
const usersWrapper = document.getElementsByClassName("users-Wrapper")[0];
const textInput = document.getElementsByClassName("text-Input")[0];

// global variable
let listUsers = [
  {
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s`,
    name: "Ameer",
    city: "Amsterdam",
    state: "NoordHolland",
  },
];

// api key
const API_KEY = `https://randomuser.me/api/?results=50`;

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
  // Clear listUsers array before loading new profiles
  listUsers = [];

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

    let newObj = {
      img: data.picture.medium,
      name: data.name.first,
      city: data.location.city,
      state: data.location.state,
    };

    listUsers.push(newObj);
  }
  console.log(listUsers);
};

const filterUserInfo = (usersInfo) => {
  // Clear the existing user cards
  usersWrapper.innerHTML = ``;

  for (let data of usersInfo) {
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-Card");

    const profileImg = document.createElement("img");
    profileImg.src = data.img;
    profileImg.classList.add("profile-Img");
    profileCard.appendChild(profileImg);

    const infoWrap = document.createElement("div");
    infoWrap.classList.add("info-Wrap");
    profileCard.appendChild(infoWrap);

    const h3Text = document.createElement("h3");
    h3Text.textContent = data.name;
    infoWrap.appendChild(h3Text);

    const pText = document.createElement("p");
    pText.textContent = `${data.city}, ${data.state}`;
    infoWrap.appendChild(pText);

    usersWrapper.appendChild(profileCard);
  }
};

// search function load data :

// input function
const findUser = (searchTextInput) => {
  // Filter users based on the current search text
  let matchingUsers = listUsers.filter((user) => {
    return user.name
      .toLocaleLowerCase()
      .startsWith(searchTextInput.toLocaleLowerCase());
  });

  console.log("Our old list", listUsers);
  console.log("Our new list", matchingUsers);

  if (matchingUsers.length > 0) {
    // If matchingUsers is not empty
    listUsers = [
      ...matchingUsers,
      ...listUsers.filter(
        (user) =>
          !matchingUsers.some((matchingUser) => matchingUser.name === user.name)
      ),
    ];
    console.log("Our new listUsers after updating data", listUsers);
    filterUserInfo(listUsers);
  } else {
    console.log("No data");
    filterUserInfo([]); // Clear the user container if no match is found
  }
};

//event listeners
window.addEventListener("load", () => {
  listData(API_KEY);
});

textInput.addEventListener("input", (e) => {
  let searchTextInput = e.target.value;
  console.log("you entered ", searchTextInput);
  findUser(searchTextInput);
});
