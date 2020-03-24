from datetime import datetime, timedelta;
from parser import parse;
import math;

# get starting timestamp from api.py file that interacts with API
race_start_timestamp = datetime.now()

# get input_word from api.py file that interacts with API
input_word = "Bernie"

race_duration_seconds = 60

race_end_timestamp = race_start_timestamp + timedelta(seconds = race_duration_seconds)

is_active = True

results = {"word": input_word, "cum_instances_found": 0, "new_instances_found": 0};

iterations = 0;

while is_active:
    iterations += 1;
    new_instances_found = parse(input_word)
    results["new_instances_found"] = new_instances_found;
    results["cum_instances_found"] += new_instances_found;
    # send results to API
    print("iterations: " + str(iterations))
    print(results);
    is_active = datetime.now() < race_end_timestamp;
