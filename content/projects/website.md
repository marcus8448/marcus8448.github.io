---
title: Website
date: 2020-05-24T16:25:24-07:00
icon: https://avatars.githubusercontent.com/u/28928887?v=4
description: |
  My website. Built with Hugo, styled with TailwindCSS, and hosted on GitHub Pages.
repository: https://github.com/marcus8448/marcus8448.github.io
link: https://marcus8448.github.io/

languages:
  - hugo
  - tailwind
  - html5
---

## About
This website is generated using [Hugo] and hosted on GitHub Pages.
The theme is custom-designed using utility classes from [TailwindCSS].
The majority of the icons used on the site are from [Simple Icons] and [Font Awesome].

This iteration of the website replaced Bulma with Tailwind
to get more fine-grained control over the design of the website.
Another contributing factor was the excessive size of the Bulma CSS stylesheet.
The extensive use of CSS variables in Bulma 1.0 caused the minified stylesheet to exceed 100KB in size. 

## Previous Versions
### Jekyll (2020-2021)
This was my original website. It was generated with Jekyll, using a single handwritten template.
It had a basic navbar and minimal content.
I used Jekyll out of convenience - it was the native site generator for GitHub pages.

### Jekyll + Bulma (2021-2023)
In 2021, I decided to revamp the design of the website.
This time I used [Bulma] to style the page,
and proper templating to generate the content and layout (e.g., iterating over project pages to generate the index).

### Hugo + Bulma (2023-2025)
In 2023, I replaced Jekyll with [Hugo] for templating and generation.
I decided on Hugo for its strong templating, fast speed, and simple setup.
This time I tried to focus on making the website responsive, rather than solely desktop-oriented.

[Bulma]: https://bulma.io/
[Font Awesome]: https://github.com/FortAwesome/Font-Awesome
[Hugo]: https://gohugo.io/
[Simple Icons]: https://simpleicons.org/
[TailwindCSS]: https://tailwindcss.com/
