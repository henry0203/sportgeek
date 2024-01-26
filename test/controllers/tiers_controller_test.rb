require 'test_helper'

class TiersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tiers_index_url
    assert_response :success
  end

end
