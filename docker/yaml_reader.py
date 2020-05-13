import yaml
import copy

"""
For next time: 

- create a for loop, using len(array_of_words)
- clean up the variable-name-building
- figure out how to generate new whale_x keys, incrementing the variable
  - use index of list we're in, append to "whale_"

"""


# unpack the list of words from frontend's array; dummy vars
# race_data = [array_of_words, start_time, duration]
array_of_words = ["beer", "gin", "pineapple"]
start_time = 10
duration = 60

start_time_to_be = "RACE_START=" + str(start_time)
duration_to_be = "RACE_DURATION=" + str(duration)

race_data = [array_of_words, start_time, duration]


################

stream = open("docker-compose-blank.yaml", "r")


# load it
compose = yaml.load(stream)
print(compose["services"]["whale_1"])
template = copy.deepcopy(compose["services"]["whale_1"])
# print(template)
# exit

## FOR LOOP HERE

# modify it
print("ENV HERE")
print(compose["services"]["whale_1"]["environment"])

# format:
# ['WORD=fake_word', 'RACE_START=fake_start', 'RACE_DURATION=fake_duration']
word_to_be = "WORD=" + array_of_words[0]
print("WORD HERE")
print(word_to_be)

compose["services"]["whale_1"]["environment"] = [
    word_to_be,
    start_time_to_be,
    duration_to_be,
]

# copy it (bop it)
a = copy.deepcopy(template)
compose["services"]["whale_2"] = a
# print(compose["services"])

compose["services"]["whale_2"]["environment"] = [
    "tomato",
    start_time_to_be,
    duration_to_be,
]

# write it
print(compose["services"])


f = open("docker-compose.yaml", "w+")
f.write(yaml.dump(compose))
# print(yaml.dump(compose))
