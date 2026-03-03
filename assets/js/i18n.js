/**
 * Language Switcher for Jekyll Portfolio Site
 * Handles Chinese-English language switching with localStorage persistence
 */

(function() {
  'use strict';

  // Default language
  const DEFAULT_LANG = 'en';
  
  // Language key for localStorage
  const STORAGE_KEY = 'portfolio-lang';

  /**
   * Get current language from localStorage or default
   */
  function getCurrentLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored || DEFAULT_LANG;
  }

  /**
   * Set language in localStorage
   */
  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateActiveButton(lang);
  }

  /**
   * Update active button state
   */
  function updateActiveButton(lang) {
    const buttons = document.querySelectorAll('.lang-switch button');
    buttons.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  /**
   * Fetch translation JSON
   */
  async function loadTranslations(lang) {
    try {
      const response = await fetch(`/assets/i18n/${lang}.json`);
      if (!response.ok) throw new Error('Failed to load translations');
      return await response.json();
    } catch (error) {
      console.error('Error loading translations:', error);
      return null;
    }
  }

  /**
   * Apply translations to elements with data-i18n attribute
   */
  async function applyTranslations(lang) {
    const translations = await loadTranslations(lang);
    if (!translations) return;

    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keys = el.dataset.i18n.split('.');
      let value = translations;
      
      for (const key of keys) {
        value = value?.[key];
      }
      
      if (value) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = value;
        } else {
          el.textContent = value;
        }
      }
    });

    // Translate elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const keys = el.dataset.i18nHtml.split('.');
      let value = translations;
      
      for (const key of keys) {
        value = value?.[key];
      }
      
      if (value) {
        el.innerHTML = value;
      }
    });

    // Translate elements with data-i18n-attr attribute
    // Format: attributeName:key.path
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrConfig = el.dataset.i18nAttr;
      const [attrName, keyPath] = attrConfig.split(':');
      
      const keys = keyPath.split('.');
      let value = translations;
      
      for (const key of keys) {
        value = value?.[key];
      }
      
      if (value) {
        el.setAttribute(attrName, value);
      }
    });

    // Update title
    if (translations.site && translations.site.title) {
      document.title = translations.site.title;
    }
  }

  /**
   * Initialize language switcher
   */
  function init() {
    const currentLang = getCurrentLang();
    document.documentElement.lang = currentLang;
    applyTranslations(currentLang);
    updateActiveButton(currentLang);

    // Add click handlers to language switcher buttons
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        if (lang && lang !== getCurrentLang()) {
          setLanguage(lang);
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();