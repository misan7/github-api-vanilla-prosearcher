var xhr
document.getElementById("ajaxButtonRepos").addEventListener('click', makeRequest)

function makeRequest() {

    var xhr = new XMLHttpRequest()

    username = document.getElementById("username").value
    var userURL = "https://api.github.com/users/" + username
    var reposURL = userURL + "/repos"

    xhr.open('GET', reposURL)
    xhr.send(null)

    xhr.onreadystatechange = function() {
        var DONE = 4 // readyState 4 means the request is done.
        var OK = 200 // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                var oJson = JSON.parse(xhr.responseText)
                console.log("oJson", oJson);

                results.innerHTML = oJson.id

            } else if (xhr.status === 404)
                alert("The Profile you're searching for doesn't exist")
        } else {
            console.log('Status: ' + xhr.status)
        }
    }
}
