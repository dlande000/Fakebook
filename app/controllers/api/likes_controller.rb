class Api::LikesController < ApplicationController
    def create
        like = Like.new(like_params)
        like.user_id = current_user.id
        like.save
        if like.likeable_type == "Post"
            @posts = Post.where(id: like.likeable_id)
        else 
            @posts = Post.where(id: (Comment.where(id: like.likeable_id)[0].post_id))
        end
        render 'api/posts/index'
    end

    def index
    end

    def destroy
        like = Like.find_by(id: params[:id])
        like.destroy
        if like.likeable_type == "Post"
            @posts = Post.where(id: like.likeable_id)
        else 
            @posts = Post.where(id: (Comment.where(id: like.likeable_id)[0].post_id))
        end
        render 'api/posts/index'
    end

    private
    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id)
    end
end