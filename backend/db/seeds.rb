require "rest-client"

def fetch_rovers
  uri = [ENV["EXTERNAL_BASE_URI"], ENV["BASE_RESOURCE_OBJECTS"]].join("/")
  response = RestClient.get(uri)
  if response.code == 200
    body = JSON.parse(response.body)
    body[ENV["BASE_RESOURCE_OBJECTS"]].each do |rover|
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
      ENV["EXTERNAL_BASE_URI"],
      ENV["BASE_RESOURCE_OBJECTS"],
      rover.name.downcase,
      ENV["PHOTOS_RESOURCE"]
    ].join("/") + "?"
    response = RestClient.get(uri)
    if response.code == 200
      body = JSON.parse(response.body)[ENV["PHOTOS_RESOURCE"]]
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