Rails.application.routes.draw do
  root to: 'hopedices#index'
  resources :hopedices ,only: [:index]
end
