class CommentSerializer < ActiveModel::Serializer
  attributes :id, :rover_id, :text, :created_at, :updated_at
end