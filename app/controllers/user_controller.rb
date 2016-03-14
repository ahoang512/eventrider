class UserController < ApplicationController
  def suggest
    OwnerMailer.suggest_email(params).deliver_now!
  end
end
