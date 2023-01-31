require "rest-client"
require "pry"

# testing
# http://127.0.0.1:3000/api/v1/rovers
# http://127.0.0.1:3000/api/v1/photos
# http://127.0.0.1:3000/api/v1/comments

# rovers
#https://mars-photos.herokuapp.com/api/v1/rovers/

# example
# https://mars-photos.herokuapp.com/api/v1/rovers/{ROVER_NAME}/latest_photos?

# external sources to query
BASE = "https://mars-photos.herokuapp.com/api/v1/rovers/"
RESOURCE = "/latest_photos?"

# rovers - v1 (hard-coded)
ROVERS = ["curiosity", "spirit", "opportunity", "perseverance"]
                                                 
Rover.create([{external_id: 5,                                                       
name: "Curiosity",                                                    
landing_date: "2012-08-06",                                           
launch_date: "2011-11-26",                                            
status: "active"},
                                                                               
{external_id: 7,                                                       
name: "Spirit",                                                       
landing_date: "2004-01-04",
launch_date: "2003-06-10",
status: "complete"},

{external_id: 6,
name: "Opportunity",
landing_date: "2004-01-25",
launch_date: "2003-07-07",
status: "complete"},

{external_id: 8,
name: "Perseverance",
landing_date: "2021-02-18",
launch_date: "2020-07-30",
status: "active"}])

# collect all latest photos for each rover
ROVERS.each do |rover|
  
  uri = BASE + rover + RESOURCE
  response = RestClient.get(uri)
  body = JSON.parse(response.body) if response.code == 200
  # binding.pry
  body["latest_photos"].each do |blob|

    new_photo = {}
    new_photo["external_id"] = blob["id"]
    new_photo["sol"] = blob["sol"]
    new_photo["source"] = blob["img_src"]
    new_photo["earth_date"] = blob["earth_date"]
    new_photo["rover_id"] = blob["rover"]["id"]
    Photo.create(new_photo)

  end

end
