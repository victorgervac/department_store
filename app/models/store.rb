class Store < ApplicationRecord
    has_many :items, dependent: :destroy
end
