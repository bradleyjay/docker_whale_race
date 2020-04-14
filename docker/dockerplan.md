
# Goal: Build Proof of Concept - Docker containers:

- Several steps to test. We'll glue all of these together to build the first Proof of Concept Docker container. Each piece below is one modular chunk of the final thing.
- Input: something that calls our runscript, and passes the array of words to the runscript. Runscript will unpack those words, and feed each to the containers it spins up.
  - This could be either a docker-compose that the script updates (hey, change these 5 env vars in the docker-compose file to the user-selected words), or a loop that manually builds and runs each docker run command (each using its own unpacked user-selected word from the array)

------

### Part I: How to automate container spin-up:

- python script? runs bash commands?
- or, bash shell script that interpolates and builds the run commands
-> Not sure, this is later.

### Part II: Basic Container Spin up
First pass, create image and run docker container:

* Create dockerfile
* Build that file into an image (note image hash output here): `docker build .`
* Launch that image with a run command (edit to include image's hash here): `docker run -d -it --name=helloworld0 -p 89:8089 2f6ef4a20cf6`
* hop into the container to check: `docker exec -it helloworld0 /bin/bash`


Second pass - include env variable at startup:
* `docker run -e WORD=babyyoda -d -it --name=helloworld10 -p 89:8089 2f6ef4a20cf6`

- Sucess!! This works.

### Part III: Docker container spin-up timing
Race must start at the same time. How do we make sure the containers start running at the same time?

Questions:
-> are docker containers NTP synced?  can they get the time now? (docker containers have the same time as the host!)

Ways to do this:
1: (prefered) Feed each container a start time. "What's the time now"  as the runscript starts spinning up containers, feed each container the "race start" time as an env var (start race at now + 10s)

2: Use a fancy loop that updates the "start in X seconds", if the containers don't all spin up together:

```

env1: target time
env2: word


while t is not t.now + 10s:
    do things


```





