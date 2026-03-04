---
layout: page
title: Contact
permalink: /contact/
---

<section class="content-section">
  <h2 class="section-title">Get In Touch</h2>
  <p class="about-text">Feel free to reach out for collaborations or just a friendly chat.</p>
  
  <div class="contact-links">
    <a href="mailto:{{ site.email }}" class="contact-link">
      <i class="fas fa-envelope"></i>
      <span>Email</span>
    </a>
    {% if site.github_username %}
    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="contact-link">
      <i class="fab fa-github"></i>
      <span>GitHub</span>
    </a>
    {% endif %}
  </div>
</section>