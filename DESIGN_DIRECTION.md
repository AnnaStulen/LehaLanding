# LehaLanding Design Direction

Skill used: `$ui-ux-pro-max`

This document is the visual source of truth for the landing page. Use it in every chat before designing or coding a block.

## Core Visual Direction

The landing should feel like a black premium trading/research system, not a generic crypto course page.

Important brand-reference rule:
- the black cube logo/reference image is used only as a color and light reference for the deep inner blue glow;
- do not place the cube logo on the landing;
- do not animate the cube;
- do not use the cube as a hero object, section object, icon, background, or video asset.

Main mood:
- black background;
- deep neon dark-blue glow inspired by the blue light inside the cube reference;
- embedded 3D/5D visuals that feel fused with the background;
- analytical, cinematic, expensive, technical;
- no random colorful crypto gradients;
- no soft beige, no purple-dominant palette, no rounded card UI.

## Inspiration Folder Rule

The `вдохновение` folder is a reference folder, not a required asset folder:
- images from `вдохновение` do not have to be inserted into the landing;
- use them primarily as examples of mood, glow, depth, side-node patterns, 3D/5D feeling, and interactive background behavior;
- insert a `вдохновение` image into the landing only if we deliberately decide it works for a specific block;
- final visuals may be newly generated, redrawn, coded, or animated from actual course screenshots instead.

## Color System

Primary background:
- `#000000` pure black;
- secondary depth black: `#02050A`;
- panel black: `#050A12`.

Main accent:
- deep electric blue: `#005DFF`;
- inner-reference blue: `#0077FF`;
- neon cyan edge: `#00B7FF`;
- soft blue glow: `rgba(0, 93, 255, 0.35)`.

Text:
- primary text: `#F4F7FB`;
- secondary text: `#A7B4C8`;
- technical muted text: `#5F728E`.

CTA:
- CTA buttons may use rounded corners;
- preferred CTA fill: deep neon blue, `#005DFF`;
- CTA hover: brighter blue/cyan edge glow;
- CTA text: white.

Avoid:
- gold as the main CTA color;
- purple as a dominant accent;
- colorful rainbow sections;
- beige/cream surfaces.

## Corners And Geometry

Hard rule:
- page sections, content panels, pricing cards, image frames, tables, module blocks: square corners only, `border-radius: 0`;
- CTA buttons: rounded corners allowed and desired;
- modals may have minimal radius only if needed, but default is square.

The page should use straight cuts, lines, grids, sharp edges, and technical framing. If something looks like a SaaS card with soft rounded corners, redesign it.

## Background And Embedded Visuals

Use `вдохновение/вдох1.webp` as the reference for dark blue atmospheric glow:
- darker than the reference in most places;
- local glow zones only, not a full-page bright blue wash;
- glow should appear behind key content, like depth in the canvas.

Use `вдохновение/вдох5.webp` as the reference for side nodes:
- place circuit/node patterns on the left or right edges of selected sections;
- do not repeat on every block;
- nodes should look partially hidden behind content and fading into black;
- use as a background layer, not as a pasted image block.

Use 3D/5D embedded visuals:
- images should look integrated into the same black environment;
- use masking, shadows, glow spill, grain, perspective tilt, and partial cropping;
- avoid the feeling of "picture inserted onto a background";
- visuals should have a little depth, as if lying inside the background.

## Image Unification Rules

All rough screenshots and graphics must be brought into one visual system before final landing use.

Treatment for chart/research images:
- convert white backgrounds to dark panels or redraw the chart in the landing style;
- use deep blue/cyan data lines;
- add clear labels and a short insight next to each chart;
- keep chart axes readable;
- avoid red/green-only meaning.

Treatment for screenshots:
- place inside square-corner technical frames;
- preserve the original screenshot readability and brightness; screenshots are proof, not background texture;
- do not globally darken software screenshots or terminal screenshots;
- use only local overlays/scrims behind text labels and callouts, not a full-image blackout;
- if a screenshot is too colorful, correct it gently with contrast/saturation and a light blue/cyan framing layer, while keeping interface details readable;
- use blue/cyan highlight lines and callouts;
- allow click-to-zoom for dense terminal screenshots.

Screenshot brightness rule:
- default target is close to the original asset;
- acceptable treatment: technical frame, edge glow, local label scrims, subtle scanline, hover zoom;
- avoid: opacity below 0.75, heavy black overlays, `brightness()` filters below 0.9, or making the UI unreadable;
- for `program screen 1.png` and `видсофта1.png`, keep the trading interface visibly close to the original image.

## Critical Screenshot Rule: No Global Darkening

This rule was added after a real implementation bug: screenshots were made too dark even when the original assets were correct.

For every production screenshot, terminal screenshot, software screenshot, chart screenshot, or proof image:

