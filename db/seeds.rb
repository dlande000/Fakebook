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
    bio: "Done with the family.",
    profile_pic_url: "https://uproxx.files.wordpress.com/2015/01/michael-bluth-reactions.jpg?quality=95&w=650&h=396",
    banner_pic_url: "http://i.imgur.com/D5uoQ4h.jpg"
)

User.create(
    first_name: "David",
    last_name: "Anderson",
    password: "theSimpsonsIsTheBestShowEver",
    email: "dlande000@gmail.com",
    birthdate: "1991-08-18",
    gender: "Male",
    hometown: "Madison, Wisconsin",
    current_city: "New York, New York",
    bio: "Thank you for visiting Fakebook! Please feel free to get in touch with me.",
)

User.create(
    first_name: "George Michael",
    last_name: "Bluth",
    password: "lescousinsdangereux",
    email: "georgemichael@ucirvine.edu",
    birthdate: "1990-11-02",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Irvine, California",
    bio: "Mr. Manager.",
    profile_pic_url: "http://2.bp.blogspot.com/-4nYM1gB9DHo/TbIvxACcX3I/AAAAAAAAARI/-x4EHCeNayY/s1600/Picture+3.png",
)

User.create(
    first_name: "GOB",
    last_name: "Bluth",
    password: "hugemistake",
    email: "georgeoscar@bluthcompany.com",
    birthdate: "1965-05-01",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "BEEDS?!",
    profile_pic_url: "https://thesipadvisor.files.wordpress.com/2013/04/gob-bluth.jpg"
)

User.create(
    first_name: "Buster",
    last_name: "Bluth",
    password: "mother",
    email: "byron@bluthcompany.com",
    birthdate: "1972-03-27",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Former and Current Mother Boy",
)

User.create(
    first_name: "Lindsay",
    last_name: "Bluth Funke",
    password: "guccichanel",
    email: "lindsay@bluthcompany.com",
    birthdate: "1967-12-14",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Baja California Peninsula, Mexico",
    bio: "These salon wars have got to stop.",
)

User.create(
    first_name: "Franklin Delano",
    last_name: "Bluth",
    password: "itainteasybeing",
    email: "franklinbluth@yahoo.com",
    birthdate: "1988-04-20",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "My name is Judge",
)

User.create(
    first_name: "Lucille",
    last_name: "Bluth",
    password: "buildthewall",
    email: "lucille@bluthcompany.com",
    birthdate: "1938-10-10",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "I don't understand the question, and I won't respond.",
)

User.create(
    first_name: "Maeby",
    last_name: "Funke",
    password: "marryme",
    email: "maeby@imagine.com",
    birthdate: "1990-09-22",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Marry me!",
)

User.create(
    first_name: "Tobias",
    last_name: "Funke",
    password: "blueman",
    email: "tobiasf@yahoo.com",
    birthdate: "1966-08-18",
    gender: "Male",
    hometown: "Janesville, Wisconsin",
    current_city: "Orange County, California",
    bio: "There are dozens of us!",
)

User.create(
    first_name: "Omniscient",
    last_name: "Narrator",
    password: "ronhoward",
    email: "ron@imagine.com",
    birthdate: "1954-03-01",
    gender: "Male",
    hometown: "Duncan, Oklahoma",
    current_city: "Los Angeles, California",
    bio: "Now the story of a wealthy family who lost everything and the one son who had no choice but to keep them all together.",
)