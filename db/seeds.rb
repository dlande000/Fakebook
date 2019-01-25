# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create(
    first_name: "Michael",
    last_name: "Bluth",
    password: "tracyb",
    email: "michael@bluthcompany.com",
    birthdate: "1967-12-14",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
)