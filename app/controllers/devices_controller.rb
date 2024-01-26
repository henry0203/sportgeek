class DevicesController < ApplicationController
  require 'json'
  require 'open-uri'
  require 'date'

  skip_before_action :verify_authenticity_token, only: [:callback]


  def new
    #if current_user.devices.ids == []
      # @device = Device.new
      # if current_user.devices.first
        # @device_name = current_user.devices.first.name
      # end
      # authorize @device
    #else
    #  @device = current_user.devices.first
      #informations_for_client
      #redirect_to @client.auth_url
    #end
    @device = Device.new
    # authorize @device
  end

  def create
    # session[:start_date] = params[:start_date]
    # session[:end_date] = params[:end_date]
    # if current_user.devices.ids == []
      # @device = current_user.devices.new(device_params)
      # authorize @device
      # if @device.save
        # informations_for_client
        # redirect_to @client.auth_url
      # else
        # render :new
      # end
    # else
      # informations_for_client
      # redirect_to @client.auth_url
    # end
    @device = current_user.devices.new(device_params)
    # authorize @device
    if @device.save
      redirect_to edit_user_registration_path
    else
      render :new
    end
  end

  def destroy
    @device = Device.find(params[:id])
    @device.destroy
    authorize @device

    redirect_to edit_user_registration_path
  end

  def callback
    # @start_date = session[:start_date].to_date
    # @end_date = session[:end_date].to_date
    # informations_for_client
#
    # @device = Device.find(current_user.devices.first.id)
    # @device.token = @client.get_token(params[:code])
    # @device.save
    if current_user.devices.first.nil?
      Device.create(user_id: current_user.id, name: 'Fitbit device of the user #{current_user.id}')

      @device = Device.find(current_user.devices.first.id)
      @device.token = request.env["omniauth.auth"]['credentials'].token
      @device.refresh_token = request.env["omniauth.auth"]['credentials'].refresh_token
      @device.save

      client = FitbitAPI::Client.new(client_id: ENV['FITBIT_CLIENT_ID'],
                               client_secret: ENV['FITBIT_CLIENT_SECRET'],
                               refresh_token: @device.refresh_token)

      DataPoint.create(key: 'Birthday', value: client.profile['user']['dateOfBirth'], user_id: current_user.id)
      DataPoint.create(key: 'First name', value: client.profile['user']['displayName'], user_id: current_user.id)
      DataPoint.create(key: 'Full name', value: client.profile['user']['fullName'], user_id: current_user.id)
      DataPoint.create(key: 'Gender', value: client.profile['user']['gender'], user_id: current_user.id)
      DataPoint.create(key: 'Height', value: client.profile['user']['height'].to_i * 2.54, user_id: current_user.id)
      DataPoint.create(key: 'Weight', value: client.profile['user']['weight'].to_i * 0.453592, user_id: current_user.id)
      @user = current_user
      @user.birthday = DataPoint.where(key: 'Birthday', user_id: current_user.id).first.value
      @user.first_name = DataPoint.where(key: 'First name', user_id: current_user.id).first.value
      @user.sex = DataPoint.where(key: 'Gender', user_id: current_user.id).first.value
      @user.height = DataPoint.where(key: 'Height', user_id: current_user.id).first.value
      @user.weight = DataPoint.where(key: 'Weight', user_id: current_user.id).first.value
      @user.save

      Goal.create(description: 'Walk 3km', user_id: current_user.id, target_key: 'Distance walked [km]', target_value: 3, rank: 1, goal_type: 'day', display: true, predefined: true)
      Goal.create(description: 'Do 10 000 steps', user_id: current_user.id, target_key: 'Steps', target_value: 10000, rank: 1, goal_type: 'day', display: true, predefined: true)
      Goal.create(description: 'Burn 2000 calories', user_id: current_user.id, target_key: 'Calories burned [cal]', target_value: 2000, rank: 1, goal_type: 'day', display: true, predefined: true)
      Goal.create(description: 'Be very active for 1 hour', user_id: current_user.id, target_key: 'Very active period [min]', target_value: 60, rank: 1, goal_type: 'day', display: true, predefined: true)

    else
      @device = Device.find(current_user.devices.first.id)
      @device.token = request.env["omniauth.auth"]['credentials'].token
      @device.refresh_token = request.env["omniauth.auth"]['credentials'].refresh_token
      @device.save

    # doc = open('https://api.fitbit.com/1/user/-/activities/heart/date/2018-03-08/2018-03-09.json', 'Authorization' => 'Bearer ' + @device.token ).read
    # file = JSON.parse(doc)
      client = FitbitAPI::Client.new(client_id: ENV['FITBIT_CLIENT_ID'],
                               client_secret: ENV['FITBIT_CLIENT_SECRET'],
                               refresh_token: @device.refresh_token)
    end

    # p client.lifetime_stats
    # p client.weight_logs


    # if DataPoint.where(user_id: current_user.id).where(key: 'Birthday').size == 0
