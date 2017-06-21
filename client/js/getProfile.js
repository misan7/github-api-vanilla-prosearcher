var xhr
document.getElementById("ajaxButtonProfile").addEventListener('click', makeRequest)

function makeRequest() {

    var xhr = new XMLHttpRequest()

    username = document.getElementById("username").value
    var userURL = "https://api.github.com/users/" + username

    xhr.open('GET', userURL)
    xhr.send(null)

    xhr.onreadystatechange = function() {
        var DONE = 4 // readyState 4 means the request is done.
        var OK = 200 // status 200 is a successful return.

        if (xhr.readyState === DONE) {
            if (xhr.status === OK){
                var oJson = JSON.parse(xhr.responseText)

                fullName.innerHTML = oJson.name
                user.innerHTML = oJson.login
                bio.innerHTML = oJson.bio
                followers.innerHTML = oJson.followers
                follows.innerHTML = oJson.following
                img = oJson.avatar_url
                document.getElementById('pro-img').style = `background-image: url("${img}")`
}
              else if (xhr.status === 404) 
                alert("The Profile you're searching for doesn't exist")
        } else {
            console.log('Status: ' + xhr.status)
        }
    }
  }
