# Block 1: Hero / первый экран

Skill used: `$ui-ux-pro-max`

Начинаем блок 1: Hero / первый экран.

## Goal

С первого экрана должно быть понятно: **Late Market Making** — это не обычный курс трейдинга, а практическая программа по адаптивному HFT market-making на post-pump рынках. Упор не на сигналы и прогнозы, а на торговый деск: рыночные режимы, execution, inventory, risk, software, research и сборку рабочей системы.

## Hero Copy

### H1

Late Market Making

### Subtitle

Адаптивный HFT market-making для post-pump рынков: учимся строить торговый деск, где execution, inventory, risk и исследование работают как единая система.

### Reinforcing Line

Не курс про угадывание движения. Практика работы с микроструктурой рынка, ликвидностью и контролем позиции в live-среде.

### Primary CTA

Записаться на курс

### Secondary CTA

Посмотреть программу

## Supporting Microcopy

Можно добавить короткую техническую строку рядом с визуалом или под CTA:

`market regimes -> quote logic -> execution -> inventory control -> risk review`

Эта строка должна выглядеть как системный маршрут, а не как рекламный слоган.

## Layout

Desktop:
- слева текстовый блок: небольшой technical label, H1, subtitle, reinforcing line, два CTA;
- справа и частично в фоне: `program screen 1.png` как trading desk / terminal visual;
- визуал занимает больше пространства, чем обычная иллюстрация, и уходит за правую границу hero;
- нижний край первого экрана должен чуть показывать следующий блок, чтобы страница не выглядела как закрытый постер.

Mobile:
- H1 и CTA остаются первыми;
- `program screen 1.png` идет ниже текста широким фрагментом, без мелких подписей поверх;
- dense screenshot не заставлять читать на мобильном, он работает как proof-of-software и атмосфера.

## Visual Direction

Hero черный, premium fintech, без generic crypto rainbow. Основной визуальный эффект — глубокая темно-синяя среда вокруг реального программного экрана.

Use:
- `#000000` как основной фон;
- `#02050A` и `#050A12` как глубина;
- `#005DFF`, `#0077FF`, `#00B7FF` как локальные neon blue/cyan акценты;
- прямые линии, тонкие рамки, квадратные углы у всех панелей;
- скругление только у CTA-кнопок.

Do not use:
- куб;
- cube/logo animation;
- rounded cards;
- purple-dominant gradient;
- вставку изображений из `вдохновение` как готовые ассеты.

## How To Use `program screen 1.png`

Asset size: `1917x1002`.

Treatment:
- использовать как главный visual hero;
- положить не в карточку, а в square technical frame, который визуально сливается с фоном;
- сделать перспективный наклон 3-6 градусов или легкий scale/crop, чтобы скрин не выглядел плоско вставленным;
- поверх дать темный overlay и blue/cyan glow, чтобы приглушить красно-зеленую яркость интерфейса;
- оставить часть терминала читаемой на desktop, но не превращать hero в демонстрацию мелких деталей;
- заложить click-to-zoom для полного просмотра dense terminal screenshot.

Implementation idea:
- `<button>` или `<a>`-обертка вокруг visual с `aria-label="Открыть скрин торгового терминала"`;
- по клику открывать square-corner modal/lightbox;
- в modal можно дать оригинальный screenshot почти во весь экран;
- modal close может иметь минимальный radius только при необходимости, но основной frame остается square.

## Background Nodes

Идею боковых узлов из `вдохновение/вдох5.webp` лучше реализовать кодом: тонкие линии, маленькие node-points, частично спрятанные по правому/левому краю. Сам файл не вставлять автоматически.

Идею свечения из `вдохновение/вдох1.webp` использовать как настроение: локальное темно-синее свечение за screenshot и слабый cyan edge light, без яркой заливки всего экрана.

## Animation Decision

На этом этапе отдельная Hyperframes-анимация не нужна. Достаточно статичного embedded visual с аккуратной CSS-интеграцией: perspective, mask/overlay, glow, grain, click-to-zoom.

Причина: hero сначала должен зафиксировать оффер и структуру. Motion имеет смысл делать позже, если нужно усилить смысл execution/research, например подсветкой стакана, execution zone или risk layer. Декоративное движение ради "вау" не добавляем.

Important note:
- текущий draft в `animations/block-01-hero` не использовать как источник для hero, потому что в нем есть `cube-world`, `cube-logo` и вставленные reference-assets. Это конфликтует с текущими правилами блока.

## UX Checklist

- H1 читается за 2-3 секунды.
- Subtitle объясняет курс без абстрактного "заработай на трейдинге".
- Primary CTA один и визуально главный.
- Secondary CTA спокойный, не спорит с primary.
- Все панели и frames с ровными углами.
- CTA-кнопки скругленные, с touch target не меньше 44px.
- Нет горизонтального скролла на mobile.
- `program screen 1.png` имеет alt/aria treatment и зарезервированное место, чтобы не было layout shift.

Блок 1 готов. После блока 1 переходим в блок 2: Что именно будем делать на курсе.
