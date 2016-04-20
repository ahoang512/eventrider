class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fb_id, null:false
      t.string :name, null:false
      t.timestamps null: false
    end

    add_index :users, :fb_id, :unique => true
  end
end
