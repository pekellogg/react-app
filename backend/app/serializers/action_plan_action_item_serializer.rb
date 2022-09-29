class ActionPlanActionItemSerializer < ActiveModel::Serializer
  # attributes :id, :creator, :collaborators, :status, :goal, :deadline, :deadline_reason, :category, :percent_complete, :created_at, :updated_at
  attributes :goal
end