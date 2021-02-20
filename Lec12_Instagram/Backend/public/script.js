let search = document.getElementById("search");
let uidInput = document.getElementById("uid");
let img = document.getElementById("profile-image")
let name = document.getElementById("name");
let username = document.getElementById("username");
let bio = document.getElementById("bio");
let followingDiv = document.querySelector(".following");
//postman => API call
// axios
// fetch

search.addEventListener("click", function () {
  let uid = uidInput.value;
  if (uid) {
    //601f7203fbe1d84480f5ac3f
    //getUserById
    axios.get(`/api/user/${uid}`).then(function (obj) {
      let user = obj.data.user;
      img.src = user.profilePic;
      name.innerHTML = user.name;
      username.innerHTML = user.username;
      bio.innerHTML = user.bio;
      // bio: "I am Cap"
      // email: "thesteve@gmail.com"
      // isPublic: true
      // name: "Cap america"
      // password: "123456789"
      // profilePic: "/images/users/1613136070506.jpg"
      // username: "iamsteve"
      // __v: 0
      // _id: "601f7203fbe1d84480f5ac3f"
      let followingPromise = axios.get(`/api/request/following/${uid}`);
      return followingPromise;
    }).then(function(obj){
        let following = obj.data.myFollowing.length;
        followingDiv.innerHTML = `${following} FOLLOWING`;
    })
  }
});
