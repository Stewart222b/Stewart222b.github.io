---
layout: page
title: Skills
permalink: /skills/
---

<section class="content-section">
  <h2 class="section-title">Skills & Experience</h2>
  {% for category in site.data.skills.categories %}
  <div class="skills-category">
    <h3 class="skills-category-title">{{ category.name.en }}</h3>
    <div class="skills-grid">
      {% for skill in category.skills %}
      <span class="skill-item">{{ skill }}</span>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</section>