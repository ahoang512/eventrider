class Api::UsersController < ApplicationController
  def suggest
    OwnerMailer.suggest_email(params).deliver_now!
  end

  def create
    fb_id = params[:id]
    name = params[:name]

    @user = User.find_by(fb_id: fb_id)

    if @user
      render json: @user
    else
      @user = User.create(fb_id: fb_id, name: name);
      render json: @user
    end

  end

end
