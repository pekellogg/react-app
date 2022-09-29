class ActionPlan < ApplicationRecord
  # omitted for now until user objs relationship in v2
  # has_many :collaborators, through: :action_items, foreign_key: :user_id
  # references
  # 1: https://stackoverflow.com/questions/11056657/rails-has-many-through-with-different-column-name-in-association-table
  # 2: https://itecnote.com/tecnote/rails-has_many-with-alias-name/
  has_many :action_items
end