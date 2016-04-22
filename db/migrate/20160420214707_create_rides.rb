class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.integer :user_id, null: false
      t.integer :event_id , null:false
      t.integer :seats, null:false
      t.string :city, null:false
      t.timestamps null: false
    end

    add_index :rides, :event_id
    add_index :rides, :user_id
  end

end
