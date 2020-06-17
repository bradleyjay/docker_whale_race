import yaml
import copy
import subprocess
import datetime
import time

"""
For next time:

- create a for loop, using len(array_of_words)
- clean up the variable-name-building
- figure out how to generate new whale_x keys, incrementing the variable
  - use index of list we're in, append to "whale_"

"""


def yaml_writer(race_data):

    # unpack the list of words from frontend's array; dummy vars
    # race_data = [array_of_words, start_time, duration]

    start_time = "RACE_START=" + str(race_data[1])
    duration = "RACE_DURATION=" + str(race_data[2])
    array_of_words = race_data[0]

    print("reached")

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
    f = open("docker-compose.yaml", "w+")
    f.write(yaml.dump(compose_yaml_array))
    # print(f)
    # time.sleep(2)
    subprocess.getstatusoutput("docker container kill $(docker ps -q)")

    # this line below returns an error:
    # (1, "Top level object in './docker-compose.yaml' needs to be an object not '<class 'NoneType'>'.")
    # the compose does work when called manually, the docker-compose.yaml is not recognized. Passing it the filename
    # manually doesn't work either. Not sure if it's because version: '3' is at the bottom of the file? something is up

    print(subprocess.getstatusoutput("docker-compose up -d"))

    print("Created " + str(len(array_of_words)) + " whales")


# # debug:
# # race_data = [array_of_words, start_time, duration]
# fake_race_data = [["dog", "computer", "protest"], int(datetime.datetime.now().timestamp()), 1000]
# # fake_race_data = [["beer", "gin"], 10, 60]]
#
# yaml_writer(fake_race_data)
