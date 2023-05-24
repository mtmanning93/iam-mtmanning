# i am MM.

[Live Site](https://mtmanning93.github.io/iam-mtmanning/)

[Repo](https://github.com/mtmanning93/iam-mtmanning)

An online portfolio for Matt Manning, Junior Software Developer, created using the Bootstrap 5.2.3 framework. The site holds capabailties to download a printable CV or testimonials document, view showcase projects and connect with Matt via a 'Lets work together form'. The goal of the site is for Matt to have an online presence and showcase some of his abilities, whilst future employers and collaborators can view his work, and get to know him and his history. For the user the site gives a concise introduction to Matt and the ability to gain copies of his documents. The site is a single page format to replicate the simplicity and impact of a single page resumé.

![MM. header screenshot](/assets/images/screenshots/header-screenshot.png)

## Contents

1. [Features](#features)
    - [Header](#header)
      - [Logo](#logo)
      - [Nav](#nav)
      - [Download Button](#download-button)
      - [Intro](#header-intro)
    - [Profile](#profile)
      - [Personal Info](#personal-info)
      - [Technical Skills](#technical-skills)
      - [History](#history)
    - [Showcase](#showcase)
      - [Show Cards](#show-cards)
      - [GitHub API](#github-api)
    - [Contact & EmailJS API](#contact--emailjs-api)
    - [Footer](#footer)
2. [Future Implementations]()
3. [Testing]()
    - [Local]()
      - [Bugs]()
      - [Validation]()
      - [Lightouse]()
    - [Remote]()
5. [Deployment]()
6. [Credits]()

## Features

### Header

- #### Logo

To create a simply design the site owners initials 'MM.' were used as the logo, creating a brand like persona from the beginning. The font used is Monterrat as it gives adequate spacing to the text. The logo is also a link to the home page, and, when hovered turns from white to the light orange used site white for clickable and important messages.

![logo](/assets/images/screenshots/logo.png)

- #### Nav

Directly next to the logo is the site nav bar. It is simply with just 4 links and also uses a hover effect to allert the user to which link they are clicking. As the site is a single page the links simply scroll to the relavant sections of the page.

![navigation](/assets/images/screenshots/navigation.png)

- #### Download Button

A dropdown 'Download CV' button positioned top right of the entire site enables the user to gain printable copies of cv and testimonial documents. The button uses a style which is carried throughout the site in order to provide the user with feeback that they are about to interact with the site.

![download button](/assets/images/screenshots/download.png)

- #### Header Intro

The first section of the site contains the title 'Junior Full Stack Software Developer' enabling users to see directly the occupation. Within the sectio are 3 cards which detail a short introduction to Matt. These concise snippets of information would help grab the users attention initially entising them to continue reading, discovering more. When hovered the border changes to a teal for some light user interaction this is used site wide over certain elements of importance such as the navbar and footer also.

![title and intro](/assets/images/screenshots/cards.png)

### Profile

- #### Personal Info

The personal information section is contained in a side section with dark background to help seperate information for the user. Within this section key inofrmation can be found as well as buttons which open up extra sidebars to show information regarding less important topics, regarding interests and a previous project which show key soft skills.

![personal information section]()
![personal information slide out sections]()

- #### Technical Skills

Technical skills are split into two sections 'frontend' and 'backend' both of which have their own corresponding icon for even more clarity to the user. Beneath these are some progress bars to visualise current competence in different programming languages.

![technical skills with progress bars]()

- #### History

In the history section there are two timeline visuals for education and employment again with the respective icons and brief descriptions of each point on the timeline.

![history timelines of education and emplyment]()

### Showcase

- #### Show Cards

For the showcase section seperate cards were used to provide images and brief description of the project and skills used in the project. Under this are buttons which link to the live site and the repo of each project.

![showcase, show cards]()

- #### GitHub API

Underneath the show cards is a button to 'See more of my work'. When clicked this button opens a modal with the Github API inside. Its default search is set to 'mtmanning93' showing more repos of the site owner, however, this can be used to search the entirity of GitHub and display the followers, following and repos of this user.

![GitHub Api modal with search function]()

### Contact & EmailJS API

After the showcase section comes the contact form which enables users to directly contact the owner with their key information and ideas. The form uses the reuire attribute to force the user into entering name, email and comment, and if they have it the GitHub username and LinkedIn url. Allowing the owner to view the users work and profile before replying.

![contact/ request form]()

The form is wired up to the [EmailJS API](https://www.emailjs.com/). Meaning the user can send a request directly to the owner, while the site owner can recieve all necessary information to reply or review the users profiles. Once a request is sent the user recieves a confirmation messageon the site personalised with their name input and ability to send a new request.

![Request sent confirmation]()

### Footer

Colored the same as the navbar the footer contains another 'download cv' link to a pdf and social links. All links interact when hovered, changing color to the familiar orange which a user knows is for clicking.

![Footer]()