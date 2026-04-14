# Developer Portfolio

A personal portfolio website built with React to showcase projects, skills, and experience. Designed with a dark theme and smooth interactions.

## Built With

- **React** - UI framework
- **Framer Motion** - Animations and scroll transitions
- **Lucide React** - Iconography
- **EmailJS** - Client-side form handling
- **Vanilla CSS** - Custom styling and CSS variables

## Project Structure

- `src/components/` - Modular React components (Hero, About, Projects, Skills, Contact, etc.)
- `src/styles/` - Global CSS variables and main stylesheet
- `src/assets/` - Static files including images and resume PDF

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/[github-username]/[repo-name].git
   cd [repo-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

## Configuration

### Theming
The color palette and layout tokens are managed via CSS variables in `src/styles/globals.css`. Modify these to change the site's look:

```css
:root {
  --bg: #0a192f;
  --bg-secondary: #0d1e3a;
  --bg-card: #112240;
  --accent: #64ffda;
  --text-primary: #ccd6f6;
  --text-secondary: #8892b0;
}
```

### Contact Form (EmailJS)
The contact form in `src/components/Contacts/Contact.js` uses EmailJS. To receive emails, swap out the placeholder credentials with your own:
- `SERVICE_ID`
- `TEMPLATE_ID`
- `PUBLIC_KEY`

## Contact

- **Email:** [your-email@example.com]
- **LinkedIn:** [Your Profile Link]
- **Twitter:** [@your_handle]
