class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :receiver_id, null: false
      t.integer :sender_id, null: false
      t.string :status, default: "Not friends", null: false

      t.timestamps
    end
    add_index :friendships, [:receiver_id, :sender_id], unique: true
  end
end
