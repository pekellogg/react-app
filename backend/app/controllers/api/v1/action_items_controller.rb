require "pry"
class Api::V1::ActionItemsController < ApplicationController
  # wrap_parameters ActionItem # https://api.rubyonrails.org/v7.0.4/classes/ActionController/ParamsWrapper.html

  def index
    @action_items = ActionItem.all
    render json: @action_items
  end

  def create
    @action_item = ActionItem.create(action_item_params)
    if @action_item.save
      render json: @action_item 
    else
      # client error if not saved; 400 Bad Request
      render json: { status: 400 }
    end
  end

  def show
    @action_item = ActionItem.find(params[:id])
    if @action_item
      render json: @action_item
    else
      # server error if not found
      render json: { status: 500 }
    end
  end

  def update
    @action_item = ActionItem.find(params[:id])
    if @action_item.update(action_item_params)
      render json: @action_item
    else
      # client error if no update; 400 Bad Request
      render json: { status: 400 }
    end
  end

  def destroy
    ActionItem.find(params[:id]).destroy
  end

  private

  def action_item_params
    params.require(:action_item).permit(:id, :assignees, :status, :deadline, :created_at, :updated_at)
  end
  
end
