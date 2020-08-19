from datetime import datetime, timedelta
from parser import parse

import time
import math
import os
import requests
import json

import socketio

# initialize socketio Client and define decorators for socket functionality
sio = socketio.Client()

@sio.event
def connect():
    print("connection established")


@sio.event
def my_message(data):
    print("message received with ", data)
    sio.emit("incoming data", data)

@sio.event
def disconnect():
    print("disconnected from server")

# get starting timestamp from api.py file that interacts with API
race_start_timestamp = int(os.getenv("RACE_START"))

input_word_original = os.getenv("WORD")

input_word = input_word_original.lower()

race_duration_seconds = int(os.getenv("RACE_DURATION"))

whalenumber = str(os.getenv("WHALENUMBER"))

# sample inputs for debugging
# race_start_timestamp = int(datetime.now().timestamp())
# input_word = "dog"
# race_duration_seconds = 90


race_end_timestamp = race_start_timestamp + race_duration_seconds

is_active = True




results = {
    "word": input_word,
    "cum_instances_found": 0,
    "new_instances_found": 0,
    "race_completed": False,
    "whalenumber": whalenumber,
}

api_endpoint = "http://host.docker.internal:8080/report_progress"

post_headers = {"content-type": "application/json"}

while is_active:
    parse_results = parse(input_word)
    new_instances_found = parse_results["total_count"]
    results["new_instances_found"] = new_instances_found
    results["cum_instances_found"] += new_instances_found
    # send results to API
    # print("iterations: " + str(iterations))
    print(results)
    is_active = time.time() < race_end_timestamp

    results["race_completed"] = not is_active

    try:  # must use a TRY here, otherwise, if this send fails, the container quits out.
        # requests.post(url=api_endpoint, data=json.dumps(results), headers=post_headers)
        sio.connect("http://localhost:4001")
        my_message(results)

    except:
        print(
            "Error - POST failed"
        )  # this would print into stdout in the container, i.e. can't really see it if theres an issue.

    if parse_results["remaining_subs"] == 0:
        is_active = False
