# Веб-приложение для изучения испанского языка (В разработке)

Веб-приложение для изучения испанского языка, начиная с 50 основных глаголов. Мы используем метод интервального запоминания, чтобы помочь пользователям запоминать целые фразы в контексте, что способствует более быстрому освоению языка.

## Планы на будущее
-  **Добавление собственных слов**: пользователи могут добавлять свои слова и фразы для адаптации обучения под личные нужды.

## Установка
1. Клонируйте репозиторий:
```bash
git clone https://github.com/mrmoish/espanol.git
```

2. Перейдите в директорию проекта:
```bash
cd espanol
```

3. Запустите локальный сервер с помощью Python:
```sh
python3 -m http.server 8001
```

# TODO

1. Cкрыть адресную строку, мобилное приложения

2. Разделительная линия по умолчанию вертикально не по центру. И у блока после линии уменшаю высоту линии, из-за чего строки ближе друг другу(если две строки и более) чем у первого блока

css > main > height: 91vh;

3. при нажатие ентер уведомлять что что поле пустое

resize: none;

4. оптимизировать, очень похощие функции

```
spanish.addEventListener('keydown', (event) => {})
russian.addEventListener('keydown', (event) => {})
```

5. баг. в режиме ввода новой фразы при клике на страницу сбрасывается форма и не переходит на новую карточку игры, но это не вскегда, когда поле ввода пустое переходит


6. в телеграм браузере при открытие клавиатуры уменшается высота страници. так не происходит в други браузерах

# Maybe

1. css > body > margin: 0; /* Убираем отступы body, чтобы высота не превышала 100% */

2. css > * > box-sizing: border-box;

3. услажить процесс скрытия и отображения input ( очень простая только css и :focus)