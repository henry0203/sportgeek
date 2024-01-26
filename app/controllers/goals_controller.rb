class GoalsController < ApplicationController
  before_action :authenticate_user!
  def index
    #@lvl = (current_user.experience.to_i / 1000).round + 1
    @lvl = current_user.experience.to_i
    date_today = Date.today
    @data_points_today = DataPoint.where(date: date_today)
    @goals_week = Goal.where(rank: @lvl).where(goal_type: 'week')
    @goals_day = Goal.where(user_id: current_user.id).where(goal_type: 'day').where(display: true)
    gon.goal = Goal.all

    # Graph
    gon.step = extract_data('Steps')
    gon.step_date = extract_date
    gon.distance = extract_data('Distance walked [km]', 1000)
    gon.calorie = extract_data('Calories burned [cal]')
    #gon.calorie_bubble = extract_data_activity_calories('calories')
    gon.doughnut = extract_data_for_doughnut(extract_data('Calories burned [cal]'), extract_data('Calories burned during an active period [cal]'))
    date_today = DateTime.now.strftime('%Y-%m-%d')

    gon.minutes_sedentary = DataPoint.where(date: date_today).where(key: 'Inactive period [min]').first[:value].to_i

    gon.minutes_lightly_active = DataPoint.where(date: date_today).where(key: 'Lightly active period [min]').first[:value].to_i

    gon.minutes_fairly_active = DataPoint.where(date: date_today).where(key: 'Fairly active period [min]').first[:value].to_i

    gon.minutes_very_active = DataPoint.where(date: date_today).where(key: 'Very active period [min]').first[:value].to_i

    gon.rest_of_the_day = 1440 - ( gon.minutes_sedentary - 150 + gon.minutes_lightly_active + gon.minutes_fairly_active + gon.minutes_very_active )


    gon.today = DateTime.now.strftime('%Y-%m-%d')
    gon.token = current_user.devices.first.token
  end

  def new
    @goal = Goal.new
  end

  def create
    @goal = Goal.new(goal_params)
    @goal.user = current_user
    #date_today = Date.today
    #@data_points_today = DataPoint.where(date: date_today)
    @goal.rank = 1
    @goal.goal_type = 'day'

    @goal.display = true
    if @goal.save
      # respond_to do |format|
      #      format.html
      #      format.js  # <-- will render `app/views/goals/create.js.erb`
      # end
      redirect_to goals_path
    else
      render :new
    end
  end

  def update
    if params[:goal]
      @goal = Goal.find_by(description: params[:goal][:description])
      date_today = Date.today
      @data_points_today = DataPoint.where(date: date_today)
      if @goal.display == false
        @goal.display = true
        @goal.save
        # respond_to do |format|
        #    format.html
        #    format.js  # <-- will render `app/views/goals/update.js.erb`
        # end
        redirect_to goals_path
      end
    else
      @goal = Goal.find(params[:id])
      @goal.display = false
      @goal.save
      respond_to do |format|
           format.html
           format.js  # <-- will render `app/views/goals/update.js.erb`
      end
      #redirect_to goals_path
    end
  end

  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy
    redirect_to goals_path
  end

  private

  def goal_params
    params.require(:goal).permit(:description, :target_key, :target_value, :display, :predefined)
  end

  def extract_data(key, scale = 1)
    a = DataPoint.where(user_id: current_user.id)
                .where(key: key)
                .order(date: :asc)
                .last(4)
                .map { |dp| dp.value.to_i * scale }
    a
  end

  def extract_date
    b = DataPoint.where(user_id: current_user.id)
                .where(key: 'Steps')
                .order(date: :asc)
                .last(4)
                .map { |dp| dp.date.strftime("%A") }
    b
  end

  def extract_data_for_doughnut(array, array2)
    a = []
    b = 0
    array.each do |element|
      a << [element.to_i - array2[b].to_i, array2[b]]
      b += 1
    end
    a
  end
end

