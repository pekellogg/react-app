class Camera < ApplicationRecord
  self.primary_key = "external_id"
  belongs_to :rover
  has_many :photos
end