class Like < ApplicationRecord
    validates :user_id, :likeable_type, :likeable_id, presence: true

    belongs_to :user

    belongs_to :likeable, polymorphic: :true
end