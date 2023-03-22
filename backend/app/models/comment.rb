class Comment < ApplicationRecord
  validates(:text, presence: true)
  # validates(:rover_id, presence: true)
end