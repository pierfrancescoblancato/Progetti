import requests

# endpoint API di Ollama
url = "http://localhost:11434/api/generate"

while True:

    # input utente da terminale
    user = input("Tu: ")

    # dati che inviamo all'API
    data = {
        "model": "gemma3:27b",   # modello locale installato
        "prompt": user,        # prompt dell'utente
        "stream": False        # risposta completa in un solo JSON
    }

    try:
	
        print("AI sta pensando...")

        # inviamo la richiesta POST all'API
        response = requests.post(url, json=data, timeout=300)

        # controlla eventuali errori HTTP
        response.raise_for_status()

        # convertiamo la risposta JSON in dizionario Python
        result = response.json()

        # stampiamo la risposta del modello
        print("AI:", result["response"])

    except Exception as e:
        print("Errore:", e)
