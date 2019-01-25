class AddProfilePicUrlAndBannerPicUrlToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_pic_url, :string
    add_column :users, :banner_pic_url, :string
  end
end
