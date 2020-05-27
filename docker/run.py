import subprocess

def spin_up_docker():
    subprocess.run('docker-compose up -d', shell=True, executable='/bin/bash')

spin_up_docker()
