Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :rovers, only: [:index, :show]
      resources :cameras, only: [:index, :show]
      resources :photos, only: [:index]
      resources :users
    end
  end
end