@users.each do |user|
    json.set! user.id do
        json.extract! user, :first_name, :last_name, :id, :profile_pic_url
    end
end