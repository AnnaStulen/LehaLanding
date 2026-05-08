# LANDING_BLOCK_PLAN

Skill used: `$ui-ux-pro-max`

## Global Project Rules: Motion, Hover, Density

Status: active for all current and future blocks.

The landing must feel alive, premium, and interactive, almost like a video/trading research interface rather than a static page.

Every block should include meaningful interaction when it has images, charts, screenshots, panels, cards, frames, callouts, process rows, pricing tiers, or CTA elements.

Required interaction patterns:

- hover/focus states for images, frames, panels, cards, process rows, callouts, and CTAs;
- subtle zoom-in or perspective shift on important visuals;
- blue/cyan glow increase on hover;
- animated border-light, scanline, node pulse, or line tracing where it supports meaning;
- callouts that highlight the related chart/visual zone;
- transform/opacity/filter-based motion only, with no layout shift;
- `prefers-reduced-motion` support.

Background motion:

- coded circuit/data-line motion is allowed in empty/depth areas;
- diagonal movement can connect blocks when it feels premium;
- `вдохновение\вдох5.webp` is a reference for circuit/node energy, not a default pasted background image.

Spacing:

- do not create huge empty top gaps between blocks by default;
- reduce top padding when blocks are conceptually connected;
- large cinematic pauses are allowed only when deliberate;
- future blocks should feel dense, expensive, and complete, not sparse or unfinished.

## Global Asset Rule: Do Not Mix Block Images

Each block has its own locked main asset. Do not replace a block's main asset with an image from another block.

If a prompt says to improve hover, motion, glow, depth, background animation, or interactivity, it means improve the treatment around the locked asset. It does not mean swap the asset.

Rules:

- Block 1 Hero main asset is only `program screen 1.png` / `assets/program-screen-1.png`;
- Block 2 main asset is only `вход выход приблизили.jpg`;
- `вход выход большой.png` was secondary context for Block 2 and is now allowed as the locked execution visual for Block 5;
- images from `вдохновение` are references only unless a block explicitly says to use them as production assets;
- if an agent thinks a main asset should be replaced, they must ask first and not change it silently;
- locked software screenshots must stay readable and close to the original brightness. Do not hide them under heavy black overlays.

## Global Screenshot Brightness Rule

Status: critical for all blocks.

Do not darken real course screenshots globally.

Forbidden on real screenshots:

- `filter: brightness(...)`;
- `filter: hue-rotate(...)`;
- global contrast/saturation filters that change the screenshot color system;
- `opacity` below 1 on the screenshot;
- full-cover `::before` / `::after` dark overlays;
- full-cover black gradients or scrims over the image.

Allowed:

- square technical frame;
- blue/cyan edge glow;
- thin callout lines;
- hover zoom;
- local dark backgrounds only under small labels/callouts;
- click-to-zoom / lightbox.

Before a screenshot block is considered done, verify computed CSS:

- image `filter: none`;
- image `opacity: 1`;
- no full-image dark pseudo overlay on the visual container;
- screenshot still looks close to the original file.

## Current Workflow Rule

Ð’ Ð½Ð°Ñ‡Ð°Ð»Ðµ ÐºÐ°Ð¶Ð´Ð¾Ð³Ð¾ ÑÑ‚Ð°Ð¿Ð° Ð¿Ð¸ÑÐ°Ñ‚ÑŒ:

`ÐÐ°Ñ‡Ð¸Ð½Ð°ÐµÐ¼ Ð±Ð»Ð¾Ðº N: [Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ]`

Ð•ÑÐ»Ð¸ ÑÑ‚Ð¾ Ð¿Ñ€Ð°Ð²ÐºÐ¸:

`Ð”ÐµÐ»Ð°ÐµÐ¼ Ð¿Ñ€Ð°Ð²ÐºÐ¸ Ð´Ð»Ñ Ð±Ð»Ð¾ÐºÐ° N: [Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ]`

Ð’ ÐºÐ¾Ð½Ñ†Ðµ ÐºÐ°Ð¶Ð´Ð¾Ð³Ð¾ ÑÑ‚Ð°Ð¿Ð° Ð¿Ð¸ÑÐ°Ñ‚ÑŒ:

`Ð‘Ð»Ð¾Ðº N Ð³Ð¾Ñ‚Ð¾Ð². ÐŸÐ¾ÑÐ»Ðµ Ð±Ð»Ð¾ÐºÐ° N Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´Ð¸Ð¼ Ð² Ð±Ð»Ð¾Ðº N+1: [Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ]`

## Block 1

Status: prepared.

Name: Hero / Ð¿ÐµÑ€Ð²Ñ‹Ð¹ ÑÐºÑ€Ð°Ð½.

Prompt file:

`PROMPT_01_HERO.md`

Solution file:

`BLOCK_01_HERO_SOLUTION.md`

What to give in a new chat:

