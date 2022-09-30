require "rest-client"
require "pry"

# https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos?
BASE = "https://mars-photos.herokuapp.com/api/v1/rovers/"
RESOURCE = "/latest_photos?"
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

# new_rover = {}
# new_rover["external_id"] = blob["rover"]["id"]
# new_rover["name"] = blob["rover"]["name"]
# new_rover["landing_date"] = blob["rover"]["landing_date"]
# new_rover["launch_date"] = blob["rover"]["launch_date"]
# new_rover["status"] = blob["rover"]["status"]
# Rover.create(new_rover)


ROVERS.each do |rover|
  
  uri = BASE + rover + RESOURCE
  response = RestClient.get(uri)
  body = JSON.parse(response.body) if response.code == 200

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
