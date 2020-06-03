## Start the API Flask Server
1. Give the API Flask script execute permissions:
`chmod +x docker/run_api.sh`
2. Open a new terminal tab, and start the API Flask server:
`./docker/run_api.sh`
3. Run all the whale race setup steps
4. Send a POST to the endpoint to test:
`curl -X POST http://localhost:5000/race_settings`

## Docker Whale Race

1. Ensure you have Docker and Python installed.
2. Start the Docker Daemon.
3. If not present, create a virtual environment:

`python3 -m venv venv`

4. Activate your virtual environment:

`. venv/bin/activate`

4. Navigate to the Docker directory:

`cd docker`

5. Give execute permissions to the startup script, then run it:

`chmod +x startup_script.sh `
`./startup_script.sh `

6. [if not using API] Generate our up-to-date docker-compose.yaml:

`python3 yaml_reader.py`

Success! The containers are running. Relevant commands:

- List running containers and container IDs: `docker ps`
- Jump into a container: `docker exec -it <container ID> bash`
- Check docker code output from local machine: `docker logs -f <container ID>`
- Check env variable (from container): `echo $WORD`
- Remove all running containers: `docker container kill $(docker ps -q)`

These are handled by our scripts above, but for reference:

- Compile docker image: `docker build .`
- Spin up docker containers: `docker-compose up -d`
