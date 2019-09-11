@users.each do |user|
    json.set! user.id do
        json.extract! user, :first_name, :last_name, :id, :profile_pic_url
        json.friendIds user.friend_ids

        pending_friend_ids = []
        user.pending_friend_requests.each do |pending_friend_request|
            pending_friend_ids << pending_friend_request.sender_id
        end
        json.pendingFriendIds pending_friend_ids

        pending_sent_friend_ids = []
        user.pending_sent_friend_requests.each do |pending_sent_request|
            pending_sent_friend_ids << pending_sent_request.receiver_id
        end
        json.pendingSentFriendIds pending_sent_friend_ids
    end
end