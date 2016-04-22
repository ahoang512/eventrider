class Api::RidesController < ApplicationController

  def index
    event_id = params[:event_id]
    @rides = Event.find(event_id).rides
    render json: @rides
  end
end
