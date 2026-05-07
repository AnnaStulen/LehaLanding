# Block By Block Workflow

Skill used: `$ui-ux-pro-max`

This is how we will build the landing across many chats without losing structure.

## Main Principle

We build the landing gradually, block by block.

For every block:
1. First define the block goal and content.
2. If the block needs animation/video, prepare the animation in a separate chat.
3. Then return to the landing chat and build the block using the finished video/animation asset.

This keeps the landing context clean and keeps animation work from mixing with page layout work.

## Chat Pattern

When a block needs animation, the assistant should say something like:

"Аня, сейчас делаем блок 3: Программный комплекс. Перед версткой блока сначала подготовим видео/анимацию в отдельном чате. Вот промт для нового чата."

Then provide a prompt that includes:
- which skill to use;
- exact project path;
- block number and purpose;
- visual style from `DESIGN_DIRECTION.md`;
- source images to use;
- expected output file name;
- where the output should be saved;
- validation steps.

After animation is produced in the other chat:
1. Return to the landing chat.
2. Confirm output file path.
3. Build the landing block and embed the animation/video.

## Prompt Template For Animation Chats

Use this template when preparing a new video/animation chat:

```text
Use skill: `hyperframes`
Use skill: `hyperframes-cli`
Use skill if needed: `gsap` / `three`

Project folder: C:\ЛехаЛендинг
Animation output folder: C:\ЛехаЛендинг\animations\block-[NUMBER]-[slug]

Read first:
- C:\ЛехаЛендинг\DESIGN_DIRECTION.md
- C:\ЛехаЛендинг\BLOCK_BY_BLOCK_WORKFLOW.md
- C:\ЛехаЛендинг\tools\hyperframes\skills\hyperframes\SKILL.md
- C:\ЛехаЛендинг\tools\hyperframes\skills\hyperframes-cli\SKILL.md

Task:
Create a [DURATION]-second Hyperframes animation for landing block [NUMBER]: [BLOCK NAME].

Content goal:
[Explain what this block must communicate.]

Visual style:
Black premium fintech/trading environment. Deep dark-blue neon glow inspired by the blue light inside the cube reference. The cube itself must not be used or animated. Square geometry. No rounded cards. CTA/button shapes are not needed inside the video unless requested. The visual must feel embedded into the black background, not pasted on top.

Source assets:
- [absolute path to image 1]
- [absolute path to image 2]

Motion:
[Describe movement: glow pulse, side nodes, chart reveal, terminal zoom, etc.]

Output:
- Render MP4 to C:\ЛехаЛендинг\animations\block-[NUMBER]-[slug]\block-[NUMBER]-[slug].mp4
- Keep the Hyperframes source files in the same folder.

Validation:
- Run `npx hyperframes lint`
- Run `npx hyperframes inspect`
- Render draft first, final after fixes.
```

## Landing Block Workflow

For each landing block, use this order:

1. Confirm content
   - title;
   - short selling idea;
   - proof/image/video;
   - CTA if needed.

2. Confirm asset treatment
   - raw screenshot;
   - redrawn chart;
   - embedded background visual;
   - Hyperframes video.

3. Create or request animation
   - only if motion adds meaning.

4. Build block
   - responsive desktop/mobile;
   - square-corner panels;
   - black/deep-blue style;
   - CTA buttons rounded.

5. Verify
   - no horizontal scroll;
   - readable text;
   - no overlapping;
   - images/video integrated with background;
   - `$ui-ux-pro-max` checklist: contrast, touch target, responsive, reduced motion.

## Current Planned Blocks

1. Hero: Late Market Making
2. What we do on the course
3. Program software complex
4. Research and scientific edge
5. Market regimes: pump / dump / post-pump
6. Execution: entries, exits, liquidity
7. Risk and inventory management
8. Practice model
9. Student results and proof
10. Two paths after the course
11. Course modules
12. Mid-page CTA
13. Pricing: `$1000`, `$4700`, `$10,000`
14. FAQ
15. Footer with documents, Telegram, privacy, group, terms, disclaimer