- `PROMPT_01_HERO.md`
- `DESIGN_DIRECTION.md`
- `BLOCK_BY_BLOCK_WORKFLOW.md`
- `LANDING_STRUCTURE.md`
- `program screen 1.png`
- optional reference only: `Ð²Ð´Ð¾Ñ…Ð½Ð¾Ð²ÐµÐ½Ð¸Ðµ\Ð²Ð´Ð¾Ñ…1.webp`
- optional reference only: `Ð²Ð´Ð¾Ñ…Ð½Ð¾Ð²ÐµÐ½Ð¸Ðµ\Ð²Ð´Ð¾Ñ…5.webp`

Main asset locked:

`program screen 1.png` / `assets/program-screen-1.png`

Do not replace the Hero image with Block 2 chart images.

Skills:

- `$ui-ux-pro-max`
- if animation needed: `hyperframes`
- if animation needed: `hyperframes-cli`
- if motion timeline needed: `gsap`

What is planned:

- locked main asset: `program screen 1.png` / `assets/program-screen-1.png`;
- improve only treatment: integration, technical frame, local label scrims, glow, hover, depth, lightbox;
- keep the screenshot readable and close to original brightness;
- do not globally darken the Hero screenshot;
- do not replace with `вход выход приблизили.jpg`;
- do not replace with `вход выход большой.png`;
- no cube;
- no cube animation;
- no mandatory insertion of `Ð²Ð´Ð¾Ñ…Ð½Ð¾Ð²ÐµÐ½Ð¸Ðµ` images;
- black premium fintech hero;
- deep dark-blue neon glow;
- square geometry;
- rounded only CTA buttons;
- `program screen 1.png` as main course/software visual;
- possible click-to-zoom terminal screenshot;
- no separate animation for now; start with static embedded visual and decide on motion after structure approval.

## Block 2

Status: prepared.

Name: Что именно будем делать на курсе.

Prompt file:

`PROMPT_02_COURSE_ACTIONS.md`

What to give in a new chat:

- `PROMPT_02_COURSE_ACTIONS.md`
- `DESIGN_DIRECTION.md`
- `LANDING_STRUCTURE.md`
- `LANDING_BLOCK_PLAN.md`
- `BLOCK_BY_BLOCK_WORKFLOW.md`
- `index.html`
- `styles.css`
- `script.js`
- `вход выход приблизили.jpg`
- `вход выход большой.png`
- optional reference only: `вдохновение\вдох1.webp`
- optional reference only: `вдохновение\вдох5.webp`

Main asset locked:

`вход выход приблизили.jpg`

Secondary context, later reused in Block 5:

`вход выход большой.png`

Do not replace the Block 1 Hero image. Do not use `program screen 1.png` as the main visual for Block 2.

Purpose:

Explain the concrete course activity: extracting market edge at the microstructure level in post-pump market states.

What is planned:

- locked main asset: `вход выход приблизили.jpg`;
- secondary context only: `вход выход большой.png`;
- do not use `program screen 1.png` as the Block 2 main visual;
- explain the course through market-regime logic, not prediction;
- remove the large block title if it creates too much visual weight;
- use a stronger main thesis instead: "Не угадываем движение — читаем режим рынка и строим исполнение";
- use `вход выход приблизили.jpg` as the main chart visual;
- do not use `вход выход большой.png` as the main Block 2 visual; it is reserved as the execution visual for Block 5;
- copy used images into `assets` with latin filenames;
- show zones: pump, transition, post-pump, execution zone;
- add hover/zoom/glow interactions for the chart frame, callouts, and process rows;
- reduce the top spacing so Block 2 sits closer to Hero;
- remove the Hero text "Дальше: что именно будем делать на курсе" if it is still present;
- black premium fintech style;
- deep dark-blue neon accent;
- square technical frames;
- no cube;
- no separate Hyperframes animation for now.

## Block 3

Status: completed.

Name: Программный комплекс.

Prompt file:

`PROMPT_03_SOFTWARE_COMPLEX.md`

What to give in a new chat:

- `PROMPT_03_SOFTWARE_COMPLEX.md`
- `DESIGN_DIRECTION.md`
- `LANDING_STRUCTURE.md`
- `LANDING_BLOCK_PLAN.md`
- `BLOCK_BY_BLOCK_WORKFLOW.md`
- `index.html`
- `styles.css`
- `script.js`
- `видсофта1.png`
- optional secondary only: `program screen 1.png`

Purpose:

Show that the course is built around specialized trading/research infrastructure, not abstract lectures.

Main asset locked:

`видсофта1.png`

Secondary asset only:

`program screen 1.png` / `assets/program-screen-1.png`

Do not replace Block 3 main visual with Block 1 or Block 2 images.

What is planned:

