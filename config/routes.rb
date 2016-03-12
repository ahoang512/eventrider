Rails.application.routes.draw do
  root to: 'static_pages#root'
    resources :user do
      collection do
        get 'suggest'
      end
    end
end
