# movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# Character.create(name: "Luke", movie: movies.first)
require "faker"
require "date"

biz = {}
categories = %w(Recipes Management Finance-Budget Inventory Technical Brand Social Media Event)
collaborators = %w(Amanda Brendin Benny Madi Mickela Tess Chris Peyton Shashank Lauren Ben Kristi Carl)
statuses = %w(New In-Progress Complete Closed)
goals = ["Submit all necessary permits/documents to operate a food truck", "Receiving a well-above passing score on our state safety inspection", "Hire more folks to deal with high turnover", "Decrease employee turnover by creating a mentorship and leadership program", "Have a fully-staffed serving team within 1 month", "Add new recipe to core dessert menu", "Analyze Yelp reviews for the past quarter to make improvements", "Finish employee reviews", "Budget for new commercial appliances within Q1 & Q2 of next year"]
deadlines = ["I will be out of town the following week, so this should be done before then", "We're anticipating a state safety review within the quarter", "We need to improve customer relations at the Main St. location ASAP"]
biz[:collaborators] = collaborators
biz[:statuses] = statuses
biz[:goals] = goals
biz[:categories] = categories
biz[:deadlines] = deadlines

ai_descriptions = ["Test and refine recipes submitted to portal", "Submit potential new hire resumes to portal for review", "Refill backstock items", "Locate permits and store in centralized portal", "Perform a random mock state inspection to prep", "Review, finalize, and approve food budget", "Confirm Google My Business listing info up to date", "Prep employees for upcoming reviews"]

define_method :random_deadline do
  Faker::Date.between(from: Date.today, to: Date.today + 360).strftime("%m/%d/%Y")
end

def create_action_plans_seeds(int_arg, biz)
  int_arg.times do 
    ap = ActionPlan.create(
      creator: biz[:collaborators].sample,
      collaborators: biz[:collaborators].sample(5).uniq.join(", "),
      status: biz[:statuses].sample,
      goal: biz[:goals].sample,
      deadline: random_deadline,
      deadline_reason: biz[:deadlines].sample,
      category: biz[:categories].sample,
      percent_complete: rand(100)
    )
  end
end

def create_action_items_seeds(int_arg, ai_descriptions)
  ActionPlan.all.each do |ap| 
    ap_collaborators = ap.collaborators.split(", ")
    int_arg.times do
      ap.action_items.create(
        assignees: ap_collaborators.sample(ap_collaborators.count - 1).join(", "),
        description: ai_descriptions.sample,
        status: ap.status,
        deadline: ap.deadline
      )
    end
  end
end

create_action_plans_seeds(100, biz)
create_action_items_seeds(5, ai_descriptions)

# JS Testing
# require "rest-client"
# require "pry"

# action_plan_url = "http://localhost/api/v1/action_plans/"
# call = RestClient.get action_plan_url

# 20.times do |i|
#   i += 1
#   action_plan = RestClient.get "#{action_plan_url}#{i}"
#   action_plan_json = JSON.parse(action_plan)
#   # ActionPlan.create(
#   # )
# end

# 60.times do |i|
#   i += 1
#   # ActionItem.create(
#   # )
# end