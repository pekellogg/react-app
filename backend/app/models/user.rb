class User < ApplicationRecord
  # PW validations: length between inclusive range of 15-72, must be present, must contain at least 1 special character
  include ActiveModel::SecurePassword
  has_secure_password
  validates(
    :password_digest,
    # inclusion: { in: [
    #   " ", "!", '"',
    #   "#", "$", "%",
    #   "&", "'", "(",
    #   ")", "*", "+",
    #   ",", "-", ".",
    #   "/", ":", ";",
    #   "<", "=", ">",
    #   "?", "@", "[",
    #   '\\', "]", "^",
    #   "_", "`", "{",
    #   "|", "}", "~",
    #   '"'
    # ] },
    length: { in: 15..72 }
  )

  # username validations: length between inclusive range of 3-50, must be present and unique
  before_save { self.username = username.downcase if username }
  validates(:username,
    length: { in: 3..50 },
    presence: true,
    uniqueness: true
  )

  # email validations: max length 255, must be present and unique, must have valid email format per https://www.w3resource.com/javascript/form/email-validation.php
  before_save { self.email = email.downcase if email }
  validates(:email,
    format: { with: /\A\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+\z/, message: "Invalid email format!" },
    length: { maximum: 255 },
    presence: true,
    uniqueness: { case_sensitive: false }
  )

  # associations
  has_many :comments, through: :rovers

  attr_accessor :password_digest, :username
end