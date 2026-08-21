#!/bin/bash

deployments=$(gh api --method GET '/repos/RPTools/rptools.github.io/deployments?per_page=100' | jq -r 'map(select(.environment == "github-pages") | .id) | .[]')

# Note: it is typical to get a validation error on the first deployment, since that one is still active.
for id in $deployments
do
    gh api --method DELETE "/repos/RPTools/rptools.github.io/deployments/$id"
done
