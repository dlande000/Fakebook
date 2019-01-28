class Friendship < ApplicationRecord
    validates :receiver_id, :sender_id, :status, presence: true

    belongs_to :receiver,
        primary_key: :id,
        foreign_key: :receiver_id,
        class_name: :User

    belongs_to :sender,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :User
end