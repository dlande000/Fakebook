class Api::CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)
        comment.author_id = current_user.id
        if comment.save
            @comments = Comment.where(post_id: params[:post_id])
            render 'api/comments/index'
        else
            render json: comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.where(post_id: params[:post_id])
        render 'api/posts/index'
    end

    # def update
    #     @comment = Comment.find_by(id: params[:id])
    #     if @post.author_id == current_user.id
    #         if @post.update(post_params)
    #             render 'api/posts/show'
    #           else
    #             render json: @post.errors.full_messages, status: 422
    #           end
    #     else 
    #         render json: ['Cannot edit post'], status: 401
    #     end 
    # end

    # def destroy
    #     post = Post.find_by(id: params[:id])
    #     if post.author_id == current_user.id || @post.receiver_id == current_user.id
    #         post.destroy
    #         ids = [current_user.id] + current_user.friend_ids
    #         @posts = Post.where(receiver_id: ids)
    #             .or(Post.where(author_id: ids))
    #         render 'api/posts/show'
    #     else 
    #         render json: ['Cannot delete post'], status: 401
    #     end 
    # end

    private
    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end
end