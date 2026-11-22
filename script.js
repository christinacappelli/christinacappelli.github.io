// Theme toggle (light / dark)
function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    btn.setAttribute(
      "title",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  });
}

function initThemeToggle() {
  const theme = getPreferredTheme();
  applyTheme(theme);
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      applyTheme(next);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}

// PROJECT DATA FOR ALL POP UPS
const projectData = {
  nyu: {
    title: "New York University",
    // subtitle: "Studio Lead · Media Production",
    description:
      "<p>As a studio lead, I produced media assets for installations, technology showcases, and digital campaigns across web and social channels. Responsibilities included directing interviews and studio shoots, capturing photo and video, debugging hardware/software prototypes on set, and managing procurement.</p>",

    galleries: {
      Gallery: [
        { src: "./Producer/nyu/1.jpg" },
        { src: "./Producer/nyu/2.jpg" },
        { src: "./Producer/nyu/3.jpg" },
        { src: "./Producer/nyu/4.jpg" },
        { src: "./Producer/nyu/5.jpg" },
        { src: "./Producer/nyu/6.jpg" },
        { src: "./Producer/nyu/7.png" },
        { src: "./Producer/nyu/8.jpg" },
        { src: "./Producer/nyu/9.jpg" },
      ],
    },

    videoUrls: [
      "https://vimeo.com/813250045?fl=pl&fe=vl",
      "https://vimeo.com/813249420?fl=pl&fe=vl",
      "https://vimeo.com/827751610?fl=pl&fe=vl",
      "https://vimeo.com/813248034?fl=pl&fe=vl",
      "https://vimeo.com/822134987?fl=pl&fe=vl",
      "https://vimeo.com/813248161?fl=pl&fe=vl",
    ],
  },
  void: {
    title: "The Void",
    subtitle: "Interactive Digital Experience",
    description:
      "<p>The Void is an interactive exploration of how people seek validation through digital spaces, curating idealized versions of themselves. Using webcam manipulation, it exposes the emptiness behind these self-presentations and reveals how we feed data into an impersonal system.</p>\n<p>Labels like 'Soul Decay' and 'Hollow Salvation' critique consumerism’s parasitic nature, suggesting that while we surrender our souls, we remain trapped in a self-perpetuating cycle that we eagerly return to. The piece highlights the soul-sucking pursuit of validation and the hollow rituals of digital consumption in the search for fulfillment. The interactive element underscores the audience’s role in perpetuating this cycle, while finding fleeting joy in the very system that drains them.</p>",
    videoUrl: "https://vimeo.com/1138959577",
    galleries: {
      Snapshots: [
        {
          src: "./Tech/void/t4.gif",
          // caption: "Process step 1: Initial design concepts",
        },
        {
          src: "./Tech/void/t1.png",
          // caption: "Process step 2: Prototype development",
        },
        {
          src: "./Tech/void/t2.gif",
          // caption: "Process step 3: Testing interactions",
        },
        {
          src: "./Tech/void/t5.png",
          // caption: "Process step 5: Final adjustments",
        },
        {
          src: "./Tech/void/t6.png",
          // caption: "Process step 6: User feedback integration",
        },
        {
          src: "./Tech/void/t7.png",
          // caption: "Process step 7: Final presentation",
        },
        {
          src: "./Tech/void/s1.png",
          // caption: "Snapshot: Opening scene",
        },
        {
          src: "./Tech/void/s2.png",
          // caption: "Snapshot: Midway interaction",
        },
        {
          src: "./Tech/void/s3.png",
          // caption: "Snapshot: User engagement",
        },
        {
          src: "./Tech/void/s4.png",
          // caption: "Snapshot: Dynamic visuals",
        },
        {
          src: "./Tech/void/s6.png",
          // caption: "Snapshot: Final scene",
        },
        {
          src: "./Tech/void/s7.png",
          // caption: "Snapshot: Closing credits",
        },
        {
          src: "./Tech/void/ss1.png",
          // caption: "Interface component: Main dashboard",
        },
        {
          src: "./Tech/void/ss2.png",
          // caption: "Interface component: User profile view",
        },
      ],
    },
  },
  dream: {
    title: "Dream Collector",
    subtitle: "AI-Powered Dream Archive",
    description:
      "An web app and interactive installation that uses AI to turn your scattered dream memories into vivid visuals. On the web app, you type in the fragments of a dream you recall, and an AI engine generates three images. In the TouchDesigner installation, the AI-generated images materialize in a darkened space. Using hand gestures, you peel back a virtual veil to reveal your own dreamscapes.",
    videoUrl: "https://vimeo.com/1138216311?fl=pl&fe=sh",
    keepGalleryVideos: true,
    galleries: {
      "Process Documentation": [
        {
          src: "./Tech/dream/recolor.jpg",
          caption: "Color images based on a set color pallete we created",
        },

        {
          src: "./Tech/dream/colorm1.jpg",
          caption: "Color matching background to the feeling of the memory",
        },

        {
          src: "./Tech/dream/tracking.jpg",
          caption:
            "Media Pipe testing and tracker for user inputs and paint brush styling",
        },
        {
          src: "./Tech/dream/overlay.jpg",
          caption:
            "Implimenting past image overlays to hand gesture interactions ",
        },
        {
          src: "./Tech/dream/smoke.jpg",
          caption: "Smoke paintbrush testing",
        },

        {
          src: "./Tech/dream/tdappintegration.mp4",
          type: "video",
          caption:
            "Integration of OpenAI into webapp and webapp into TouchDesigner",
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
        },
        {
          src: "./Tech/liminal/p2.jpg",
          caption: "Dual display threshold tracking",
        },
        {
          src: "./Tech/liminal/p3.jpg",
          caption: "Blob Tracking working with dual display tracking mirror ",
        },
        {
          src: "./Tech/liminal/p4.jpg",
          caption: "Blob tracking, tracking but not clearing",
        },
        {
          src: "./Tech/liminal/p5.jpg",
          caption: "Color Target Selections ",
        },
      ],
    },
  },
  "language-of-light": {
    title: "Something Between Science and Magic",
    subtitle: "Language of Light · Interactive Installation",
    description:
      "An interaction that simulates bacterial quorum sensing from human movement, transforming microbial communication into an embodied, participatory experience.",
    articleUrl: "https://itp.nyu.edu/thesis/2023/projects/?student-id=24",
    articleLabel: "NYU Thesis",
    demoUrl: "https://vimeo.com/826412484?fl=pl&fe=sh",
    demoLabel: "Demo Video",
    galleries: {
      Gallery: [
        {
          src: "./Tech/langoflight/demo1.gif",
        },
        {
          src: "./Tech/langoflight/demo3.gif",
        },
        {
          src: "./Tech/langoflight/demo4.jpg",
        },
        {
          src: "./Tech/langoflight/demo5.jpg",
        },
        {
          src: "./Tech/langoflight/test.gif",
        },
        {
          src: "./Tech/langoflight/test1.jpg",
        },
        {
          src: "./Tech/langoflight/test2.gif",
        },
        {
          src: "./Tech/langoflight/test3.gif",
        },
      ],
    },
  },
  fireflies_fsf26: {
    title: "Fireflies",
    subtitle: "Future Stages Festival 2026 Piece",
    description:
      "A TouchDesigner performance piece developed for Future Stages Festival 2026, using OSC and live control to drive responsive stage visuals in real time.",
    demoUrl: "https://www.youtube.com/watch?v=mOBHAV6wuo4",
    demoLabel: "Future Stages Video",
    articleUrl: "https://www.juilliard.edu/news/184866/conversation-christina-cappelli",
    articleLabel: "Interview at Juilliard",
    galleries: {
      Gallery: [
        {
          src: "./Tech/fireflies_fsf26/FSF2026_Fireflies.mp4",
          type: "video",
        },
      ],
    },
  },
  sum1_fsf26: {
    title: "Sum of Parts",
    subtitle: "Live Show Visual System",
    description:
      "A TouchDesigner and OSC-driven visual system for live performance. I built the backgrounds and layered TouchDesigner processing over AI-generated material for responsive, stage-ready composition.",
    demoUrl: "https://www.youtube.com/watch?v=mOBHAV6wuo4",
    demoLabel: "Future Stages Video",
    articleUrl: "https://www.juilliard.edu/news/184866/conversation-christina-cappelli",
    articleLabel: "Interview at Juilliard",
    galleries: {
      Gallery: [
        {
          src: "./Tech/sum1_fsf26/sum_part1.mp4",
          type: "video",
          featured: true,
          poster: "./Tech/sum1_fsf26/sum2.png",
        },
        {
          src: "./Tech/sum1_fsf26/sum1.png",
          caption: "Visual design sample 1.",
        },
        {
          src: "./Tech/sum1_fsf26/sum2.png",
          caption: "Visual design sample 2.",
        },
        {
          src: "./Tech/sum1_fsf26/Dancer_TouchDeisgnerEffect.jpeg",
          caption:
            "Performer interaction with TouchDesigner video effects and real-time OSC interactions.",
        },
        {
          src: "./Tech/sum1_fsf26/dancerfsf.PNG",
          caption: "Stage performer with live visual system.",
        },
        {
          src: "./Tech/sum1_fsf26/background Meshworks P3.jpeg",
          caption: "Animated background design for Meshworks P3.",
        },
        {
          src: "./Tech/sum1_fsf26/background sketch test.jpeg",
          caption: "Conceptual background sketch test.",
        },
        {
          src: "./Tech/sum1_fsf26/moving background_meshworks PI.jpeg",
          caption: "Dynamic background design for Meshworks P1.",
        },
        {
          src: "./Tech/sum1_fsf26/moving background_Meshworks P2.jpg",
          caption: "Dynamic background design for Meshworks P2.",
        },
      ],
    },
  },
  imaginary_spaces: {
    title: "Imaginary Spaces",
    subtitle: "Unreal Process — Live Show & VR",
    description:
      "In-progress Unreal world-building for live performance and VR. This is process work — environments, control systems, and avatar/capture tests — documenting how the piece is being developed rather than a finished show.",
    bodyText:
      "Organized by focus: live environments, VR environments, OSC/live control systems, then avatar and capture studies.",
    groupVideosWithGalleries: true,
    sections: [
      {
        title: "Environments — Live",
        intro:
          "Camera framing, atmosphere, and composition tests for live-show environments.",
        items: [
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/camMain.png",
            caption: "Primary camera framing and overall environment composition.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/cam2.png",
            caption: "Alternate camera perspective.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/cam3.png",
            caption: "Secondary view study.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/cam4.png",
            caption: "Wide framing test.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/camFog.png",
            caption: "Fog and depth pass for atmosphere testing.",
          },
        ],
      },
      {
        note: "Moving more towards creating the structures by light and shadow to flow through the scene.",
      },
      {
        title: "Environments — Live Light & Shadow",
        items: [
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/light-shadow-study.mp4",
            type: "video",
            caption: "Material, light, and shadow comparison study.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/cineCam1.png",
            caption: "Cinematic camera 1.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/cinecam2.png",
            caption: "Cinematic camera 2.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/cineCam3.png",
            caption: "Cinematic camera 3.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/environments/live/cine4.png",
            caption: "Building with shadow.",
          },
        ],
      },
      {
        title: "Environments — VR",
        intro: "VR walkthrough of the Unreal environment.",
        items: [
          {
            src: "./Tech/imaginary spaces_liveVR/environments/vr/VR_environment_10.14.26_EOD_Recording.mp4",
            type: "video",
            caption:
              "Full VR environment walkthrough with audio — end-of-day recording.",
          },
        ],
      },
      {
        title: "Systems — OSC / Live Control",
        intro:
          "Live control tests linking OSC to Unreal environments for performance.",
        items: [
          {
            src: "./Tech/imaginary spaces_liveVR/systems-osc/environment01_OSCControls.mp4",
            type: "video",
            caption: "Environment 01 — OSC control pass.",
          },
        ],
      },
      {
        title: "Avatars & Capture",
        intro:
          "Mocap, volumetric capture, and avatar presence studies feeding into the live/VR pipeline.",
        items: [
          {
            src: "./Tech/imaginary spaces_liveVR/avatars-mocap/floraFreestyle_GlowTD.mp4",
            type: "video",
            caption: "Flora freestyle — TouchDesigner glow treatment.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/avatars-mocap/mocap1.png",
            caption: "Mocap capture still 1.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/avatars-mocap/mocap2.JPG",
            caption: "Mocap capture still 2.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/avatars-mocap/volumetric-filming.JPG",
            caption: "Volumetric filming setup.",
          },
          {
            src: "./Tech/imaginary spaces_liveVR/avatars-mocap/volumetric-filming1.JPG",
            caption: "Volumetric filming capture.",
          },
        ],
      },
    ],
  },
  transference: {
    title: "Transference",
    subtitle: "Photo Series",
    description:
      "A photo series documenting ancestral dyeing practices and natural pigments from my time in San Jose Delgado, Mexico.",
    galleries: {
      Gallery: [
        {
          src: "./Design/transference/1.jpg",
        },
        {
          src: "./Design/transference/2.jpg",
        },
        {
          src: "./Design/transference/3.jpg",
        },
        {
          src: "./Design/transference/4.jpg",
        },
        {
          src: "./Design/transference/5.jpg",
        },
        {
          src: "./Design/transference/6.jpg",
        },
        {
          src: "./Design/transference/7.jpg",
        },
        {
          src: "./Design/transference/8.jpg",
        },
        {
          src: "./Design/transference/9.jpg",
        },
        {
          src: "./Design/transference/10.jpg",
        },
      ],
    },
  },
};

