# Ditherpunk Workstation

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Stable-success?style=for-the-badge)

> A browser-based image processing tool designed for creating retro, cyberpunk, and glitch aesthetics.

---

### 🌐 Language / Язык
[**🇬🇧 English**](#-english-description) | [**🇷🇺 Русский**](#-описание-на-русском)

---

<a name="english"></a>
## 🇬🇧 English Description

**Ditherpunk Workstation** runs entirely client-side (no data is uploaded to any server). It combines advanced dithering algorithms with generative glitch effects and CRT-style post-processing to transform modern images into retro-futuristic art.

### ✨ Key Features

| Category | Features |
| :--- | :--- |
| **Dither Engine** | **Algorithms:** Ordered (Bayer, Cluster Dot, Lines) & Error Diffusion (Floyd-Steinberg, Atkinson, Stucki, etc.)<br>**Palettes:** 1-bit Mono, RGB Quantization, Hardware Emulation (Gameboy, Mac SE, CGA, VGA)<br>**Control:** Matrix Editor & Serpentine Scanning |
| **Glitch FX** | **Pixel Sorting:** Threshold-based with directional control<br>**Compression:** JPEG block shifting, scrambling, and interlacing<br>**Distortion:** Waveform tearing & noise injection<br>**RGB Offset:** Chromatic aberration & channel swapping |
| **Post-FX** | **Bloom:** Glow with variable intensity, radius, and blend modes (Screen, Overlay)<br>**CRT:** Horizontal & Vertical scanlines |
| **Workflow** | **Seeds:** Share settings via short text codes or randomize for chaos<br>**Presets:** Import/Export `.json` files<br>**Comparison:** Real-time toggle between Original/Processed |

### 📖 Interface Guide

#### 1. Getting Started
* **Input:** Click `Upload Image` on the left sidebar or **Paste (Ctrl+V)** an image anywhere.
* **Navigation:** `Scroll` to zoom, `Click + Drag` to pan.

#### 2. The Toolbars
* **Left Sidebar (Destructive FX):** Controls Glitch effects and Pre-processing (Brightness/Contrast).
* **Right Sidebar (Style & Output):** Controls Dithering, Color Palettes, Post-FX, and Presets.
* **Toggles:** Click the `Checkbox` next to any group title to instantly enable/disable that stack.
* **Resets:** **Double-click** any slider handle to reset it to default.

#### 3. Exporting
* **Share Settings:** Copy the code from the "Settings Code" box.
* **Save Image:** Click `Save Output` to download the PNG (Effects and Scanlines are baked in).

### 🚀 How to Run

This is a standalone **Single-Page Application (SPA)**. No servers or dependencies required.

1.  Download the `dither-project.html` file.
2.  Double-click to open in any modern browser (Chrome, Firefox, Edge, Safari).
3.  Start editing.

---

<a name="russian"></a>
## 🇷🇺 Описание на Русском

**Ditherpunk Workstation** — это инструмент для обработки изображений прямо в браузере, созданный для разработки эстетики в стиле ретро, киберпанк и глитч-арт. Приложение работает полностью на стороне клиента (изображения не загружаются на сервер).

### ✨ Ключевые особенности

| Категория | Возможности |
| :--- | :--- |
| **Дизеринг** | **Алгоритмы:** Упорядоченные (Bayer, Halftone) и Диффузия ошибки (Floyd-Steinberg, Atkinson и др.)<br>**Палитры:** 1-бит, RGB, Эмуляция железа (Gameboy, CGA, VGA)<br>**Контроль:** Редактор матриц и "змеевидное" сканирование |
| **Глитч** | **Pixel Sorting:** Сортировка пикселей по яркости (Pixel Sorting)<br>**Артефакты:** Сдвиг блоков JPEG, перемешивание и интерлейсинг<br>**Искажения:** Волновые деформации и шум<br>**RGB:** Хроматическая аберрация и подмена каналов |
| **Пост-FX** | **Блум:** Свечение с настройкой радиуса и режимов наложения<br>**CRT:** Горизонтальные и вертикальные сканлайны |
| **Процесс** | **Сиды:** Обмен настройками через текстовые коды или генерация "Хаоса"<br>**Пресеты:** Импорт/Экспорт `.json`<br>**Сравнение:** Мгновенное переключение Оригинал/Обработка |

### 📖 Руководство

#### 1. Начало работы
* **Загрузка:** Нажмите `Upload Image` или нажмите **Вставить (Ctrl+V)** в любом месте.
* **Навигация:** `Колесико` для зума, `Клик + Драг` для перемещения.

#### 2. Инструменты
* **Левая панель:** Глитч-эффекты и цветокоррекция.
* **Правая панель:** Дизеринг, Палитры, Пост-обработка и Пресеты.
* **Тогглы:** Галочка у заголовка группы включает/выключает весь блок эффектов.
* **Сброс:** **Двойной клик** по слайдеру сбрасывает значение.

#### 3. Экспорт
* **Обмен:** Скопируйте код из поля "Settings Code" чтобы поделиться стилем.
* **Сохранение:** Нажмите `Save Output` для скачивания PNG (все эффекты "запекаются").

### 🚀 Как запустить

Это автономное приложение (**SPA**). Установка не требуется.

1.  Скачайте файл `dither-project.html`.
2.  Откройте его в любом современном браузере.
3.  Начинайте творить.

---
*Created with ❤️ for Ditherpunk aesthetics.*
