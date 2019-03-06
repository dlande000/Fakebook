@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :body, :id

        json.postId comment.post_id
        json.authorId post.author_id
        json.createdAt post.created_at
        json.updatedAt post.updated_at
    end
end