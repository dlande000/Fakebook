class Api::LikesController < ApplicationController
    def create
        like = Like.new(like_params)
        like.user_id = current_user.id
        like.save
    end

    def index
    end

    def destroy
    end

    private
    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id)
    end
end