class RoverSerializer < ActiveModel::Serializer
  attributes :external_id, :name, :landing_date, :launch_date, :status
end