Ditherpunk Workstation
English | Русский

<a name="english"></a>

🇬🇧 English Description
Ditherpunk Workstation is a browser-based image processing tool designed for creating retro, cyberpunk, and glitch aesthetics. This workstation runs entirely client-side (no data is uploaded to any server) and combines advanced dithering algorithms with generative glitch effects and CRT-style post-processing.

Key Features
Dither Engine:

Algorithms: Includes Ordered (Bayer, Cluster Dot, Lines) and Error Diffusion (Floyd-Steinberg, Atkinson, Stucki, etc.) with option for Serpentine scanning.

Palettes: 1-bit Monochrome, RGB quantization, Grayscale, and Hardware emulations (Gameboy, Macintosh SE, CGA, VGA).

Matrix Editor: Custom control over 4x4 Bayer matrices.

Glitch FX Suite:

Pixel Sorting: Threshold-based sorting with directional control (Horizontal/Vertical).

Compression Artifacts: Simulated JPEG block shifting, scrambling, and interlacing.

Waveform Distortion: Sinusoidal tearing and noise injection.

RGB Offset: Chromatic aberration and channel swapping.

Post-Processing:

Bloom: Customizable glow with variable intensity, radius, and blend modes (Screen, Overlay, Normal).

CRT Simulation: Adjustable horizontal and vertical scanlines.

Workflow & State:

Shareable Seeds: Generate short text codes to share your exact settings or use the "Randomize" button to generate chaotic effects.

Presets: Import/Export settings via .json files or use built-in factory presets.

Real-time Comparison: Toggle between the original and processed image instantly with a floating button.

Resolution Control: View current resolution and adjust pixel scale dynamically.

Interface Guide
1. Getting Started
Input: Click "Upload Image" on the left sidebar, or simply Paste (Ctrl+V) an image anywhere on the page.

Navigation: Use the mouse wheel to zoom in/out and click+drag to pan around the image.

2. The Toolbars
Left Sidebar (Destructive FX): Controls Glitch effects (Sorting, JPEG, Wave, RGB) and Pre-processing (Brightness/Contrast).

Right Sidebar (Style & Output): Controls Dithering, Color Palettes, Post-FX (Bloom/Scanlines), and Presets.

Toggles: Use the checkbox next to any group title (e.g., "Glitch FX") to instantly enable/disable that entire stack.

Resets: Double-click any slider handle to reset it to its specific default value.

3. Saving & Sharing
Share Settings: Copy the code from the "Settings Code" box to share your look, or paste a code and click "Apply".

Save Image: Click "Save Output" to download the final render (Scanlines and effects are baked into the PNG).

How to Run
This project is a standalone Single-Page Application (SPA). It requires no installation, servers, or dependencies.

Download the dither-project.html file.

Double-click the file to open it in any modern web browser (Chrome, Firefox, Edge, Safari).

Start editing immediately.

<a name="russian"></a>

🇷🇺 Описание на Русском
Ditherpunk Workstation — это инструмент для обработки изображений в браузере, созданный для разработки эстетики в стиле ретро, киберпанк и глитч-арт. Приложение работает полностью на стороне клиента (изображения не загружаются на сервер) и объединяет продвинутые алгоритмы дизеринга (dithering) с генеративными глитч-эффектами и пост-обработкой в стиле ЭЛТ-мониторов.

Ключевые особенности
Движок Дизеринга (Dither Engine):

Алгоритмы: Упорядоченный дизеринг (Bayer, Cluster Dot, Lines) и Диффузия ошибки (Floyd-Steinberg, Atkinson, Stucki и др.) с возможностью "змеевидного" (serpentine) сканирования.

Палитры: 1-битный монохром, квантование RGB, оттенки серого и эмуляция железа (Gameboy, Macintosh SE, CGA, VGA).

Редактор матриц: Ручное управление матрицами Bayer 4x4.

Набор Глитч-эффектов (Glitch FX):

Pixel Sorting (Сортировка пикселей): Сортировка по пороговому значению яркость с выбором направления.

Артефакты сжатия: Имитация сдвига блоков JPEG, перемешивание блоков и черезстрочная развертка.

Искажение волны: Синусоидальные разрывы и добавление шума.

RGB Offset: Хроматическая аберрация и подмена цветовых каналов.

Пост-обработка:

Блум (Bloom): Настраиваемое свечение с регулировкой радиуса, интенсивности и режимов наложения (Screen, Overlay, Normal).

Симуляция ЭЛТ: Настраиваемые горизонтальные и вертикальные сканлайны.

Рабочий процесс:

Коды настроек (Seeds): Генерируйте короткие текстовые коды для обмена настройками или используйте кнопку "Randomize" для создания случайного хаоса.

Пресеты: Импорт/Экспорт настроек через .json файлы или использование встроенных заводских пресетов.

Сравнение: Мгновенное переключение между оригиналом и обработанным изображением через плавающую кнопку.

Контроль разрешения: Отображение текущего разрешения обработки.

Руководство по интерфейсу
1. Начало работы
Загрузка: Нажмите "Upload Image" на левой панели или просто Вставьте (Ctrl+V) изображение в любом месте страницы.

Навигация: Используйте колесико мыши для масштабирования и перетаскивание (клик+драг) для перемещения по изображению.

2. Панели инструментов
Левая панель (Деструктивные эффекты): Управляет глитч-эффектами и предварительной цветокоррекцией (Яркость/Контраст).

Правая панель (Стиль и Вывод): Управляет дизерингом, палитрами, пост-эффектами (Блум/Сканлайны) и пресетами.

Переключатели (Toggles): Используйте галочку рядом с заголовком любой группы (например, "Glitch FX"), чтобы мгновенно включить или выключить весь блок эффектов.

Сброс настроек: Двойной клик по ползунку любого слайдера сбросит его к значению по умолчанию.

3. Сохранение
Обмен настройками: Скопируйте код из поля "Settings Code", чтобы поделиться своим стилем, или вставьте код и нажмите "Apply".

Сохранение изображения: Нажмите "Save Output", чтобы скачать финальный рендер (все эффекты и сканлайны будут "запечены" в файл PNG).

Как запустить
Это автономное Single-Page Application (SPA). Оно не требует установки, серверов или зависимостей.

Скачайте файл dither-project.html.

Дважды кликните по файлу, чтобы открыть его в любом современном веб-браузере (Chrome, Firefox, Edge, Safari).

Начинайте творить.
