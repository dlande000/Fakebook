# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.delete_all
Friendship.delete_all
User.delete_all

u1 = User.create(
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
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058"
)

u2 = User.create(
    first_name: "David",
    last_name: "Anderson",
    password: "theSimpsonsIsTheBestShowEver",
    email: "dlande000@gmail.com",
    birthdate: "1991-08-18",
    gender: "Male",
    hometown: "Madison, Wisconsin",
    current_city: "New York, New York",
    bio: "Thank you for visiting Fakebook!",
    banner_pic_url: "https://avatars3.githubusercontent.com/u/44009893?s=460&v=4",
    profile_pic_url: "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg"
)

u3 = User.create(
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
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058"
)

u4 = User.create(
    first_name: "GOB",
    last_name: "Bluth",
    password: "hugemistake",
    email: "georgeoscar@bluthcompany.com",
    birthdate: "1965-05-01",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "BEEDS?!",
    profile_pic_url: "https://thesipadvisor.files.wordpress.com/2013/04/gob-bluth.jpg",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058"
)

u5 = User.create(
    first_name: "Buster",
    last_name: "Bluth",
    password: "mother",
    email: "byron@bluthcompany.com",
    birthdate: "1972-03-27",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Former and Current Mother Boy",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://flavorwire.files.wordpress.com/2013/05/tumblr_m06al3iedj1rprfgbo1_500.png?w=500"
)

u6 = User.create(
    first_name: "Lindsay",
    last_name: "Bluth Funke",
    password: "guccichanel",
    email: "lindsay@bluthcompany.com",
    birthdate: "1967-12-14",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Baja California Peninsula, Mexico",
    bio: "These salon wars have got to stop.",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://amp.businessinsider.com/images/517955e9eab8eae75a000008-750-563.jpg"
)

u12 = User.create(
    first_name: "Franklin Delano",
    last_name: "Bluth",
    password: "itainteasybeing",
    email: "franklinbluth@yahoo.com",
    birthdate: "1988-04-20",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "My name is Judge",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://www.empireonline.com/images/uploaded/arres-main.jpg"
)

u7 = User.create(
    first_name: "Lucille",
    last_name: "Bluth",
    password: "buildthewall",
    email: "lucille@bluthcompany.com",
    birthdate: "1938-10-10",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "I don't understand the question, and I won't respond.",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "http://flavorwire.files.wordpress.com/2013/05/lucille4.jpg"
)

u8 = User.create(
    first_name: "Maeby",
    last_name: "Funke",
    password: "marryme",
    email: "maeby@imagine.com",
    birthdate: "1990-09-22",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Marry me!",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://pbs.twimg.com/profile_images/735520063168483329/Xmhcyenf.jpg"
)

u9 = User.create(
    first_name: "Tobias",
    last_name: "Funke",
    password: "blueman",
    email: "tobiasf@yahoo.com",
    birthdate: "1966-08-18",
    gender: "Male",
    hometown: "Janesville, Wisconsin",
    current_city: "Orange County, California",
    bio: "There are dozens of us!",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://i.imgur.com/8tGPcQI.jpg"
)

u10 = User.create(
    first_name: "Omniscient",
    last_name: "Narrator",
    password: "ronhoward",
    email: "ron@imagine.com",
    birthdate: "1954-03-01",
    gender: "Male",
    hometown: "Duncan, Oklahoma",
    current_city: "Los Angeles, California",
    bio: "Now the story of a wealthy family who lost everything...",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg"
)

u11 = User.create(
    first_name: "Gene",
    last_name: "Parmesan",
    password: "ahhhhhhhhhhhhhh",
    email: "gene@parmesan.com",
    birthdate: "1954-03-01",
    gender: "Male",
    hometown: "San Francisco, California",
    current_city: "Orange County, California",
    bio: "Private Detective for Hire",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://i2.wp.com/www.geekbinge.com/wp-content/uploads/2012/09/GeneParmesan_HOWYADOIN.png"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u2.id,
   status: "Friends"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u3.id,
   status: "Pending"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u4.id,
   status: "Pending"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u5.id,
   status: "Friends"
)
Friendship.create(
    receiver_id: u1.id,
    sender_id: u6.id,
   status: "Friends"
)
Friendship.create(
    receiver_id: u1.id,
    sender_id: u7.id,
   status: "Friends"
)
Friendship.create(
    receiver_id: u1.id,
    sender_id: u8.id,
   status: "Friends"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u9.id,
   status: "Friends"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u10.id,
   status: "Friends"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u11.id,
   status: "Friends"
)

Friendship.create(
    receiver_id: u3.id,
    sender_id: u4.id,
   status: "Pending"
)

Friendship.create(
    receiver_id: u5.id,
    sender_id: u6.id,
   status: "Friends"
)

Friendship.create(
    receiver_id: u1.id,
    sender_id: u12.id,
   status: "Friends"
)

Post.create(
    author_id: u12.id,
    receiver_id: u1.id,
    body: "My man!"
)

Post.create(
    author_id: u3.id,
    receiver_id: u1.id,
    body: "Michael!"
)

Post.create(
    author_id: u1.id,
    receiver_id: u12.id,
    body: "Test post!"
)

Post.create(
    author_id: u1.id,
    receiver_id: u2.id,
    body: "Test post 2!"
)

Post.create(
    author_id: u3.id,
    receiver_id: u2.id,
    body: "Test post 3!"
)

Post.create(
    author_id: u1.id,
    receiver_id: u1.id,
    body: "This would be a status!"
)

Post.create(
    author_id: u2.id,
    receiver_id: u2.id,
    body: "Thank you for checking out Fakebook! If you have any questions, please feel free to get in touch."
)