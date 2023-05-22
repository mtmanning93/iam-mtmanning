function userInformationHTML(user) {
    return `
        <h2>${user.name}
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>
            </span>
        </h2>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />

                </a>
            </div>
            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
        </div>`;

}

function fetchGitHubInformation(event) {

    var username = $("#github-username").val();
    if (!username) {
        $("github-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#github-user-data").html(`
        <div id="loader">
            <img src="assets/css/loader100px.gif" alt="loading..." /> 
        </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function (response) {
            var userData = response;
            $("#github-user-data").html(userInformationHTML(userData));
        }, function (errorResponse) {
            if (errorResponse.status === 404) {
                $("##github-user-data").html(
                    `<h2>No information found for user: ${username}</h2>`
                );
            } else {
                console.log(errorResponse);
                $("#github-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`
                );
            }
        }
    );
}