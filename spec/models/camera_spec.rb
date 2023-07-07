require "rails_helper"
require "camera"

RSpec.describe Camera, type: :model do
  describe "associations" do
    it "has_many :photos" do
      is_expected.to have_many(:photos).class_name("Photo")
    end
  end
end