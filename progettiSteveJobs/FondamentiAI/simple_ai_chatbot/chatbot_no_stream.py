import requests

url = "http://localhost:11434/api/generate"

while True:

    user = input("Tu: ")
    data = {
        "model": "tinyllama",
        "prompt": user,
        "stream": False
    }
    response = requests.post(url, json=data)
    print("AI:", response.json()["response"])
