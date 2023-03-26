Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # previous implementation: testing below
      # resources :rovers, only: [:index]
      # resources :comments

      # testing
      # https://guides.rubyonrails.org/routing.html#nested-resources
      # generate the collection actions scoped under the parent (sense of the hierarchy),
      # but to not nest the member actions.
      # ... only build routes w/ the minimal amount of information to uniquely identify the resource

      resources :rovers, only: [:index, :show] do
        resources :comments, only: [:index, :create]
      end
      resources :cameras, only: [:index, :show]
      resources :comments, only: [:show, :update, :destroy]
      resources :photos, only: [:index]
      resources :users
    end
  end
end