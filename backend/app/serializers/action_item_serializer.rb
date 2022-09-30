class ActionItemSerializer < ActiveModel::Serializer
  attributes :id, :assignees, :description, :status, :deadline, :action_plan_id, :created_at, :updated_at
  # attributes :description, :status, :deadline, :assignees, :action_plan_id
  # belongs_to :action_plan, serializer: ActionPlanActionItemSerializer
end