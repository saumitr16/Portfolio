# Saumitra Agrawal - Portfolio Website

A modern, interactive portfolio website with a technical/AI theme featuring smooth transitions, responsive design, and professional presentation.

## Features

### 🎨 Design & Theme
- **Technical/AI Theme**: Dark background with blue accents and glowing effects
- **Matrix Background**: Animated gradient background with pulsing effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Typography**: Uses Orbitron (for headings) and Roboto (for body text)

### 🚀 Interactive Elements
- **Smooth Page Transitions**: Elegant slide transitions between pages
- **Typing Effect**: Animated text that cycles through different roles/descriptions
- **Hover Effects**: Interactive elements with smooth animations
- **Particle Effects**: Floating particles on the welcome page
- **Loading Screen**: Professional loading animation

### 📄 Resume Viewer
- **PDF Display**: High-quality PDF viewer with dark background
- **Zoom Controls**: Zoom in/out functionality (50% - 300%)
- **Keyboard Shortcuts**: 
  - `Ctrl + =` to zoom in
  - `Ctrl + -` to zoom out
  - `Ctrl + 0` to reset zoom
- **Scrollable**: Smooth scrolling through the resume

### 🔗 Navigation & Links
- **GitHub Profile**: Direct link to github.com/saumitr16
- **LinkedIn Profile**: Direct link to your LinkedIn profile
- **Contact Information**: Phone and email details with clickable links
- **Work Experience**: Placeholder section for future content

### ⌨️ Keyboard Shortcuts
- `Escape`: Go back to previous page
- `Ctrl + =`: Zoom in (resume page)
- `Ctrl + -`: Zoom out (resume page)
- `Ctrl + 0`: Reset zoom (resume page)

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── photo.jpg           # Your profile photo
├── portfolio resume.pdf # Your resume PDF
└── README.md           # This file
```

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Welcome Page**: View your name, designation, and photo with animated effects
3. **Enter Portfolio**: Click the "Enter Portfolio" button to access the navigation menu
4. **Navigate**: Choose from the available options:
   - Resume: View your PDF resume with zoom controls
   - Work Experience: Placeholder for future content
   - GitHub Profile: Link to your GitHub
   - LinkedIn Profile: Link to your LinkedIn
   - Contact Details: Your contact information

## Customization

### Personal Information
Edit the following in `index.html`:

```html
<!-- Update your name -->
<h1 class="name">YOUR NAME HERE</h1>

<!-- Update your designation -->
<span class="title">YOUR DESIGNATION HERE</span>
<span class="institution">YOUR INSTITUTION HERE</span>

<!-- Update contact information -->
<a href="tel:+91 YOUR_PHONE">+91 YOUR_PHONE</a>
<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>

<!-- Update social links -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">github.com/YOUR_USERNAME</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">linkedin.com/in/YOUR_PROFILE</a>
```

### Profile Photo
Replace `photo.jpg` with your own photo. The image will be automatically resized and styled.

### Resume
Replace `portfolio resume.pdf` with your own resume PDF file.

### Typing Effect Text
Edit the typing effect text in `script.js`:

```javascript
const texts = [
    "Your Custom Text 1",
    "Your Custom Text 2",
    "Your Custom Text 3",
    "Your Custom Text 4"
];
```

### Colors and Theme
Modify the color scheme in `styles.css`:

```css
/* Primary blue color */
--primary-color: #007bff;

/* Secondary blue color */
--secondary-color: #00d4ff;

/* Background colors */
--bg-primary: #0a0a0a;
--bg-secondary: #1a1a2e;
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Performance Features

- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Lazy Loading**: Images and content load efficiently
- **Smooth Scrolling**: Optimized for performance
- **Responsive Images**: Automatically scaled for different screen sizes

## Future Enhancements

### Work Experience Section
When you're ready to add your work experience, edit the experience page in `index.html`:

```html
<div class="experience-content">
    <div class="experience-item">
        <h3>Job Title</h3>
        <p class="company">Company Name</p>
        <p class="duration">Duration</p>
        <ul class="responsibilities">
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            <li>Responsibility 3</li>
        </ul>
    </div>
</div>
```

### Additional Sections
You can easily add new sections by:
1. Creating a new page div in `index.html`
2. Adding a navigation option
3. Styling the new section in `styles.css`
4. Adding JavaScript functionality if needed

## Troubleshooting

### PDF Not Loading
- Ensure the PDF file is in the same directory as `index.html`
- Check that the filename matches exactly (case-sensitive)
- Try opening the PDF directly in your browser to verify it's not corrupted

### Images Not Displaying
- Verify the image file exists in the correct location
- Check file permissions
- Ensure the filename matches exactly

### Animations Not Working
- Make sure JavaScript is enabled in your browser
- Check the browser console for any error messages
- Try refreshing the page

## Contact & Support

For any issues or customization requests, please contact:
- **Email**: agrawal.ma40@gmail.com
- **Academic Email**: b22ai054@iitj.ac.in
- **Phone**: +91 7067635970

## License

This portfolio template is created for personal use. Feel free to modify and customize it for your own portfolio.

---

**Created with ❤️ for showcasing your professional journey in AI & Data Science** 