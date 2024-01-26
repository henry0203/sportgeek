class DeleteRankFromTiers < ActiveRecord::Migration[5.1]
  def change
    remove_column :tiers, :rank
  end
end
