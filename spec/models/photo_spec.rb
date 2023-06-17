require "rails_helper"
require "photo"

RSpec.describe Photo, type: :model do
  describe "associations" do
    it { should belong_to(:rover).class_name("Rover") }
  end
end