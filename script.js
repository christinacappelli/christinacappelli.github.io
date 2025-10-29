// PROJECT DATA FOR ALL POP UPS
const projectData = {
  void: {
    title: "The Void",
    subtitle: "Interactive Digital Experience",
    description:
      "<p>The Void is an interactive exploration of how people seek validation through digital spaces, curating idealized versions of themselves. Using webcam manipulation, it exposes the emptiness behind these self-presentations and reveals how we feed data into an impersonal system.</p>\n<p>Labels like 'Soul Decay' and 'Hollow Salvation' critique consumerism’s parasitic nature, suggesting that while we surrender our souls, we remain trapped in a self-perpetuating cycle that we eagerly return to. The piece highlights the soul-sucking pursuit of validation and the hollow rituals of digital consumption in the search for fulfillment. The interactive element underscores the audience’s role in perpetuating this cycle, while finding fleeting joy in the very system that drains them.</p>",
    videoUrl: "https://vimeo.com/1061865042?fl=pl&fe=sh",
    galleries: {
      Process: [
        {
          src: "./Tech/void/t4.gif",
          caption: "Process step 1: Initial design concepts",
        },
        {
          src: "./Tech/void/t1.png",
          caption: "Process step 2: Prototype development",
        },
        {
          src: "./Tech/void/t2.gif",
          caption: "Process step 3: Testing interactions",
        },
        {
          src: "./Tech/void/t3.gif",
          caption: "Process step 4: Refining visuals",
        },
        {
          src: "./Tech/void/t5.png",
          caption: "Process step 5: Final adjustments",
        },
        {
          src: "./Tech/void/t6.png",
          caption: "Process step 6: User feedback integration",
        },
        {
          src: "./Tech/void/t7.png",
          caption: "Process step 7: Final presentation",
        },
      ],
      "Interface Components": [
        {
          src: "./Tech/void/ss1.png",
          caption: "Interface component: Main dashboard",
        },
        {
          src: "./Tech/void/ss2.png",
          caption: "Interface component: User profile view",
        },
        {
          src: "./Tech/void/ss3.png",
          caption: "Interface component: Interaction panel",
        },
      ],
      "Show Snapshots": [
        {
          src: "./Tech/void/s1.png",
          caption: "Snapshot: Opening scene",
        },
        {
          src: "./Tech/void/s2.png",
          caption: "Snapshot: Midway interaction",
        },
        {
          src: "./Tech/void/s3.png",
          caption: "Snapshot: User engagement",
        },
        {
          src: "./Tech/void/s4.png",
          caption: "Snapshot: Dynamic visuals",
        },
        {
          src: "./Tech/void/s6.png",
          caption: "Snapshot: Final scene",
        },
        {
          src: "./Tech/void/s7.png",
          caption: "Snapshot: Closing credits",
        },
      ],
    },
  },
  dream: {
    title: "Dream Collector",
    subtitle: "AI-Powered Dream Archive",
    description:
      "An web app and interactive installation that uses AI to turn your scattered dream memories into vivid visuals. On the web app, you type in the fragments of a dream you recall, and an AI engine generates three images. In the TouchDesigner installation, the AI-generated images materialize in a darkened space. Using hand gestures, you peel back a virtual veil to reveal your own dreamscapes.",
    videoUrl: "https://vimeo.com/1098886681?fl=pl&fe=sh",
    galleries: {
      "Process Documentation": [
        {
          src: "./Tech/dream/recolor.jpg",
          caption: "Color images based on a set color pallete we created",
          layout: "pinterest",
        },

        {
          src: "./Tech/dream/colorm1.jpg",
          caption: "Color matching background to the feeling of the memory",
          layout: "pinterest",
        },

        {
          src: "./Tech/dream/tracking.jpg",
          caption:
            "Media Pipe testing and tracker for user inputs and paint brush styling",
          layout: "pinterest",
        },
        {
          src: "./Tech/dream/overlay.jpg",
          caption:
            "Implimenting past image overlays to hand gesture interactions ",
          layout: "pinterest",
        },
        {
          src: "./Tech/dream/smoke.jpg",
          caption: "Smoke paintbrush testing",
          layout: "pinterest",
        },

        {
          src: "./Tech/dream/tdappintegration.mp4",
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
          src: "./Tech/liminal/p1.jpg",
          caption: "Color tracking targets, microscope ",
          layout: "pinterest",
        },
        {
          src: "./Tech/liminal/p2.jpg",
          caption: "Dual display threshold tracking",
          layout: "pinterest",
        },
        {
          src: "./Tech/liminal/p3.jpg",
          caption: "Blob Tracking working with dual display tracking mirror ",
          layout: "pinterest",
        },
        {
          src: "./Tech/liminal/p4.jpg",
          caption: "Blob tracking, tracking but not clearing",
          layout: "pinterest",
        },
        {
          src: "./Tech/liminal/p5.jpg",
          caption: "Color Target Selections ",
          layout: "pinterest",
        },
      ],
    },
  },

  // "language-of-light": {
  //   title: "Language of Light",
  //   subtitle: "Immersive Light Installation",
  //   // videoUrl: "https://vimeo.com/1234567890",
  // },

  // sumbioun: {
  //   title: "Sumbioun",
  //   subtitle: "Audio-Visual Performance",
  //   description:
  //     "Sumbioun is a live audio-visual performance that blends generative visuals with ambient soundscapes. It creates a meditative experience, immersing the audience in a symphony of light and sound.",
  //   videoUrl: "https://vimeo.com/0987654321",
  // },
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
    popupContent.querySelector(".popup-description").innerHTML =
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

    // Remove galleries for now
    const gallerySection = popupContent.querySelector(".popup-gallery-section");
    gallerySection.innerHTML = ""; // Clear gallery content

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
