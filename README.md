# **Workshop Booking**

> This website is for coordinators to book a workshop(s), they can book a workshop based on instructors posts or can propose a workshop date based on their convenience.


### Features
* Statistics
    1. Instructors Only
        * Monthly Workshop Count
        * Instructor/Coordinator Profile stats
        * Upcoming Workshops
        * View/Post comments on Coordinator's Profile
    2. Open to All
        * Workshops taken over Map of India
        * Pie chart based on Total Workshops taken to Type of Workshops.

* Workshop Related Features
    > Instructors can Accept, Reject or Delete workshops based on their preference, also they can postpone a workshop based on coordinators request.

__NOTE__: Check docs/Getting_Started.md for more info.

### Project Modernization & Design Approach

**What design principles guided your improvements?**
The design improvements were guided by modern, premium UI/UX aesthetics emphasizing clarity, accessibility, and dynamic interactions. This was achieved by transitioning from a legacy frontend to a high-performance React SPA. Specifically, we incorporated:
- **Rich Aesthetics:** Adopting harmonious color palettes, sophisticated typography, and smooth gradients to create a visually appealing, professional look.
- **Dynamic Elements & Feedback:** Using micro-animations and hover effects to make the interface feel responsive and alive, providing clear visual feedback on user actions.
- **User-Centric Flexibility:** Implementing a seamless light/dark mode toggle for enhanced user comfort and accessibility.

**How did you ensure responsiveness across devices?**
We ensured responsiveness by fully rebuilding the application as a mobile-first Single Page Application (SPA).
- **CSS Grid & Flexbox:** Utilizing modern layout techniques allows components to gracefully adapt their structure and alignment from mobile screens up to large desktop viewports.
- **Media Queries & Fluid Typography:** Employing CSS media queries to adjust breakpoints and sizing dynamically so that forms, navigation, and content areas scale beautifully across any device viewport.
- **Modular Components:** Refactoring the frontend into a component-based React architecture ensured that every UI element could be independently styled and tested for responsiveness.

**What trade-offs did you make between the design and performance?**
While pushing for a premium, highly interactive design, we balanced aesthetics with performance:
- **Custom Styling over Heavy Libraries:** We focused heavily on optimized custom styling to avoid the bloat of massive design frameworks, keeping payload sizes small.
- **Animation Overhead vs. Engagement:** To prevent sluggish rendering from complex animations, we used hardware-accelerated CSS properties (`transform` and `opacity`) for our micro-animations, providing a great visual feel without blocking the main browser thread.
- **Decoupled Architecture Complexity:** We traded the simplicity of a monolithic Django application for the complexity of a decoupled frontend/backend split. While harder to maintain initially, this provides massive performance gains by reducing server load and allowing the React SPA to update the UI instantly without full page reloads.

**What was the most challenging part of the task and how did you approach it?**
The most challenging part was managing the architectural migration from a tightly-coupled monolithic Django system to a decoupled REST API and a React SPA frontend, without losing critical business logic or breaking the platform.
- **Approach:** We approached this sequentially. After establishing the frontend foundation with Vite, we meticulously mapped the legacy Django views to modern RESTful endpoints, ensuring nested routing and authentication states were effectively preserved. Additionally, navigating unforeseen issues—such as the accidental deletion of project files during the backend decoupling—required us to pause, audit the system, and reliably perform file restoration before finalizing the React implementation.