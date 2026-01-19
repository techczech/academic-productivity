# Academic Productivity Hub

A comprehensive interactive resource for academic productivity strategies, assistive technologies, and digital tools. This application helps users understand productivity blockers, explore strategies to reduce cognitive load, and find appropriate hardware and software tools.

## Architecture

This project is a Single Page Application (SPA) built with modern frontend technologies, designed for performance and maintainability.

*   **Framework**: React 19 with TypeScript.
*   **Routing**: React Router DOM (utilizing `HashRouter` to ensure compatibility with static hosting environments).
*   **Styling**: Tailwind CSS (integrated via CDN for rapid styling without a complex build step in this environment).
*   **Icons**: Lucide React.
*   **AI Integration**: Google GenAI SDK (`@google/genai`) facilitates real-time data retrieval.

### Key Components

*   `App.tsx`: The application entry point managing the router configuration.
*   `components/Layout.tsx`: Provides the persistent shell (navigation, responsive menu, footer).
*   `components/ToolCard.tsx`: A sophisticated component that displays static tool data and implements an on-demand AI search feature. It uses the Gemini API to fetch real-time pricing, reviews, and updates.
*   `pages/`: Modular view components for each section (Strategies, Blockers, AssistiveTech, ToolsDatabase, Hardware).
*   `data/content.ts`: A structured data layer containing the static definitions for strategies and tools, typed strictly via TypeScript interfaces.

## AI Integration

The application leverages the **Gemini 2.5 Flash** model via the `@google/genai` SDK to enhance the static database with live web information.

### Feature: Live Tool Research
When a user requests "Current info" on a tool card:
1.  The app initializes the `GoogleGenAI` client with `process.env.API_KEY`.
2.  It constructs a prompt requesting current status, pricing, and reviews for the specific tool.
3.  It utilizes the `googleSearch` tool configuration to ensure the model has access to the latest web data.
4.  The response (including text and grounding metadata/sources) is parsed and rendered dynamically within the card.

## Deployment

The application is architected as a static site, making it suitable for deployment on any static hosting provider.

### Requirements
*   **API Key**: A valid Google GenAI API Key is required for the search functionality. The application expects this to be available at `process.env.API_KEY`.

### Hosting Options
Because the app uses `HashRouter`, it does not require server-side routing support (e.g., Nginx rewrite rules). It works out-of-the-box on:
*   GitHub Pages
*   Netlify
*   Vercel
*   AWS S3 / CloudFront

### Development
The project uses ES Modules directly in the browser via an `importmap` in `index.html`.
*   **Dependencies**: React, ReactDOM, React Router, Lucide, and the Google GenAI SDK are loaded from CDNs.
*   **TypeScript**: Ensures type safety across the data layer and component props.
