import React, { useState, useEffect, useRef } from 'react';
import BlogCard from './BlogCard';
import BlogListItem from './BlogListItem';
import './BlogSection.css';

const blogData = [
    {
        id: 1,
        title: "Nature Painting: Most Beautiful Nature Paintings on Canvas for Modern Homes",
        excerpt: "Nature painting is one of the most admired and enduring forms of art, capturing the essence of landscapes, seasons, and the harmony of the natural world. From serene forests and flowing rivers to abstract interpretations of nature's energy.",
        image: "https://zigguratss.com/assets/upload/blog/zigguratss_23580bd6fc2e2abd7d22e7596bbcbaf8.jpg",
        author: "SAMEER KARMAKAR",
        date: "2026-02-06",
        link: "https://zigguratss.com/blog/nature-painting-most-beautiful-nature-paintings-on-canvas-for-modern-homes",
        category: "Nature Art"
    },
    {
        id: 2,
        title: "Animal Painting: A Powerful Expression of Life and Emotion",
        excerpt: "Animal painting is one of the most captivating forms of visual art, representing strength, freedom, movement, and emotional depth. At Zigguratss Artwork LLP, every animal painting is thoughtfully created by skilled artists.",
        image: "https://zigguratss.com/assets/upload/blog/zigguratss_754fd6d2a7f46b90c234d55828ee2fec.png",
        author: "SAMEER KARMAKAR",
        date: "2026-01-06",
        link: "https://zigguratss.com/blog/animal-painting-a-powerful-expression-of-life-and-emotion",
        category: "Animal Art"
    },
    {
        id: 3,
        title: "Landscape Painting: Timeless Art That Brings Nature to Life",
        excerpt: "One of the most appreciated types of visual art is landscape painting, because this style depicts an expansive view of nature that can show all that the environment has to offer: beautiful landscapes, heartfelt emotions and a specific ambiance in time.",
        image: "https://zigguratss.com/assets/upload/blog/zigguratss_5074553d02641db155d65613e29b20bc.jpg",
        author: "SAMEER KARMAKAR",
        date: "2026-01-02",
        link: "https://zigguratss.com/blog/landscape-painting-timeless-art-that-brings-nature-to-life",
        category: "Landscape"
    },
    {
        id: 4,
        title: "Why Abstraction Painting Is Perfect for Modern Home Decor",
        excerpt: "Art has always been a strong medium for humans to communicate thoughts, feelings and stories that can't be described easily with words. Abstract painting avoids copying the world as it is; instead, it talks to the soul directly with colors and shapes.",
        image: "https://zigguratss.com/assets/upload/blog/zigguratss_7de9b3e9dc1bc2b2be255db2e761f3ab.jpg",
        author: "SAMER KARMAKAR",
        date: "2026-01-02",
        link: "https://zigguratss.com/blog/why-abstraction-painting-is-perfect-for-modern-home-decor",
        category: "Abstract"
    },
    {
        id: 5,
        title: "Chetan Katigar Paintings: A Journey Through Contemporary Indian Art",
        excerpt: "Chetan Katigar is a contemporary Indian artist known for his expressive use of bold colours and emotionally rich compositions. Drawn to art from early childhood, he developed a deep sensitivity for form, storytelling, and Indian cultural symbolism.",
        image: "https://zigguratss.com/assets/upload/blog/zigguratss_4b9363dade97fbb903c0999751461fd4.jpg",
        author: "SUPRIYA PAL",
        date: "2026-01-02",
        link: "https://zigguratss.com/blog/chetan-katigar-paintings-a-journey-through-contemporary-indian-art",
        category: "Artist Feature"
    },
    {
        id: 6,
        title: "The Power of Thought: Discover Conceptual Painting at Zigguratss",
        excerpt: "In today's fast-paced world filled with visuals, only a few pieces of art truly stand out – those that make you think. This is the essence of conceptual painting, where the idea, message, and philosophy behind the creation take precedence over mere aesthetics.",
        image: "https://zigguratss.com/assets/upload/blog/aaa_6915bd5eae304.jpg",
        author: "SUPRIYA PAL",
        date: "2026-01-02",
        link: "https://zigguratss.com/blog/the-power-of-thought-discover-conceptual-painting-at-zigguratss",
        category: "Conceptual"
    },
    {
        id: 7,
        title: "Festival of Tooth: The Art of Faith, Culture, and Celebration",
        excerpt: "Art has always been a way for people to connect with God and express their feelings. Colours, textures, and imagination make it look like culture, history, and belief. The painting 'Festival of Tooth' by Sanjana Patel is a beautiful example of this connection.",
        image: "https://zigguratss.com/assets/upload/blog/tooth_68e77e6d50c3b.jpg",
        author: "ADARSH GULERIA",
        date: "2025-10-09",
        link: "https://zigguratss.com/blog/festival-of-tooth-the-art-of-faith-culture-and-celebration",
        category: "Cultural"
    },
    {
        id: 8,
        title: "Deepshikha Bishoyi: Transforming Imagination Into Living Art",
        excerpt: "Art has the remarkable power to transport us beyond the ordinary, inviting us into worlds built from imagination, emotion, and narrative. Few contemporary artists accomplish this as effortlessly as Deepshikha Bishoyi.",
        image: "https://zigguratss.com/assets/upload/blog/deepshikha_bishnoyi_68d7bff108e28.jpg",
        author: "ADARSH GULERIA",
        date: "2025-09-27",
        link: "https://zigguratss.com/blog/deepshikha-bishoyi-transforming-imagination-into-living-art",
        category: "Artist Feature"
    },
    {
        id: 9,
        title: "Celebrating Creativity: Discover Modern Art & Original Paintings at Zigguratss Artwork LLP",
        excerpt: "In today's fast-transit world, art is one of the most influential forms of expression. It reflects culture, emotions and the specific vision of every artist. Whether it is a mixture of modern art, traditional pieces, or both.",
        image: "https://zigguratss.com/assets/upload/blog/Rust_at_dusk_68d3a1706984b.jpg",
        author: "AJAY SINGH, CO-FOUNDER",
        date: "2025-09-24",
        link: "https://zigguratss.com/blog/celebrating-creativity-discover-modern-art-original-paintings-at-zigguratss-artwork-llp",
        category: "Modern Art"
    },
    {
        id: 10,
        title: "Discover the Soul of Modern Art: Authentic Indian Paintings at Zigguratss Artwork LLP",
        excerpt: "In the vibrant tapestry of Indian artistry, Zigguratss Artwork LLP stands as a distinguished beacon, illuminating the world of modern art with its exceptional collection of art and painting.",
        image: "https://zigguratss.com/assets/upload/blog/blog-84.jpg",
        author: "ZIGGURATSS",
        date: "2025-09-09",
        link: "https://zigguratss.com/blog/discover-the-soul-of-modern-art-authentic-indian-paintings-at-zigguratss-artwork-llp",
        category: "Indian Art"
    },
    {
        id: 11,
        title: "Transform Your Home with Fine Artwork From Zigguratss Artwork LLP",
        excerpt: "Discover the perfect paintings for houses that reflect your personality and elevate your space. In today's modern homes, décor goes beyond furniture and lighting artwork is what brings it all together.",
        image: "https://zigguratss.com/assets/upload/blog/blog-83.jpeg",
        author: "ZIGGURATSS",
        date: "2025-08-29",
        link: "https://zigguratss.com/blog/transform-your-home-with-fine-artwork-from-zigguratss-artwork-llp",
        category: "Home Decor"
    },
    {
        id: 12,
        title: "Anupam Pal: Weaving Myth, Music & Modernity on Canvas",
        excerpt: "Anupam Pal, born on October 11, 1991, in Jamshedpur, India, is a contemporary artist whose work seamlessly blends Indian mythology, spirituality, and contemporary abstraction.",
        image: "https://res.cloudinary.com/dp2e8mfvm/image/upload/v1750498194/vu97eyc10s7f86f8yqbk.png",
        author: "ZIGGURATSS",
        date: "2025-06-23",
        link: "https://zigguratss.com/blog/anupam-pal-weaving-myth-music-modernity-on-canvas-",
        category: "Artist Feature"
    },
    {
        id: 13,
        title: "Rajasekharan Parameswaran – The Painter Who Turned Devotion into a Guinness World Record",
        excerpt: "In a world where art often bends toward trends, Rajasekharan Parameswaran stands out as an artist who remains deeply connected to his roots—both cultural and spiritual.",
        image: "https://res.cloudinary.com/dp2e8mfvm/image/upload/v1750496955/zerej8ort1p4pxcpx0v3.png",
        author: "ZIGGURATSS",
        date: "2025-06-23",
        link: "https://zigguratss.com/blog/title-rajasekharan-parameswaran-the-painter-who-turned-devotion-into-a-guinness-world-record",
        category: "Artist Feature"
    },
    {
        id: 14,
        title: "Mrinal Dutt: A Self-Taught Maestro of Indian Figurative Art",
        excerpt: "In an age where formal education is often seen as the gateway to professional mastery, Mrinal Dutt defies the norm. A self-taught painter from Ahmedabad, India, Dutt's journey into the art world is both unconventional and inspiring.",
        image: "https://res.cloudinary.com/dp2e8mfvm/image/upload/v1748944747/c5lmca9omsv4oubltugh.jpg",
        author: "ZIGGURATSS",
        date: "2025-06-03",
        link: "https://zigguratss.com/blog/mrinal-dutt-a-self-taught-maestro-of-indian-figurative-art",
        category: "Artist Feature"
    },
    {
        id: 15,
        title: "Fine Art: A Journey Through History and Modernity",
        excerpt: "Fine art has always been a beacon of human creativity, a testament to our ability to transcend the mundane and capture the sublime. Whether through the delicate brushstrokes of a Renaissance masterpiece or the bold abstractions of contemporary works.",
        image: "https://zigguratss.com/assets/upload/blog/Rust_at_dusk_68d3a1d736832.jpg",
        author: "ZIGGURATSS",
        date: "2025-09-24",
        link: "https://zigguratss.com/blog/fine-art-a-journey-through-history-and-modernity",
        category: "Fine Art"
    },
    {
        id: 16,
        title: "Abstract Art: A Journey of Expression and Evolution",
        excerpt: "Abstract art stands as a testament to human creativity, transcending the boundaries of traditional representation to convey emotions, ideas, and concepts in a profoundly personal and experimental manner.",
        image: "https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753375409/l1es8so5vlplt40duviu.jpg",
        author: "AJAY SINGH, CO-FOUNDER",
        date: "2024-04-15",
        link: "https://zigguratss.com/blog/abstract-art-a-journey-of-expression-and-evolution",
        category: "Abstract"
    },
    {
        id: 17,
        title: "Raja Ravi Varma: The Pioneer of Indian Art",
        excerpt: "The world of Indian art is a tapestry woven with rich traditions, vibrant colors, and diverse stories. Among the many luminaries who have left an indelible mark on Indian art, Raja Ravi Varma stands tall as a pioneer.",
        image: "https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753375191/s4tgyrigukzxlpjprsqi.png",
        author: "AJAY SINGH, CO-FOUNDER",
        date: "2023-11-09",
        link: "https://zigguratss.com/blog/raja-ravi-varma-the-pioneer-of-indian-art",
        category: "Art History"
    }
];

