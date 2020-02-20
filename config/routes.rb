Rails.application.routes.draw do
  root to: 'titles#index'
  resources :titles ,only: [:index]
  resources :hopedices ,only: [:index]
end
