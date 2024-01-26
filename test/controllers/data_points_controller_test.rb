require 'test_helper'

class DataPointsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get data_points_index_url
    assert_response :success
  end

end
