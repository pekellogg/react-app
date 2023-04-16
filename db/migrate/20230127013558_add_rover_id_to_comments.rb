class AddRoverIdToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :rover_id, :integer
  end
end
