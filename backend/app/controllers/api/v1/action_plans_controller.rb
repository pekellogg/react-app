require "pry"
class Api::V1::ActionPlansController < ApplicationController
  # wrap_parameters ActionPlan # https://api.rubyonrails.org/v7.0.4/classes/ActionController/ParamsWrapper.html
  
  def index
    @action_plans = ActionPlan.all
    render json: @action_plans
  end

  def create
    @action_plan = ActionPlan.create(action_plan_params)
    if @action_plan.save
      render json: @action_plan 
    else
      # client error if not saved; 400 Bad Request
      render json: { status: 400 }
    end
  end

  def show
    @action_plan = ActionPlan.find(params[:id])
    if @action_plan
      render json: @action_plan
    else
      # server error if not found
      render json: { status: 500 }
    end
  end

  def update
    @action_plan = ActionPlan.find(params[:id])
    if @action_plan.update(action_plan_params)
      render json: @action_plan
    else
      # client error if no update; 400 Bad Request
      render json: { status: 400 }
    end
  end

  def destroy
    ActionPlan.find(params[:id]).destroy
  end

  private

  def action_plan_params
    params.require(:action_plan).permit(:id, :creator, :collaborators, :status, :goal, :deadline, :deadline_reason, :category, :percent_complete, :created_at, :updated_at, action_item_ids: [])
  end
  
end
