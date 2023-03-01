class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :username
end