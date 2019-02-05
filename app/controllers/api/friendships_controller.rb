class Api::FriendshipsController < ApplicationController
    def create
        @friendship = current_user.sent_friend_requests.new(receiver_id: params[:receiver_id])
        @friendship.update(status: 'Pending')
        if @friendship.save
            @user = User.find_by(id: @friendship.receiver_id)
            render 'api/users/show'
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    def update
        @friendship = current_user.received_friend_requests.find_by(sender_id: params[:id])
        if @friendship
          @friendship.update(status: 'Friends')
          @user = User.find_by(id: @friendship.receiver_id)
          render 'api/users/show'
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        friendship = current_user.received_friend_requests.find_by(sender_id: params[:id]) || current_user.sent_friend_requests.find_by(receiver_id: params[:id])
        if friendship.destroy!
            @user = User.find_by(id: friendship.receiver_id)
            render 'api/users/show'
        end
    end
end