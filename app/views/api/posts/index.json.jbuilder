@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :id
        json.comments post.comments

        json.receiverId post.receiver_id
        json.authorId post.author_id
        json.createdAt post.created_at
        json.updatedAt post.updated_at

        author = User.find_by(id: post.author_id)
        receiver = User.find_by(id: post.receiver_id)

        json.receiverFirstName receiver.first_name
        json.receiverLastName receiver.last_name
        json.receiverProfilePic receiver.profile_pic_url

        json.authorFirstName author.first_name
        json.authorLastName author.last_name
        json.authorProfilePic author.profile_pic_url
    end
end