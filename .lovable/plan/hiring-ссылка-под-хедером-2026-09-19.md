# Hiring-ссылка под хедером

## Что делаем

Добавить заметный, но элегантный блок-ссылку «We're Hiring» сразу под фиксированным хедером, внутри секции Hero. Клик плавно переносит к секции `#careers`.

## Расположение

В `src/components/HeroSection.tsx`, в самом начале внутреннего контейнера, до заголовка H1 — горизонтальная плашка/бейдж:

```text
[Header fixed]
↓
[We're Hiring banner/pill — inside HeroSection]
↓
[Hero headline + buttons + image]
```

## Дизайн

- Форма: `rounded-full` pill с обводкой `border border-primary/20` и полупрозрачным светлым фоном `bg-background/90` + `backdrop-blur-sm`, чтобы сочеталось с hero-gradient и не выбивалась.
- Иконка: `Users` или `Briefcase` из `lucide-react` + `ArrowRight`.
- Текст: «We're Hiring — Join Our Team».
- Типографика: семантические токены — `text-foreground`, `font-semibold`, `text-sm`.
- Hover: слегка затемняется фон/стрелка смещается вправо.
- Мобильная версия: сохраняет ту же форму pill, текст уменьшается до `text-xs`, центрируется.

## Поведение

- Клик по всей плашке вызывает `scrollToSection('careers')` — плавный скролл к блоку найма.
- Фокус/клавиатура: `button` или ссылка с `role="button"` и `aria-label="Go to careers section"`.

## Файлы

- `src/components/HeroSection.tsx` — добавить компонент-плашку и функцию скролла.
- Никаких новых файлов, зависимостей или цветов вне CSS-токенов не требуется.

## Что НЕ меняем

- Сама секция `HiringSection` и её контент остаются без изменений.
- Порядок секций в `Index.tsx` не меняется.
- Палитра остаётся существующей (`primary`, `secondary`, `accent`, `background`).
