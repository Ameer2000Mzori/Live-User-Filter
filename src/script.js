var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// selecting our elements
var usersWrapper = document.getElementsByClassName("users-Wrapper")[0];
var textInput = document.getElementsByClassName("text-Input")[0];
// global variable
var listUsers = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s",
        name: "Vivian",
        city: "iraq",
        state: "iraq",
    },
];
// api key
var API_KEY = "https://randomuser.me/api/?results=50";
// fetch api function
function listData(API_KEY) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, usersInfo, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(API_KEY)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    usersInfo = data.results;
                    console.log(usersInfo);
                    laodProfiles(usersInfo);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("you got an error in :", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// functions
var laodProfiles = function (usersInfo) {
    // Clear listUsers array before loading new profiles
    listUsers = [];
    for (var _i = 0, usersInfo_1 = usersInfo; _i < usersInfo_1.length; _i++) {
        var data = usersInfo_1[_i];
        var profileCard = document.createElement("div");
        profileCard.classList.add("profile-Card");
        var profileImg = document.createElement("img");
        profileImg.src = data.picture.medium;
        profileImg.classList.add("profile-Img");
        profileCard.appendChild(profileImg);
        var infoWrap = document.createElement("div");
        infoWrap.classList.add("info-Wrap");
        profileCard.appendChild(infoWrap);
        var h3Text = document.createElement("h3");
        h3Text.textContent = data.name.first;
        infoWrap.appendChild(h3Text);
        var pText = document.createElement("p");
        pText.textContent = "".concat(data.location.city, ", ").concat(data.location.state);
        infoWrap.appendChild(pText);
        usersWrapper.appendChild(profileCard);
        var newObj = {
            img: data.picture.medium,
            name: data.name.first,
            city: data.location.city,
            state: data.location.state,
        };
        listUsers.push(newObj);
    }
    console.log(listUsers);
};
var filterUserInfo = function (usersInfo) {
    // Clear the existing user cards
    usersWrapper.innerHTML = "";
    for (var _i = 0, usersInfo_2 = usersInfo; _i < usersInfo_2.length; _i++) {
        var data = usersInfo_2[_i];
        var profileCard = document.createElement("div");
        profileCard.classList.add("profile-Card");
        var profileImg = document.createElement("img");
        profileImg.src = data.img;
        profileImg.classList.add("profile-Img");
        profileCard.appendChild(profileImg);
        var infoWrap = document.createElement("div");
        infoWrap.classList.add("info-Wrap");
        profileCard.appendChild(infoWrap);
        var h3Text = document.createElement("h3");
        h3Text.textContent = data.name;
        infoWrap.appendChild(h3Text);
        var pText = document.createElement("p");
        pText.textContent = "".concat(data.city, ", ").concat(data.state);
        infoWrap.appendChild(pText);
        usersWrapper.appendChild(profileCard);
    }
};
// search function load data :
// input function
var findUser = function (searchTextInput) {
    // Filter users based on the current search text
    var matchingUsers = listUsers.filter(function (user) {
        return user.name
            .toLocaleLowerCase()
            .startsWith(searchTextInput.toLocaleLowerCase());
    });
    console.log("Our old list", listUsers);
    console.log("Our new list", matchingUsers);
    if (matchingUsers.length > 0) {
        // If matchingUsers is not empty
        listUsers = __spreadArray(__spreadArray([], matchingUsers, true), listUsers.filter(function (user) {
            return !matchingUsers.some(function (matchingUser) { return matchingUser.name === user.name; });
        }), true);
        console.log("Our new listUsers after updating data", listUsers);
        filterUserInfo(listUsers);
    }
    else {
        console.log("No data");
        filterUserInfo([]); // Clear the user container if no match is found
    }
};
//event listeners
window.addEventListener("load", function () {
    listData(API_KEY);
});
textInput.addEventListener("input", function (e) {
    var searchTextInput = e.target.value;
    console.log("you entered ", searchTextInput);
    findUser(searchTextInput);
});
