class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :birthday, :string
    add_column :users, :sex, :string
    add_column :users, :height, :integer
    add_column :users, :weight, :integer
    add_column :users, :experience, :integer
    add_column :users, :stars_quantity, :integer
  end
end
