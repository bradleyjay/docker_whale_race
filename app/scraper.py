import requests
import json
import time

sub_reddit_list = [
    "popular",
    "politics",
    "Trending",
    "aww",
    "worldnews",
    "worldpolitics",
    "funny",
    "dadjokes",
    "AskReddit",
    "television",
    "technology",
    "todayilearned",
    "movies",
    "Science",
    "music",
    "Showerthoughts",
    "gaming",
    "tifu",
    "AmItheAsshole",
    "NoStupidQuestions"
]
def scrape():
    parse_string = ""
    for sub_reddit in sub_reddit_list:
        resp = requests.get("https://reddit.com/r/" + sub_reddit + "/new.json", headers = {'User-agent': 'your bot 0.1'}).json()

        for  post in resp["data"]["children"]:
            parse_string += post["data"]["title"] + " " + post["data"]["selftext"]
    
    return parse_string
#TESTING
print(scrape())
#TESTING