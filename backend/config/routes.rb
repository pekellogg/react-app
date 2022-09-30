Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :rovers, only: [:index, :create, :update, :destroy]

      resources :rovers, only: [:show] do
        resources :photos, only: [:create]
      end

      resources :photos, only: [:index, :show, :update, :destroy]

    end
  end
end