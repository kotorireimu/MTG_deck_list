Rails.application.routes.draw do
  get 'terminals/index'
  root to: 'terminals#index'
  get 'posts/index'
end
