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
- add subtle black glass/dark overlay if the image is too colorful;
- use blue/cyan highlight lines and callouts;
- allow click-to-zoom for dense terminal screenshots.

Treatment for inspiration images:
- use as background layers, transitional atmospheres, or animation references;
- remove visible generation/watermark marks before production use;
- never mix them as unrelated decorative pictures.
- remember: they are optional references, not mandatory landing content.

## Pricing Direction

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
