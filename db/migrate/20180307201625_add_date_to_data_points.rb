class AddDateToDataPoints < ActiveRecord::Migration[5.1]
  def change
    add_column :data_points, :date, :string
  end
end
