#!/bin/bash

# Define the required variables
required_variables=("PORT" "MONGO_URI" "GOOGLE_CLIENT_ID" "GOOGLE_CLIENT_SECRET")

# Read the secrets-config.env file
if [[ -f config/secrets-config.env ]]; then
  while IFS= read -r line; do
    # Check each line for the required variables
    for var in "${required_variables[@]}"; do
      if grep -q -E "^$var[[:blank:]]*=" <<< "$line"; then
        echo "$var is defined."
        required_variables=("${required_variables[@]/$var}")
      fi
    done
  done < config/secrets-config.env
else
  echo "secrets-config.env file not found."
  exit 1
fi

# Check if any required variables are missing
if [[ -z "${required_variables[*]}" ]]; then
  echo "The following variables are missing:"
  for var in "${required_variables[@]}"; do
    echo "$var"
  done
  exit 1
fi

echo "All required variables are defined."
