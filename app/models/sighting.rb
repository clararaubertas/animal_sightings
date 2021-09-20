class Sighting < ApplicationRecord

  belongs_to :animal
  
  validates_presence_of :animal, :latitude, :longitude

  delegate :name, to: :animal, prefix: true, allow_nil: true

  mount_uploader :picture, PictureUploader
  default_scope { where(archived: false) }

  
end
