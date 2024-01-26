class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :description
      t.string :target_key
      t.string :target_value
      t.integer :experience
      t.integer :difficulty
      t.integer :stars_quantity

      t.timestamps
    end
  end
end
