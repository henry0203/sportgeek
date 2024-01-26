class Goal < ApplicationRecord
  belongs_to :user
  validates :description, presence: true, length: { maximum: 40,
    too_long: "%{count} characters is the maximum allowed" }
  validates :target_key, presence: true
  validates :target_value, presence: true
end
