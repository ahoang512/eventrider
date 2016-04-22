# == Schema Information
#
# Table name: rides
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  seats      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ride < ActiveRecord::Base
  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :event,
    class_name: "Event",
    foreign_key: :event_id,
    primary_key: :id
end
