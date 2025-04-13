#!/bin/bash
git checkout dev

git add .

git commit -m "${1:-AUTO commited by script}"

git push -u origin dev
