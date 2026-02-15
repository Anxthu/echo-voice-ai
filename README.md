# Echo AI - Voice Interface

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-FF4D00?style=for-the-badge)](https://Anxthu.github.io/echo-voice-ai/)

![Echo AI Interface](./screenshot.png)

A minimalist, industrial-style voice interface built with React and the Web Speech API. Designed with a focus on immersive UI/UX, combining stark brutalist aesthetics with fluid, organic interactions.

## UI/UX Design Philosophy

The interface is crafted to feel like a futuristic, high-end terminal. It prioritizes:

-   **Minimalist Industrial Aesthetic**: A high-contrast dark theme (`#0E0E0E`) accentuated by vibrant "Safety Orange" (`#FF4D00`) for critical elements.
-   **Immersive Interaction**:
    -   **Typewriter Effect**: AI responses are rendered character-by-character for a natural, communicative feel.
    -   **Dynamic Lighting**: A subtle, warm mouse-follow glow creates a sense of depth and responsiveness.
    -   **Glitch Animations**: Stylized entry and exit animations add a raw, cybernetic character to the UI.
    -   **Haptic Audio**: Synthesized mechanical clicks and hums provide tactile auditory feedback for every interaction.
-   **Responsive Layout**: Built with a robust fixed positioning system ensuring stability and usability across all device sizes.

## Features

-   **Real-time Voice Input**: Seamless speech-to-text interaction using the Web Speech API.
-   **Synthesized Voice Output**: Native text-to-speech with customizable pitch and rate.
-   **Visual Feedback**: Real-time audio visualizers and status indicators.

## Tech Stack

-   **Frontend**: React, Vite
-   **Styling**: Tailwind CSS, Custom CSS Variables
-   **Animation**: CSS3 Keyframes, Dynamic DOM manipulation
-   **APIs**: Web Speech API (Recognition & Synthesis), Web Audio API

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/Anxthu/echo-voice-ai.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

## License

MIT
