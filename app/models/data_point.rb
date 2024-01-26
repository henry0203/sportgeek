class DataPoint < ApplicationRecord
  belongs_to :user

  #validates :key, uniqueness: { scope: :date }
end
