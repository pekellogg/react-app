Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :rovers, only: [:index]
      resources :photos, only: [:index]
      resources :comments

    end
  end
end