class CameraSerializer < ActiveModel::Serializer
  attributes :id, :external_id, :full_name, :name, :rover_id, :photos, :created_at, :updated_at
end