- no standard left-text/right-image layout;
- start with one wide software visual across the landing width;
- use `видсофта1.png` as the main full-width software screen;
- copy it into `assets` as `block-03-software-complex.png`;
- keep `видсофта1.png` visually close to the original: readable, bright enough, not hidden under black overlay;
- use local dark label backgrounds only where text sits on top of the screenshot;
- add a living layer of text around/over/under the visual;
- text should feel like a trading desk console, not Google Docs;
- use mixed-size text states, technical labels, floating tags, callouts, mini-panels;
- add hover/zoom/glow interactions for the software frame, callouts, and mini-panels;
- optional click-to-zoom/lightbox for the software screen;
- black premium fintech style;
- deep dark-blue neon accent;
- square technical frames;
- no cube;
- no separate Hyperframes animation for now.

Result:

- Block 3 is completed in the landing workflow.
- Main asset was copied to `assets/block-03-software-complex.png`.
- Next block: Block 4, Research и научное преимущество.

## Block 4

Status: completed.

Name: Research и научное преимущество.

Main assets:

- `animations/block-04-research-edge/block-04-research-edge.mp4`
- `research1.jpg` / `assets/block-04-research-01.jpg`
- `research2.jpg` / `assets/block-04-research-02.jpg`

Purpose:

Show that the course validates strategies through research models: PnL distribution, rolling volatility, gamma proxy, and risk profile.

Result:

- Block 4 is completed in the landing workflow.
- Next block: Block 5, Применение методологии.

## Block 5

Status: completed.

Name: Применение методологии.

Prompt file:

`PROMPT_05_METHOD_APPLICATION.md`

Old separate blocks folded into this block:

- old Block 5 `Market regimes: pump / dump / post-pump`;
- old Block 6 `Execution: входы, выходы, ликвидность`;
- old Block 8 `Практико-ориентированная модель обучения` is not used here and will be planned later.

Source of truth:

`Strategies.pdf`

Block 5 must use the exact section headings and core text from `Strategies.pdf`. Any additional explanatory copy must be minimal and formatted like short numbered notes.

Four internal directions:

1. `ПРИМЕНЕНИЕ АЛГОРИТМИЧЕСКИХ МЕТОДОВ ИСПОЛНЕНИЯ`
2. `УПРАВЛЕНИЕ РИСКАМИ`
3. `EVENT-DRIVEN`
4. `ОЦЕНКА ТОРГОВОЙ ДЕЯТЕЛЬНОСТИ`

Exact text from `Strategies.pdf`:

`ПРИМЕНЕНИЕ АЛГОРИТМИЧЕСКИХ МЕТОДОВ ИСПОЛНЕНИЯ`

`Использование моделей исполнения, основанных на инвентарных подходах маркет-мейкинга и HFT-инфраструктуре, включая управление лимитной ликвидностью, агрессивное/пассивное исполнение (pump/equity-driven regimes).`

`УПРАВЛЕНИЕ РИСКАМИ`

`Применение классических и нелинейных моделей риск-менеджмента. Использование VaR-подобных подходов, сценарных моделей, а также нелинейных методов оценки хвостовых рисков и асимметрии распределений.`

`EVENT-DRIVEN`

`Классификация pump/dump-событий по типам и Определение рыночных режимов и структурных состояний. Классификация рыночной динамики pump-driven и post-pump режимы с оценкой структурного смещения цены.`

`ОЦЕНКА ТОРГОВОЙ ДЕЯТЕЛЬНОСТИ`

`Анализ эффективности исполнения и торговых стратегий с применением AI-методологии.`

Assets:

- Algorithmic execution: `вход выход большой.png` copied to `assets/block-05-execution-map.png`;
- Risk management: use one main risk image from `риски1.jpg`, `беж1 max drawton.jpg`, `беж3 хедж.jpg`, or `беж4 слепые зоны.jpg`; copy selected files into `assets` with latin filenames;
- Event-driven: coded visual, not a reused screenshot;
- Trading activity assessment: coded dashboard/table, not `research1.jpg`, `research2.jpg`, or `пнлучастников.png`.

Risk-image treatment:

- do not paste beige/white risk images raw as unrelated screenshots;
- keep the original image readable;
- place it inside a square technical frame;
- add black/deep-blue surrounding stage, cyan edge glow, thin borders, callout labels, and a moving light sweep/scanline over the frame;
- use local dark label backgrounds only under labels;
- do not use full-image dark overlays, opacity reduction, or global brightness filters.

No separate video for Block 5 now. Build it as an interactive HTML/CSS/JS section with hover states, scanlines, moving borders, and coded mini-visuals.

Result:

- Block 5 is completed in the landing workflow.
- Added the method application section with four directions from `Strategies.pdf`.
- Added Block 5 assets:
  - `assets/block-05-execution-map.png`
  - `assets/block-05-risk-hedge.jpg`
  - `assets/block-05-risk-drawdown.jpg`
  - `assets/block-05-risk-blind-zones.jpg`
- Next block: Block 6, Практико-ориентированная модель обучения.
