---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: WoollyM
titleTemplate: The PHP DataFrames library for data manipulation and analysi

hero:
  name: "WoollyM"
  text: "Documentation"
  tagline: The PHP DataFrames library for data manipulation and analysis
  image:
    src: https://raw.githubusercontent.com/MammothPHP/WoollyM/master/logos/woollym_logo.png
    alt: WoollyM logo

  actions:
    - theme: brand
      text: Getting Started
      link: /Getting_Started/Installation
    - theme: alt
      text: User Manual
      link: /Manual/

features:
  - title: Import & Export
    details: Woolly supports import and export from various sources like Excel, Json or SQL query (PDO).
  - title: Data access & Manipulation
    details: Access and manipulate data through a nice high-level API inspired by SQL and human language. 
  - title: Data analysis
    details: Get filtered and grouped aggregates calculations on your data in an easy and optimized way.
  - title: Work directly on external data
    details: Work in memory, or directly and transparently interact with external data through the use of drivers. Woolly provides a native SQL PDO driver.
  - title: Extensible
    details: Create your own aggregated metrics. Use your own drivers for accessing external data. Support extends WoollyM classes <em>(no more final)</em>.
---

