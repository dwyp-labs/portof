/**
 * KRESNA DANUARTA — PHOTOGRAPHER PORTFOLIO
 * Interactive behaviors: nav indicator, theme toggle, mobile drawer,
 * scroll reveal, gallery filter, lightbox, and contact form.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. THEME TOGGLE (Dark / Light)
  // =========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Restore saved theme
  const savedTheme = localStorage.getItem('kd-theme');
  if (savedTheme) html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('kd-theme', next);
    });
  }

  // =========================================================================
  // 2. FLOATING DOCK NAV — Sliding Pill Indicator
  // =========================================================================
  const nav = document.getElementById('mainNav');
  const navLinks = nav ? nav.querySelectorAll('.nav-link') : [];
  const indicator = document.getElementById('navIndicator');

  function moveIndicator(link) {
    if (!indicator || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const offsetX = linkRect.left - navRect.left - nav.clientLeft + nav.scrollLeft;

    indicator.style.width = linkRect.width + 'px';
    indicator.style.transform = `translateX(${offsetX - 4}px)`;
    indicator.style.opacity = '1';
  }

  function setActiveLink(target) {
    navLinks.forEach(l => l.classList.remove('active'));
    const activeLink = nav.querySelector(`.nav-link[data-target="${target}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      moveIndicator(activeLink);
    }
  }

  // Initialize indicator position
  const initialActive = nav ? nav.querySelector('.nav-link.active') : null;
  if (initialActive) {
    requestAnimationFrame(() => moveIndicator(initialActive));
  }

  // Click handler
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setActiveLink(link.getAttribute('data-target'));
    });
  });

  // Scroll spy
  const sections = document.querySelectorAll('section[id]');
  let scrollTimer;

  function onScroll() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveLink(current);
    }, 50);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // =========================================================================
  // 3. HEADER SHRINK ON SCROLL
  // =========================================================================
  const header = document.getElementById('header');

  function checkHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkHeaderScroll, { passive: true });
  checkHeaderScroll();

  // =========================================================================
  // 4. MOBILE DRAWER
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleDrawer() {
    const isOpen = mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open');
    mobileToggle.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleDrawer);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        toggleDrawer();
      }
    });
  });

  // =========================================================================
  // 5. SCROLL REVEAL ANIMATIONS
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // =========================================================================
  // 6. GALLERY FILTER
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeUp 0.4s var(--ease-out) forwards';
        } else {
          item.classList.add('hidden');
          item.style.animation = '';
        }
      });
    });
  });

  // =========================================================================
  // 7. LIGHTBOX
  // =========================================================================
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxOverlay = document.getElementById('lightboxOverlay');

  workItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.work-title')?.textContent || '';
      const meta = item.querySelector('.work-meta')?.textContent || '';

      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = title;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxMeta) lightboxMeta.textContent = meta;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => { if (lightboxImg) lightboxImg.src = ''; }, 300);
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // =========================================================================
  // 8. CONTACT FORM
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName');
      const email = document.getElementById('senderEmail');
      const message = document.getElementById('senderMessage');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Mohon isi semua kolom pesan.');
        return;
      }

      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Mengirim...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        if (toast) {
          toast.textContent = 'Terima kasih, pesan Anda sudah terkirim.';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3500);
        }
      }, 700);
    });
  }
});
