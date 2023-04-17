class FallbackController < ActionController::Base
  # inheriting from ActionController::Base for ability to render an HTML file for React
  def index
    render file: 'public/index.html'
  end
end