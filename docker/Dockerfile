FROM python:3.7.5-slim

RUN apt-get update

COPY sample_bash.sh .
COPY sample_python.py .
CMD ["bash -c 'date +“%T” > timenow.dat" && "bash"]