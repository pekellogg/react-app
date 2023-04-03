class Rover < ApplicationRecord
  self.primary_key = "external_id"
  has_many :cameras
  has_many :photos, through: :cameras
end