# Check that docker is up (section 0)
result=$( docker ps )

if [[ -n "$result" ]]; 
then
  echo $result
  echo "Docker is up"
else
  echo $result
  echo "Docker isn't up yet"
  open -a Docker
  sleep 25 # wait 25s (maybe we can shorteen it)
fi

# Initialization Step in readme.md (section 1)
python3 -m venv venv
source venv/bin/activate

if [[ "$VIRTUAL_ENV" != "" ]]
then
  # INVENV=1
  echo "enthusiastically in virtual environment"
  pip3 install -r docker/requirements.txt
  # Docker Preparation (section 3)
  docker build --no-cache -t docker_shocker ./docker 
  # Start the API Flask Server (section 2)
  chmod +x docker/run_api.sh
  echo "changed permissions"  
  # Open up a new Terminal for run_api.sh
  open -a Terminal ./docker/run_api.sh
  echo "enthusiastically leavng virtual environment"
else
  # INVENV=0
  echo "not in virtual environment"
fi

