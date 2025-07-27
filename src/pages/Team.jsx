/* ============================== */
/*         IMPORTS                */
/* ============================== */
// React hooks, framer-motion, icons
// Local data (teamData, departments, batches)
// Theme context


/* ============================== */
/*     COMPONENT: Card Renderer   */
/* ============================== */
// <TeamMemberCard />
// - Renders individual member
// - Handles theme styling + social links
// - OnClick triggers modal


/* ============================== */
/*     COMPONENT: Team Page       */
/* ============================== */
// useState: filters, modal
// useEffect: filtering logic
// useTheme: dark mode integration


/* ============================== */
/*     FILTER LOGIC (Effect)      */
/* ============================== */
// Filters by department, batch, and search term
// Result stored in `filteredTeam`


/* ============================== */
/*   ICON MAPPER FUNCTION         */
/* ============================== */
// getDepartmentIcon() → Maps dept name to Lucide icon


/* ============================== */
/*            JSX START           */
/* ============================== */
// Main container with theme-aware background


/* ============================== */
/*            HEADER              */
/* ============================== */
// Motion title & subtitle (animated on mount)


/* ============================== */
/*           FILTERS              */
/* ============================== */
// Search input
// Department dropdown
// Batch dropdown


/* ============================== */
/*           TEAM GRID            */
/* ============================== */
// Responsive card grid using `filteredTeam.map()`
// On click → shows member modal


/* ============================== */
/*         MEMBER MODAL           */
/* ============================== */
// AnimatePresence handles modal in/out
// Includes avatar, skills, links, department icon
// Closes on outside click


/* ============================== */
/*          EXPORT DEFAULT        */
/* ============================== */
// export Team
