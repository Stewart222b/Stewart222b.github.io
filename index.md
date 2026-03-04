---
layout: page
title: Home
permalink: /
---

<section class="content-section home-section">
  <h2 class="welcome-title">Welcome</h2>
  <p class="welcome-text">Hi, I'm <strong>{{ site.author.name }}</strong>.</p>
  <p class="welcome-text">{{ site.author.bio | replace: '**', '' }}</p>
  <p class="welcome-text">I'm a developer based in Shanghai, CN.</p>
  
  <div class="home-links">
    <a href="/about/" class="cta-button">Learn More About Me</a>
    <a href="/projects/" class="cta-button secondary">View My Projects</a>
  </div>
</section>