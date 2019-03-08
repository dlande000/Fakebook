class UpdateLikesColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :likeable_item
    remove_column :likes, :likeable_item_id
    add_column :likes, :likeable_type, :string
    add_column :likes, :likeable_id, :integer 
  end
end
