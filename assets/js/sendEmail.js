const old_html = document.getElementById("inner-form-html");

function sendMail(contactForm) {
    emailjs.send("gmailJS", "online-cv-contact-form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value,
        "linkedin_username": contactForm.linkedinusername.value,
        "github_username": contactForm.githubusername.value
    })
        .then(
            function (response) {
                console.log('SUCCESS!', response);
                sendConfirmation();
            }, function (error) {
                console.log('FAILED...', error);
            });

    return false;
}

function sendConfirmation() {
    const formWrapper = document.getElementById("contact-form");
    let sender = document.getElementById("floatingInput").value;
    formWrapper.innerHTML = `
        <h2>Request sent!</h2> <br> <p>Thanks ${sender}, 
        I look forward to your new idea and working together.</p> <br>
        <button class="btn btn-primary" onclick="resetForm()">Send New Request</button>`;
    formWrapper.style = "text-align: center; padding: 20px 0;";
}

function resetForm() {
    document.getElementById("contact-form").innerHTML = old_html.innerHTML;
}