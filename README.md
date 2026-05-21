# ☕ HubSpot-Coffee (Unofficial Website)

<div align="center">
  <img width="1336" height="609" alt="HubSpot Coffee Preview" src="https://github.com/user-attachments/assets/0712b26a-6926-4745-b34f-0a01af014716" />
</div>

---

## 🌟 What is HubSpot-Coffee?

**HubSpot-Coffee** is a premium, beautifully crafted web application designed for a modern café and community hub located directly in front of **Holy Angel University in Angeles City, Philippines**. 

The website functions as both a client-facing promotional storefront—complete with an interactive coffee and pastry menu, dynamic shopping cart, and location mapping—and an administrative dashboard enabling mock database reads and writes to manage loyalty customers and messages.

It blends striking modern aesthetics (such as desaturated premium dark themes, smooth scroll effects, and custom brand accents) with robust, dynamic frontend interactivity and a local mock API server.

---

## 🚀 Key Features

### 1. 🏠 Home Page (`index.html`)
* **Discover Your Perfect Coffee Moment:** An immersive hero section with custom background imagery and an inviting call-to-action.
* **Cozy & Ethical Storytelling:** An "About Us" breakdown outlining the café’s dedication to community, ethical sourcing, and work-friendly environment.
* **Signature Delights Showcase:** Visual feature grids highlighting signature offerings such as the *Java Chip*, *Chocolate Cream*, and *Double Strawberry*.
* **Interactive Dark-Mode Map:** A beautifully customized Leaflet.js map with a desaturated premium CartoDB Dark Matter base layer and a branded custom gold pin pointing to the café's physical location right in front of Holy Angel University.

### 2. 🌱 The Coffee Journey (`features.html`)
* **Bean to Brew Sourcing:** Explains our direct support for small-holder farms and sustainable agricultural practices.
* **Expert Small-Batch Roasting:** Details the precision monitoring required to roast coffee beans to perfection.
* **Artisan Pour-Over & Brewing:** Demonstrates how baristas craft the ideal flavor profile using premium techniques.
* **Café Infographic:** A visual guide highlight section outlining workspace suitability, amenities (power outlets, free high-speed Wi-Fi), and social channels.

### 3. ☕ Interactive Product Menu (`products.html`)
* **Real-time Live Filter & Search:** Instantly search through coffee blends, non-coffee items, and pastries as you type.
* **Dynamic Cart System:** Real-time adding of items, persistent quantity adjustment, instant local price calculations (in PHP ₱), and service availing.
* **Interactive Star Rating System:** Allows customers to give real-time rating feedback (1 to 5 stars) directly on each drink card, updating card elements dynamically.

### 4. ✉️ Contact Form & Marketing Mockups (`contact.html`)
* **Integrated Lead Capture:** Forms built to capture names, contact details, email addresses, messages, and preferred marketing channels.
* **Intelligent Routing Mockup:** Based on customer preferences, submits redirect them to custom interactive campaign previews:
  * **Email Marketing (`email_mockup.html`):** Displays a premium newsletter draft featuring announcements and custom CTA buttons.
  * **Social Media Feed (`social_media_mockup.html`):** Renders interactive mock posts across **Facebook**, **Instagram**, and **X (Twitter)** with custom visual grids.

### 5. 👥 Admin & Business Dashboards
* **Customer Loyalty List (`customers.html`):** Displays registered customer databases dynamically fetched from the API server, with real-time text filter-search functionality.
* **Inquiries Dashboard (`messages.html`):** Displays messages submitted through the contact page directly from the database server, supporting admin filtering.

---

## 🛠️ Technical Stack

* **Frontend:**
  * **HTML5 & Vanilla Javascript (ES6+)** for reactive scripting and DOM management.
  * **Tailwind CSS Utility Framework** for premium grid systems and modern styles.
  * **AOS (Animate On Scroll)** library for modern scroll-reveal animations.
  * **Leaflet.js** for high-performance interactive maps.
  * **Google Fonts (Poppins)** for polished, premium brand typography.
* **Backend & API:**
  * **Node.js** database environment.
  * **JSON-Server API Engine** (`local-server.js`) mapping database endpoints for products, customers, and message lists.
  * **db.json Mock Database** containing seeded initial configurations for products, loyalty customers, and contact form messages.

---

