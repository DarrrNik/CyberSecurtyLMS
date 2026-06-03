# CyberSec Platform ![Work in Progress](https://img.shields.io/badge/status-WIP-yellow)
[![English](https://img.shields.io/badge/lang-English-blue)](README.md) [![Русский](https://img.shields.io/badge/lang-Russian-red)](README.ru.md)

Комплексная образовательная платформа по кибербезопасности с веб-интерфейсом и мобильным приложением.

## 🚀 Основные возможности

- 🔒 **Интерактивные лабораторные работы** с реальными сценариями атак и защиты
- 📱 **Мобильное приложение** для Android (Jetpack Compose)
- 🌐 **Веб-платформа** (Vue.js) с адаптивным дизайном
- 📊 **Отслеживание прогресса** с детальной статистикой
- 🔍 **Service Discovery** (Spring Boot Eureka)
- 🔐 **Защищенное API** с JWT аутентификацией

**Технологии:**
- **Фронтенд**: Vue.js 3, Vuetify, Axios
- **Бэкенд**: Go (Gin framework)
- **База данных**: MySQL 8.0
- **Миграции**: Flyway

## 📱 Мобильное приложение

**Минимальные требования:** Android 8.0+ (API 26)

Скачать последнюю версию:  
👉 [Релизы GitHub](https://github.com/CyberSecurityLMS/LMS/releases)

**Технологии:**
- **UI**: Jetpack Compose, Material Design 3
- **Архитектура**: Clean Architecture, MVVM
- **Сеть**: Retrofit, OkHttp
- **DI**: Dagger 2
- **CI/CD**: GitHub Actions (автосборка APK/AAB)

## ⚙️ Бэкенд сервисы

**Основные компоненты:**
- **API Gateway**: Go (Gin framework)
- **Service Discovery**: Spring Boot Eureka Server
- **База данных**: MySQL 8.0

**Развертывание:**
- **Контейнеризация**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Хостинг**: Private server (Ubuntu)