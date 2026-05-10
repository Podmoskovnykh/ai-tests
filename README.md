# AI Model Benchmark Tests

Сравнительное тестирование моделей ИИ в задачах написания кода. Каждый тест — единственный запрос через [Kilo Code CLI](https://kilocode.ai/) в режиме **Code**.

## Структура репозитория

Каждая папка верхнего уровня — модель. Внутри — папки по задачам, в каждой `.md`-файл с промптом и результатом.

## Методология

- **Инструмент:** Kilo Code CLI, режим **Code**
- **Промпт:** содержимое `.md`-файла, один запрос без уточнений (например, 'create project from /home/ivpodmoskovnykh/ai-tests/kimi-k2.6/svg/svg.md')
- **Условия:** одинаковые настройки для всех моделей в рамках одного теста

## Модели и задачи

### svg

| Модель | Провайдер | Время выполнения | Потраченные токены |
|---|---|---|---|
| `kimi-k2.6` | Nvidia | 4m 1s | ? |
| `minimax-m2.5` | OpenCode Zen | 36s | ? |
| `nemotron-3-super-free` | OpenCode Zen | 2m 22s | ~44.000 |
| `gps-oss-120b` | Nvidia | 20s | ~50.000 |
| `glm-4.5-air` | Openrouter | 2m 35s | ~16.000 |
| `deepseek-v4-flash` | Polza.ai | 2m 11s | ~63.000 |
| `qwen3.5-flash` | Polza.ai | 26s | ~44.000 |
| `grok-4.3` | Polza.ai | 31s | ~28.000 |
| `gemini-3.1-flash-lite` | Polza.ai | 19s | ~42.000 |

### game

| Модель | Провайдер | Время выполнения | Потраченные токены |
|---|---|---|---|
| `kimi-k2.6` | Nvidia | 3m 59s | ~47.000 |
| `minimax-m2.5` | OpenCode Zen | 1m 59s | ~22.000 |
| `nemotron-3-super-free` | OpenCode Zen | 2m 15s | ~76.000 |
| `glm-4.5-air` | Openrouter | 2m 39s | ~16.000 |
| `deepseek-v4-flash` | Polza.ai | 1m 22s | ~49.000 |







