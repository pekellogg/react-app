class CreateCameras < ActiveRecord::Migration[7.0]
  def change
    create_table :cameras do |t|
      t.integer :external_id
      t.string :name
      t.integer :rover_id
      t.string :full_name
      t.timestamps
    end
  end
end