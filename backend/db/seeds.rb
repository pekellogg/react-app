require "rest-client"
require "pry"

def assign_create_camera(camera)
  new_camera = {}
  new_camera["external_id"] = camera["id"] # 20
  new_camera["name"] = camera["name"] # "FHAZ"
  new_camera["rover_id"] = camera["rover_id"] # 5
  new_camera["full_name"] = camera["full_name"] # "Front Hazard Avoidance Camera"
  created_camera = Camera.create(new_camera)
  # puts "created_camera exists: #{Camera.exists?(created_camera.id)}"
  created_camera
end

def fetch_create_rovers
  # "https://mars-photos.herokuapp.com/api/v1/rovers"
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
      chomped_base = ENV["URI"].chomp("/api/v1")
      # https://mars-photos.herokuapp.com/explore/images/Curiosity_rover.jpg
      uri = [
        chomped_base,
        ENV["ROVER_IMG_RESOURCE"],
        new_rover["name"],
        "_rover.jpg"
      ].join("")
      new_rover["profile_pic"] = uri
      created_rover = Rover.create(new_rover)
      # if rover was created, add its cameras. otherwise, print error to screen
      if Rover.exists?(created_rover.id)
        rover["cameras"].each { |camera| assign_create_camera(camera) }
      else
        puts "Rover was not created!"
      end
    end
  else
    puts "fetch_create_rovers failed!"
    puts "code: #{response.code}"
    puts "description: #{response.description}"
  end
end

fetch_create_rovers

def fetch_create_rovers_latest_photos
  Rover.all.each do |rover|
    # https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos
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
        new_photo["camera_id"] = photo["camera"]["id"]
        Photo.create(new_photo)
      end
    else
      puts "fetch_create_rovers_latest_photos failed!"
      puts "code: #{response.code}"
      puts "description: #{response.description}"
    end
  end
end

fetch_create_rovers_latest_photos