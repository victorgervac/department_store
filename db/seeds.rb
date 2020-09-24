# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

# Thing.destroy_all
# 5.times do |i|
#   Thing.create(name: Faker::Name.name)
# end

5.times do
  s = Store.create(name: Faker::Commerce.department)
20.times do 
s.items.create(
  name: Faker::Commerce.product_name,
  description: Faker::TvShows::FamilyGuy.quote,
  price: Faker::Commerce.price.to_f,)
 end 
end