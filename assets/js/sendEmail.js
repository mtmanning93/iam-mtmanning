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
            }, function (error) {
                console.log('FAILED...', error);
            });
}