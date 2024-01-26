class AddDisplayToGoals < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :display, :boolean, default: false
  end
end
