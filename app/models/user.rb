class User < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  has_many :devices
  has_many :data_points
  has_many :goals

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
