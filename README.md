# AI Model Benchmark Tests

Сравнительное тестирование моделей ИИ в задачах написания кода. Каждый тест — единственный запрос.

## Структура репозитория

Каждая папка верхнего уровня — модель. Внутри — папки по задачам, в каждой `.md`-файл с промптом и результатом.

## Модели и задачи

### svg

| Модель | Провайдер | Агент | Время выполнения | Потраченные токены |
|---|---|---|---|---|
| `kimi-k2.6` | Nvidia | Kilo Code CLI| 4m 1s | ? |
| `minimax-m2.5` | OpenCode Zen | Kilo Code CLI | 36s | ? |
| `nemotron-3-super-free` | OpenCode Zen | Kilo Code CLI | 2m 22s | ~44.000 |
| `gps-oss-120b` | Nvidia | Kilo Code CLI | 20s | ~50.000 |
| `glm-4.5-air` | Openrouter | Kilo Code CLI | 2m 35s | ~16.000 |
| `deepseek-v4-flash` | Polza.ai | Kilo Code CLI | 2m 11s | ~63.000 |
| `qwen3.5-flash` | Polza.ai | Kilo Code CLI | 26s | ~44.000 |
| `grok-4.3` | Polza.ai | Kilo Code CLI | 31s | ~28.000 |
| `gemini-3.1-flash-lite` | Polza.ai | Kilo Code CLI | 19s | ~42.000 |
| `gpt-5.5` | ChatGPT Plus | Codex | 1m 53s | ~20.000 |
| `omnicoder-9b@q6_k` | Local | Kilo Code CLI | 1m 5s | ~46.000 |

### game

| Модель | Провайдер | Агент | Время выполнения | Потраченные токены |
|---|---|---|---|---|---|
| `kimi-k2.6` | Nvidia | Kilo Code CLI | 3m 59s | ~47.000 |
| `minimax-m2.5` | OpenCode Zen | Kilo Code CLI | 1m 59s | ~22.000 |
| `nemotron-3-super-free` | OpenCode Zen | Kilo Code CLI | 2m 15s | ~76.000 |
| `glm-4.5-air` | Openrouter | Kilo Code CLI | 2m 39s | ~16.000 |
| `deepseek-v4-flash` | Polza.ai | Kilo Code CLI | 1m 22s | ~49.000 |
| `gpt-5.5` | ChatGPT Plus | Codex | 8m 50s | ~63.000 |
| `omnicoder-9b@q6_k` | Local | Kilo Code CLI | 1m 44s | ~51.000 |
