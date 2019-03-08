class Like < ApplicationRecord
    validates :user_id, :likeable_item, :likeable_item_id, presence: true

    belongs_to :user
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :likeable_item,
        primary_key: :id,
        foreign_key: :likeable_item_id,
        polymorphic: true
end