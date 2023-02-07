class AddColumnsToRovers < ActiveRecord::Migration[7.0]
  def change
    add_column :rovers, :max_sol, :integer
    add_column :rovers, :max_date, :string
    add_column :rovers, :total_photos, :integer
  end
end