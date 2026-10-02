/**
 * KRESNA DANUARTA — PROFESSIONAL PHOTOGRAPHER PORTFOLIO
 * Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Photo Data Model ---
  const photoArchive = [
    {
      id: 1,
      title: "The Silk Elegance",
      category: "commercial",
      categoryLabel: "Commercial Advertising",
      year: "2026",
      location: "Studio Lumina, Jakarta",
      camera: "Hasselblad H6D-100c",
      lens: "HC 100mm f/2.2",
      exposure: "f/4.0 • 1/160s • ISO 64",
      lighting: "Broncolor Para 133 Strobe",
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 2,
      title: "Monolith No. IV",
      category: "architecture",
      categoryLabel: "Arsitektur & Interior",
      year: "2025",
      location: "SCBD Architecture Pavilion, Jakarta",
      camera: "Sony Alpha 1",
      lens: "FE 24-70mm f/2.8 GM II",
      exposure: "f/8.0 • 1/250s • ISO 100",
      lighting: "Direct Geometric Sunlight",
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 3,
      title: "Executive Serenity",
      category: "portrait",
      categoryLabel: "Portrait & Executive",
      year: "2026",
      location: "Senopati Studio, Jakarta Selatan",
      camera: "Sony Alpha 1",
      lens: "FE 85mm f/1.4 GM",
      exposure: "f/1.8 • 1/500s • ISO 100",
      lighting: "Key Softbox Octa 120 + Rim Reflector",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 4,
      title: "Chroma & High Fashion",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      year: "2026",
      location: "Jakarta Fashion Runway Series",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 80mm f/1.9",
      exposure: "f/1.9 • 1/320s • ISO 100",
      lighting: "Continuous Arri Skypanel Ambient",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 5,
      title: "Luxury Resort Campaign",
      category: "commercial",
      categoryLabel: "Commercial Advertising",
      year: "2025",
      location: "Ubud, Bali",
      camera: "Sony Alpha 1",
      lens: "FE 16-35mm f/2.8 GM II",
      exposure: "f/8.0 • 1/125s • ISO 100",
      lighting: "Golden Hour Natural Backlight",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 6,
      title: "Metropolitan Horizon",
      category: "architecture",
      categoryLabel: "Arsitektur & Interior",
      year: "2025",
      location: "Sudirman CBD, Jakarta",
      camera: "Sony Alpha 1",
      lens: "FE 24-70mm f/2.8 GM II",
      exposure: "f/9.0 • 1/400s • ISO 100",
      lighting: "Clear Blue Afternoon Specular",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 7,
      title: "The Architect’s Gaze",
      category: "portrait",
      categoryLabel: "Portrait & Executive",
      year: "2025",
      location: "Menteng, Jakarta Pusat",
      camera: "Leica M11-P",
      lens: "Summilux-M 50mm f/1.4",
      exposure: "f/1.4 • 1/800s • ISO 125",
      lighting: "Soft Indirect Window Ambient",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 8,
      title: "Golden Hour Fabric",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      year: "2026",
      location: "Nusa Dua, Bali",
      camera: "Sony Alpha 1",
      lens: "FE 85mm f/1.4 GM",
      exposure: "f/1.8 • 1/2000s • ISO 100",
      lighting: "Sunset Coastal Flare",
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 9,
      title: "Spiral Geometry",
      category: "architecture",
      categoryLabel: "Arsitektur & Interior",
      year: "2025",
      location: "Museum Macan Gallery, Jakarta",
      camera: "Hasselblad 907X",
      lens: "XCD 30mm f/3.5",
      exposure: "f/8.0 • 1/2s • ISO 100",
      lighting: "Gallery Ceiling Skylight",
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 10,
      title: "Coastal Brand Story",
      category: "commercial",
      categoryLabel: "Commercial Advertising",
      year: "2025",
      location: "Labuan Bajo, NTT",
      camera: "Sony Alpha 1",
      lens: "FE 24-70mm f/2.8 GM II",
      exposure: "f/6.3 • 1/500s • ISO 100",
      lighting: "Crisp Tropical Daylight",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 11,
      title: "Natural Window Glow",
      category: "portrait",
      categoryLabel: "Portrait & Executive",
      year: "2026",
      location: "Studio Kemang, Jakarta",
      camera: "Hasselblad H6D-100c",
      lens: "HC 100mm f/2.2",
      exposure: "f/2.5 • 1/250s • ISO 100",
      lighting: "Large North Diffused Window",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 12,
      title: "Morning Mist Symphony",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      year: "2025",
      location: "Kintamani, Bali",
      camera: "Sony Alpha 1",
      lens: "FE 70-200mm f/2.8 GM II",
      exposure: "f/5.6 • 1/160s • ISO 200",
      lighting: "Early Sunrise Volumetric Haze",
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85"
    }
  ];

  let currentPhotoIndex = 0;
  let filteredPhotoIndices = photoArchive.map((_, i) => i);

  // --- Element Selectors ---
  const siteHeader = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const customCursor = document.getElementById('customCursor');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const photoCards = document.querySelectorAll('.photo-card');

  // Lightbox Selectors
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxSpinner = document.getElementById('lightboxSpinner');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxLocation = document.getElementById('lightboxLocation');
  const lightboxCamera = document.getElementById('lightboxCamera');
  const lightboxLens = document.getElementById('lightboxLens');
  const lightboxExposure = document.getElementById('lightboxExposure');
  const lightboxLighting = document.getElementById('lightboxLighting');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCopyLinkBtn = document.getElementById('lightboxCopyLinkBtn');

  // Split Slider Selectors
  const comparisonWrapper = document.getElementById('comparisonWrapper');
  const comparisonOverlay = document.getElementById('comparisonOverlay');
  const sliderHandle = document.getElementById('sliderHandle');

  // Toast & Utilities
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const bookingForm = document.getElementById('bookingForm');
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  // ==========================================================================
  // 1. CUSTOM LENS CURSOR
  // ==========================================================================
  if (customCursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      customCursor.style.left = `${cursorX}px`;
      customCursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);

    // Hover effect on photo cards & slider
    const interactiveElements = document.querySelectorAll('.photo-card, .comparison-wrapper');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => customCursor.classList.add('active-lens'));
      el.addEventListener('mouseleave', () => customCursor.classList.remove('active-lens'));
    });
  }

  // ==========================================================================
  // 2. HEADER SCROLL & ACTIVE LINK OBSERVER
  // ==========================================================================
  const handleScroll = () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach(sec => observer.observe(sec));

  // ==========================================================================
  // 3. MOBILE MENU TOGGLE
  // ==========================================================================
  if (menuToggle && mobileDrawer) {
    const toggleMenu = () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        menuToggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================================================
  // 4. PORTFOLIO FILTERING
  // ==========================================================================
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      photoCards.forEach((card, idx) => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, idx * 30);
        } else {
          card.classList.add('hidden');
        }
      });

      if (filterVal === 'all') {
        filteredPhotoIndices = photoArchive.map((_, i) => i);
      } else {
        filteredPhotoIndices = photoArchive
          .map((item, i) => item.category === filterVal ? i : -1)
          .filter(i => i !== -1);
      }
    });
  });

  // ==========================================================================
  // 5. LIGHTBOX FUNCTIONALITY
  // ==========================================================================
  const renderLightbox = (index) => {
    currentPhotoIndex = index;
    const photo = photoArchive[index];
    if (!photo) return;

    lightboxSpinner.classList.add('loading');
    lightboxImg.style.opacity = '0';

    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.title;

    lightboxImg.onload = () => {
      lightboxSpinner.classList.remove('loading');
      lightboxImg.style.opacity = '1';
    };

    lightboxCategory.textContent = photo.categoryLabel;
    const posInFiltered = filteredPhotoIndices.indexOf(index);
    const displayNum = posInFiltered !== -1 ? posInFiltered + 1 : 1;
    const totalNum = filteredPhotoIndices.length;
    lightboxCounter.textContent = `${String(displayNum).padStart(2, '0')} / ${String(totalNum).padStart(2, '0')}`;

    lightboxTitle.textContent = photo.title;
    lightboxLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${photo.location}`;
    lightboxCamera.textContent = photo.camera;
    lightboxLens.textContent = photo.lens;
    lightboxExposure.textContent = photo.exposure;
    lightboxLighting.textContent = photo.lighting;
  };

  const openLightbox = (photoId) => {
    const idx = photoArchive.findIndex(item => item.id === parseInt(photoId, 10));
    if (idx !== -1) {
      renderLightbox(idx);
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      lightboxModal.setAttribute('aria-hidden', 'false');
    }
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    lightboxModal.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  };

  const showNextPhoto = () => {
    const currentFilteredPos = filteredPhotoIndices.indexOf(currentPhotoIndex);
    const nextFilteredPos = (currentFilteredPos + 1) % filteredPhotoIndices.length;
    renderLightbox(filteredPhotoIndices[nextFilteredPos]);
  };

  const showPrevPhoto = () => {
    const currentFilteredPos = filteredPhotoIndices.indexOf(currentPhotoIndex);
    const prevFilteredPos = (currentFilteredPos - 1 + filteredPhotoIndices.length) % filteredPhotoIndices.length;
    renderLightbox(filteredPhotoIndices[prevFilteredPos]);
  };

  photoCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openLightbox(id);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextPhoto);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevPhoto);

  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextPhoto();
    if (e.key === 'ArrowLeft') showPrevPhoto();
  });

  if (lightboxCopyLinkBtn) {
    lightboxCopyLinkBtn.addEventListener('click', () => {
      const currentPhoto = photoArchive[currentPhotoIndex];
      const shareUrl = `${window.location.origin}${window.location.pathname}#karya-${currentPhoto.id}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast(`Tautan karya "${currentPhoto.title}" berhasil disalin!`);
      }).catch(() => {
        showToast(`Tautan karya "${currentPhoto.title}" siap dibagikan.`);
      });
    });
  }

  // ==========================================================================
  // 6. BEFORE & AFTER SPLIT COMPARISON SLIDER
  // ==========================================================================
  if (comparisonWrapper && comparisonOverlay && sliderHandle) {
    let isDragging = false;

    const setSliderPosition = (xPos) => {
      const rect = comparisonWrapper.getBoundingClientRect();
      let offsetX = xPos - rect.left;
      let percentage = (offsetX / rect.width) * 100;

      if (percentage < 2) percentage = 2;
      if (percentage > 98) percentage = 98;

      comparisonOverlay.style.width = `${percentage}%`;
      sliderHandle.style.left = `${percentage}%`;
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setSliderPosition(clientX);
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setSliderPosition(clientX);
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    comparisonWrapper.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    comparisonWrapper.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);
  }

  // ==========================================================================
  // 7. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  let toastTimer = null;
  function showToast(message, iconClass = 'fa-solid fa-check') {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    const toastIcon = document.getElementById('toastIcon');
    if (toastIcon) {
      toastIcon.innerHTML = `<i class="${iconClass}"></i>`;
    }

    toastNotification.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4000);
  }

  // Salin Email Buttons
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'kresna.danuarta@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email disalin: ${email}`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });

  // ==========================================================================
  // 8. INTERACTIVE BOOKING FORM SUBMISSION
  // ==========================================================================
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      const nameInput = document.getElementById('clientName');
      const emailInput = document.getElementById('clientEmail');
      const phoneInput = document.getElementById('clientPhone');
      const messageInput = document.getElementById('projectMessage');

      const validateField = (input, isValid) => {
        const group = input.closest('.form-group');
        if (!isValid) {
          group.classList.add('has-error');
          hasError = true;
        } else {
          group.classList.remove('has-error');
        }
      };

      validateField(nameInput, nameInput.value.trim().length > 1);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(emailInput, emailRegex.test(emailInput.value.trim()));
      validateField(phoneInput, phoneInput.value.trim().length >= 8);
      validateField(messageInput, messageInput.value.trim().length > 5);

      if (hasError) return;

      const submitBtn = document.getElementById('submitFormBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Mengirimkan Pesan...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        bookingForm.reset();

        showToast(
          'Permintaan jadwal berhasil dikirim! Kresna akan segera merespons Anda.',
          'fa-solid fa-paper-plane'
        );
      }, 1000);
    });

    ['clientName', 'clientEmail', 'clientPhone', 'projectMessage'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          const group = el.closest('.form-group');
          if (group) group.classList.remove('has-error');
        });
      }
    });
  }

  // ==========================================================================
  // 9. ANIMASI REVEAL SCROLL
  // ==========================================================================
  const animatedElements = document.querySelectorAll(
    '.contact-card, .experience-item, .photo-card, .gear-card'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    revealObserver.observe(el);
  });
});
