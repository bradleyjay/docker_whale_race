from datetime import datetime, timedelta
from parser import parse
import math

# get starting timestamp from api.py file that interacts with API
race_start_timestamp = datetime.now()

# get input_word from api.py file that interacts with API
input_word_original = "dog"

input_word = input_word_original.lower()

race_duration_seconds = 60

race_end_timestamp = race_start_timestamp + timedelta(seconds=race_duration_seconds)

is_active = True

results = {"word": input_word, "cum_instances_found": 0, "new_instances_found": 0}

while is_active:
    parse_results = parse(input_word)
    new_instances_found = parse_results["total_count"]
    results["new_instances_found"] = new_instances_found
    results["cum_instances_found"] += new_instances_found
    # send results to API
    # print("iterations: " + str(iterations))
    print(results)
    is_active = datetime.now() < race_end_timestamp
    if parse_results["remaining_subs"] == 0:
        is_active = False
