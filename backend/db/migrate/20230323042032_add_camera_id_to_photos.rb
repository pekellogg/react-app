class AddCameraIdToPhotos < ActiveRecord::Migration[7.0]
  def change
    add_column :photos, :camera_id, :integer
  end
end
