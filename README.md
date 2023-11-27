# Проект README

## Стэк проекта

- React Native
- TypeScript
- JavaScript
- Redux Toolkit
- RTK Query
- Toast

## Начало работы

### Установка зависимостей

```bash
yarn pods
```

### Запуск на iOS (с JSON Server)

```bash
yarn ios:dev
```

### Запуск на Android (с JSON Server)

```bash
yarn android:dev
```

### Обзор проекта

Этот проект создан с использованием React Native и TypeScript, с применением Redux Toolkit, RTK Query и Toast для управления состоянием, получения данных и уведомлений пользователей.

### Основные функции

- **Главный экран:**

  - Отображает список автомобилей с основной информацией.
  - Поддерживает динамическую фильтрацию по бренду и секции.
  - Реализована функциональность Pull-to-Refresh для обновлений в реальном времени.

- **Модальное окно настроек:**

  - Доступно с главного экрана.
  - Позволяет пользователям выбирать конкретные модели бренда для целевой фильтрации.
  - Предоставляет опцию сегментации для фильтрации по секциям.

- **Модальное окно с дополнительной информацией:**
  - Открывает подробную информацию о выбранной модели автомобиля.
  - Получает расширенную информацию на основе уникального идентификатора выбранной модели.

### Работа с Api

За работу с апи отвечает библиотека RTK query

### Эмуляция сервера

Проект использует JSON Server для эмуляции сервера. Данные хранятся в файле `db.json`, предоставляя простой и удобный способ симуляции взаимодействия с сервером во время разработки.

## Примечания

- Убедитесь, что у вас установлены необходимые зависимости с помощью `yarn pods` перед запуском проекта.
- Предоставленные скрипты (`ios:dev` и `android:dev`) запускают сборку в режиме разработки вместе с JSON Server для безпроблемного тестирования.

# Project README

## Project Stack

- React Native
- TypeScript
- JavaScript
- Redux Toolkit
- RTK Query
- Toast

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Run on iOS (with JSON Server)

```bash
yarn ios:dev
```

### Run on Android (with JSON Server)

```bash
yarn android:dev
```

### Project Overview

This project is built with React Native and TypeScript, utilizing Redux Toolkit, RTK Query, and Toast for state management, data fetching, and user notifications.

### Main Features

- **Main Screen:**

  - Displays a list of cars with basic information.
  - Supports dynamic filtering based on brand and section.
  - Implements Pull-to-Refresh functionality for real-time updates.

- **Settings Modal:**

  - Accessible from the main screen.
  - Allows users to select specific brand models for targeted filtering.
  - Provides a segmentation option for section-based filtering.

- **More Info Modal:**
  - Opens detailed information about a selected car model.
  - Fetches extended information based on the unique ID of the chosen model.

### Server Emulation

The project utilizes JSON Server to emulate a server. Data is stored in the `db.json` file, providing a simple and convenient way to simulate server interactions during development.

## Notes

- Ensure you have the necessary dependencies installed using `yarn install` before running the project.
- The provided scripts (`ios:dev` and `android:dev`) launch the development build along with JSON Server for a seamless testing experience.

Feel free to explore, contribute, and enhance the project as needed. Happy coding!
