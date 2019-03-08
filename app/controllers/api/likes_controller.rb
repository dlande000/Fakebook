class Api::LikesController < ApplicationController
    def create
        like = Like.new(like_params)
        like.author_id = current_user.id
        like.save
    end

    def index
    end

    def destroy
    end

    private
    def like_params
        params.require(:like).permit(:likeable_item, :likeable_item_id)
    end
end