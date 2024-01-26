class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  include Pundit

  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :height, :weight, :birthday, :photo, :photo_cache, :email, :pseudo, :password, :password_confirmation])

    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :height, :weight, :birthday, :photo, :photo_cache, :email, :pseudo, :password, :password_confirmation])
  end

  # Pundit: white-list approach.
  # after_action :verify_authorized, unless: :skip_pundit?
  # after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

  # Uncomment when you *really understand* Pundit!
  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  def user_not_authorized
    flash[:alert] = "You are not authorized to perform this action."
    redirect_to(root_path)
  end

  def after_sign_in_path_for(resource)
    if DataPoint.where(user_id: current_user.id).where(date: DateTime.now.strftime('%Y-%m-%d')).count == 0
      url = "https://sportgeek.herokuapp.com/auth/fitbit_oauth2"
      if Rails.env == "development"
        url = "http://localhost:3000/auth/fitbit_oauth2"
      end
      url
    else
      goals_path
    end
  end

  private

  def skip_pundit?
    devise_controller? || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
  end
end
