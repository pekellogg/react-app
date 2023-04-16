class Photo < ApplicationRecord
  self.primary_key = "external_id"
  belongs_to :rover
  belongs_to :camera
end