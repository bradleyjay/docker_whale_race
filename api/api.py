from flask import Flask, json, g, request
import datetime

app = Flask(__name__)


# @app.route("/test_route", methods=["GET"])
# def index():
#   print('test result')
#   return "blah"



@app.route('/race_settings', methods=('GET', 'POST'))
def race_settings():
    if request.method == 'POST':

        word1 = request.form['word1']
        word2 = request.form['word2']
        word3 = request.form['word3']
        word4 = request.form['word4']
        word5 = request.form['word5']
        start_time = datetime.datetime.now()
        duration = request.form['duration']

        # what if there's less than 5 words?
        array_of_words = [word1, word2, word3, word4, word5]

        # what is this function?
        start_containers([array_of_words, start_time, duration])
        return "started!"
    else:
        return "error"

@app.route('/report_progress', methods=('GET', 'POST'))
def report_progress():
    if request.method == 'POST':
        # how do we access these variables when they're sent?
        word
        cum_instances_found
        race_completed

        # first time race_completed is true for any whale, frontend should trigger win evaluation


        # call front-end update function
        # THIS ISN'T A REAL FUNCTION YET
        update_site({"word": word, "cum_instances_found": cum_instances_found, "race_completed": race_completed})
        return "started!"
    else:
        return "error"
