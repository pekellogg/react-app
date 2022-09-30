class Api::V1::RoversController < ApplicationController
  
  def index
    @rovers = Rover.all
    render json: @rovers
  end

  def create
    @rover = Rover.create(rover_params)
    if @rover.save
      render json: @rover 
    else
      # client error if not saved; 400 Bad Request
      render json: { status: 400 }
    end
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

  def update
    @rover = Rover.find(params[:id])
    if @rover.update(rover_params)
      render json: @rover
    else
      # client error if no update; 400 Bad Request
      render json: { status: 400 }
    end
  end

  def destroy
    Rover.find(params[:id]).destroy
  end

  private

  def rover_params
    params.require(:rover)#.permit(:id, :creator, :collaborators, :status, :goal, :deadline, :deadline_reason, :category, :percent_complete, :created_at, :updated_at, action_item_ids: [])
  end
  
end
