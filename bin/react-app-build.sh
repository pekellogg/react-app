#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client

cp -a client/build/. public/

# Add deps, create db if not yet created, migrate, seed
bundle install

# 1st, 1-time execution of build script in production
  # Migrate the database
  # bundle exec rake db:migrate

  # Loads the seed data from db/seeds.rb
  # bundle exec rake db:seed

# all future executions of build script in production should not require migration + seeding rails commands
  # see: "Production Site Reliability Troubleshooting" Trello card