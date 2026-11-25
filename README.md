# Personal Portfolio Website

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Overview

A single-page personal portfolio built with HTML, CSS and vanilla JavaScript. It presents education, skills, projects and contact information, and demonstrates interactive interface behavior without a frontend framework.

## Features

- Five main sections: home, about, skills, portfolio and contact.
- Responsive navigation with mobile menu controls.
- Light/dark theme with browser localStorage persistence.
- Sticky header, active section highlighting and scroll-to-top control.
- ScrollReveal animations and Swiper carousel initialization.
- Contact form configured to submit to Formspree.
- Local CV and image assets.

## Technology stack

HTML5, CSS3, JavaScript, Font Awesome, ScrollReveal, Swiper and Formspree.

## Implementation

The HTML defines page content and section anchors. CSS handles visual presentation and theme classes. JavaScript responds to scrolling and user actions, updates navigation state, persists theme preferences and initializes external UI libraries.

The contact form uses an external service; the included send-email.php is an alternative handler not used by the current HTML form.

## Structure

```text
MyPersonalSite/
├── index.html
├── image/
├── js/main.js
├── styles/
│   ├── styles.css
│   └── swiper-bundle.min.css
├── send-email.php
└── README.md
```

## Run locally

```bash
git clone https://github.com/Claudio1009/MyPersonalSite.git
cd MyPersonalSite
```

Open index.html or use a static HTTP server. External libraries require internet connectivity. No frontend build step is required.

For a deployment of your own, replace the Formspree destination with an account you control, update profile information and review the publicly accessible CV. Do not enable the experimental PHP mail handler without validation and abuse protection.

## Future improvements

- Update portfolio content and education information.
- Complete project cards with repository links and descriptions.
- Verify carousel initialization and mobile behavior.
- Respect reduced-motion preferences and improve keyboard accessibility.
- Pin or self-host external dependencies.
- Add form validation and browser-based tests.

External contact delivery, deployment and browser compatibility have not been verified here.

## Author

Claudiu Marius Ciupitu — [GitHub](https://github.com/Claudio1009)
