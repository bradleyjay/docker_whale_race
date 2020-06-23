## Start the API Flask Server
1. Give the API Flask script execute permissions:
`chmod +x docker/run_api.sh`
2. Open a new terminal tab, navigate to docker directory
  `cd docker`
3. start the API Flask server:
`./run_api.sh`
4. Run all the whale race setup steps
5. Send a POST to the endpoint to test:
`curl -X POST http://localhost:8080/race_settings`
or `curl -d '{"user": "user1", "pass": "abcd"}' -H 'Content-Type: application/json' http://localhost:8080/race_settings` to post JSON

## Docker Whale Race

1. Ensure you have Docker and Python installed.
2. Be sure you've installed PyYAML and Flask:

`pip3 install pyyaml`
`pip3 install flask`

3. Start the Docker Daemon.
4. If not present, create a virtual environment:

`python3 -m venv venv`

4. Activate your virtual environment:

`. venv/bin/activate`

4. Navigate to the Docker directory:

`cd docker`

5. Give execute permissions to the startup script, then run it:

`chmod +x startup_script.sh `
`./startup_script.sh `

6. [if not using API] Generate our up-to-date docker-compose.yaml:
uncomment test function at end of yaml_reader.py
`python3 yaml_reader.py`

Success! The containers are running. Relevant commands:

- List running containers and container IDs: `docker ps`
- Jump into a container: `docker exec -it <container ID> bash`
- Check docker code output from local machine: `docker logs -f <container ID>` (or `docker-compose logs --tail="all" -f whale_0`)
- Check env variable (from container): `echo $WORD`
- Remove all running containers: `docker container kill $(docker ps -q)`

These are handled by our scripts above, but for reference:

- Compile docker image: `docker build .`
- Spin up docker containers: `docker-compose up -d`

## Setup Requirements

- Frontend:
  - Node: `brew install node`

