# Hyperframes Setup Notes

Skills used:
- `hyperframes`
- `hyperframes-cli`
- `$ui-ux-pro-max` for landing/video design constraints

Repository cloned to:

`C:\ЛехаЛендинг\tools\hyperframes`

Source:

`https://github.com/heygen-com/hyperframes`

Current checked commit:

`edac92b4`

## Windows Environment

Detected:
- Node: `v24.14.0`
- Bun: `C:\Users\user\.bun\bin\bun.exe`
- FFmpeg: `C:\кодексвидео\tools\ffmpeg\bin\ffmpeg.exe`

Hyperframes requires:
- Node.js `>=22`;
- FFmpeg;
- for repository development: Bun.

## Dependencies

Installed with:

```powershell
& 'C:\Users\user\.bun\bin\bun.exe' install
```

Result:
- dependencies installed successfully;
- `1204 packages installed`;
- the repo's `prepare` script contains Unix syntax (`test -d .git && lefthook install || true`), so it prints a Windows shell warning. This is not expected to block using Hyperframes CLI, but we should watch it if building the monorepo.

## Skills Installation

Installed Hyperframes skills globally with:

```powershell
npx.cmd --yes skills add heygen-com/hyperframes --yes --global
```

Installed 13 skills:
- `animejs`
- `css-animations`
- `gsap`
- `hyperframes-cli`
- `hyperframes-media`
- `hyperframes-registry`
- `hyperframes`
- `lottie`
- `remotion-to-hyperframes`
- `tailwind`
- `three`
- `waapi`
- `website-to-hyperframes`

Installed location shown by the installer:

`~\.agents\skills\...`

Important Windows note:

Use `npx.cmd`, not `npx`, inside PowerShell if script execution policy blocks `npx.ps1`.

Example:

```powershell
npx.cmd --yes hyperframes doctor
```

## Doctor Check

Ran:

```powershell
npx.cmd --yes hyperframes doctor
```

Result:
- Hyperframes `0.5.3`, latest;
- Node.js OK;
- FFmpeg OK;
- FFprobe OK;
- Chrome OK;
- memory/disk OK;
- Docker not found / not running.

Docker is not required for normal local MP4 renders. It is only needed if we want Docker-based reproducible rendering.

## Important Skills In The Repo

Use these local skill files when creating animation/video prompts:

- `C:\ЛехаЛендинг\tools\hyperframes\skills\hyperframes\SKILL.md`
- `C:\ЛехаЛендинг\tools\hyperframes\skills\hyperframes-cli\SKILL.md`
- `C:\ЛехаЛендинг\tools\hyperframes\skills\hyperframes-media\SKILL.md`
- `C:\ЛехаЛендинг\tools\hyperframes\skills\gsap\SKILL.md`
- `C:\ЛехаЛендинг\tools\hyperframes\skills\three\SKILL.md`
- `C:\ЛехаЛендинг\tools\hyperframes\skills\website-to-hyperframes\SKILL.md`

## Hyperframes Workflow

For a new animation/video:

```powershell
npx hyperframes init block-03-software --example blank --non-interactive
cd block-03-software
npx hyperframes lint
npx hyperframes inspect
npx hyperframes preview --port 3002
npx hyperframes render --quality draft
npx hyperframes render --quality high --output block-03-software.mp4
```

The source of truth is HTML:

- `index.html` or files in `compositions/`;
- timing through `data-*` attributes;
- deterministic animation through GSAP timelines;
- render to MP4 through the CLI.

## Animation Rules For LehaLanding

Use the landing design direction:

- black canvas;
- deep dark-blue neon glow inspired by the cube reference color only;
- square technical geometry;
- no rounded cards;
- no generic colorful crypto visuals;
- never use or animate the cube image itself;
- every image must receive motion/depth treatment;
- visuals should feel embedded into the background.

For video compositions, Hyperframes rules say:
- no empty flat backgrounds;
- every scene needs background texture, midground content, foreground accents;
- use large readable typography;
- use motion with meaning;
- avoid repeating the same ease/direction/duration everywhere;
- run `lint` and `inspect` before render.

## Git Note

The clone completed enough for source files and dependency install, but the local Hyperframes git checkout showed a stale `index.lock` / deleted-tracked-file state after the first clone timeout. Since this folder is a local tool dependency, not the landing source itself, we should not commit the whole Hyperframes repo into the landing repo. Keep it under `tools/hyperframes` and ignore it from the landing repository.
