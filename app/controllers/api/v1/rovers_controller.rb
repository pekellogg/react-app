class Api::V1::RoversController < ApplicationController
  def index
    @rovers = Rover.all
    render json: @rovers
  end

  def show
    @rover = Rover.find(params[:id])
    if @rover
      render json: @rover
    end
  end
end