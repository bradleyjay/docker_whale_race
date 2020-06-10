import yaml
import copy
import subprocess
import datetime

"""
For next time:

- create a for loop, using len(array_of_words)
- clean up the variable-name-building
- figure out how to generate new whale_x keys, incrementing the variable
  - use index of list we're in, append to "whale_"

"""


def yaml_writer(race_data):

    subprocess.getstatusoutput("docker container kill $(docker ps -q)")
    subprocess.getstatusoutput("docker-compose up -d")

    # unpack the list of words from frontend's array; dummy vars
    # race_data = [array_of_words, start_time, duration]

    start_time = "RACE_START=" + str(race_data[1])
    duration = "RACE_DURATION=" + str(race_data[2])
    array_of_words = race_data[0]

    docker_image_id = subprocess.getstatusoutput("docker images -q docker_shocker")

    ################

    stream = open("docker-compose-blank.yaml", "r")

    # load it
    compose_yaml_array = yaml.load(stream)

    # create template for copying
    template = copy.deepcopy(compose_yaml_array["services"]["whale_0"])

    template["image"] = docker_image_id[1]

    for i in range(0, len(array_of_words)):

        # unpack the right word, get into ENVVAR= format:
        word_to_be = "WORD=" + array_of_words[i]

        # copy it (bop it)
        temp_copy = copy.deepcopy(template)

        # place it in the array
        whalename = str("whale_" + str(i))
        compose_yaml_array["services"][whalename] = temp_copy
        # print(compose_yaml_array["services"])

        # modify it from the list we got up front
        compose_yaml_array["services"][whalename]["environment"] = [
            word_to_be,
            start_time,
            duration,
        ]

    # -----

    # finally, write it
    print("Created " + str(len(array_of_words)) + " whales")

    f = open("docker-compose.yaml", "w+")
    f.write(yaml.dump(compose_yaml_array))


# # debug:
# # race_data = [array_of_words, start_time, duration]
# fake_race_data = [["dog", "computer", "protest"], int(datetime.datetime.now().timestamp()), 1000]
# # fake_race_data = [["beer", "gin"], 10, 60]]
#
# yaml_writer(fake_race_data)
