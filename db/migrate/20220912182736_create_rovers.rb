class CreateRovers < ActiveRecord::Migration[7.0]
  def change
    create_table :rovers do |t|
      t.integer :external_id
      t.string :name
      t.string :landing_date
      t.string :launch_date
      t.string :status
      t.timestamps
    end
  end
end
