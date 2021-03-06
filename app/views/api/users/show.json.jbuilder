json.extract! @user, :email, :first_name, :last_name, :bio, :birthdate, :gender, :id, :current_city, :hometown
json.friendIds @user.friend_ids

pending_friend_ids = []
@user.pending_friend_requests.each do |pending_friend_request|
    pending_friend_ids << pending_friend_request.sender_id
end
json.pendingFriendIds pending_friend_ids

if @user.profile_pic.attached?
    json.profile_pic_url url_for(@user.profile_pic)
else
    json.profile_pic_url @user.profile_pic_url
end

if @user.banner_pic.attached?
    json.banner_pic_url url_for(@user.banner_pic)
else
    json.banner_pic_url @user.banner_pic_url
end

pending_sent_friend_ids = []
@user.pending_sent_friend_requests.each do |pending_sent_request|
    pending_sent_friend_ids << pending_sent_request.receiver_id
end
json.pendingSentFriendIds pending_sent_friend_ids