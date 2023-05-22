class RoverSerializer < ActiveModel::Serializer
  attributes :id, :external_id, :landing_date, :launch_date, :name, :profile_pic, :status, :cameras, :created_at, :updated_at
end