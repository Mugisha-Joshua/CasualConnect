# CasualConnect

A modern web application for job board management built with HTML, CSS, and JavaScript, deployed with Firebase Hosting.

---

## 🚀 Features

- Responsive, modern UI for job listings
- Easy job posting and management
- Simple deployment with Firebase Hosting
- Continuous Deployment via GitHub Actions (optional)

---

## 🛠 Prerequisites

Make sure you have the following installed:

- [Node.js & npm](https://nodejs.org/) (v14 or later recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli)  
  Install with:  
  ```bash
  npm install -g firebase-tools
  ```
- A [Google account](https://accounts.google.com/) for Firebase
- A [GitHub account](https://github.com/) (if you want automatic deploys)

---

## ⚡️ Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/Mugisha-Joshua/CasualConnect.git
cd CasualConnect
```

### 2. **Install Firebase CLI (if not already installed)**

```bash
npm install -g firebase-tools
```

### 3. **Login to Firebase**

```bash
firebase login
```
- This opens a browser for Google authentication.

### 4. **Initialize Firebase in the Project**

If this is your first time:
```bash
firebase init
```
- **Choose "Hosting"** (and optionally "GitHub Actions" for CI/CD).
- When asked for the public directory, choose `.` (dot) if all your files are in the root, or `public` if they’re in a subfolder.
- Choose "No" for configuring as a single-page app unless your app needs it.
- Do **not** overwrite your existing `index.html` when prompted.

### 5. **Add Your Website Files**

- Place all your website files (`index.html`, other HTML pages, CSS, JS, images, etc.) in the chosen public directory (e.g., the project root or `/public`).
- Make sure your `index.html` is your actual homepage, not the Firebase default.

### 6. **Preview Locally (Optional)**

```bash
firebase serve
```
or
```bash
firebase emulators:start
```
- Open [http://localhost:5000](http://localhost:5000) to see your site.

---

## 🚀 Deploy to Firebase Hosting

```bash
firebase deploy
```
- After deploying, you’ll get a hosting URL like `https://casualconnect-001.web.app/`.
- Visit this link to see your live site.

---

## 🔄 (Optional) Enable GitHub Actions for Automatic Deployments

1. **Connect your repo to GitHub (if not already):**
   - Push your project to GitHub under your account.

2. **Set up GitHub Actions via Firebase CLI:**

   ```bash
   firebase init hosting:github
   ```

   - Follow the prompts to authorize GitHub and set up the workflow.

3. **Automatic Deploys:**
   - Now, any push to your main branch will automatically deploy to Firebase Hosting.

---

## 🧩 Troubleshooting & FAQ

1. **Red “Dangerous Site” Warning in Browser?**
   - This is a temporary warning on new Firebase Hosting URLs.  
     - Make sure your content is safe.
     - Wait 24–48 hours for Google’s Safe Browsing to update.
     - [Check site status here](https://transparencyreport.google.com/safe-browsing/search).

2. **Firebase CLI Not Found?**
   - Reinstall with: `npm install -g firebase-tools`

3. **Permission Errors?**
   - Make sure you are logged into Firebase with the correct Google account:  
     `firebase login --reauth`

4. **Deployment Fails?**
   - Check your internet connection.
   - Make sure your `firebase.json` and `index.html` are in the correct directory.

5. **Custom Domain Setup**
   - Go to Firebase Console > Hosting > "Add custom domain" and follow the instructions.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👏 Contributing

Contributions are welcome! Please open issues or submit pull requests.

---

## 🤝 Support

For issues, open a [GitHub Issue](https://github.com/Mugisha-Joshua/CasualConnect/issues) or contact the maintainer.
# CasualConnect
This is a project aimed at bridging the gap between local job seekers and small businesses or households looking for informal workers(e.g., domestic help, shop assistants, casual laborers) by offering a simple, web-based job posting and browsing platform accessible via mobile devices or on the internet.
