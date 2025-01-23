# Simple Blog Viewer

A simple blog viewer application built with **Next.js**, **Kinde Auth**, and **Tailwind CSS**. This project demonstrates how to create a blog viewer with features like authentication, dynamic routing, and data fetching.

---

## Features

- **Home Page**: Displays a list of blog posts fetched from a mock API.
- **Blog Details Page**: Shows the full content of a specific blog post using dynamic routing.
- **Profile Page**: A protected page that requires authentication. Redirects unauthenticated users to the login page.
- **Authentication**: Integrated with **Kinde Auth** for login, logout, and session management.
- **Responsive Design**: Built with **Tailwind CSS** for a clean and responsive UI.

---

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Kinde Auth**: For authentication and user management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **DaisyUI**: A Tailwind CSS component library for pre-built UI components.
- **JSONPlaceholder**: A mock API for fetching blog posts.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **Kinde Account**: Sign up for a free account at [Kinde](https://kinde.com/) to get your authentication credentials.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/NissanJK/simple-blog-viewer.git
   cd simple-blog-viewer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add your Kinde Auth credentials:
   ```plaintext
   KINDE_CLIENT_ID=your_client_id
   KINDE_CLIENT_SECRET=your_client_secret
   KINDE_ISSUER_URL=https://your_kinde_domain.kinde.com
   KINDE_SITE_URL=http://localhost:3000
   KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
   KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open the Application**:
   Visit `http://localhost:3000` in your browser to view the application.

---

## Project Structure

```
simple-blog-viewer/
├── public/               # Static assets (e.g., favicon)
├── src/
│   ├── app/              # Next.js app router
│   │   ├── (auth)/       # Authentication-related routes
│   │   ├── api/          # API routes
│   │   ├── blog/         # Blog-related routes
│   │   ├── profile/      # Profile page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.jsx    # Root layout
│   │   └── page.jsx      # Home page
│   ├── components/       # Reusable components
│   └── lib/              # Utility functions
├── .env.local            # Environment variables
├── .gitignore            # Files to ignore in Git
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

---

## Usage

- **Home Page**: Displays a list of blog posts. Click on a post title to view its details.
- **Profile Page**: Accessible only to authenticated users. Displays user details.
- **Login/Logout**: Use the buttons in the header to log in or log out.

---

## Live Site
[here](https://simple-blog-viewer-roan.vercel.app/).



