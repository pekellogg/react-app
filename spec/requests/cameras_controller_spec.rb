require "rails_helper"
require_relative "../../app/controllers/api/v1/cameras_controller"

RSpec.describe "CamerasControllers", type: :request do
  context "requests" do
    let(:cameras) { Camera.all }

    describe "GET api/v1/index" do
      it "assigns all cameras to @cameras" do
        get :index
        expect(assigns["cameras"]).to eq(cameras)
      end
    end
  end

  # context "responses" do
  # end
end
