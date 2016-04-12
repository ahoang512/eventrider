class Event < ActiveRecord::Base
  validates :name,
    :location,
    :date,
    :image_url,
    presence: true
end
