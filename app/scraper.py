import requests
import json
import time

def scrape():
    parse_string = ""
    resp = requests.get("https://reddit.com/r/popular/new.json?limit=100", headers = {'User-agent': 'your bot 0.1'}).json()

    for  post in resp["data"]["children"]:
        parse_string += post["data"]["title"] + " " + post["data"]["selftext"]
        comment_resp = requests.get("https://www.reddit.com/r/popular/comments/" + post["data"]["id"] + ".json?limit=100?depth=100").json()
        # recursively loop through comments and append them to parse_string
    return parse_string
