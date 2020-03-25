import requests
import json
import time
import sys

# clean up global comment string - can we just place it here, call it global in
# function

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


def scrape(iterations):
    parse_string = ""
    # resp = requests.get(
    #     "https://reddit.com/r/popular/new.json?limit=100",
    #     headers={"User-agent": "your bot 0.1"},
    # ).json()
    resp = requests.get(
        "https://reddit.com/r/" + sub_reddit_list[iterations] + "/hot.json?limit=15",
        headers={"User-agent": "your bot 0.1"},
    ).json()
    i = 0
    for post in resp["data"]["children"]:
        i += 1
        print(i)
        parse_string += post["data"]["title"] + " " + post["data"]["selftext"]

        ## Limit = maximum number of comments to return,
        ## Depth = maximum depth of subtrees in thread

        comment_resp = requests.get(
            "https://www.reddit.com/r/popular/comments/"
            + post["data"]["id"]
            + ".json?limit=100?depth=100",
            headers={"User-agent": "your bot 0.1"},
        ).json()

        # comment_resp = requests.get(
        #     "https://www.reddit.com/r/popular/comments/"
        #     + "fo40gu"
        #     + ".json?limit=100?depth=100",
        #     headers={"User-agent": "your bot 0.1"},
        # ).json()
        # print(json.dumps(comment_resp, indent=4))  # tab in-between

        # recursively loop through comments and append them to parse_string
        parse_string += depth_first_search(comment_resp)
        global comment_string
        comment_string = ""  # this is grimy
        # print(parse_string)
        # sys.exit()  # DEBUG ONLY
    return parse_string


def depth_first_search(root):
    ## recursive tree format: [ {child}, {child} ]
    ## inside child: child.data['children']
    # print(root[0]["data"])
    # print(len(root))

    global comment_string
    comment_string = ""  # this is grimy
    # start at root
    if root is not None:
        _depth_first_search(root)
    else:
        return None  # change this

    return comment_string


def _depth_first_search(root):
    global comment_string

    # bail if it's not a list, immediately
    if isinstance(root, list) and len(root) is not 0:
        for child in root:
            if isinstance(child, dict) and isinstance(child["data"], dict):
                # check for replies, or children

                if "body" in child["data"]:
                    comment_string += " " + child["data"]["body"]  # this is grimy

                if "children" in child["data"]:
                    _depth_first_search(child["data"]["children"])

                if "replies" in child["data"]:
                    _depth_first_search(child["data"]["replies"])

        # no children/done? evaluate self


# check for children


# if children, start with left one


# if no children, done
