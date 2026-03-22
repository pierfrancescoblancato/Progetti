import requests
import json

# endpoint API
url = "http://localhost:11434/api/generate"

while True:

    # input utente
    user = input("Tu: ")

    # payload della richiesta
    data = {
        "model": "tinyllama",
        "prompt": user,
        "stream": True
    }

    # richiesta HTTP con streaming attivo
    response = requests.post(url, json=data, stream=True)

    print("AI:", end=" ", flush=True)

    # iteriamo ogni riga che arriva dallo stream
    for line in response.iter_lines():

        if line:

            # convertiamo la riga JSON
            chunk = json.loads(line)

            # stampiamo il token generato
            print(chunk["response"], end="", flush=True)

            # se la generazione è terminata usciamo
            if chunk.get("done"):
                break

    print("\n")