const categories = ["All", "Nature Art", "Animal Art", "Landscape", "Abstract", "Artist Feature", "Conceptual", "Cultural", "Modern Art", "Indian Art", "Home Decor", "Fine Art", "Art History"];

const BlogSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(9);
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    // Reset to first article when category changes
    useEffect(() => {
        setActiveIndex(0);
    }, [activeCategory]);

    // Intersection Observer for scroll animations
    useEffect(() => {
        // Set a CSS variable with the current header height so the snap container
        // can size itself to the viewport minus the header. This keeps the
        // snapping sections full-screen below the sticky header.
        const setHeaderHeightVar = () => {
            const header = document.querySelector('.header');
            const h = header ? header.offsetHeight : 80;
            document.documentElement.style.setProperty('--header-height', `${h}px`);
        };

        setHeaderHeightVar();
        window.addEventListener('resize', setHeaderHeightVar);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach((el) => observer.observe(el));

        // Optional: initialize GSAP ScrollTrigger snapping if GSAP is available.
        // This provides a smoother, hardware-accelerated snap on some browsers
        // where native scroll-snap can feel jumpy on fractional wheel deltas.
        (async () => {
            try {
                const gsapModule = await import('gsap');
                const { ScrollTrigger } = await import('gsap/ScrollTrigger');
                if (gsapModule && ScrollTrigger) {
                    gsapModule.registerPlugin(ScrollTrigger);

                    // Use ScrollTrigger to snap to each .snap-item
                    ScrollTrigger.create({
                        trigger: document.documentElement,
                        start: 'top top',
                        end: 'bottom bottom',
                        snap: {
                            snapTo: (progress) => {
                                // compute nearest snap based on element offsets
                                const items = Array.from(document.querySelectorAll('.snap-item'));
                                if (!items.length) return progress;
                                const positions = items.map((el) => {
                                    const rect = el.getBoundingClientRect();
                                    // distance from viewport top taking header into account
                                    return (window.scrollY + rect.top - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80));
                                });
                                const scrollY = window.scrollY;
                                let nearest = positions.reduce((prev, curr) => Math.abs(curr - scrollY) < Math.abs(prev - scrollY) ? curr : prev, positions[0]);
                                return nearest / (document.documentElement.scrollHeight - window.innerHeight);
                            },
                            duration: 0.6,
                            ease: 'power2.out'
                        },
                        // avoid pinning the whole document on mobile
                        invalidateOnRefresh: true
                    });
                }
            } catch (e) {
                // gsap not installed or import failed; native CSS snapping still works
                // console.debug('GSAP not available, skipping ScrollTrigger init', e);
            }
        })();

        return () => {
            animatedElements.forEach((el) => observer.unobserve(el));
            window.removeEventListener('resize', setHeaderHeightVar);
        };
    }, [visibleCount]);

    // Enforce magnetic snapping on small wheel / touch moves — articles replace in place
    useEffect(() => {
        const container = sectionRef.current ? sectionRef.current.querySelector('.snap-container') : null;
        if (!container) return;

        const filteredBlogs = activeCategory === "All" 
            ? blogData 
            : blogData.filter(blog => blog.category === activeCategory);
        const totalArticles = filteredBlogs.length;

        let isAnimating = false;
        let accumulatedDelta = 0;
        let wheelTimeout = null;
        let touchStartY = 0;
        let touchStartX = 0;

        const changeArticle = (direction) => {
            if (isAnimating) return;
            isAnimating = true;
            
            setActiveIndex(prev => {
                if (direction > 0) return Math.min(totalArticles - 1, prev + 1);
                return Math.max(0, prev - 1);
            });
            
            // Lock for 800ms to prevent rapid changes
            setTimeout(() => { isAnimating = false; }, 800);
        };

        const onWheel = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (isAnimating) return;
            
            // Accumulate scroll delta (support both vertical and horizontal)
            const deltaY = e.deltaY;
            const deltaX = e.deltaX;
            
            // Determine which axis has more movement
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal scroll detected
                accumulatedDelta += deltaX;
            } else {
                // Vertical scroll detected
                accumulatedDelta += deltaY;
            }
            
            // Clear existing timeout
            if (wheelTimeout) clearTimeout(wheelTimeout);
            
            // Wait for scroll to settle (50ms of no scrolling)
            wheelTimeout = setTimeout(() => {
                // Only change if accumulated delta is significant
                if (Math.abs(accumulatedDelta) > 20) {
                    changeArticle(accumulatedDelta > 0 ? 1 : -1);
                }
                accumulatedDelta = 0;
            }, 50);
        };

        const onTouchStart = (e) => { 
            touchStartY = e.touches ? e.touches[0].clientY : e.clientY;
            touchStartX = e.touches ? e.touches[0].clientX : e.clientX;
        };
        
        const onTouchEnd = (e) => {
            if (isAnimating) return;
            
            const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
            const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
            const diffY = touchStartY - endY;
            const diffX = touchStartX - endX;
            
            // Determine if horizontal or vertical swipe was dominant
            if (Math.abs(diffX) > Math.abs(diffY)) {
                // Horizontal swipe
                if (Math.abs(diffX) < 50) return;
                // Right swipe (diffX negative) = previous, Left swipe (diffX positive) = next
                changeArticle(diffX > 0 ? 1 : -1);
            } else {
                // Vertical swipe
                if (Math.abs(diffY) < 50) return;
                changeArticle(diffY > 0 ? 1 : -1);
            }
        };

        // Keyboard navigation - support both vertical AND horizontal arrow keys
        const onKeyDown = (e) => {
            if (isAnimating) return;
            
            if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                changeArticle(1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                changeArticle(-1);
            }
        };

        container.addEventListener('wheel', onWheel, { passive: false });
        container.addEventListener('touchstart', onTouchStart, { passive: true });
        container.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('keydown', onKeyDown);

        return () => {
            container.removeEventListener('wheel', onWheel);
            container.removeEventListener('touchstart', onTouchStart);
            container.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [activeCategory, activeIndex]);

    const filteredBlogs = activeCategory === "All" 
        ? blogData 
        : blogData.filter(blog => blog.category === activeCategory);

    // Show ALL articles at once - no Load More button needed
    const visibleBlogs = filteredBlogs;

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setActiveIndex(0); // Reset to first article when category changes
    };

    return (
        <section className="blog-section" ref={sectionRef}>
            <div className="blog-container">
                <div className="section-header scroll-animate">
                    <span className="section-tag">Our Stories</span>
                    <h2 className="section-title">Latest from the Blog</h2>
                    <p className="section-desc">
                        Explore the world of art through our curated collection of articles, 
                        artist features, and insights into the creative process.
                    </p>
                </div>

                <div className="fresh-heading scroll-animate scroll-animate-delay-1">FRESH POSTS</div>

                {/* Article counter indicator */}
                <div className="article-counter" style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    background: 'rgba(201,162,39,0.9)',
                    color: '#fff',
                    padding: '12px 20px',
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '14px',
                    zIndex: 1000,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}>
                    Article {activeIndex + 1} / {visibleBlogs.length}
                </div>

                {/* Snap container: fixed frame that shows one article at a time.
                    Articles replace each other in place without scrolling the page. */}
                <div className="blog-list">
                    <div className="snap-container">
                        {visibleBlogs.map((blog, index) => {
                            // Determine the class based on position relative to activeIndex
                            let itemClass = 'snap-item';
                            if (index === activeIndex) itemClass += ' active';
                            else if (index < activeIndex) itemClass += ' prev';
                            else itemClass += ' next';
                            
                            return (
                                <section
                                    className={itemClass}
                                    style={{ ['--i']: index % 6 }}
                                    key={blog.id}
                                >
                                    <BlogListItem blog={blog} reverse={index % 2 === 1} featured={index === 0} />
                                </section>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
