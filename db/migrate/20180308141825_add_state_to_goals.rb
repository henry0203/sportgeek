class AddStateToGoals < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :state, :boolean, default: false
  end
end
