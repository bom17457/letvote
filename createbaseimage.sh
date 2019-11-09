#!/bin/bash

if [ "$1" == "app" ] || [ "$1" == "" ]
then
    scp ./Dockerfile.base jenkins:/root/backend/Dockerfile.base
    scp ./package.json jenkins:/root/backend/package.json    
    ssh jenkins docker build -f /root/backend/Dockerfile.base -t backend:$version /root/backend
elif [ $1 == "e2e" ]
then
    scp ./Dockerfile.e2e.base jenkins:~/backend/e2e/Dockerfile.e2e.base
    ssh jenkins docker build -f /root/backend/e2e/Dockerfile.e2e.base -t e2e:0.0.1 /root/backend
fi
