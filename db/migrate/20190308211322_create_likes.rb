class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :likeable_item_id, null: false
      t.string :likeable_item, null: false

      t.timestamps
    end

    add_index :likes, [:user_id, :likeable_item, :likeable_item_id]
  end
end
