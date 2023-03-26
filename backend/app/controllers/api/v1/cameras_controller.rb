class Api::V1::CamerasController < ApplicationController
  
  def index
    @cameras = Camera.all
    render json: @cameras
  end

  def show
    if @camera = Camera.find(params[:id])
      render json: @camera
    else
      # server error if not found
      render json: { status: 500 }
    end
  end

end