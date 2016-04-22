# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  location   :string           not null
#  date       :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ActiveRecord::Base
  validates :name,
    :location,
    :date,
    :image_url,
    presence: true

  has_many :rides,
    class_name: "Ride",
    foreign_key: :event_id,
    primary_key: :id
end
