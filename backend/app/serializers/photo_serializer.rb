class PhotoSerializer < ActiveModel::Serializer
  attributes :external_id, :sol, :source, :rover_id, :id
end