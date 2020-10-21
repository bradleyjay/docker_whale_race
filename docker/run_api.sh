export FLASK_APP=api.py
export FLASK_ENV=development
export FLASK_RUN_PORT=8080

# Initialization Step in readme.md (section 1)
python3 -m venv venv
source venv/bin/activate

if [[ "$VIRTUAL_ENV" != "" ]]
then
  # INVENV=1
  echo "enthusiastically in virtual environment"
  pwd
  pip3 install -r docker/requirements.txt
  # Docker Preparation (section 3)
  docker build --no-cache -t docker_shocker ./docker 
  # Start the API Flask Server (section 2)
  chmod +x docker/run_api.sh
  echo "changed permissions"  
  echo "enthusiastically leavng virtual environment"
else
  # INVENV=0
  echo "not in virtual environment"
fi

flask run
