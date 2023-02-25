class User < ApplicationRecord
  # PW validations
  include ActiveModel::SecurePassword
  has_secure_password # present, maximum length 72
  # validates :password, 

  # username validations
  validates :username, presence: true

  # email validations
  validates :email, presence: true, format: { with: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Invalid email format!" }
  
  # Starting at the beginning of line (^) through the end of line ($),
  # any word characters (/w) occurring any number of times (+), 
  # a group consisting of a period or a minus sign optionally occurring 0 or 1 time (?), any word characters (/w) occurring any number of times (+) (something re: backtrace processing with *)
  # an @,
  # any word characters (/w) occurring any number of times (+),
  # a group consisting of a period or a minus sign optionally occurring 0 or 1 time (?), any word characters (/w) occurring any number of times (+), something re: backtracing with *,
  # a group consisting of a period and a word character (/w) occurring at least 2 and at most 3 times {2,3} occurring any number of times (+)
  # source: https://www.w3resource.com/javascript/form/email-validation.php

  # associations
  has_many :comments, through: :rovers
end

## V2 PW
# equal to its confirmation
# has_secure_password :recovery_password, validations: false
# attr_accessor :password_digest, :recovery_password_digest