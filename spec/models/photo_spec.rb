require "rails_helper"
require "photo"

RSpec.describe Photo, type: :model do
  describe "associations" do
    it { is_expected.to belong_to(:camera).class_name("Camera") }
    it { is_expected.to belong_to(:rover).class_name("Rover") }
  end
end