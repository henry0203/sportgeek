class RankingsController < ApplicationController
  def index
    @users= User.all
  end
end
