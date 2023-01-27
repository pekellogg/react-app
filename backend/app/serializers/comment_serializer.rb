class CommentSerializer < ActiveModel::Serializer
  attributes :text, :id, :rover_id
end