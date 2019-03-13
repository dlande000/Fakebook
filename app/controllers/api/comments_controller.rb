class Api::CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)
        comment.author_id = current_user.id
        if comment.save
            @posts = Post.where(id: comment.post_id)
            render 'api/posts/index'
        else
            render json: comment.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.where(id: params[:post_id])
        render 'api/posts/index'
    end

    def update
        comment = Comment.find_by(id: params[:id])
        if comment.update(comment_params)
            @posts = Post.where(id: comment.post_id)
            render 'api/posts/index'
        else 
            render json: ['Cannot edit comment'], status: 401
        end 
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        @posts = Post.where(id: comment.post_id)
        comment.destroy
        render 'api/posts/index'
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end
end