- default CSS must be `filter: none`;
- do not use `brightness()`, `hue-rotate()`, global `saturate()`/`contrast()` filters, or `opacity` to force the screenshot into the palette;
- do not place `::before` / `::after` full-image black overlays above the screenshot;
- do not use full-image black gradients, full-image scrims, or dark blend layers over the screenshot;
- do not put opacity on the screenshot parent if it visually darkens the image;
- top bars, callouts, labels, and text chips may have local dark backgrounds, but those backgrounds must cover only the text area;
- edge glow, square frame, thin lines, labels, hover zoom, and lightbox are the correct way to integrate screenshots;
- if a screenshot still looks too bright, ask before changing global brightness.

Verification required for screenshot blocks:

- inspect computed styles for the image: `filter: none`, `opacity: 1`;
- inspect pseudo-elements on the image container: no full-cover dark `::before` or `::after`;
- compare visually against the original asset before delivery;
- hard refresh or cache-bust CSS after removing image filters.

Treatment for inspiration images:
- use as background layers, transitional atmospheres, or animation references;
- remove visible generation/watermark marks before production use;
- never mix them as unrelated decorative pictures.
- remember: they are optional references, not mandatory landing content.

## Pricing Direction

## Global Interactivity And Motion Direction

The landing must feel alive and premium, closer to a moving trading/research interface than to a static set of screenshots.

This is a global rule for every block:
- if a block has images, charts, screenshots, frames, cards, panels, pricing tiers, process rows, callouts, or navigation elements, it needs an intentional hover/focus/interaction state;
- use subtle zoom-in, parallax, depth shift, glow increase, border-light movement, line tracing, node pulsing, scanlines, active callouts, and cursor-follow light only when they support the meaning of the block;
- images and screenshots should react on hover with transform-based movement: slight scale, perspective, glow, or masked reveal;
- callouts and labels should feel connected to the visual: hover on a label may highlight the related zone, line, point, or frame;
- CTA buttons need a premium hover state: brighter blue/cyan edge, glow, and responsive press/focus feedback;
- animated backgrounds are allowed in empty/depth areas: coded circuit lines, data streams, grid drift, node pulses, and diagonal light paths;
- use `вдохновение/вдох5.webp` only as a reference for circuit/node movement and diagonal energy, not as a pasted decorative image unless a block explicitly asks for it.

Motion quality:
- expensive, calm, technical, cinematic;
- no cheap blinking, bouncing, chaotic crypto motion, or rainbow effects;
- animation should feel like a trading/research system waking up, not like a game UI;
- prefer transform, opacity, filter, clip-path, SVG stroke-dashoffset, and CSS variables;
- avoid animating layout properties such as width, height, top, left, padding, and margin;
- every moving element must respect `prefers-reduced-motion`.

The goal is not to animate everything equally. The goal is that every visible block has enough responsive life that the landing feels high-value and interactive.

## Section Spacing And Rhythm

Do not create huge empty gaps between blocks by default.

Global spacing rules:
- blocks should connect with a controlled cinematic rhythm, not with accidental blank space;
- reduce top padding when a block follows directly from the previous idea;
- large vertical pauses are allowed only when they are a deliberate dramatic moment;
- avoid starting sections with a massive heading plus a large empty top gap;
- if a block already follows a strong Hero, place the next section closer and let the visual transition carry the flow;
- on mobile, spacing must be tighter and content should appear quickly after scroll.

For future blocks, prefer compact premium density: enough air to feel expensive, but not so much that the page feels unfinished.

Skill used: `$ui-ux-pro-max`

There are three price tiers:

1. Minimal
   - Price: `$1000`
   - Meaning: "everything yourself"
   - Positioning: self-guided access, lowest support.

2. Main
   - Price: `$4700`
   - Meaning: main recommended path
   - Positioning: best balance, should be visually highlighted.

3. VIP
   - Price: `$10,000`
   - Meaning: high-touch, premium, maximum support.
   - Positioning: private/priority level.

Pricing block rules:
- 3 columns on desktop;
- stacked on mobile;
- square pricing cards;
- main plan gets blue neon edge and "recommended" label;
- each card has its own CTA;
- sticky CTA can point to the main plan.

## Footer Requirements

The landing must end with a serious footer, not a tiny afterthought.

Footer should include:
- Telegram contact;
- Telegram group;
- course/legal documents;
- privacy policy;
- offer/terms;
- refund/payment terms if needed;
- company/project name;
- risk disclaimer;
- copyright.

Footer visual style:
- black background;
- thin blue/cyan divider line;
- square link groups;
- no rounded footer cards.

## Skills To Use

For landing design and UX:
- `$ui-ux-pro-max`

For videos and animation:
- Hyperframes skills from `tools/hyperframes/skills/`;
- primary: `hyperframes`;
- dev loop: `hyperframes-cli`;
- motion library: `gsap`;
- for 3D pieces: `three`;
- for website-to-video workflows: `website-to-hyperframes`.
