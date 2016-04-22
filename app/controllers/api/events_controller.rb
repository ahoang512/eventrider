class Api::EventsController < ApplicationController
  def show
    id = params[:id].to_i
    @event = Event.find(id);
    render json: @event
  end

  def featured
    @events = Event.order('random()').limit('2')
    render json: @events
  end


end
