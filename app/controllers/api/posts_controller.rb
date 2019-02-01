class Api::PostsController < ApplicationController
    def create
        post = Post.new(post_params)
        post.author_id = current_user.id
        if post.save
            ids = [current_user.id] + current_user.friend_ids
            @posts = Post.where(receiver_id: ids)
                .or(Post.where(author_id: ids))
            render 'api/posts/index'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def index
        ids = [current_user.id] + current_user.friend_ids
        @posts = Post.where(receiver_id: ids)
            .or(Post.where(author_id: ids))
        render 'api/posts/index'
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.author_id == current_user.id
            if @post.update(post_params)
                render 'api/posts/show'
              else
                render json: @post.errors.full_messages, status: 422
              end
        else 
            render json: ['Cannot edit post'], status: 401
        end 
    end

    def destroy
        post = Post.find_by(id: params[:id])
        if post.author_id == current_user.id || @post.receiver_id == current_user.id
            post.destroy
            ids = [current_user.id] + current_user.friend_ids
            @posts = Post.where(receiver_id: ids)
                .or(Post.where(author_id: ids))
            render 'api/posts/show'
        else 
            render json: ['Cannot delete post'], status: 401
        end 
    end

    private
    def post_params
        params.require(:post).permit(:body, :receiver_id)
    end
end