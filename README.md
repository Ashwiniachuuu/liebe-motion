# Liebe Motion

Create a single-page premium futuristic 3D food website called “LIEBE”, inspired by the provided reference image. Do NOT create a generic 2D restaurant website.

Design

Premium white / off-white background

Clean luxury white theme

Premium glassmorphism with translucent white glass panels

Subtle warm beige / soft golden accents

Realistic high-quality burger and food visuals

3D depth, reflections, soft shadows and cinematic lighting

Apple-style premium minimal design

Smooth scrolling

Scroll-based parallax and subtle 3D animations

High contrast text using black / dark charcoal

Bright, elegant and sophisticated food-brand aesthetic

IMPORTANT — SCROLL-CONTROLLED BACKGROUND VIDEO

I will upload a background food animation video. Use the uploaded video as the main full-screen background visual across the entire landing page.

The video must behave as a scroll-driven animation, NOT as a normal autoplay background video.

Video + Scroll Behavior

Use the uploaded video as the main cinematic background from:
Home → Menu → Offers → About → Contact

The video should remain visually connected across the entire landing page.

Divide the video's timeline proportionally across the five sections:

Home → approximately 0–20%

Menu → approximately 20–40%

Offers → approximately 40–60%

About → approximately 60–80%

Contact → approximately 80–100%

As the user scrolls down, the video timeline must move forward smoothly.

As the user scrolls up, the video timeline must move backward smoothly.

The user's scroll position must directly control the video timeline.

Do NOT allow the video to independently autoplay.

Do NOT use normal video playback for the scroll animation.

Do NOT let the video restart when entering a new section.

Do NOT pause/freeze the video when reaching the navbar or section boundaries.

The video must continue seamlessly between all sections.

The entire video should feel like one continuous cinematic animation controlled by scrolling.

Smooth Scroll Synchronization

Make the video movement extremely smooth and synchronized with the user's scrolling.

Use:

requestAnimationFrame

Smooth interpolation / lerping

video.currentTime

loadedmetadata

Proper video preloading

Scroll-progress calculation

Clamped progress values from 0 to 1

Avoid:

Directly assigning video.currentTime on every raw scroll event

Jitter

Frame skipping

Stuttering

Sudden jumps

Freezing near section boundaries

Video restarting

Timeline desynchronization

The scroll position should control a normalized progress value:

scrollProgress = scrollY / (documentHeight - viewportHeight)

Then map:

video.currentTime = scrollProgress * video.duration

Use smooth interpolation so the video follows the user's scrolling naturally without lag or sudden jumps.

Critical Requirement

The user controls the video entirely through scrolling.

If the user scrolls slowly → the video animation moves slowly.

If the user scrolls quickly → the video smoothly moves forward according to the scroll position.

If the user stops scrolling → the video stops at exactly that point.

If the user scrolls upward → the video reverses smoothly.

The video must behave almost like a 3D scroll animation / image sequence, while using the uploaded video as the source.

White Background + Video Integration

The overall website must maintain a premium white / off-white visual identity.

The uploaded video should integrate naturally into the white design:

Keep the surrounding background white / off-white.

Do not create a black video background.

Use white or transparent-looking visual treatment where possible.

Add subtle white gradients or overlays around the video if necessary.

Maintain readability of black/dark text over the video.

Use soft beige/golden ambient lighting to blend the video with the design.

Add subtle glassmorphism overlays where appropriate.

The video should feel like a premium floating 3D food object rather than a conventional rectangular video.

If the uploaded video itself contains a dark background, use appropriate CSS masking, blending, gradients, cropping or layering techniques to visually integrate it into the white luxury theme without destroying the video quality.

Performance

Keep the implementation lightweight and optimized.

Do not duplicate the video for every section.

Use one shared background video element for the entire landing page.

Preload the video metadata and important frames.

Avoid unnecessary React re-renders during scrolling.

Use requestAnimationFrame for scroll/video synchronization.

Keep animations GPU-friendly.

Use transforms and opacity instead of expensive layout animations where possible.

Ensure smooth performance on normal laptops and desktop browsers.

Navbar

Create a floating transparent glass navbar with a premium white glass effect.

LIEBE

Home | Menu | Offers | About | Contact

Requirements:

Sticky/floating navbar

Smooth glassmorphism

Subtle blur

White translucent background

Soft shadow

Dark charcoal typography

Warm beige/golden hover accent

