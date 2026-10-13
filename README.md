# Chetan Sharma — 1st Year B.Tech Mechanical Engineering Portfolio

A clean, simplistic, minimalistic, and light-themed 4-page personal portfolio website framework designed specifically for a **1st Year B.Tech Mechanical Engineering Student**.

All files, assets, and styling are self-contained in this directory (`desktop/chetan-portfolio`).

---

## 📁 4-Webpage Framework & Structure

```text
desktop/chetan-portfolio/
│
├── index.html                   # 📄 Page 1: Home (Minimal Hero, Student Photo, Name, Taglines)
├── story.html                   # 📄 Page 2: Story (Personal Narrative, Education, Hobbies, Achievements)
├── skills.html                  # 📄 Page 3: Skills & Resume (6 Skill Boxes with Meters, Certifications, Download Resume Button)
├── contact.html                 # 📄 Page 4: Contact (Phone, Email, Address, Instagram, LinkedIn, GitHub, Message Form)
│
├── css/
│   └── style.css                # 🎨 Unified Minimalist Light-Themed CSS Stylesheet
├── js/
│   └── script.js                # ⚡ Interactive Scripts (Meter animation, Resume download prompt, Mobile nav, Copy buttons)
│
└── assets/
    ├── images/
    │   └── profile-placeholder.svg  # 🖼️ Clean SVG avatar placeholder (drop your photo here!)
    └── resume/
        └── Chetan_Resume_Mechanical.pdf # 📑 Downloadable PDF resume sample
```

---

## 🚀 How to View the Website

You don't need any special server to view the website:
1. Navigate to `desktop/chetan-portfolio/`.
2. Double-click **`index.html`** (or right-click and open with **Google Chrome**, **Microsoft Edge**, **Brave**, **Safari**, or **Firefox**).
3. Use the top navigation bar to seamlessly move between **Home**, **Story**, **Skills & Resume**, and **Contact**.

---

## ✏️ How to Modify & Personalize Each Page

Every file has been heavily commented with `<!-- EDIT HERE: ... -->` tags so you can easily spot where to make changes.

### 1. Modifying Page 1 (`index.html` - Home)
- **Student Name**: Search for `<h1 class="hero-name">` (approx. line 92) and change `Chetan` and `Sharma` to your name.
- **Student Photo**: 
  - Save your photo (e.g. `my_photo.jpg` or `chetan.png`) into `assets/images/`.
  - In `index.html`, find `<img src="assets/images/profile-placeholder.svg" ...>` (approx. line 139) and change `src` to `assets/images/my_photo.jpg`.
- **Bio & Tagline**: Edit the paragraph under `<p class="hero-bio">` and the stats row under `<div class="hero-stats-row">`.

---

### 2. Modifying Page 2 (`story.html` - Story, Education, Hobbies & Achievements)
- **Personal Story / Narrative**: Under `<section class="story-narrative-card">`, update the paragraphs to share your own motivation for choosing Mechanical Engineering.
- **Education Section**: Under `<div class="education-timeline">`:
  - **B.Tech**: Change the college name, current semester, CGPA, and coursework.
  - **Class XII**: Change your school name, board, and percentage.
  - **Class X**: Change your high school details and score.
- **Hobbies**: Under `<div class="hobbies-grid">`, modify the 6 hobby cards (e.g., CAD modeling, RC aeromodelling, sports, photography).
- **Achievements**: Under `<div class="achievements-grid">`, customize your science fair wins, entrance exam percentiles, club memberships, or school awards.

---

### 3. Modifying Page 3 (`skills.html` - Skills, Meters & Resume Download)
- **The 5-6 Skill Boxes**: Under `<div class="skills-box-grid">`, each skill box contains:
  ```html
  <h3 class="skill-title">AutoCAD (2D Drafting)</h3>   <!-- Change Skill Name -->
  <span class="skill-percentage-badge">78%</span>        <!-- Change Display Number -->
  <div class="meter-fill" data-level="78%" style="width: 78%;"></div> <!-- Change Meter Width -->
  <p class="skill-summary-text">...</p>                  <!-- Change What You Know -->
  ```
- **Certifications**: Under `<div class="cert-grid">`, update your Autodesk, Coursera, NPTEL, or workshop lab credentials.
- **Downloadable Resume**:
  - Place your updated PDF in `assets/resume/` named `Chetan_Resume_Mechanical.pdf` (or rename it and update the reference in `js/script.js`).
  - Clicking the **"Download Resume (PDF)"** button brings up an interactive confirmation prompt modal, and clicking **Confirm & Download** triggers the instant file download!

---

### 4. Modifying Page 4 (`contact.html` - Contact, Socials & Address)
- **Phone Number**: Edit `<a href="tel:+919876543210" id="phone-val">`.
- **Email Address**: Edit `<a href="mailto:chetan.mech@example.edu" id="email-val">`.
- **Address**: Edit the text inside `<span id="address-val">` (e.g., your hostel room, campus, or city).
- **Social Profiles**:
  - **LinkedIn**: Edit the `href` in `<a href="https://linkedin.com/in/chetan-mechanical" ...>`
  - **GitHub**: Edit the `href` in `<a href="https://github.com/chetan-mech" ...>`
  - **Instagram**: Edit the `href` in `<a href="https://instagram.com/chetan_mech" ...>`
- **Direct Message Form**: The message form on the right includes interactive JavaScript validation and gives instant feedback upon sending.

---

## 💡 Visual Design Highlights
- **Aesthetic**: Minimal, light-mode first, clean paper surfaces (`#ffffff`), subtle borders (`#e2e8f0`), and precision engineering blueprint dot accents.
- **Typography**: Clean modern sans-serif (`Plus Jakarta Sans`) and technical monospace numbers (`JetBrains Mono`).
- **Responsive**: 100% fluid layout optimized for smartphones, tablets, laptops, and ultra-wide screens.
- **Zero Heavy Dependencies**: Pure standard HTML5, CSS3, and modern vanilla JavaScript. No heavy frameworks required.
