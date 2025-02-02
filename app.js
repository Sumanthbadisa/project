

document.getElementById("btn").addEventListener("click",fetchUser);

document.getElementById("userNotFound").style.display="none";
document.getElementById("userFound").style.display="none";


function fetchUser()
{
    const username = document.getElementById("username").ariaValueMax;
    const url = "https://api.github.com/users/" + username;


    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data?.status == 404) {
                document.getElementById("userNotFound").style.display="block";

                document.getElementById("userFound").style.display="none";
                return;

                
            }else{
                printUser(data);
            }


        })
        .catch((error)=> {
            console.log(error);
        })
    }   


function printUser(user) {
    document.getElementById("userData").innerHTML = `
      <img style="width:100px;border-radius:50%" src="${user.avatar_url}" alt="">
      <h3>${user.name}</h3>
      <p><b>Followers: </b> ${user.followers}</p>
      <p><b>Following: </b>${user.following}</p>
      <p>${user.bio}</p>
    `;
    document.getElementById("userNotFoundData").style.display = "none";
    document.getElementById("userData").style.display = "block";
  }