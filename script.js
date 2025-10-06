// PROJECT DATA FOR ALL POP UPS
const projectData = {
  sumbioun: {
    title: "Sumbioun - coming soon",
    description:
      "In a post-extinction utopia where insect-mammalian hybrids evolve through dream-guarded metamorphosis, one young creature’s transformation is haunted by memories of another life — revealing that ancient humans may still exist. As her visions blur the line between dream and reality, she becomes the key to uncovering a hidden war between evolution and extinction itself.",
    galleries: {
      Sample: [{ src: "./sumbioun/sumbioun.mp4", type: "video" }],
    },
  },
  transference: {
    title: "Transference",
    galleries: {
      "Photo Documentation": [
        { src: "./transference/1.jpg", caption: "natural paint samples" },
        {
          src: "./transference/2.jpg",
          caption: "organic indigo being ground into paste for dying",
        },
        { src: "./transference/3.jpg", caption: "sodium chloride (NaCl)" },
        {
          src: "./transference/4.jpg",
          caption: "pattern making with found objects",
        },
        {
          src: "./transference/5.jpg",
          caption:
            "dyed cloth with tannins, indigo, and caracol púrpura (purple snail secretion",
        },
        {
          src: "./transference/6.jpg",
          caption: "organic indigo dyed cotton cloth",
        },
        {
          src: "./transference/7.jpg",
          caption: "tannin fabric tied with rusted wire for black patterns",
        },
        { src: "./transference/8.jpg", caption: "caracol púrpura dying vat" },
        { src: "./transference/10.jpg", caption: "organic indigo dying vat" },
      ],
    },
  },
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
  genai: {
    title: "Generative Samples",
    subtitle: "AI-Generated Work",
    galleries: {
      "Generative Work": [
        { src: "./genai/ysl2.jpg", caption: "YSL Sample", layout: "pinterest" },
        {
          src: "./genai/tesse.jpg",
          caption: "Branded Image, Tessé",
          layout: "pinterest",
        },
        {
          src: "./genai/pk.jpg",
          caption: " Proxima Kòsmos Exoplanet Render",
          layout: "pinterest",
        },
        {
          src: "./genai/moss.jpg",
          caption: "Custom Cover Image, Authors novel ",
          layout: "pinterest",
        },
        {
          src: "./genai/avilia.mp4",
          type: "video",
          caption: "Avilia - AI Avatar Sample",
          layout: "pinterest",
        },
        {
          src: "./genai/haunted.mp4",
          type: "video",
          caption: "Haunted Mini Film, Showcased: GenAI Fest",
          layout: "pinterest",
        },
      ],
    },
  },
  dream: {
    title: "Dream Collector",
    subtitle: "AI-Powered Dream Archive",
    description:
      "An web app and interactive installation that uses AI to turn your scattered dream memories into vivid visuals. – On the web app, you type in the fragments of a dream you recall, and an AI engine generates three images. – In the TouchDesigner installation, the AI-generated images materialize in a darkened space. Using hand gestures, you peel back a virtual veil to reveal your own dreamscapes and then swipe through others past dreams in real time.",
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
          caption: "Implimenting past image overlays to hand gesture interactions ",
          layout: "pinterest",
        },

        // {
        //   src: "./dream/smoke.mp4",
        //   type: "video",
        //   caption: "Smoke paintbrush testing",
        //   layout: "pinterest",
        // },
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
      gallery.className = `image-gallery gallery-${index + 1}`;

      // Check if this is The Void project for special layout
      const isVoidProject = project.title === "The Void";
      const isSumbioun = project.title === "Sumbioun";
      // Only apply 'void-gallery' to The Void and Sumbioun, not Generative
      if (isVoidProject || isSumbioun) {
        gallery.classList.add("void-gallery");
      }
      // Track loaded images for Masonry initialization
      let loadedImages = 0;
      const totalImages = images.length;

      const initializeMasonry = () => {
        // Skip Masonry for Void project - it uses CSS Grid
        if (isVoidProject) {
          return;
        }

        // Determine column width based on screen size for full width
        const galleryWidth = gallery.offsetWidth;
        const isMobile = window.innerWidth <= 480;
          if (projectId === "sumbioun") {
            videoContainer.classList.add("center-video");
          } else {
            videoContainer.classList.remove("center-video");
          }
        const isTablet = window.innerWidth <= 768;
        let columnWidth, gutter;

          videoContainer.classList.remove("center-video");
        if (isMobile) {
          columnWidth = galleryWidth; // Single column, full width
          gutter = 0;
        } else if (isTablet) {
          columnWidth = (galleryWidth - 10) / 2; // Two columns, full width
          gutter = 10;
        } else {
          // Calculate optimal columns for desktop full width
          const minColumnWidth = 300;
          const maxColumns = Math.floor(galleryWidth / minColumnWidth);
          const columns = Math.max(2, maxColumns); // At least 2 columns
          columnWidth = (galleryWidth - 20 * (columns - 1)) / columns;
          gutter = 20;
        }

        // Initialize Masonry after all images are loaded
        new Masonry(gallery, {
          itemSelector: ".gallery-image-wrapper",
          columnWidth: columnWidth,
          gutter: gutter,
          fitWidth: false, // Allow full width usage
        });
      };

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
            if (loadedImages === totalImages) {
              initializeMasonry();
            }
          };

          video.onerror = function () {
            console.warn(`Failed to load video: ${imageData.src}`);
            wrapper.style.display = "none";
            loadedImages++;
            if (loadedImages === totalImages) {
              initializeMasonry();
            }
          };

          // Remove click-to-expand for videos to allow normal playback controls
          // video.addEventListener('click', () => {
          //   expandMedia({ type: 'video', src: imageData.src, alt: imageData.caption || `${project.title} gallery video` });
          // });

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
            if (loadedImages === totalImages) {
              initializeMasonry();
            }
          };

          img.onload = function () {
            wrapper.style.opacity = "1";
            loadedImages++;
            if (loadedImages === totalImages) {
              initializeMasonry();
            }
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
    const imageOverlay = document.getElementById("imageOverlay");
    if (imageOverlay.classList.contains("active")) {
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
  });
