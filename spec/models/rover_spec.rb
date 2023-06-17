require "rails_helper"
require "rover"

RSpec.describe Rover, type: :model do
  describe "associations" do
    it "has_many :cameras" do
      is_expected.to have_many(:cameras).class_name("Camera")
    end
  end
end