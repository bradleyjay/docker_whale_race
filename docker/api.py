from flask import Flask, json, g, request
import datetime
from yaml_reader import yaml_writer

app = Flask(__name__)


@app.route("/race_settings", methods=("GET", "POST"))
def race_settings():
    if request.method == "POST":

        # start_time = int(datetime.datetime.now().timestamp())
        # print(start_time)

        # duration = 10000

        # what if there's less than 5 words?
        # array_of_words = ["dog", "blerb", "protest"]

        # for testing only - replace when we know what frontend will send
        print("Generating docker compose")
        inputs = request.get_json(force = True)
        print(inputs)

        array_of_words = inputs['list_of_words']
        start_time = int(inputs['start_time'])
        duration = inputs['duration']

        yaml_writer([array_of_words, start_time, duration])

        # what is this function?
        # start_containers([array_of_words, start_time, duration])
        return "started!"
    else:
        return "error"


@app.route("/report_progress", methods=("GET", "POST"))
def report_progress():
    if request.method == "POST":

        # Done! Containers are posting a JSON here, of:
        # {'word': 'blerb', 'cum_instances_found': 0, 'new_instances_found': 0, 'race_completed': False}
        # We can either trigger React things here, or replace this endpoint with a React endpoint directly.

        # first time race_completed is true for any whale, frontend should trigger win evaluation

        progress = request.get_json()
        print(progress)

        return "started!"
    else:
        return "error"
