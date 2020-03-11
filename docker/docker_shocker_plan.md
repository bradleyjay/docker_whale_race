### Build the Docker Image (this happens once)
First pass, create image and run docker container:

* Create dockerfile, include application (how?) (right now, a test bash script)
* Build that file into an image (note image hash output here): `docker build .`
* grab hash output of that command ^, insert into docker-compose under "image"

### Run the thing

* `python3 run.py`
