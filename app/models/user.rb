class User < ApplicationRecord
    validates :email, :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :sent_friend_requests,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :Friendship

    has_many :received_friend_requests,
        primary_key: :id,
        foreign_key: :receiver_id,
        class_name: :Friendship

    def pending_friend_requests
        self.received_friend_requests.where(status: 'Pending')
    end

    def pending_sent_friend_requests
        self.sent_friend_requests.where(status: 'Pending')
    end 

    def friend_ids
        accepted_ids = self.sent_friend_requests.where(sender_id: self.id, status: 'Friends').pluck(:receiver_id)
        approved_ids = self.received_friend_requests.where(receiver_id: self.id, status: 'Friends').pluck(:sender_id)
        friend_ids = accepted_ids.concat(approved_ids)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end