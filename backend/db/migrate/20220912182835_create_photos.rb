class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.integer :external_id
      t.string :earth_date
      t.integer :sol
      t.text :source
      t.integer :rover_id
      t.timestamps
    end
  end
end
