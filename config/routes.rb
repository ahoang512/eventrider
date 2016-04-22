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

      resources :users, only: [:create] do
        member do
          get 'suggest'
        end
      end

      resources :rides, only: [:index]
    end
end
