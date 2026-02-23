# MyPersonalSite
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Claudio1009/MyPersonalSite)

This repository contains the source code for my personal portfolio website. It is a single-page application built to showcase my skills, educational background, and projects. The site is developed using HTML, CSS, and JavaScript, featuring a clean, responsive design with interactive elements.

## Features

*   **Fully Responsive Design:** Adapts seamlessly to various screen sizes, from mobile phones to desktop monitors.
*   **Dark/Light Theme:** Includes a theme switcher that toggles between dark and light modes, saving the user's preference in their browser's local storage.
*   **Dynamic UI Elements:**
    *   A sticky navigation header that appears on scroll.
    *   A "Scroll to Top" button for easy navigation.
    *   Active navigation link highlighting that corresponds to the visible section of the page.
*   **Smooth Scroll Animations:** Utilizes the ScrollReveal.js library to animate elements into view as the user scrolls down the page.
*   **Integrated Contact Form:** A functional contact form that uses Formspree to handle email submissions directly from the site.

## Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript
*   **Libraries:**
    *   [Font Awesome](https://fontawesome.com/): For a wide range of icons.
    *   [ScrollReveal.js](https://scrollrevealjs.org/): For easy and elegant scroll animations.
    *   [Swiper.js](https://swiperjs.com/): For the touch-enabled portfolio carousel.

## Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Claudio1009/MyPersonalSite.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd MyPersonalSite
    ```
3.  **Open the application:**
    Open the `index.html` file in your favorite web browser.

## File Structure

The project is organized with a clear and straightforward structure:

```
.
├── index.html          # The main HTML structure of the portfolio
├── send-email.php      # An unused PHP script for an alternative contact form
├── image/              # Contains all static images, icons, and photos
├── js/
│   └── main.js         # Core JavaScript for interactivity, themes, and animations
└── styles/
    └── styles.css      # All CSS styling, including responsive design and theming
