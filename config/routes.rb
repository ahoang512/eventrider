Rails.application.routes.draw do
  root to: 'static_pages#root'
    # resources :user do
    #   collection do
    #     get 'suggest'
    #   end
    # end

    namespace :api, defaults: {format: :json}  do
      resources :events, only: [:index, :show] do
        collection do
          get 'featured'
        end
      end
    end
end
