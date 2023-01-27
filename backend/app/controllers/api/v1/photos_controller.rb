class Api::V1::PhotosController < ApplicationController

  def index
    @photos = Photo.all
    render json: @photos
  end

  def show
    @photo = Photo.find(params[:id])
    if @photo
      render json: @photo
    else
      # server error if not found
      render json: { status: 500 }
    end
  end
  
end
