class ActionPlanSerializer < ActiveModel::Serializer
  attributes :id, :creator, :collaborators, :status, :goal, :deadline, :deadline_reason, :category, :percent_complete, :created_at, :updated_at
  # attributes :goal, :percent_complete, :status, :deadline, :deadline_reason, :creator, :category
  # has_many :action_items, serializer: ActionItemActionPlanSerializer
end