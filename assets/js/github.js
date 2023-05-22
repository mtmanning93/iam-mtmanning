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
}