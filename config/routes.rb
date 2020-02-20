Rails.application.routes.draw do
  get 'hopedices/index'
  root to: 'hopedices#index'
end
