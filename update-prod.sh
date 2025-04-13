#!/bin/bash
git checkout main

git add .

git commit -m "${1:-AUTO commited by script}"

git merge dev -m "Auto-merged with dev"

git push -u origin main
