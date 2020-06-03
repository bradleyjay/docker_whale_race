FROM python:3.7.5-slim

RUN apt-get update

COPY sample_bash.sh .
COPY sample_python.py .
COPY app .
COPY requirements.txt .
RUN pip install -r requirements.txt
CMD ["bash -c 'date +“%T” > timenow.dat" && "bash"]
