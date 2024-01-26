class AddDefaultValueToUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :experience, :integer, default: 0
    change_column :users, :stars_quantity, :integer, default: 0
  end
end
