class Rover < ApplicationRecord
  self.primary_key = "external_id"
  has_many :cameras
end