// Popup functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing popup functionality...");
  
  const popup = document.getElementById("projectPopup");
  if (!popup) return;

  const popupContent = popup.querySelector(".popup-content");
  const closeButton = popup.querySelector(".popup-close");
  const projectCards = document.querySelectorAll(".project-card[data-project]");

  console.log("Found elements:", {
    popup: !!popup,
    popupContent: !!popupContent,
    closeButton: !!closeButton,
    projectCardsCount: projectCards.length
  });

  function isMediaVideo(item) {
    return item?.type === "video" || /\.mp4(\?.*)?$/i.test(item?.src || "");
  }

  function protectVideo(video, { controls = true, poster } = {}) {
    video.controls = controls;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("controlsList", "nodownload noplaybackrate");
    video.setAttribute("disablePictureInPicture", "");
    video.disablePictureInPicture = true;
    if (poster) {
      video.poster = poster;
    }
    video.addEventListener("contextmenu", (e) => e.preventDefault());
    return video;
  }

  function createSectionVideo(item) {
    const wrap = document.createElement("div");
    wrap.className = "section-video";

    const video = protectVideo(document.createElement("video"), {
      poster: item.poster,
    });
    video.setAttribute("aria-label", item.caption || "Gallery video");
    const source = document.createElement("source");
    source.src = item.src;
    source.type = "video/mp4";
    video.appendChild(source);
    wrap.appendChild(video);

    if (item.caption) {
      const cap = document.createElement("div");
      cap.className = "gallery-caption";
      cap.textContent = item.caption;
      wrap.appendChild(cap);
    }

    return wrap;
  }

  function normalizeGallerySections(galleriesOrSections) {
    if (!galleriesOrSections) return [];
    if (Array.isArray(galleriesOrSections)) return galleriesOrSections;
    return Object.entries(galleriesOrSections).map(([title, items]) => ({
      title,
      items,
    }));
  }

  // Build galleries into the popup from projectData
  function buildGalleries(galleries, container, options = {}) {
    if (!galleries) return;
    const groupVideos = options.groupVideosWithGalleries === true;
    const sections = normalizeGallerySections(galleries);

    sections.forEach((sectionData) => {
      if (sectionData.note && !sectionData.items) {
        const note = document.createElement("p");
        note.className = "gallery-bridge-note";
        note.textContent = sectionData.note;
        container.appendChild(note);
        return;
      }

      const title = sectionData.title || "";
      const items = Array.isArray(sectionData.items) ? sectionData.items : [];
      const section = document.createElement("section");
      section.className = "gallery-section";

      // Optional: title for each gallery section (hide if name is exactly "Gallery")
      if (title && String(title).toLowerCase() !== "gallery") {
        const h3 = document.createElement("h3");
        h3.className = "popup-subtitle";
        h3.textContent = title;
        section.appendChild(h3);
      }

      if (sectionData.intro) {
        const intro = document.createElement("p");
        intro.className = "gallery-section-intro";
        intro.textContent = sectionData.intro;
        section.appendChild(intro);
      }

      const videos = [];
      const images = [];
      items.forEach((item) => {
        if (isMediaVideo(item)) videos.push(item);
        else images.push(item);
      });

      // Keep section videos with their matching image group
      if (groupVideos && videos.length) {
        const videoStack = document.createElement("div");
        videoStack.className = "section-video-stack";
        videos.forEach((item) => {
          videoStack.appendChild(createSectionVideo(item));
        });
        section.appendChild(videoStack);
      }

      if (images.length) {
        const imageGallery = document.createElement("div");
        imageGallery.className = "image-gallery";

        images.forEach((item) => {
          const wrap = document.createElement("div");
          wrap.className = "gallery-image-wrapper";

          const img = document.createElement("img");
          img.className = "gallery-image";
          img.loading = "lazy";
          img.decoding = "async";
          img.src = item.src;
          img.alt = item.caption || "";
          img.addEventListener("click", () => expandMedia(img));
          wrap.appendChild(img);

          if (item.caption) {
            const cap = document.createElement("div");
            cap.className = "gallery-caption";
            cap.textContent = item.caption;
            wrap.appendChild(cap);
          }

          imageGallery.appendChild(wrap);
        });

        section.appendChild(imageGallery);
      }

      // Fallback: keep gallery videos as masonry tiles when not grouped
      if (!groupVideos && videos.length && options.keepGalleryVideos) {
        const imageGallery =
          section.querySelector(".image-gallery") ||
          (() => {
            const gallery = document.createElement("div");
            gallery.className = "image-gallery";
            section.appendChild(gallery);
            return gallery;
          })();

        videos.forEach((item) => {
          const wrap = document.createElement("div");
          wrap.className = "gallery-image-wrapper";
          const video = protectVideo(document.createElement("video"), {
            controls: false,
          });
          video.className = "gallery-video";
          const source = document.createElement("source");
          source.src = item.src;
          source.type = "video/mp4";
          video.appendChild(source);
          video.setAttribute("aria-label", item.caption || "Gallery video");
          video.addEventListener("click", () => expandMedia(video));
          wrap.appendChild(video);
          if (item.caption) {
            const cap = document.createElement("div");
            cap.className = "gallery-caption";
            cap.textContent = item.caption;
            wrap.appendChild(cap);
          }
          imageGallery.appendChild(wrap);
        });
      }

      if (section.children.length) {
        container.appendChild(section);
      }
    });
  }

  function getYouTubeId(url) {
    if (!url) return "";
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.replace("/", "");
      }
      return parsedUrl.searchParams.get("v") || "";
    } catch {
      if (url.includes("youtu.be/")) {
        return url.split("youtu.be/")[1]?.split("?")[0] || "";
      }
      return url.split("v=")[1]?.split("&")[0] || "";
    }
  }

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
      project.subtitle || "";
    popupContent.querySelector(".popup-description").innerHTML =
      project.description;

    // Handle body text
    const bodyTextContainer = popupContent.querySelector(".popup-body-text");
    if (project.bodyText) {
      bodyTextContainer.innerHTML = `<p>${project.bodyText}</p>`;
      bodyTextContainer.style.display = "block";
    } else {
      bodyTextContainer.innerHTML = "";
      bodyTextContainer.style.display = "none";
    }

    // When groupVideosWithGalleries is set, keep each video with its gallery
    // section. Otherwise lift gallery videos into the centered player stack.
    const groupVideosWithGalleries = project.groupVideosWithGalleries === true;
    const keepGalleryVideos = project.keepGalleryVideos === true;
    const galleryVideos = [];
    let galleryPayload = null;

    if (Array.isArray(project.sections) && project.sections.length) {
      if (groupVideosWithGalleries) {
        galleryPayload = project.sections;
      } else {
        galleryPayload = project.sections
          .map((sectionData) => {
            if (sectionData.note && !sectionData.items) return sectionData;
            const galleryItems = [];
            (sectionData.items || []).forEach((item) => {
              if (isMediaVideo(item) && !keepGalleryVideos) {
                galleryVideos.push(item);
                return;
              }
              galleryItems.push(item);
            });
            return { ...sectionData, items: galleryItems };
          })
          .filter(
            (sectionData) =>
              sectionData.note ||
              (Array.isArray(sectionData.items) && sectionData.items.length)
          );
      }
    } else if (project.galleries) {
      const imageOnlyGalleries = {};
      for (const [title, items] of Object.entries(project.galleries)) {
        if (groupVideosWithGalleries) {
          imageOnlyGalleries[title] = items;
          continue;
        }

        const galleryItems = [];
        items.forEach((item) => {
          if (isMediaVideo(item) && !keepGalleryVideos) {
            galleryVideos.push(item);
            return;
          }
          galleryItems.push(item);
        });

        if (galleryItems.length) {
          imageOnlyGalleries[title] = galleryItems;
        }
      }
      galleryPayload = imageOnlyGalleries;
    }

    // Render image galleries (and grouped section videos when enabled)
    const gallerySection = popupContent.querySelector(".popup-gallery-section");
    gallerySection.innerHTML = ""; // Clear previous
    if (
      galleryPayload &&
      (Array.isArray(galleryPayload)
        ? galleryPayload.length
        : Object.keys(galleryPayload).length)
    ) {
      buildGalleries(galleryPayload, gallerySection, {
        groupVideosWithGalleries,
        keepGalleryVideos,
      });
    }

    // Render centered video(s) above galleries
    const videoContainer = popupContent.querySelector(".popup-video-container");
    // Reset container state
    videoContainer.innerHTML = "";
    videoContainer.classList.remove("has-video", "has-scroll", "center-video");

    if (Array.isArray(project.centeredVideos) && project.centeredVideos.length) {
      const stack = document.createElement("div");
      stack.className = "center-video-stack";

      project.centeredVideos.forEach((entry) => {
        const src =
          typeof entry === "string"
            ? entry
            : (entry && (entry.src || entry.url)) || "";
        if (!src) return;

        const isMp4 =
          (entry && entry.type === "video") || /\.mp4(\?.*)?$/i.test(src);
        if (isMp4) {
          const video = protectVideo(document.createElement("video"), {
            poster: entry && entry.poster,
          });
          const source = document.createElement("source");
          source.src = src;
          source.type = "video/mp4";
          video.appendChild(source);
          stack.appendChild(video);
          return;
        }

        if (src.includes("youtube.com") || src.includes("youtu.be")) {
          const youtubeId = getYouTubeId(src);
          if (!youtubeId) return;
          const iframe = document.createElement("iframe");
          iframe.src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;
          iframe.title = "YouTube video player";
          iframe.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          );
          iframe.setAttribute("allowfullscreen", "");
          stack.appendChild(iframe);
          return;
        }

        if (src.includes("vimeo.com")) {
          const videoId = src.split("?")[0].split("/").pop();
          if (!videoId) return;
          const iframe = document.createElement("iframe");
          iframe.src = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
          iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
          iframe.setAttribute("allowfullscreen", "");
          stack.appendChild(iframe);
        }
      });

      if (stack.children.length) {
        videoContainer.appendChild(stack);
        videoContainer.classList.add("center-video");
      }
    } else if (Array.isArray(project.videoUrls) && project.videoUrls.length) {
      const firstUrl = project.videoUrls[0];
      const vid = firstUrl.split("?")[0].split("/").pop();
      videoContainer.innerHTML = `<iframe src="https://player.vimeo.com/video/${vid}?title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      videoContainer.classList.add("center-video");
    } else if (project.youtubeUrl) {
      const youtubeId = getYouTubeId(project.youtubeUrl);
      if (youtubeId) {
        videoContainer.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        `;
        videoContainer.classList.add("center-video");
      }
    } else if (project.videoUrl && project.videoUrl.includes("vimeo.com")) {
      const videoId = project.videoUrl.split("?")[0].split("/").pop();
      videoContainer.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      videoContainer.classList.add("center-video");
    } else if (!groupVideosWithGalleries && galleryVideos.length) {
      const stack = document.createElement("div");
      stack.className = "center-video-stack";
      galleryVideos.forEach((item) => {
        if (!item?.src) return;
        const video = protectVideo(document.createElement("video"), {
          poster: item.poster,
        });
        const source = document.createElement("source");
        source.src = item.src;
        source.type = "video/mp4";
        video.appendChild(source);
        stack.appendChild(video);
      });
      if (stack.children.length) {
        videoContainer.appendChild(stack);
        videoContainer.classList.add("center-video");
      }
    }

    // Render external links at the bottom (demo, thesis/article, etc.)
    const popupBody = popupContent.querySelector(".popup-body");
    const existingLinks = popupBody.querySelector(".popup-external-links");
    if (existingLinks) existingLinks.remove();

    const externalLinks = [];
    if (project.demoUrl) {
      externalLinks.push({
        url: project.demoUrl,
        label: project.demoLabel || "Demo",
      });
    }
    if (project.articleUrl) {
      externalLinks.push({
        url: project.articleUrl,
        label: project.articleLabel || "Read More",
      });
    }
    if (Array.isArray(project.externalLinks)) {
      project.externalLinks.forEach((link) => {
        if (link && link.url) {
          externalLinks.push({
            url: link.url,
            label: link.label || "Link",
          });
        }
      });
    }

    if (externalLinks.length) {
      const linksWrap = document.createElement("div");
      linksWrap.className = "popup-external-links";
      linksWrap.style.marginTop = "40px";
      linksWrap.style.textAlign = "right";
      linksWrap.style.borderTop = "1px solid var(--line)";
      linksWrap.style.paddingTop = "20px";
      linksWrap.style.display = "flex";
      linksWrap.style.justifyContent = "flex-end";
      linksWrap.style.gap = "16px";
      linksWrap.style.flexWrap = "wrap";

      externalLinks.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.style.color = "var(--accent)";
        a.style.textDecoration = "underline";
        a.textContent = link.label;
        linksWrap.appendChild(a);
      });

      popupBody.appendChild(linksWrap);
    }

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
    const itemSrc =
      item && item.tagName === "VIDEO"
        ? (item.querySelector("source")?.src || item.currentSrc)
        : item.src;
    currentImageIndex = allMedia.findIndex((m) => m.src === itemSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;

    showExpandedMedia();
  }

  function showExpandedMedia() {
    const overlay = document.getElementById("imageOverlay");
    const expandedImg = overlay.querySelector(".expanded-image");
    let expandedVideo = overlay.querySelector(".expanded-video");
    if (!expandedVideo) {
      expandedVideo = protectVideo(document.createElement("video"));
      expandedVideo.className = "expanded-video";
      expandedVideo.setAttribute("aria-label", "Expanded gallery video");
      expandedImg.insertAdjacentElement("afterend", expandedVideo);
    } else {
      protectVideo(expandedVideo);
    }
    const counter = overlay.querySelector(".image-counter");
    const prevBtn = overlay.querySelector(".image-nav-prev");
    const nextBtn = overlay.querySelector(".image-nav-next");

    if (allMedia.length === 0) return;

    const current = allMedia[currentImageIndex];
    const isVideo = current.type === "video";

    if (isVideo) {
      expandedImg.removeAttribute("src");
      expandedImg.alt = "";
      expandedImg.style.display = "none";

      expandedVideo.src = current.src;
      expandedVideo.style.display = "block";
      expandedVideo.currentTime = 0;
      expandedVideo.play().catch(() => {});
    } else {
      expandedVideo.pause();
      expandedVideo.removeAttribute("src");
      expandedVideo.load();
      expandedVideo.style.display = "none";

      expandedImg.src = current.src;
      expandedImg.alt = current.alt;
      expandedImg.style.display = "block";
    }

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
    const expandedVideo = overlay.querySelector(".expanded-video");
    if (expandedVideo) {
      expandedVideo.pause();
      expandedVideo.removeAttribute("src");
      expandedVideo.load();
      expandedVideo.style.display = "none";
    }
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    allMedia = [];
    currentImageIndex = 0;
  }

  // Event listeners
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      if (projectId) {
        showPopup(projectId);
      }
    });
  });

  // Ensure inline "See More" links act like buttons without navigating
  document.querySelectorAll('.more-btn[data-project]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const projectId = link.getAttribute('data-project');
      if (projectId) showPopup(projectId);
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
        // Scroll video scrollers left
        popup.querySelectorAll('.video-scroll').forEach((vs) => {
          vs.scrollBy({ left: -Math.max(280, Math.floor(vs.clientWidth * 0.9)), behavior: 'smooth' });
        });
        break;
      case "ArrowRight":
        // Scroll galleries right
        const galleriesRight = popup.querySelectorAll(".image-gallery");
        galleriesRight.forEach((gallery) => {
          gallery.scrollBy({ left: 300, behavior: "smooth" });
        });
        // Scroll video scrollers right
        popup.querySelectorAll('.video-scroll').forEach((vs) => {
          vs.scrollBy({ left: Math.max(280, Math.floor(vs.clientWidth * 0.9)), behavior: 'smooth' });
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
  if (aboutBtn && aboutPopup) {
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
  }
  });
