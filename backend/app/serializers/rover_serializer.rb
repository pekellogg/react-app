class RoverSerializer < ActiveModel::Serializer
  attributes :id, :external_id, :comments, :landing_date, :launch_date, :name, :profile_pic, :status, :created_at, :updated_at
end