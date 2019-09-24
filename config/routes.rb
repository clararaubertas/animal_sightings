Rails.application.routes.draw do
  resources :animals
  resources :sightings
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'sightings#index'
end
