class AddPredefinedToGoals < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :predefined, :boolean, default: false
  end
end
