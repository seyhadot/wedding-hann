Rails.application.routes.draw do
  resources :contacts, path: ''do
    collection do
      post :import
      get 'remove_all'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'home/index'
  root 'contacts#index'
  get "contacts/:id", to: redirect("/%{id}")
end
