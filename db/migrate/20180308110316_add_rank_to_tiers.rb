class AddRankToTiers < ActiveRecord::Migration[5.1]
  def change
    add_column :tiers, :rank, :integer
  end
end
