#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# Add deps, create if not yet created, migrate & seed rails db
bundle install
# bundle exec rake db:prepare
bundle exec rake db:migrate
bundle exec rake db:seed