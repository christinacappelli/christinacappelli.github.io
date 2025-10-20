
// PROJECT DATA FOR ALL POP UPS
const projectData = {
  void: {
    title: "The Void",
    subtitle: "Interactive Digital Experience",
    description:
      "An interactive exploration of digital identity and revealing how constant self-curation distorts authenticity, exposing a feedback loop where identity becomes shaped by the systems mediating it. Labels like “Soul Decay” and “Hollow Salvation” critique consumerism's parasitic nature, suggesting that while we surrender our souls, we remain trapped in a self-perpetuating cycle that we eagerly return to. ",
    videoUrl: "https://vimeo.com/1061865042?fl=pl&fe=sh",
    galleries: {
      Process: [
        "./void/t4.gif",
        "./void/t1.png",
        "./void/t2.gif",
        "./void/t3.gif",
        "./void/t5.png",
        "./void/t6.png",
        "./void/t7.png",
      ],
      "Interface Components": [
        "./void/ss1.png",
        "./void/ss2.png",
        "./void/ss3.png",
      ],
      "Show Snapshots": [
        "./void/s1.png",
        "./void/s2.png",
        "./void/s3.png",
        "./void/s4.png",
        "./void/s6.png",
        "./void/s7.png",
      ],
    },
  },
  dream: {
    title: "Dream Collector",
    subtitle: "AI-Powered Dream Archive",
    description:
      "An web app and interactive installation that uses AI to turn your scattered dream memories into vivid visuals. On the web app, you type in the fragments of a dream you recall, and an AI engine generates three images. In the TouchDesigner installation, the AI-generated images materialize in a darkened space. Using hand gestures, you peel back a virtual veil to reveal your own dreamscapes and then swipe through others past dreams in real time.",
    videoUrl: "https://vimeo.com/1098886681?fl=pl&fe=sh",
    galleries: {
      "Process Documentation": [
        {
          src: "./dream/recolor.jpg",
          caption: "Color images based on a set color pallete we created",
          layout: "pinterest",
        },

        {
          src: "./dream/colorm1.jpg",
          caption: "Color matching background to the feeling of the memory",
          layout: "pinterest",
        },

        {
          src: "./dream/tracking.jpg",
          caption:
            "Media Pipe testing and tracker for user inputs and paint brush styling",
          layout: "pinterest",
        },
        {
          src: "./dream/overlay.jpg",
          caption:
            "Implimenting past image overlays to hand gesture interactions ",
          layout: "pinterest",
        },
        {
          src: "./dream/smoke.jpg",
          caption: "Smoke paintbrush testing",
          layout: "pinterest",
        },

        {
          src: "./dream/tdappintegration.mp4",
          type: "video",
          caption:
            "Integration of OpenAI into webapp and webapp into TouchDesigner",
          layout: "pinterest",
        },
      ],
    },
  },

  liminal: {
    title: "Liminal Lens",
    subtitle: "Interactive Bio-Digital Installation",
    description:
      "An interactive installation that visualizes the collective movements of Volvox algae to reveal the hidden rhythms of natural life. Translating microscopic dynamics into immersive visuals, it invites viewers to reflect on scale, perception, and their role as cohabitants in an ecological space beyond human control.",
    videoUrl: "https://vimeo.com/791984894?fl=pl&fe=sh",
    galleries: {
      Process: [
        {
          src: "./liminal/p1.jpg",
          caption: "Color tracking targets, microscope ",
          layout: "pinterest",
        },
        {
          src: "./liminal/p2.jpg",
          caption: "Dual display threshold tracking",
          layout: "pinterest",
        },
        {
          src: "./liminal/p3.jpg",
          caption: "Blob Tracking working with dual display tracking mirror ",
          layout: "pinterest",
        },
        {
          src: "./liminal/p4.jpg",
          caption: "Blob tracking, tracking but not clearing",
          layout: "pinterest",
        },
        {
          src: "./liminal/p5.jpg",
          caption: "Color Target Selections ",
          layout: "pinterest",
        },
      ],
    },
  },

};

