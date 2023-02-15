class RoverSerializer < ActiveModel::Serializer
  attributes :comments, :external_id, :landing_date, :launch_date, :name, :profile_pic, :status
end