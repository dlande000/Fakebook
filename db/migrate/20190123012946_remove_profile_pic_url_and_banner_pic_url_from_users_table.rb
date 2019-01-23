class RemoveProfilePicUrlAndBannerPicUrlFromUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_pic_url
    remove_column :users, :banner_pic_url
  end
end
