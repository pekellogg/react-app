Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :rovers, only: [:index]
      resources :photos, only: [:index]
      resources :comments

    end
  end
end

# http://127.0.0.1:3000/api/v1/rovers
# http://127.0.0.1:3000/api/v1/photos
# http://127.0.0.1:3000/api/v1/comments