class Api::V1::CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
  end

  def create
    @comment = Comment.create(comment_params)
    if @comment.save
      render json: @comment 
    else
      # client error if not saved; 400 Bad Request
      render json: { status: 400 }
    end
  end

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render json: @comment
    else
      # server error if not found
      render json: { status: 500 }
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      # client error if no update; 400 Bad Request
      render json: { status: 400 }
    end
  end

  def destroy
    Comment.find(params[:id]).destroy
  end

  private

  def comment_params
    params.require(:comment)#.permit(:id, :assignees, :status, :deadline, :created_at, :updated_at)
  end
  
end