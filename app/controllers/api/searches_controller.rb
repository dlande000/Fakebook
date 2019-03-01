class Api::SearchesController < ApplicationController
    def search
        @users = User.where("lower(first_name) like :input or lower(last_name) like :input",
            input: "%#{params[:input].downcase}%")
        render 'api/users/index'
    end
  end