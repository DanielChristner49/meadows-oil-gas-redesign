# Meadows Oil and Gas - Website Redesign Plan & Architecture

## 1. Information Architecture (Sitemap)

To ensure a seamless user experience, the website should be organized into clear, intuitive sections. Here is the recommended sitemap:

* **Home:** Overview of Meadows Oil and Gas, highlighting expertise in both traditional energy and renewables, with a high-quality digital imagery hero section.
* **About Us:**
    * **Company History & Oil History:** Historical context of the industry and the company's roots.
    * **Our Reach (Work Locations):** Details on the Oklahoma City and Bakersfield, CA offices, plus capabilities for domestic and foreign projects.
    * **Professional Affiliations:** Logos and links to AAPL and OCAPL.
* **Services:**
    * **Core Brokerage & Land Services:**
        * Leasehold Acquisitions
        * Mineral & Leasehold Ownerships
        * Title Services (Opinions & Curative work)
        * Right-of-Ways
        * Wind Leasing (Highlighting renewable energy transition)
    * **Technical & Mapping Services:**
        * Mapping & Seismic Mapping
        * Digital Imagery
* **Projects & Media:**
    * **Photo Gallery:** Visual documentation of field operations and projects.
* **Contact Us:** Inquiry forms, office addresses, and routing to specific departments.

---

## 2. Feature & Content Integration Strategy

### Core Brokerage & Land Services
* **Design Approach:** Use accordion-style FAQs or dedicated landing pages for each service to improve SEO.
* **Trust Signals:** Highlight "Title Opinions" and "Title Curative work" with case studies or brief success metrics.
* **Renewables Pivot:** Give "Wind Leasing" a distinct visual theme (e.g., greener accents) to separate it from traditional oil and gas, capturing the renewable energy market.

### Technical & Mapping Services
* **Interactive Elements:** Incorporate interactive map embeds (using Mapbox or Google Maps API) to showcase capabilities in Seismic Mapping.
* **Visuals:** Utilize actual high-resolution digital imagery from past projects to demonstrate technical proficiency.

### Company Resources & History
* **Timeline UI:** Use an interactive timeline for the "Oil History" section.
* **Gallery:** Implement a responsive masonry grid or lightbox gallery for the Photo Gallery.

### Affiliations
* **Footer/Trust Banner:** Place the AAPL and OCAPL logos in the footer of every page, as well as on the About page, to establish immediate industry credibility.

---

## 3. Recommended Web App Architecture

Given the professional nature of Meadows Oil and Gas, the site needs to be fast, highly secure, SEO-optimized, and easy for non-technical staff to update.

### The JAMstack Approach (Modern, Fast, Secure)

**1. Frontend (User Interface): Next.js (React)**
* *Why:* Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG). This ensures the website loads blazingly fast and is highly optimized for Search Engines (SEO), which is critical for B2B discovery.
* *Styling:* Tailwind CSS for clean, professional, and highly responsive corporate design.

**2. Backend / Content Management System (CMS): Sanity.io or Strapi**
* *Why:* A "Headless CMS" separates the content from the code. Meadows' administrative team can easily log in to a dashboard to upload new images to the Photo Gallery, update office locations, or add new services without needing a web developer.

**3. Hosting & Deployment: Vercel**
* *Why:* Vercel seamlessly integrates with Next.js, providing automatic scaling, global content delivery (CDN), and high uptime. 

**4. Specialized Integrations:**
* **Maps:** Mapbox GL JS for rendering high-performance, custom-styled geographical maps to showcase the "Work Locations" and "Technical & Mapping Services".
* **Forms:** Formspree or SendGrid for handling contact and land service inquiry forms securely.

---

## 4. Claude Code Skill Configuration & Development Workflow

To efficiently build this Next.js/Vercel architecture, utilize the following Claude Code skills and plugins, categorized by development phase. This specific stack leverages custom user profiles alongside core Vercel and Agent plugins to ensure high-quality execution.

### Phase 1: Architecture & Planning
* **`superpowers:writing-plans`**: Execute this first. Feed this `.md` file to Claude Code to generate a step-by-step implementation roadmap and feature branch strategy.
* **`vercel:nextjs`**: Initializes the App Router boilerplate, ensuring the project structure adheres to the latest Vercel standards for routing and server components.
* **`agenthub:init`** & **`agenthub:plan`**: Use these to structure the larger tasks, such as separating the Technical Mapping integration from the general UI component buildout.

### Phase 2: Design System & UI Components
* **`brandkit`**: Enforce the Meadows Oil and Gas color palette and typography. Ensure consistent branding across traditional oil services and renewable wind energy sections.
* **`high-end-visual-design` & `minimalist-ui`**: Activate these to guarantee a modern, clean corporate aesthetic. They will help avoid clutter, replacing standard layouts with a polished interface that allows the high-resolution digital imagery to stand out.
* **`vercel:shadcn`**: Essential for rapidly building accessible, highly functional components. Use this for the Service Accordions, interactive tabs for Work Locations, and image carousels for the Photo Gallery.
* **`design-taste-frontend`**: Ensures the React components are built with a professional finish, implementing smooth transitions and proper responsive padding across mobile and desktop.

### Phase 3: Core Logic & Performance Optimization
* **`vercel:react-best-practices`**: Enforces strict React paradigms, proper hook usage, and clean state management for interactive elements (like the Mapbox UI).
* **`vercel:routing-middleware`**: Crucial for setting up localized routing for the Oklahoma City and Bakersfield offices, optimizing SEO paths, and protecting any headless CMS webhook routes.
* **`vercel:next-cache-components`**: Optimizes the loading of heavy assets. This is particularly vital for the high-resolution Digital Imagery and Seismic Mapping sections, ensuring fast load times and preventing layout shifts.

### Phase 4: Execution & Debugging
* **`full-output-enforcement`**: A critical skill to ensure Claude Code does not truncate long files, especially when generating the comprehensive Oil History timeline, compiling the full sitemap navigation, or writing intricate map integration code.
* **`superpowers:systematic-debugging`**: Keep this active during the API and CMS integration phases to methodically track down and resolve hydration errors or data-fetching issues.
* **`superpowers:finishing-a-development-branch`**: Use this to cleanly wrap up isolated features (like completing the `Title Services` module) before merging and moving on to the next task.
