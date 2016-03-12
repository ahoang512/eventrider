class UserController < ApplicationController
  def suggest
    OwnerMailer.suggest_email.deliver_now!
  end
end
