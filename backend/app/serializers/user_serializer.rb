class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :username, :created_at, :updated_at
end