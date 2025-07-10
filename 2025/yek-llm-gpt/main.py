import subprocess
import openai
from pathlib import Path

# Конфигурация
OPENAI_API_KEY = "your-api-key"  # Замените на ваш ключ
YEK_COMMAND = "yek"  # Путь к yek, если не в PATH
MODEL = "gpt-4-turbo"  # Или "gpt-3.5-turbo"

def get_project_dump() -> str:
    """Запускает yek и возвращает дамп проекта."""
    try:
        result = subprocess.run(
            [YEK_COMMAND],
            capture_output=True,
            text=True,
            check=True
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Ошибка при запуске yek: {e.stderr}")
        raise

def ask_llm(project_dump: str, question: str) -> str:
    """Отправляет дамп и вопрос в OpenAI GPT."""
    client = openai.OpenAI(api_key=OPENAI_API_KEY)
    
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": "Ты senior developer. Проанализируй проект и дай рекомендации."
            },
            {
                "role": "user",
                "content": f"Проект:\n{project_dump}\n\nВопрос: {question}"
            }
        ],
        temperature=0.3  # Для более точных ответов
    )
    return response.choices[0].message.content

def main():
    print("⚡ Анализ проекта через yek + GPT...")
    project_dump = get_project_dump()
    
    question = input("Введите ваш вопрос или задачу: ")
    answer = ask_llm(project_dump, question)
    
    print("\n🔧 Рекомендации от GPT:")
    print(answer)

if __name__ == "__main__":
    main()