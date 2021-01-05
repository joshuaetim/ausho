#!/bin/bash

git add .
echo "Enter commit name -->"
read commit
git commit -m "$commit"
git branch -M main
git push backup main
echo "Operation successful"
