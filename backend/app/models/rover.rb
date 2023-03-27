class Rover < ApplicationRecord
  self.primary_key = "external_id"
  # has_many :photos
  has_many :comments
  has_many :cameras
end