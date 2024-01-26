class AddGoalTypeToGoal < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :goal_type, :string
  end
end
