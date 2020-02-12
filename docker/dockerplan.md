

python script? runs bash commands?
or, bash shell script that interpolates and builds the run commands

First pass, create image and run docker container:
* Create dockerfile
* Build that file into an image (note image hash output here): `docker build .`
* Launch that image with a run command (edit to include image's hash here): `docker run -d -it --name=helloworld0 -p 89:8089 2f6ef4a20cf6`
* hop into the container to check: `docker exec -it helloworld0 /bin/bash`

Second pass - include env variable at startup:
* `docker run -e WORD=babyyoda -d -it --name=helloworld10 -p 89:8089 2f6ef4a20cf6`



<!-- ### Method 1

# get the time target
t_target = t_now + 10s

# perform the run commands

for i in in:

  # build the run command
  env1 = t_target - t.t_now
  env2 = word -->


### Method 2 <-- this one
-> are docker containers NTP synced?  can they get the time now?
-> docker containers have the same time as the host!!

env1: target time
env2: word


while t is not t.now + 10s:
    do things


----





