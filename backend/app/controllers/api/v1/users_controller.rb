require "pry"

class Api::V1::UsersController < ApplicationController
  wrap_parameters false
  def index
    @users = User.all
    render json: @users
  end

  def create
    # binding.pry
    if @user = User.create!(user_params)
      render json: @user 
    else
      render json: { status: 400 }
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
      render json: { status: 500 }
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update!(user_params)
      render json: @user
    else
      render json: { status: 400 }
    end
  end

  def destroy
    User.find(params[:id]).destroy
  end

  private

  def user_params
    params.permit(:id, :email, :password, :username)
  end
  
end
