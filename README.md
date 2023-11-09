# EVENTS
Тестовое задание

## Версия node 
v20.9.0

### Запуск проекта
1) Установить все пакеты npm i / npm install.
2) Запустить проект npm run dev.

#### Стек технологий
React + TypeScript + PrimeReact.

#### Логика добавления карточки
В context/events-context.tsx находится логика добавления новой карточки в список, каждые 6 секунд появляется новая карточка.

#### Дополнительно
В качестве данных использую event.json, можно было использовать mockApi и положить данные на сервер, но решил сделать так, store-manager не использовал, только внутренеее API React (useContext).
