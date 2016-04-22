# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  fb_id      :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base

  has_many :rides,
    class_name: "Ride",
    foreign_key: :user_id,
    primary_key: :id

  
end
