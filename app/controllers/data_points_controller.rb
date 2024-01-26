class DataPointsController < ApplicationController
  def index
    @data_points = DataPoint.all
    authorize @data_points
  end
end
