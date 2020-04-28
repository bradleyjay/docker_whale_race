from datetime import datetime, timedelta
from parser import parse

import time
import math
import os

# get starting timestamp from api.py file that interacts with API
race_start_timestamp = int(os.getenv('RACE_START'))
race_start_timestamp = time.time()

input_word_original = os.getenv('WORD')

input_word = input_word_original.lower()

race_duration_seconds = int(os.getenv('RACE_DURATION'))

race_end_timestamp = race_start_timestamp + race_duration_seconds

is_active = True

results = {"word": input_word, "cum_instances_found": 0, "new_instances_found": 0}

while is_active:
    new_instances_found = parse(input_word)
    results["new_instances_found"] = new_instances_found
    results["cum_instances_found"] += new_instances_found
    # send results to API
    # print("iterations: " + str(iterations))
    print(results)
    is_active = time.time() < race_end_timestamp
