<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/christianrhodes18/movie-tv-tracker">
    <img src="README_images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Movie and TV Tracker App</h3>

  <p align="center">
    This project was inspired by the tracking and rating systems from Letterboxd. I want to make a clean and minimalistic interface where users can search and view any movie, add it to their list and rate it. 
    <br />
    <a href="https://github.com/christianrhodes18/movie-tv-tracker"><strong>Explore the docs (here)»</strong></a>
    <br />
    <br />
    <a href="">View Demo (Not Live yet)</a>
    ·
    <a href="https://github.com/christianrhodes18/movie-tv-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/christianrhodes18/movie-tv-tracker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Movie Tracker Preview](/README_images/preview-gif.gif)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Vercel][Vercel]][Vercel-url]
* [![TheMovieDB][TheMovieDB]][TheMovieDB-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Week 1 (3-06-23)
    - [x] Create project + README and add to GitHub
    - [x] Begin work on Movie info page - full vh + vw (static content)
    - [x] Movie info page layout done
    - [x] Movie info page styled
    This week went well. My takeaways are that mobile-first is recommended, and it helps to get your designs as close to final as possible before development begins. 
- [ ] Week 2 (3-13-23)
    - [x] Begin floating NAV
    - [ ] Icon as home
    - [ ] Centered search - animate expand to fill width
    - [ ] User stats w opaque bg (static for now)
    - [ ] User profile icon (static for now)
- [ ] Week 3 (3-20-23)
    - [ ] Get data back from Movie DB API
    - [ ] Hydrate movie info page with response data
- [ ] Week 4 (3-27-23)
    - [ ] Search functionality (I’m thinking of doing a PiP interface w scroll. Search title or genre)
- [ ] Week 5 (4-3-23)
    - [ ] User profile page (static for now)
    - [ ] Begin user auth (design + engineer)
- [ ] Week 6 (4-10-23)
    - [ ] Complete user auth (store user info + image storage)
    - [ ] API with user table and hydrate profile page
    - [ ] pfp, bio, watchlist, ratings
- [ ] Week 7 (4-17-23)
    - [ ] Add infographs for user ratings
    - [ ] Style polish phase (anims, color + font pass, intersection observers, etc.)
    - [ ] Make user profiles more fun
- [ ] Week 8 (4-24-23)
    - [ ] Host + purchase domain?


**Bonus Features**
- [ ] Add other users
    - [ ] View other user profiles
    - [ ] Profile public or private toggle
- [ ] Shuffle fonts / theme for different titles (based on genre? color?)
- [ ] Lists
- [ ] Shortcut for search (ctrl + k)
- [ ] User profile themes
- [ ] Multiple language support

See the [open issues](https://github.com/christianrhodes18/movie-tv-tracker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/christianrhodes18/christianrhodes18.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Christian Rhodes - [@chrisrhodesy](https://twitter.com/chrisrhodesy) - thechristianrhodes@gmail.com

Project Link: [https://github.com/christianrhodes18/movie-tv-tracker](movie-tv-tracker)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/christianrhodes18/christianrhodes18.svg?style=for-the-badge
[contributors-url]: https://github.com/christianrhodes18/movie-tv-tracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/christianrhodes18/christianrhodes18.svg?style=for-the-badge
[forks-url]: https://github.com/christianrhodes18/movie-tv-tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/christianrhodes18/christianrhodes18.svg?style=for-the-badge
[stars-url]: https://github.com/christianrhodes18/movie-tv-tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/christianrhodes18/christianrhodes18.svg?style=for-the-badge
[issues-url]: https://github.com/christianrhodes18/movie-tv-tracker/issues
[license-shield]: https://img.shields.io/github/license/christianrhodes18/christianrhodes18.svg?style=for-the-badge
[license-url]: https://github.com/christianrhodes18/movie-tv-tracker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/christianrhodes18
[product-screenshot]: https://github.com/christianrhodes18/movie-tv-tracker/README_images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/Tailwind-styling-blue?style=for-the-badge&logo=appveyor
[Tailwind-url]: https://tailwindcss.com/
[TheMovieDB]: https://img.shields.io/badge/TheMovieDB-movie_api-yellowgreen?style=for-the-badge&logo=appveyor
[TheMovieDB-url]: https://www.themoviedb.org/documentation/api
[Vercel]: https://img.shields.io/badge/Vercel-hosting_cd+cd-blueviolet?style=for-the-badge&logo=appveyor
[Vercel-url]: https://vercel.com/

[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
