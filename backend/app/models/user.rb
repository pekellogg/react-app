class User < ApplicationRecord
  include ActiveModel::SecurePassword

  before_save { self.email = email.downcase if email }
  validates(:email,
    length: { maximum: 254 },
    presence: true,
    uniqueness: { case_sensitive: false }
  )

  has_secure_password
  validates(:password_digest,
    length: { in: 8..72 }
  )

  before_save { self.username = username.downcase if username }
  validates(:username,
    length: { in: 3..50 },
    presence: true,
    uniqueness: { case_sensitive: false }
  )

  # associations
  has_many :comments, through: :rovers

  # attr_accessor :password_digest, :username, :email
end