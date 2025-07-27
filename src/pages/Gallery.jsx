/* ============================= */
/*       IMPORT DEPENDENCIES     */
/* ============================= */
// React hooks
// Framer Motion (motion, AnimatePresence)
// Gallery data + categories
// Lucide icons


/* ============================= */
/*      COMPONENT START          */
/* ============================= */
// Functional component: Gallery


/* ============================= */
/*        STATE VARIABLES        */
/* ============================= */
// selectedCategory — currently selected filter
// searchTerm — current search input
// selectedImage — lightbox-selected image
// filteredGallery — gallery items after filters
// currentImageIndex — lightbox navigation index


/* ============================= */
/*        USE EFFECT HOOK        */
/* ============================= */
// Apply filtering on category or search change


/* ============================= */
/*        HELPER FUNCTIONS       */
/* ============================= */
// formatDate — format date string for UI
// openLightbox — open image in modal
// closeLightbox — close modal
// nextImage / prevImage — lightbox nav


/* ============================= */
/*        MOTION VARIANTS        */
/* ============================= */
// containerVariants — for stagger animation
// itemVariants — for image card entry


/* ============================= */
/*        RETURN JSX START       */
/* ============================= */
// Component structure follows


/* ============================= */
/*          HERO SECTION         */
/* ============================= */
// Intro text, animated title and subtitle


/* ============================= */
/*        FILTERS SECTION        */
/* ============================= */
// Search bar
// Category dropdown
// Result counter


/* ============================= */
/*         GALLERY GRID          */
/* ============================= */
// Responsive masonry-style layout
// Card image with overlay, title, description
// Zoom icon, tags, and date


/* ============================= */
/*         NO RESULTS BLOCK      */
/* ============================= */
// Render when no filtered results found


/* ============================= */
/*          LIGHTBOX MODAL       */
/* ============================= */
// Image popup viewer
// Close, next, and previous buttons
// Image details, overlay, and index counter


/* ============================= */
/*        COMPONENT EXPORT       */
/* ============================= */
// export default Gallery
