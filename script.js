// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission with mailto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }
            
            // Create mailto link
            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}%0D%0A` +
                        `Email: ${email}%0D%0A%0D%0A` +
                        `Message:%0D%0A${message}`;
            
            const mailtoLink = `mailto:christinacapp130@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Opening your email client with the message. Please send when ready!');
        });
    }
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#000000';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe preview cards
    const cards = document.querySelectorAll('.preview-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is done
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const header = document.querySelector('.header .container');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggleButton = document.createElement('button');
                toggleButton.className = 'mobile-menu-toggle';
                toggleButton.innerHTML = '☰';
                toggleButton.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: block;
                `;
                
                header.appendChild(toggleButton);
                
                toggleButton.addEventListener('click', () => {
                    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
                });
            }
        } else {
            const toggleButton = document.querySelector('.mobile-menu-toggle');
            if (toggleButton) {
                toggleButton.remove();
            }
            nav.style.display = 'flex';
        }
    };
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Handle window resize
    window.addEventListener('resize', createMobileMenu);
    
    // Projects page filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter project cards
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.classList.remove('hidden');
                        card.classList.add('show');
                    } else {
                        const cardTags = card.getAttribute('data-tags');
                        if (cardTags && cardTags.includes(filterValue)) {
                            card.classList.remove('hidden');
                            card.classList.add('show');
                        } else {
                            card.classList.add('hidden');
                            card.classList.remove('show');
                        }
                    }
                });
            });
        });
    }

    // Initialize all projects as visible
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.classList.add('show');
        });
    }

    // Project modal functionality
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    
    // Project data for detailed views
    const projectData = {
      "Dumpling House": {
        description: `Welcome to a fresh take on the classic video game Bomberman. This time, the game is set in a bustling Chinese restaurant, where two waitresses must compete to survive in a high-stakes battle of wits and skill.

As you navigate the restaurant's maze-like corridors, you aim to obliterate roadblocks by strategically dropping exploding dumplings. But beware - getting caught in the blast means losing precious life. You have three lives to spare, but the risk of bringing about your untimely demise with every misstep grows greater.

The ultimate goal is to emerge victorious by using the power of exploding dumplings to eliminate your opponent. It's a thrilling race to glory, where only the most cunning and strategic player will outlive the other. Get ready for an action-packed adventure as you battle through the fast-paced world of exploding dumplings!`,
        role: "Arcade build, death animations, dumpling explosions, Designer, Programmer, Fabricator",
        folder: "dumplinghouse",
        videoUrl: "https://vimeo.com/836983554",
        videoUrl: "https://vimeo.com/836950712?p=0s",
        images: ["show1.jpeg", "show2.jpg"],
      },
      "All in One": {
        description: `An interaction that simulates bacterial quorum sensing to transform microbial communication into an embodied, participatory experience. By prompting unfamiliar movement through nose tracking, the piece encourages participants to momentarily inhabit a non-human perspective, revealing how collective intelligence operates beyond individual control.

Visualizing the invisible language of bacteria through glowing trails of light. Participants become part of a living ecosystem, their movements triggering digital "autoinducers" that simulate bacterial quorum sensing. As more people move in harmony, the space reaches a threshold, erupting in collective bioluminescence. 

Inspired by the symbiotic relationship between Vibrio fischeri and the bobtail squid, the piece connects biological intelligence with a cosmic visual metaphor—evoking microbial stargazing and inviting reflection on the interconnectedness of life at both microscopic and celestial scales.

Built with JavaScript, p5.js, and ML5 PoseNet, the installation tracks users via webcam, mapping each participant's nose position to simulate microbial motion. Each tracked point generates glowing particle trails, and once a quorum is reached, the visual intensity spikes, mirroring biological communication through collective action.`,
        role: "Direction and Technical Development",
        folder: "allinone",
        videoUrl: "https://vimeo.com/888251357",
        images: ["poc.jpeg", "show-1.jpeg"],
      },
      "Liminal Lens": {
        description: `An interactive installation that visualizes the collective movements of Volvox algae to reveal the hidden rhythms of natural life. Translating microscopic dynamics into immersive visuals, it invites viewers to reflect on scale, perception, and their role as cohabitants in an ecological space beyond human control.

Built with openFrameworks and C++, the piece runs across a dual-screen setup: One screen plays recorded microscopic footage of Volvox algae in motion. The second screen uses real-time algae location tracking to generate animated digital lines (resembling drifting snow), overlaid with webcam-based outlines of nearby viewers.

This pairing contrasts direct biological observation with an abstracted, reactive digital system, inviting viewers to explore their presence in relation to something far smaller yet no less alive.`,
        role: "Direction and Technical Development",
        folder: "liminallens",
        videoUrl: "https://vimeo.com/791984894",
        images: ["show1.jpeg", "show2.jpeg", "show3.jpeg", "show4.jpeg"],
      },
      "Dream Collector": {
        description: `A web app and interactive installation that uses AI to turn your scattered dream memories into vivid visuals. On the web app, you type in the fragments of a dream you recall, and an AI engine generates three images. In the TouchDesigner installation, the AI-generated images materialize in a darkened space. 

Using hand gestures, you peel back a virtual veil to reveal your dreamscapes and then swipe through others' past dreams in real time. The web application uses OpenAI integration to generate images based on user prompts, creating custom color shifts to match the mood of the dream.

The TouchDesigner interaction includes: paintbrush functionality to reveal dreams using hand distance between pointer finger and thumb, clearing "painting" with both hands up and spread, and navigation through dream images using thumbs up/down gestures.`,
        role: "Programmer and TouchDesigner developer",
        folder: "dreamcollector",
        videoUrl: "https://vimeo.com/123456792", // Replace with actual Vimeo URL
        images: ["webapp.jpeg", "working.jpg"],
      },
      "The Void": {
        description: `An interactive exploration of digital identity that reveals how constant self-curation distorts authenticity, exposing a feedback loop where identity becomes shaped by the systems mediating it. Labels like "Soul Decay" and "Hollow Salvation" critique consumerism's parasitic nature, suggesting that while we surrender our souls, we remain trapped in a self-perpetuating cycle that we eagerly return to.

Built using openFrameworks, the piece manipulates real-time webcam input to distort the viewer's reflection. As participants engage, their image degrades into layered afterimages, symbolizing the recursive cycle of self-curation and reinvention.

The installation explores how digital environments distort our sense of self, questioning what it means to curate identity in a world shaped by constant technological mediation.`,
        role: "Direction and Technical Development",
        folder: "thevoid",
        videoUrl: "https://vimeo.com/1061865042",
        images: [
          "distort3.jpg",
          "hero-image.jpg",
          "navigation.jpg",
          "soulcapture copy.jpg",
          "testing2.jpeg",
        ],
      },
      "Mycelium Rock Wall": {
        description: `A modular climbing wall whose holds are grown from mycelium offers a living, sustainable alternative to plastic. Custom-shaped "rocks" are cast in reusable molds with embedded reinforcements, colonized on a hardwood-bran substrate under warm, humid conditions, then dried to lock in strength. 

Routes can be reconfigured on a standard grid, and each hold can be tinted by mixing natural pigments into the substrate, brushing on plant-based dyes post-growth, or embedding colored rope accents during molding, resulting in a fully compostable, bio-educational climbing installation.

Initial concept by @arranzniko with help from @amy_art_architecture. In 2025, @bkmushroom invited the team to exhibit in the Fungi Group exhibition, bringing our vision to life.`,
        role: "Fabrication Team",
        folder: "rockwall",
        // videoUrl: "https://vimeo.com/123456794", // Replace with actual Vimeo URL
        images: [
          "closeup.jpeg",
          "forming0.jpeg",
          "forming1.jpeg",
          "hero.jpeg",
          "show.jpeg",
          "show1.jpeg",
        ],
      },
      Exoplanets: {
        description: `This project explores how we imagine and visualize extraterrestrial environments, living at the edge of speculation and scientific plausibility. These terrains offer a visually dynamic approach to science communication, designed to be interactive when deployed on a digital platform. 

The result is a series of exoplanetary worlds that push the boundaries of scientific visualization and explore the potential for life beyond Earth. Visual storytelling bridges the gap between the known and the unknown, making the strange feel familiar, and the familiar strange, while remaining grounded in scientific research.

The design approach uses visual parallels to connect Earth-based phenomena with speculative extraterrestrial worlds, creating scientifically plausible yet imaginatively rich environments.`,
        role: "Research & Generative Design",
        folder: "exoplanets",
        // videoUrl: "https://vimeo.com/123456795", // Replace with actual Vimeo URL
        images: [
          "akroterra.jpg",
          "apon.png",
          "nekkro.jpg",
          "nous.jpg",
          "pago.jpg",
        ],
      },
      Tessé: {
        description: `A modern brand with a throwback to vintage aesthetics. Effortlessly blending vintage soul with modern editorial edge, crafting fashion that's both stylized and spontaneously charming.

Visual Language includes a color palette of Cherry Red, Teal Blue, Golden Yellow, and Cream. Typography combines elegant serif with bold, modern sans-serif. The tone is playful, bold, unbothered, and vintage-influenced, with cherries as the brand icon.

Photography utilizes 35mm film for texture, creating an authentic vintage feel while maintaining contemporary appeal. The brand identity successfully bridges nostalgic charm with modern sophistication.`,
        role: "Art Director & Designer",
        folder: "tesse",
        // videoUrl: "https://vimeo.com/123456796", // Replace with actual Vimeo URL
        images: [
          "hero.jpeg",
          "icon.jpeg",
          "instafeed.jpeg",
          "logo.jpeg",
          "pallete.jpeg",
        ],
      },
      "Biome Boba": {
        description: `Personalized boba beverages infused with microbial ecosystems tailored to your health. This speculative synthetic biology project explores how microbial ecosystems from targeted body biomes could be harnessed for novel therapeutic applications, reimagining the future of personalized wellness.

Inspired by extremophiles, it examines microbial adaptation in extreme environments to inform potential biotech innovations. Laboratory techniques include PCR with 16S/ITS primers, spectrometry, microbial culturing, and agar plate preparation.

The project bridges speculative design with real laboratory research, exploring the intersection of biotechnology, personalized medicine, and consumer products in an accessible, engaging format.`,
        role: "Researcher & Designer",
        folder: "biomeboba",
        videoUrl: "https://vimeo.com/946667064",
        images: ["gallery.jpeg", "hero.jpeg"],
      },
      "Dying Bloom": {
        description: `A self-destructible bio-designed succulent, created using a range of biomaterials and all-natural dying components such as spirulina and various flowers for color and scent. This project involved extensive research, material testing, and stress testing. 

The final material was an agar-based recipe colored with beet and matcha powder and scented with herbs and flower water built into the main recipe. The final products used real soil, fake plants, and recycled pots.

The project explores themes of impermanence, sustainability, and the beauty of decay, challenging traditional notions of product longevity and encouraging reflection on natural cycles and biodegradable design.`,
        role: "Lead Designer & Researcher",
        folder: "dyingbloom",
        // videoUrl: "https://vimeo.com/123456798", // Replace with actual Vimeo URL
        images: ["01.jpeg", "2.jpeg", "3.jpeg", "show.jpeg"],
      },
    };

    // Open modal function
    function openModal(projectCard) {
        const title = projectCard.querySelector('.project-title').textContent;
        const year = projectCard.querySelector('.project-year').textContent;
        const description = projectCard.querySelector('.project-description').textContent;
        const tags = projectCard.querySelectorAll('.tag');
        const team = projectCard.querySelector('.project-team');
        const exhibitions = projectCard.querySelector('.project-exhibitions');
        const awards = projectCard.querySelector('.project-awards');
        const image = projectCard.querySelector('.project-media img');

        // Populate modal
        document.querySelector('.modal-year').textContent = year;
        document.querySelector('.modal-title').textContent = title;
        
        // Use detailed description if available, otherwise use card description
        const detailedDescription = projectData[title]?.description || description;
        document.querySelector('.modal-description').textContent = detailedDescription;

        // Copy tags
        const modalTagsContainer = document.querySelector('.modal-tags-container');
        modalTagsContainer.innerHTML = '';
        tags.forEach(tag => {
            modalTagsContainer.appendChild(tag.cloneNode(true));
        });

        // Copy additional info
        const modalTeam = document.querySelector('.modal-team');
        const modalExhibitions = document.querySelector('.modal-exhibitions');
        const modalAwards = document.querySelector('.modal-awards');

        modalTeam.innerHTML = '';
        modalExhibitions.innerHTML = '';
        modalAwards.innerHTML = '';

        if (team) {
            modalTeam.innerHTML = `<strong>Team:</strong> ${team.textContent.replace('Team: ', '')}`;
        }
        
        if (projectData[title]?.role) {
            modalTeam.innerHTML += `<br><strong>Role:</strong> ${projectData[title].role}`;
        }

        if (exhibitions) {
            modalExhibitions.innerHTML = `<strong>Exhibitions:</strong> ${exhibitions.textContent}`;
        }

        if (awards) {
            modalAwards.innerHTML = `<strong>Awards:</strong> ${awards.textContent}`;
        }

        // Populate video
        const modalVideo = document.getElementById('modal-video');
        const videoIframe = modalVideo.querySelector('iframe');
        if (projectData[title]?.videoUrl) {
            // Convert regular Vimeo URL to embed URL
            const videoUrl = projectData[title].videoUrl;
            const embedUrl = videoUrl.replace('vimeo.com/', 'player.vimeo.com/video/');
            videoIframe.src = embedUrl;
            modalVideo.style.display = 'block';
        } else {
            modalVideo.style.display = 'none';
        }

        // Populate gallery
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.innerHTML = '';
        if (projectData[title]?.images && projectData[title].images.length > 0) {
            projectData[title].images.forEach(imageName => {
                const imgElement = document.createElement('img');
                imgElement.src = `images/${projectData[title].folder}/${imageName}`;
                imgElement.alt = `${title} - ${imageName}`;
                imgElement.className = 'gallery-image';
                imgElement.addEventListener('click', () => openLightbox(imgElement.src, imgElement.alt));
                galleryGrid.appendChild(imgElement);
            });
            document.querySelector('.modal-gallery').style.display = 'block';
        } else {
            document.querySelector('.modal-gallery').style.display = 'none';
        }

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Stop video when closing modal
        const videoIframe = document.querySelector('#modal-video iframe');
        if (videoIframe.src) {
            videoIframe.src = videoIframe.src; // Reset iframe to stop video
        }
    }

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

    function openLightbox(imageSrc, imageAlt) {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageAlt;
        lightboxCaption.textContent = imageAlt;
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImage.src = '';
    }

    // Lightbox event listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxBackdrop) {
        lightboxBackdrop.addEventListener('click', closeLightbox);
    }

    // Add click listeners to project cards
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => openModal(card));
        });
    }

    // Modal close listeners
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox.classList.contains('active')) {
                closeLightbox();
            } else if (modal.classList.contains('active')) {
                closeModal();
            }
        }
    });
});