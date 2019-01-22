class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birthdate, null: false
      t.string :gender
      t.string :password_digest, null: false
      t.string :profile_pic_url, null: false
      t.string :banner_pic_url, null: false
      t.string :session_token, null: false
      t.string :hometown
      t.string :current_city
      t.string :bio

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, [:first_name, :last_name]
    add_index :users, :session_token, unique: true
  end
end
