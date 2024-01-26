Rails.application.routes.draw do
  devise_for :users

  resources :devices, only: [:new, :create, :destroy]

  patch 'goals', to: 'goals#update', as: 'goals'
  resources :goals, only: [:index, :new, :create, :destroy]

  resources :tiers, only: [:index]
  resources :rankings, only: [:index]

  get "profile", to: "data_points#index"
  get 'auth/fitbit_oauth2/callback', to: 'devices#callback'
  # get 'userdevice/fitbit_oauth2/callback', to: 'devices#callback'
  get 'graph', to: 'pages#graph'
  get 'gontest', to: 'pages#gontest'
  get 'test', to: 'pages#test'

  get 'premium/upgrade/payments', to: 'payments#new'
  post 'premium/upgrade/payments', to: 'payments#create'

  root to: 'pages#home'
end

