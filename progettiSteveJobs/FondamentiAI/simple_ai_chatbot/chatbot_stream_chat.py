import requests
import json

# endpoint Ollama
url = "http://localhost:11434/api/chat"

# memoria della conversazione
messages = []

while True:

    # input utente
    user = input("Tu: ")

    # comando di uscita
    if user.lower() in ["quit", "exit", "q"]:
        print("Chat terminata.")
        break

    # aggiungiamo il messaggio dell'utente alla memoria
    messages.append({
        "role": "system",
        "content": "Sei un assistente AI che risponde in modo chiaro e conciso ed in italiano solo su codice dart."
    })

    # payload della richiesta
    data = {
        "model": "tinyllama", # modello locale
        "messages": messages,  # storia conversazione
        "stream": True         # abilita streaming
    }

    # richiesta HTTP con streaming attivo
    response = requests.post(url, json=data, stream=True)

    print("AI:", end=" ", flush=True)

    assistant_message = ""

    # leggiamo lo stream riga per riga
    for line in response.iter_lines():

        if line:

            # convertiamo la riga JSON
            chunk = json.loads(line)

            # estraiamo il token generato
            token = chunk["message"]["content"]

            # stampiamo progressivamente
            print(token, end="", flush=True)

            # accumuliamo la risposta completa
            assistant_message += token
            
            #messages.append(assistant_message)

            # se il modello ha terminato usciamo
            if chunk.get("done"):
                break

    print("\n")

    # salviamo la risposta del modello nella memoria
    messages.append({
        "role": "assistant",
        "content": assistant_message
    })
