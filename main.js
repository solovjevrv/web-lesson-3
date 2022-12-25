  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          const user = {
            firstName: document.getElementById("firstName").value,
            userName: document.getElementById("userName").value,
            userPassword: document.getElementById("userPassword").valuePassword,
          };
          localStorage.setItem("user", JSON.stringify(user));
          toProfile();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

function toProfile() {
  window.location.replace("/profile.html");
}
function getUserInfo() {
  return userInfo = JSON.parse(localStorage.getItem("user"));
}
function showUserInfo() {
    const name = document.getElementById("name");
    const login = document.getElementById("login");
    name.textContent = userInfo.firstName;
    login.textContent = userInfo.userName;
}
if(window.location.pathname == "/profile.html") {
  getUserInfo();
  showUserInfo();
}