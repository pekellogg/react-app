#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client

# next problem-solving steps as recommended by Ron
# npm install --prefix client && npm run start --prefix client

cp -a client/build/. public/

# Add deps, create db if not yet created, migrate, seed
bundle install

# Option 1
# Runs setup if database does not exist, or runs migrations if it does
# bundle exec rake db:prepare
# Loads the seed data from db/seeds.rb
# bundle exec rake db:seed

# Option 2
# Drops and recreates all databases from their schema for the current environment and loads the seeds
bundle exec rake db:reset