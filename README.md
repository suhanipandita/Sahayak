# Sahayak

**Sahayak** is a secure government communication platform designed to bridge the gap between citizens and government schemes. It is a full-stack web application featuring a voice-enabled interface, multi-language support, and an AI-powered chatbot to assist users in checking eligibility and applying for schemes.

## 🚀 Key Features

* **Voice-First Interface:** Built-in Text-to-Speech (TTS) capabilities to make the platform accessible to a wider audience, including those with low literacy.
* **Multi-Language Support:** Real-time translation of the user interface into local languages (e.g., Hindi) using Google Cloud Translation API.
* **AI Chatbot Assistant:** Integrated Botpress chat interface for conversational assistance with scheme eligibility and applications.
* **Secure Authentication:** Phone number-based login system.
* **User Dashboard:** Centralized hub for managing user profiles, settings, and accessing support.
* **Dark Mode:** Built-in accessibility feature for better visibility in low-light environments.

## 🛠️ Tech Stack

### Frontend
* **Framework:** React (v18) with TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **State Management:** React Hooks
* **HTTP Client:** Axios

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Services:**
    * Google Cloud Translation API
    * Google Cloud Text-to-Speech
    * Botpress (Chatbot integration)

## 📂 Project Structure

```bash
Sahayak/
├── src/                    # Frontend source code
│   ├── components/         # UI Components (ChatScreen, Dashboard, etc.)
│   ├── hooks/              # Custom hooks (useTranslation, etc.)
│   ├── services/           # API services (translationService.ts)
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Entry point
├── Sahayak_backend/        # Backend server code
│   ├── index.js            # Express server entry point
│   └── package.json        # Backend dependencies
├── package.json            # Frontend dependencies
└── vite.config.ts          # Vite configuration
