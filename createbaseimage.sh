#!/bin/bash

scp ./Dockerfile.base jenkins:~/backend/Dockerfile.base
scp ./package.json jenkins:~/backend/package.json
ssh jenkins docker build -f /root/backend/Dockerfile.base -t backend_base:0.0.1 .