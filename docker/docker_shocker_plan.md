### Build the Docker Image (this happens once)
Commands are in the docker-compose.yaml, for examples! First pass, create image and run docker container:

* Build dockerfile into an image (note image hash output here): `docker build .`
* grab hash output of that command ^, insert into docker-compose under "image"

<!-- Commands:

# build image:
docker build .
docker-compose up -d

-----

# KILL EVERYTHING
docker container kill $(docker ps -q)

# THEN

# remove:
docker container rm $(docker ps -a -q)

_______

# docker ps (check container name)

# exec into container:
docker exec -it <container ID> bash

# access value(see if env variable is available):
echo $<name of variable>

________ -->

### Run the thing

* `python3 run.py`
