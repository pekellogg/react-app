class AddProfilePicToRovers < ActiveRecord::Migration[7.0]
  def change
    add_column :rovers, :profile_pic, :string
  end
end
