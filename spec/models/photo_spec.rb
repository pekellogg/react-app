require "rails_helper"
require "photo"

RSpec.describe Photo, type: :model do
  describe "associations" do
    it "belongs_to :camera" do
      is_expected.to belong_to(:camera).class_name("Camera")
    end
    it "belongs_to :rover" do
      is_expected.to belong_to(:rover).class_name("Rover")
    end
  end
end