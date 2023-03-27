class Photo < ApplicationRecord
  belongs_to :rover
  belongs_to :camera
end