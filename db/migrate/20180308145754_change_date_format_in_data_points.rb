class ChangeDateFormatInDataPoints < ActiveRecord::Migration[5.1]
  def change
    remove_column :data_points, :date
    add_column :data_points, :date, :date
  end
end