#
      # DataPoint.create(key: 'Birthday', value: client.profile['user']['dateOfBirth'], user_id: current_user.id)
      # DataPoint.create(key: 'First name', value: client.profile['user']['displayName'], user_id: current_user.id)
      # DataPoint.create(key: 'Full name', value: client.profile['user']['fullName'], user_id: current_user.id)
      # DataPoint.create(key: 'Gender', value: client.profile['user']['gender'], user_id: current_user.id)
      # DataPoint.create(key: 'Height', value: client.profile['user']['height'].to_i * 2.54, user_id: current_user.id)
      # DataPoint.create(key: 'Weight', value: client.profile['user']['weight'].to_i * 0.453592, user_id: current_user.id)
      # @user = current_user
      # @user.birthday = DataPoint.where(key: 'Birthday', user_id: current_user.id).first.value
      # @user.first_name = DataPoint.where(key: 'First name', user_id: current_user.id).first.value
      # @user.sex = DataPoint.where(key: 'Gender', user_id: current_user.id).first.value
      # @user.height = DataPoint.where(key: 'Height', user_id: current_user.id).first.value
      # @user.weight = DataPoint.where(key: 'Weight', user_id: current_user.id).first.value
      # @user.save
    # end

    # period : ["1d", "7d", "30d", "1w", "1m", "3m", "6m", "1y", "max"].
    # ["calories", "caloriesBMR", "steps", "distance", "floors", "elevation", "minutesSedentary", "minutesLightlyActive", "minutesFairlyActive", "minutesVeryActive", "activityCalories", "tracker/calories", "tracker/steps", "tracker/distance", "tracker/floors", "tracker/elevation", "tracker/minutesSedentary", "tracker/minutesLightlyActive", "tracker/minutesFairlyActive", "tracker/minutesVeryActive", "tracker/activityCalories"]
    array_of_data_types = ["calories", "steps", "distance", "minutesSedentary", "minutesLightlyActive", "minutesFairlyActive", "minutesVeryActive", "activityCalories"]
    array_of_target_key = ["Calories burned [cal]", "Steps", "Distance walked [km]", "Inactive period [min]", "Lightly active period [min]", "Fairly active period [min]", "Very active period [min]", "Calories burned during an active period [cal]"]

    date_before = (DateTime.now - 3).strftime('%Y-%m-%d')
    date_today = DateTime.now.strftime('%Y-%m-%d')
    # data_heart = client.heart_rate_time_series( start_date: '2018-03-08' )
    #data_heart_zones = data_heart.first['value']['heartRateZones']

    (date_before..date_today).to_a.each do |date|
      if DataPoint.where(user_id: current_user.id).where(date: date).count == 0
        array_of_data_types.each_with_index do |data_key, index|
          data_value = client.activity_time_series(data_key, start_date: date, end_date: date )
          if data_key == 'distance'
            data_value = (data_value.first["value"].to_f * 1.60934).round(1)
          else
            data_value = data_value.first["value"].to_i
          end
          DataPoint.create(key: array_of_target_key[index], value: data_value, user_id: current_user.id, date: date)
        end
      elsif date == date_today
        array_of_data_types.each_with_index do |data_key, index|
          data_value = client.activity_time_series(data_key, start_date: date, end_date: date )
          if data_key == 'distance'
            data_value = (data_value.first["value"].to_f * 1.60934).round(1)
          else
            data_value = data_value.first["value"].to_i
          end
          DataPoint.where(date: date).where(key: array_of_target_key[index]).update(value: data_value)
        end
      end
    end

    redirect_to goals_path


    # array_of_data_types = ["calories", "steps", "distance", "floors", "minutesVeryActive"]
    # (@start_date..@end_date).to_a.each do |element|
      # datedate = element

#
      # unless DataPoint.find_by(date: datedate)

#
        # array_of_data_types.each do |data_key|
          # data_value = @client.activity_time_series(data_key, start_date: date.to_s, end_date: date.to_s )
          # if data_key == 'distance'
            # data_value = (data_value.first["value"].to_f * 1.60934).round(1)
          # else
            # data_value = data_value.first["value"].to_i
          # end
          # DataPoint.create(key: data_key, value: data_value, user_id: current_user.id, date: date)
        # end
      # else
        # DataPoint.find_by(key: 'resting_heart_rate').update( value: data_heart_rate )
        # DataPoint.find_by(key: 'heart_rate_zones').update( value: data_heart_zones )
#
        # array_of_data_types.each do |data_key|
          # data_value = client.activity_time_series(data_key, start_date: date.to_s, end_date: date.to_s )
          # if data_key == 'distance'
            # data_value = (data_value.first["value"].to_f * 1.60934).round(1)
          # else
            # data_value = data_value.first["value"].to_i
          # end
          # DataPoint.find_by(key: data_key).update( value: data_value )
        # end
      # end
    # end
    # session[:message] = "your data has been imported"
    # redirect_to edit_user_registration_path

  end

  private

  def device_params
    params.require(:device).permit(:name)
  end

  # def informations_for_client
    # url = "https://sportgeek.herokuapp.com/auth/fitbit_oauth2/"
    # if Rails.env == "development"
      # url = "http://localhost:3000/auth/fitbit_oauth2/"
    # end
  # end

end
