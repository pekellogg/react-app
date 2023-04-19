class Api::V1::RoversController < ApplicationController
  
  def index
    @rovers = Rover.all
    render json: @rovers
  end

  def show
    @rover = Rover.find(params[:id])
    if @rover
      render json: @rover
    else
      # server error if not found
      render json: { status: 500 }
    end
  end

end