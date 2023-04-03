# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_03_201430) do
  create_table "cameras", force: :cascade do |t|
    t.integer "external_id"
    t.string "name"
    t.integer "rover_id"
    t.string "full_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.integer "external_id"
    t.string "earth_date"
    t.integer "sol"
    t.text "source"
    t.integer "rover_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "camera_id"
  end

  create_table "rovers", force: :cascade do |t|
    t.integer "external_id"
    t.string "name"
    t.string "landing_date"
    t.string "launch_date"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "max_sol"
    t.string "max_date"
    t.integer "total_photos"
    t.string "profile_pic"
  end

end
