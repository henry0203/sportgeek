class CreateDataPoints < ActiveRecord::Migration[5.1]
  def change
    create_table :data_points do |t|
      t.string :key
      t.string :value
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
