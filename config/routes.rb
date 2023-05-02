Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :rovers, only: [:index, :show]
      resources :cameras, only: [:index, :show]
      resources :photos, only: [:index, :show]
    end
  end
  # this route definition matches:
  # - *path: all paths not matched by one of the routes defined above
  # - constraints:
  #   - !req.xhr?: it's not a XHR (fetch) request
  #   - req.format.html?: it's a request for a HTML document
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end