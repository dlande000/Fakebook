class Post < ApplicationRecord
    validates :receiver_id, :author_id, :body, presence: true

    belongs_to :receiver,
        primary_key: :id,
        foreign_key: :receiver_id,
        class_name: :User

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :likeable_item_id,
        class_name: :Like,
        as: :likeable_item
end