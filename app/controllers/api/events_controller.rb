class Api::EventsController < ApplicationController
  def featured
    @events = Event.order('random()').limit('2')
    render json: @events
  end
end
