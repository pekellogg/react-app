class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :external_id, :sol, :source, :rover_id, :camera_id, :created_at, :updated_at
end