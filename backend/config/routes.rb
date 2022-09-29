Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :action_plans, only: [:index, :create, :update, :destroy]

      resources :action_plans, only: [:show] do
        resources :action_items, only: [:create]
      end

      resources :action_items, only: [:index, :show, :update, :destroy]

    end
  end
end