Navbar links should smoothly scroll to their respective sections.

Scrolling through the navbar area must NOT freeze or interrupt the background video animation.

Hero — Home

Create a fullscreen immersive 3D hero featuring a realistic juicy chicken burger with:

Steam

Floating particles

Soft cinematic lighting

Realistic reflections

Realistic shadows

3D depth

Premium food-photography quality

Heading:

“Good Food. Good Mood!”

Make “Mood!” a subtle warm golden/beige accent.

Subtitle:

“Fresh flavors. Bold cravings. Delivered your way.”

Buttons:

ORDER NOW | EXPLORE MENU

Use premium dark text with subtle golden/beige accent styling.

Hero interaction

Subtle mouse movement

Parallax

3D burger movement

Scroll-based burger animation

The uploaded background video should be visible behind/around the hero content.

The video animation must respond directly to scrolling.

Menu Section

Show premium realistic 3D food cards for:

Cheese Burger

Spicy Chicken Burger

Double Beef Burger

Crispy Chicken

Loaded Fries

Drinks

Each card should contain:

Realistic food image

Name

Short description

Rating

Price

Use:

Elegant white glassmorphism cards

Soft shadows

Subtle borders

Hover/tilt effects

3D depth

Smooth entrance animations

The background video must continue progressing smoothly as the user scrolls through the Menu section.

Offers Section

Create a cinematic featured offer:

“Spicy Burger Combo – 20% OFF”

Show:

Burger

Fries

Drink

Use a floating 3D presentation with:

Realistic shadows

Reflections

Warm beige/golden ambient lighting

Premium white background

Glassmorphism

Cinematic depth

The background video timeline should continue smoothly according to the user's scroll position.

About Section

Create a premium cinematic restaurant/kitchen scene with:

Warm lighting

Subtle smoke

Premium food atmosphere

Realistic depth

White/luxury visual treatment

Heading:

“Made Fresh. Made With Passion.”

Add a short premium description about LIEBE.

Keep the section visually consistent with the white luxury theme.

The uploaded background video must continue seamlessly through this section without restarting or freezing.

Contact Section

Create a simple premium white glassmorphism contact section with:

Location | Phone | Email | Opening Hours

Use:

Clean dark typography

Subtle borders

Soft shadows

Minimal luxury styling

White/off-white background

Beige/golden accents

The video should smoothly reach the final portion of its timeline as the user scrolls toward Contact.

Final CTA

Create a premium final CTA:

“Ready for Your Next Craving?”

“One bite is all it takes.”

Button:

ORDER YOUR BURGER

Use elegant luxury styling with subtle golden/beige accents.

The video should reach approximately 100% of its timeline at the bottom of the page.

Technical Requirements

Use:

React

Three.js

React Three Fiber

Framer Motion and/or GSAP

CSS3

HTML5 Video API

Keep everything as ONE LANDING PAGE.

Only implement:

Home | Menu | Offers | About | Contact

Use navbar anchor scrolling.

Most Important Technical Goal

The website should feel like a premium interactive 3D product experience, where the uploaded video acts almost like a scroll-controlled 3D animation.

The final experience should be:

Scroll Down → Video moves forward

Stop Scrolling → Video stops

Scroll Up → Video reverses

Continue Scrolling → Video continues from the exact current frame

No autoplay.

No independent video playback.

No sudden jumps.

No freezing.

No timeline reset.

No section-by-section video restart.

The video should remain one continuous animation throughout:

HOME → MENU → OFFERS → ABOUT → CONTACT

The entire experience must feel smooth, cinematic, premium and user-controlled.

Visual Quality

Focus heavily on:

Realistic 3D food

Cinematic lighting

White luxury aesthetic

Premium glassmorphism

Smooth scroll animation

Scroll-controlled background video

Parallax effects

3D depth

Realistic reflections and shadows

High-end food photography

Premium typography

Modern Apple-style visual quality

Smooth section transitions

Seamless video-to-scroll synchronization

Avoid:

Generic 2D restaurant layouts

Multiple pages

Dashboards

Login systems

Cart systems

Product-detail pages

Complex backend functionality

Unnecessary components

Heavy libraries or unnecessary animations

Keep the implementation lightweight to minimize credit usage while preserving the premium visual quality and smooth scroll-controlled video experience.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dca1c8ab-ac58-416f-b2dd-024bce3b7e6a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
