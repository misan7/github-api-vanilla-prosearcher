
var xhr
document.getElementById("ajaxButton").addEventListener('click', makeRequest)

function makeRequest() {

    var xhr = new XMLHttpRequest()

    username = document.getElementById("username").value
    console.log("username", username)
    var url = "https://api.github.com/users/" + username
    console.log("url", url)

    xhr.open('GET', url)
    xhr.send(null)

    xhr.onreadystatechange = function() {
        var DONE = 4 // readyState 4 means the request is done.
        var OK = 200 // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK){
                // console.log(JSON.parse(xhr.responseText)) // 'This is the returned text.'
                var oJson = JSON.parse(xhr.responseText)
                fullName.innerHTML = oJson.name
                user.innerHTML = oJson.login
                bio.innerHTML = oJson.bio
                user.innerHTML = oJson.login
                user.innerHTML = oJson.login
                followers.innerHTML = oJson.followers
                follows.innerHTML = oJson.following

}
              else if (xhr.status === 404) 
                alert("The Profile you're searching for doesn't exist")
        } else {
            console.log('Error: ' + xhr.status) // An error occurred during the request.

        }
    }
  }
