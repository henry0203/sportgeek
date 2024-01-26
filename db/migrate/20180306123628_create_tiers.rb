class CreateTiers < ActiveRecord::Migration[5.1]
  def change
    create_table :tiers do |t|
      t.string :rank
      t.string :loot

      t.timestamps
    end
  end
end
