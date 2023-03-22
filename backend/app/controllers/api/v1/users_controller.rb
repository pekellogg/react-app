require "pry"

class Api::V1::UsersController < ApplicationController
  wrap_parameters false
  
  # for testing purposes only
  def index
    @users = User.all
    render json: @users
  end

  # narrow scope to current user
  def create
    # binding.pry
    if @user = User.create!(user_params)
      render json: @user 
    else
      render json: { status: 400 }
    end
  end

  # narrow scope to current user
  def show
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
      render json: { status: 500 }
    end
  end

  # narrow scope to current user
  def update
    @user = User.find(params[:id])
    if @user.update!(user_params)
      render json: @user
    else
      render json: { status: 400 }
    end
  end

  # narrow scope to current user
  def destroy
    User.find(params[:id]).destroy
  end

  private

  def user_params
    params.permit(:id, :email, :password, :username)
  end
  
end
