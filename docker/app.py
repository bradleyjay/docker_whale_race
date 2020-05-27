# Helper Scripts - Requires:

# Script to unpack array sent by frontend (swap out env text and # of whales)
# Receive frontend_package from API


# take in frontend_package = {array_of_words, start_time, duration}
array_of_words = frontend_package[0]
start_time = frontend_package[1]
duration = frontend_package[2]

# interpolate words into run commands / run script
array_of_words.length # use with the --scale option (https://stackoverflow.com/questions/50350418/docker-compose-create-services-with-a-loop, https://docs.docker.com/compose/reference/up/)

# create docker-compose file (option 1 - make a docker-compose.yaml from scratch)
docker-compose = open("docker-compose.yaml","w+")
f.write("version: "3" services:")

# pass in env or arg
## environment-variables: https://docs.docker.com/compose/environment-variables/ (option 2 - pass in env vars)

## https://docs.docker.com/engine/reference/builder/#arg (option 3 - pass in arg vars)
# might have to capture output, or use different names for containers (IF we need to access those containers after they start)
# More specifically, the script needs to generate the docker-compose file, by creating
