class TiersController < ApplicationController
before_action :authenticate_user!
  def index
    @tiers = Tier.all
    # authorize @tiers
  end
end
