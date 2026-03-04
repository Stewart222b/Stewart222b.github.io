---
layout: page
title: Projects
permalink: /projects/
---

<section class="content-section">
  <h2 class="section-title">Projects</h2>
  <div class="projects-grid">
    {% for project in site.data.portfolio.projects %}
    <div class="project-card">
      <h3 class="project-title">{{ project.title.en }}</h3>
      <p class="project-description">{{ project.description.en }}</p>
      <div class="project-tags">
        {% for tag in project.tags %}
        <span class="project-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      <div class="project-links">
        {% if project.github %}
        <a href="{{ project.github }}" target="_blank" class="project-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        {% endif %}
        {% if project.demo %}
        <a href="{{ project.demo }}" target="_blank" class="project-link">
          <i class="fas fa-external-link-alt"></i> Demo
        </a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>