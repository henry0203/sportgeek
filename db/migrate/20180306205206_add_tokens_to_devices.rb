class AddTokensToDevices < ActiveRecord::Migration[5.1]
  def change
    add_column :devices, :token, :text
    add_column :devices, :refresh_token, :text
  end
end
