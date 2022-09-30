class CreateActionPlans < ActiveRecord::Migration[7.0]
  def change
    create_table :action_plans do |t|
      t.string :creator
      t.string :collaborators
      t.string :status
      t.string :goal
      t.string :deadline
      t.string :deadline_reason
      t.string :category
      t.decimal :percent_complete

      t.timestamps
    end
  end
end
