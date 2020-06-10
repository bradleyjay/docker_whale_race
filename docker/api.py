from flask import Flask, json, g, request
import datetime
from yaml_reader import yaml_writer

app = Flask(__name__)

@app.route('/race_settings', methods=('GET', 'POST'))
def race_settings():
    if request.method == 'POST':

        # word1 = request.form['word1']
        # word2 = request.form['word2']
        # word3 = request.form['word3']
        # word4 = request.form['word4']
        # word5 = request.form['word5']
        start_time = int(datetime.datetime.now().timestamp())
        # duration = request.form['duration']
        duration = 1000;

        # what if there's less than 5 words?
        array_of_words = ["dog", "computer", "protest"]

        # for testing only - replace when we know what frontend will send
        print("Generating docker compose")
        inputs = request.get_json()
        print(inputs)

        yaml_writer([array_of_words, start_time, duration])

        # what is this function?
        # start_containers([array_of_words, start_time, duration])
        return "started!"
    else:
        return "error"

@app.route('/report_progress', methods=('GET', 'POST'))
def report_progress():
    if request.method == 'POST':

        # first time race_completed is true for any whale, frontend should trigger win evaluation

        progress = request.get_json()
        print(progress)

        # call front-end update function
        # THIS ISN'T A REAL FUNCTION YET
        # update_site({"word": word, "cum_instances_found": cum_instances_found, "race_completed": race_completed})
        return "started!"
    else:
        return "error"
