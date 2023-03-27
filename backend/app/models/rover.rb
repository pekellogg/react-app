class Rover < ApplicationRecord
  self.primary_key = "external_id"
  has_many :comments
  has_many :cameras # good
  has_many :photos, through: :cameras
end