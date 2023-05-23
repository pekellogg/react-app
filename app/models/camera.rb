class Camera < ApplicationRecord
  self.primary_key = "external_id"
  has_many :photos
end