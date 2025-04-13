#!/bin/bash

file_path="git-actions-test.txt"

# Check if the file exists
if [ ! -e "$file_path" ]; then
    touch "$file_path"
fi

# Check if the first variable is present
if [ -n "$1" ]; then
    # If the variable is present, echo it
    echo "$(date): $1" >> "$file_path"

    # STDOUT the process
    echo $1
else
    # If the variable is not present, echo the default message
    echo "$(date): This is a GitHub initiated update!" >> "$file_path"
fi

# Make sure you are on main branch
git branch -M dev

# Pull the latest version
git fetch && git merge origin/dev -m "Auto-merged by webhooks"

# Update NPM packages
npm install --silent

# Run the app using PM2
pm2 restart liftup-webhooks

echo "Git initiated update complete!"