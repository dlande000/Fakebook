class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.hometown = "Earth"
        @user.current_city = "Fakebook, USA"
        @user.bio = "New Fakebook user!"
        @user.profile_pic_url = "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg"
        @user.banner_pic_url = "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058"

        friend_arr = [User.find_by(email: "dlande000@gmail.com"), User.find_by(email: "michael@bluthcompany.com")]

        if @user.save
            friend_arr.each do |friend|
                Friendship.create(
                    receiver_id: @user.id,
                    sender_id: friend.id,
                    status: "Friends"
                )
            end
            login(@user)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
        render 'api/users/index'
    end

    def show
        @user = User.find_by(id: params[:id].to_i)

        if @user
            render 'api/users/show'
        else 
            render 'api/users/show'
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :birthdate, :bio, :gender, :password, :current_city, :hometown, :profile_pic_url, :banner_pic_url)
    end
end