// Popup functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing popup functionality...");
  
  const popup = document.getElementById("projectPopup");
  const popupContent = popup.querySelector(".popup-content");
  const closeButton = popup.querySelector(".popup-close");
  const projectCards = document.querySelectorAll(".project-card");

  console.log("Found elements:", {
    popup: !!popup,
    popupContent: !!popupContent,
    closeButton: !!closeButton,
    projectCardsCount: projectCards.length
  });

  function showPopup(projectId) {
    console.log("showPopup called with:", projectId);
    const project = projectData[projectId];
    if (!project) {
      console.error("Project not found:", projectId);
      console.log("Available projects:", Object.keys(projectData));
      return;
    }

    // Populate popup content
    popupContent.querySelector(".popup-title").textContent = project.title;
    popupContent.querySelector(".popup-subtitle").textContent =
      project.subtitle;
    popupContent.querySelector(".popup-description").textContent =
      project.description;

    // Handle video embed
    const videoContainer = popupContent.querySelector(".popup-video-container");
    if (project.videoUrl && project.videoUrl.includes("vimeo.com")) {
      const videoId = project.videoUrl.split("?")[0].split("/").pop();
      videoContainer.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      videoContainer.classList.add("has-video");
    } else {
      videoContainer.innerHTML = "";
      videoContainer.classList.remove("has-video");
    }

    // Handle body text
    const bodyTextContainer = popupContent.querySelector(".popup-body-text");
    if (project.bodyText) {
      bodyTextContainer.innerHTML = `<p>${project.bodyText}</p>`;
      bodyTextContainer.style.display = "block";
    } else {
      bodyTextContainer.innerHTML = "";
      bodyTextContainer.style.display = "none";
    }

    // Populate galleries
    const gallerySection = popupContent.querySelector(".popup-gallery-section");
    gallerySection.innerHTML = ""; // Clear existing galleries

    Object.entries(project.galleries).forEach(([title, images], index) => {
      const galleryContainer = document.createElement("div");
      galleryContainer.className = "gallery-container";

      const galleryTitle = document.createElement("h4");
      galleryTitle.className = "gallery-title";
      galleryTitle.textContent = title;

  const gallery = document.createElement("div");
  // Use the unified gallery class for stacked full-width layout
  gallery.className = `image-gallery gallery-${index + 1}`;
      // Track loaded images (we simply reveal items when their media loads)
      let loadedImages = 0;
      const totalImages = images.length;

  images.forEach((imageData) => {
        const wrapper = document.createElement("div");
        wrapper.className = "gallery-image-wrapper";

        const isObject = typeof imageData === "object";
        const isVideo =
          isObject &&
          (imageData.type === "video" ||
            /\.(mp4|webm|mov)$/i.test(imageData.src));

        if (isVideo) {
          const video = document.createElement("video");
          video.className = "gallery-video";
          video.controls = true;
          video.playsInline = true;
          video.muted = true;
          video.preload = "metadata";

          const source = document.createElement("source");
          source.src = imageData.src;
          source.type = "video/mp4";
          video.appendChild(source);

          // Handle video load (metadata)
          video.onloadedmetadata = function () {
            wrapper.style.opacity = "1";
            loadedImages++;
          };

          video.onerror = function () {
            console.warn(`Failed to load video: ${imageData.src}`);
            wrapper.style.display = "none";
            loadedImages++;
          };
          wrapper.appendChild(video);
        } else {
          const img = document.createElement("img");
          img.className = "gallery-image";
          img.alt = isObject
            ? imageData.caption
            : `${project.title} gallery image`;

          img.onerror = function () {
            console.warn(
              `Failed to load image: ${isObject ? imageData.src : imageData}`
            );
            wrapper.style.display = "none";
            loadedImages++;
          };

          img.onload = function () {
            wrapper.style.opacity = "1";
            loadedImages++;
          };

          wrapper.appendChild(img);
          img.src = isObject ? imageData.src : imageData;

          img.addEventListener("click", () => {
            expandMedia({ type: "image", src: img.src, alt: img.alt });
          });
        }

        if (isObject && imageData.caption) {
          const caption = document.createElement("div");
          caption.className = "gallery-caption";
          caption.textContent = imageData.caption;
          wrapper.appendChild(caption);
        }

        gallery.appendChild(wrapper);
      });
      galleryContainer.appendChild(galleryTitle);
      galleryContainer.appendChild(gallery);
      gallerySection.appendChild(galleryContainer);
      // Initialize Masonry for this gallery after a short timeout to ensure CSS widths applied
      const initializeMasonry = () => {
        if (typeof Masonry === 'undefined') return;
        // Destroy previous instance if any
        if (gallery._msn) {
          try { gallery._msn.destroy(); } catch (e) { /* ignore */ }
        }
        gallery._msn = new Masonry(gallery, {
          itemSelector: '.gallery-image-wrapper',
          columnWidth: gallery.querySelector('.gallery-image-wrapper') || '.gallery-image-wrapper',
          gutter: 20,
          fitWidth: false
        });
      };

      // Give media a moment to load and then init Masonry
      setTimeout(initializeMasonry, 120);

      // Re-layout on window resize
      let resizeTimer;
      const relayoutOnResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (gallery._msn) gallery._msn.layout();
        }, 150);
      };
      window.addEventListener('resize', relayoutOnResize);
    });
    // Show popup
    popup.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function hidePopup() {
    popup.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling

    // Clean up galleries
    const galleries = popup.querySelectorAll(".image-gallery");
    galleries.forEach((gallery) => {
      gallery.innerHTML = "";
    });
  }

  // Image expansion functionality
  let currentImageIndex = 0;
  let allMedia = [];

  function expandMedia(item) {
    // Collect all media (images/videos) from all galleries in the current popup
    allMedia = [];
    const galleries = popup.querySelectorAll(".image-gallery");
    galleries.forEach((gallery) => {
      gallery.querySelectorAll(".gallery-image").forEach((img) => {
        allMedia.push({ type: "image", src: img.src, alt: img.alt });
      });
      gallery.querySelectorAll("video.gallery-video").forEach((video) => {
        const source = video.querySelector("source");
        allMedia.push({
          type: "video",
          src: source ? source.src : video.currentSrc,
          alt: video.getAttribute("aria-label") || "Gallery video",
        });
      });
    });

    // Find the index of the clicked media
    currentImageIndex = allMedia.findIndex((m) => m.src === item.src);
    if (currentImageIndex === -1) currentImageIndex = 0;

    showExpandedMedia();
  }

  function showExpandedMedia() {
    const overlay = document.getElementById("imageOverlay");
    const expandedImg = overlay.querySelector(".expanded-image");
    const counter = overlay.querySelector(".image-counter");
    const prevBtn = overlay.querySelector(".image-nav-prev");
    const nextBtn = overlay.querySelector(".image-nav-next");

    if (allMedia.length === 0) return;

    const current = allMedia[currentImageIndex];
    expandedImg.src = current.src;
    expandedImg.alt = current.alt;

    // Update counter
    counter.textContent = `${currentImageIndex + 1} / ${allMedia.length}`;

    // Update button states
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === allMedia.length - 1;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function navigateImage(direction) {
    if (direction === "prev" && currentImageIndex > 0) {
      currentImageIndex--;
    } else if (
      direction === "next" &&
      currentImageIndex < allMedia.length - 1
    ) {
      currentImageIndex++;
    }
    showExpandedMedia();
  }

  function closeExpandedImage() {
    const overlay = document.getElementById("imageOverlay");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    allMedia = [];
    currentImageIndex = 0;
  }

  // Event listeners
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("Card clicked!");
      const projectId = card.getAttribute("data-project");
      console.log("Project ID:", projectId);
      if (projectId) {
        showPopup(projectId);
      } else {
        console.error("No project ID found on card");
      }
    });
  });

  // Close popup when clicking close button or overlay
  closeButton.addEventListener("click", hidePopup);
  popup.querySelector(".popup-overlay").addEventListener("click", hidePopup);

  // Image overlay event listeners
  const imageOverlay = document.getElementById("imageOverlay");
  const imageOverlayClose = imageOverlay.querySelector(".image-overlay-close");
  const prevBtn = imageOverlay.querySelector(".image-nav-prev");
  const nextBtn = imageOverlay.querySelector(".image-nav-next");

  imageOverlayClose.addEventListener("click", closeExpandedImage);
  prevBtn.addEventListener("click", () => navigateImage("prev"));
  nextBtn.addEventListener("click", () => navigateImage("next"));

  imageOverlay.addEventListener("click", (e) => {
    if (e.target === imageOverlay) {
      closeExpandedImage();
    }
  });

  // Handle keyboard navigation
  document.addEventListener("keydown", (e) => {
  // Check if image overlay is open
  if (imageOverlay && imageOverlay.classList.contains("active")) {
      switch (e.key) {
        case "Escape":
          closeExpandedImage();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
      }
      return;
    }

    // Original popup keyboard handling
    if (popup.style.display !== "block") return;

    switch (e.key) {
      case "Escape":
        hidePopup();
        break;
      case "ArrowLeft":
        // Scroll galleries left
        const galleries = popup.querySelectorAll(".image-gallery");
        galleries.forEach((gallery) => {
          gallery.scrollBy({ left: -300, behavior: "smooth" });
        });
        break;
      case "ArrowRight":
        // Scroll galleries right
        const galleriesRight = popup.querySelectorAll(".image-gallery");
        galleriesRight.forEach((gallery) => {
          gallery.scrollBy({ left: 300, behavior: "smooth" });
        });
        break;
    }
  });

  // Prevent clicking inside popup content from closing the popup
  popupContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // About popup functionality
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutPopup = document.getElementById("aboutPopup");
  const aboutCloseBtn = aboutPopup.querySelector(".popup-close");

  aboutBtn.addEventListener("click", () => {
    aboutPopup.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  aboutCloseBtn.addEventListener("click", () => {
    aboutPopup.style.display = "none";
    document.body.style.overflow = "";
  });

  aboutPopup.querySelector(".popup-overlay").addEventListener("click", () => {
    aboutPopup.style.display = "none";
    document.body.style.overflow = "";
  });

  aboutPopup.querySelector(".popup-content").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  });
