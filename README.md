# 🏠 ALX Listing App

A modern property listing platform inspired by Airbnb. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, this app showcases property cards with clean UI components and a scalable structure for future backend integration.


## 🚀 Project Goals

The goal of the **ALX Listing App** is to:

- Create a responsive, modular listing page similar to Airbnb
- Use reusable components (like cards and buttons)
- Apply strong TypeScript support for safer development
- Build a scalable foundation for future features such as booking, search, and filtering



## 📁 Project Structure (Explained)

The project follows a clean, modular folder structure for maintainability and scalability:

### 📦 `/components/common/`
Reusable UI components used across the app.

- `Card.tsx`: Displays property listing information like title and description.
- `Button.tsx`: A flexible action button used for things like “Book Now” or “View Details”.

### 📄 `/interfaces/`
Defines all **TypeScript interfaces** for the app, enhancing type safety and developer productivity.

- `index.ts`: Includes interfaces like `CardProps` and `ButtonProps`.

### 📌 `/constants/`
Holds reusable values such as:

- API URLs
- UI labels (e.g. "Book Now", "View Details")
- Configuration constants

### 🖼 `/public/assets/`
Contains static files such as:

- Property images
- Icons and branding assets

These are directly accessible from the browser and can be imported using `<Image />` or standard HTML.

### 📂 `/pages/` (or `/app/`)
The main routing directory, depending on whether you're using **Pages Router** or **App Router**.

- `index.tsx`: The homepage that displays listings using components like `Card` and `Button`.
