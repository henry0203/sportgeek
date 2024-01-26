class AddRankToGoal < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :rank, :integer
  end
end
