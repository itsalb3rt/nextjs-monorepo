#!/bin/bash

cd packages
echo "Current apps"
echo "-------------"
ls -l | awk 'NR>1 {print "- " $9}'
echo "-------------"
npx create-next-app@latest