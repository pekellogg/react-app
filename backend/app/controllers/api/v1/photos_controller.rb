class Api::V1::PhotosController < ApplicationController

  def index
    @photos = Photo.all
    render json: @photos
  end

  # def create
  #   @photo = Photo.create(photo_params)
  #   if @photo.save
  #     render json: @photo 
  #   else
  #     # client error if not saved; 400 Bad Request
  #     render json: { status: 400 }
  #   end
  # end

  def show
    @photo = Photo.find(params[:id])
    if @photo
      render json: @photo
    else
      # server error if not found
      render json: { status: 500 }
    end
  end

  # def update
  #   @photo = Photo.find(params[:id])
  #   if @photo.update(photo_params)
  #     render json: @photo
  #   else
  #     # client error if no update; 400 Bad Request
  #     render json: { status: 400 }
  #   end
  # end

  # def destroy
  #   Photo.find(params[:id]).destroy
  # end

  # private

  # def photo_params
  #   params.require(:photo)#.permit(:id, :assignees, :status, :deadline, :created_at, :updated_at)
  # end
  
end
