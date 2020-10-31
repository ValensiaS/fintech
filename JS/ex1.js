const body = document.getElementsByTagName("body");
const pageWrapper = document.createElement("div");
body[0].prepend(pageWrapper);

const navbar = document.createElement("div");
navbar.classList.add("navbar-wrapper");

const leftNavbar = document.createElement("div");
leftNavbar.classList.add("left-navbar");
const logo = document.createElement("div");
logo.classList.add("logo");
leftNavbar.prepend(logo);

const home = document.createElement("div");
home.classList.add("navbar-item");
home.innerHTML = "Home";
leftNavbar.append(home);

const rightNavbar = document.createElement("div");
rightNavbar.classList.add("right-navbar");

const burger = document.createElement("div");
burger.classList.add("navbar-item");
burger.innerHTML = "Burger";
rightNavbar.append(burger);

navbar.prepend(leftNavbar, rightNavbar);
pageWrapper.prepend(navbar);

const GITHUB_URL = "https://api.github.com/users/jonathangrossman";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const image = document.createElement("img");
    image.src = data.avatar_url;
    image.classList.add("image");
    pageWrapper.append(image);
  });

const GITHUB_URL_REPOS = "https://api.github.com/users/jonathangrossman/repos";

fetch("https://api.github.com/users/jonathangrossman/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let i = 0; i < data.length; i++) {
      const repoWrapper = document.createElement("div");
      repoWrapper.classList.add("repo-wrapper");

      const repoName = document.createElement("div");
      repoName.classList.add("repo-item");
      repoName.innerHTML = data[i].name;

      const repoLanguage = document.createElement("div");
      repoLanguage.classList.add("repo-item");
      repoLanguage.innerHTML = data[i].language;

      repoWrapper.append(repoName, repoLanguage);
      pageWrapper.append(repoWrapper);
    }
  });
