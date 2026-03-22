import requests
import threading
import time

# endpoint API Ollama
url = "http://localhost:11434/api/generate"

# variabile globale per controllare lo spinner
loading = False


# funzione che mostra lo spinner mentre il modello sta lavorando
def spinner():
    symbols = ["|", "/", "-", "\\"]
    i = 0
    while loading:
        print("\rAI sta pensando... " + symbols[i % len(symbols)], end="", flush=True)
        time.sleep(0.1)
        i += 1


while True:

    user = input("Tu: ")

    if user.lower() in ["exit", "quit"]:
        break

    data = {
        "model": "tinyllama",
        "prompt": user,
        "stream": False
    }

    try:

        # attiva spinner
        loading = True
        t = threading.Thread(target=spinner)
        t.start()

        # richiesta HTTP a Ollama
        response = requests.post(url, json=data, timeout=300)

        # ferma spinner
        loading = False
        t.join()

        # cancella la riga dello spinner
        print("\r", end="")

        response.raise_for_status()

        result = response.json()

        print("AI:", result["response"])

    except Exception as e:
        loading = False
        print("\nErrore:", e)
