import requests
import json

def jprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


response = requests.get("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current")

jprint(response.json())
print("test")