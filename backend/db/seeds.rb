require "rest-client"
require "pry"

def fetch_rovers
  uri = [ENV["URI"], ENV["ROVERS"]].join("/")
  response = RestClient.get(uri)
  if response.code == 200
    body = JSON.parse(response.body)
    body[ENV["ROVERS"]].each do |rover|
      new_rover = {}
      new_rover["external_id"] = rover["id"]
      new_rover["name"] = rover["name"]
      new_rover["landing_date"] = rover["landing_date"]
      new_rover["launch_date"] = rover["launch_date"]
      new_rover["status"] = rover["status"]
      new_rover["max_sol"] = rover["max_sol"]
      new_rover["max_date"] = rover["max_date"]
      new_rover["total_photos"] = rover["total_photos"]
      # "cameras"=>[{}]
      chomped_base = ENV["URI"].chomp("/api/v1")
      # https://mars-photos.herokuapp.com/explore/images/Curiosity_rover.jpg
      uri = [
        chomped_base,
        ENV["ROVER_IMG_RESOURCE"],
        new_rover["name"],
        "_rover.jpg"
      ].join("")
      new_rover["profile_pic"] = uri
      Rover.create(new_rover)
    end
  else
    puts "fetch_rovers failed!"
    puts "code: #{response.code}"
    puts "description: #{response.description}"
  end
end

fetch_rovers

def fetch_rovers_latest_photos
  Rover.all.each do |rover|
    uri = [
      ENV["URI"],
      ENV["ROVERS"],
      rover.name.downcase,
      ENV["PHOTOS"]
    ].join("/") + "?"
    response = RestClient.get(uri)
    if response.code == 200
      body = JSON.parse(response.body)[ENV["PHOTOS"]]
      body.each do |photo|
        new_photo = {}
        new_photo["external_id"] = photo["id"]
        new_photo["sol"] = photo["sol"]
        new_photo["source"] = photo["img_src"]
        new_photo["earth_date"] = photo["earth_date"]
        new_photo["rover_id"] = photo["rover"]["id"]
        Photo.create(new_photo)
      end
    else
      puts "fetch_rovers_latest_photos failed!"
      puts "code: #{response.code}"
      puts "description: #{response.description}"
    end
  end
end

fetch_rovers_latest_photos