# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.delete_all
Post.delete_all
Friendship.delete_all
User.delete_all

michael = User.create(
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

david = User.create(
    first_name: "David",
    last_name: "Anderson",
    password: "theSimpsonsIsTheBestShowEver",
    email: "dlande000@gmail.com",
    birthdate: "1991-08-18",
    gender: "Male",
    hometown: "Madison, Wisconsin",
    current_city: "New York, New York",
    bio: "Thank you for visiting Fakebook!",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://avatars3.githubusercontent.com/u/44009893?s=460&v=4"
)

gm = User.create(
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

gob = User.create(
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

buster = User.create(
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

lindsay = User.create(
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

franklin = User.create(
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

lucille = User.create(
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

maeby = User.create(
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

tobias = User.create(
    first_name: "Tobias",
    last_name: "Funke",
    password: "blueman",
    email: "tobiasf@yahoo.com",
    birthdate: "1966-08-18",
    gender: "Male",
    hometown: "Janesville, Wisconsin",
    current_city: "Orange County, California",
    bio: "There are dozens of us! Dozens!",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://i.imgur.com/8tGPcQI.jpg"
)

narrator = User.create(
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

ann = User.create(
    first_name: "Ann",
    last_name: "Veal",
    password: "heregg",
    email: "her@imagine.com",
    birthdate: "1992-03-01",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "In the yearbook as 'not pictured'.",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg"
)

gene = User.create(
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

oam = User.create(
    first_name: "J Walter",
    last_name: "Weatherman",
    password: "alwaysleaveanote",
    email: "jwalter@weatherman.com",
    birthdate: "1954-03-01",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "I help teach lessons.",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/6/6c/1x10_Pier_Pressure_%2842%29.png/revision/latest?cb=20120229061749"
)

annyong = User.create(
    first_name: "Annyong",
    last_name: "Bluth",
    password: "helloo",
    email: "anyong@thebluthcompany.com",
    birthdate: "1991-03-01",
    gender: "Male",
    hometown: "Seoul, South Korea",
    current_city: "Orange County, California",
    bio: "안녕",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/8/8a/2x03_Annyong.png/revision/latest?cb=20120105071309"
)

steveholt = User.create(
    first_name: "Steve",
    last_name: "Holt",
    password: "steveholt",
    email: "steveholt@steveholt.com",
    birthdate: "1991-03-01",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Steve Holt!",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://i.kinja-img.com/gawker-media/image/upload/s--J3qVF5cI--/c_scale,f_auto,fl_progressive,q_80,w_800/ehx291eknz5xu24vyqwo.jpg"
)

carlweathers = User.create(
    first_name: "Carl",
    last_name: "Weathers",
    password: "gotastew",
    email: "carlweathers@imagine.com",
    birthdate: "1948-01-14",
    gender: "Male",
    hometown: "New Orleans, Louisiana",
    current_city: "Los Angeles, California",
    bio: "$1,100 is exactly what I charge for acting classes.",
    banner_pic_url: "https://vignette.wikia.nocookie.net/arresteddevelopment/images/3/3c/2013_Home_Beautiful_-_Lucille_Bluth%27s_Penthouse_01.png/revision/latest?cb=20130523033058",
    profile_pic_url: "https://imgc.allpostersimages.com/img/print/posters/carl-weathers-predator_a-G-9786659-13198925.jpg"
)

User.all.each do |user1|
    User.all.each do |user2|
        received_friend_requests_ids = user2.received_friend_requests.map do |friendship|
            friendship.sender_id
        end
        if user1.id != user2.id && !received_friend_requests_ids.include?(user1.id)
            Friendship.create(
                receiver_id: user1.id,
                sender_id: user2.id,
                status: "Friends"
            )
        end
    end
end

Post.create(
    author_id: franklin.id,
    receiver_id: michael.id,
    body: "My man!"
)

Post.create(
    author_id: gob.id,
    receiver_id: michael.id,
    body: "Michael ... "
)

Post.create(
    author_id: oam.id,
    receiver_id: oam.id,
    body: "And that's why you always leave a note!"
)

Post.create(
    author_id: steveholt.id,
    receiver_id: steveholt.id,
    body: "Steve Holt!"
)

Post.create(
    author_id: buster.id,
    receiver_id: buster.id,
    body: "Army had a half day."
)

p7 = Post.create(
    author_id: buster.id,
    receiver_id: lindsay.id,
    body: "So watery. And yet there's a smack of ham to it."
)

Comment.create(
    post_id: p7.id,
    author_id: lindsay.id,
    body: "It's called Hot Ham Water!"
)

p4 = Post.create(
    author_id: tobias.id,
    receiver_id: michael.id,
    body: "Well, Michael, you really are quite the Cupid, aren't you? I tell you, you can sink your arrow into my buttocks any time."
)

p5 = Post.create(
    author_id: lucille.id,
    receiver_id: annyong.id,
    body: "Here's some money. Go see a Star War."
)

p8 = Post.create(
    author_id: gm.id,
    receiver_id: michael.id,
    body: "She sometimes takes a little pack of mayonnaise and she'll squirt it in her mouth all over. She'll then squirt it all over her egg and go 'Mmmmmmm.' She calls it a 'mayon-egg!'"
)

p9 = Post.create(
    author_id: maeby.id,
    receiver_id: michael.id,
    body: "Do you guys know where I could get one of those gold necklaces with the 'T' on it?"
)

p12 = Post.create(
    author_id: carlweathers.id,
    receiver_id: tobias.id,
    body: "Whoa, whoa, whoa. There's still plenty of meat on that bone. Now you take this home, throw it in a pot, add some broth, a potato. Baby, you've got a stew going."
)

Comment.create(
    post_id: p12.id,
    author_id: carlweathers.id,
    body: "Let me tell you a little story about acting. I was doing this Showtime movie, Hot Ice with Anne Archer, never once touched my per diem. I'd go to Craft Service, get some raw veggies, bacon, Cup-A-Soup... baby, I got a stew going."
)

p11 = Post.create(
    author_id: gob.id,
    receiver_id: michael.id,
    body: "CAW CUH CAW CUH CAW CUH CAW!"
)

Comment.create(
    author_id: lindsay.id,
    post_id: p11.id,
    body: "Chaw chee chaw chee chaw chee chaw!"
)

Comment.create(
    author_id: lucille.id,
    post_id: p11.id,
    body: "A coodle doodle doo! A coodle doodle doo!"
)

Comment.create(
    author_id: michael.id,
    post_id: p11.id,
    body: "Has anyone in this family ever even seen a chicken?"
)

Post.create(
    author_id: maeby.id,
    receiver_id: maeby.id,
    body: "Well, that was a freebie."
)

p10 = Post.create(
    author_id: buster.id,
    receiver_id: lucille.id,
    body: "These are my awards, Mother. From Army."
)

Comment.create(
    author_id: buster.id,
    post_id: p10.id,
    body: "The seal is for marksmanship."
)

Comment.create(
    author_id: buster.id,
    post_id: p10.id,
    body: "The gorilla is for sand racing."
)

Comment.create(
    post_id: p9.id,
    author_id: michael.id,
    body: "It's a cross."
)

Comment.create(
    post_id: p9.id,
    author_id: maeby.id,
    body: "Across from where?"
)

Comment.create(
    post_id: p8.id,
    author_id: gm.id,
    body: 'Are you okay?'
)

Comment.create(
    post_id: p8.id,
    author_id: michael.id,
    body: "I don't feel so good."
)

p6 = Post.create(
    author_id: annyong.id,
    receiver_id: annyong.id,
    body: "Annyong."
)

Comment.create(
    post_id: p6.id,
    author_id: lucille.id,
    body: "That's not getting old."
)

Comment.create(
    post_id: p6.id,
    author_id: gob.id,
    body: "WOULD SOMEONE PLEASE TELL THIS INSUFFERABLE CHILD—"
)

Comment.create(
    post_id: p5.id,
    author_id: annyong.id,
    body: "Annyong."
)

Comment.create(
    post_id: p4.id,
    author_id: michael.id,
    body: "Okay, you know what you do? You buy yourself a tape recorder, you just record yourself for a whole day. I think you're going to be surprised at some of your phrasing."
)

p2 = Post.create(
    author_id: michael.id,
    receiver_id: gm.id,
    body: "Hey pal, are you alone?"
)

Comment.create(
    post_id: p2.id,
    author_id: gm.id,
    body: "Almost always, yeah."
)

p3 = Post.create(
    author_id: lindsay.id,
    receiver_id: michael.id,
    body: "Beeds!"
)

Comment.create(
    post_id: p3.id,
    author_id: gob.id,
    body: "Bees?"
)

Comment.create(
    post_id: p3.id,
    author_id: lindsay.id,
    body: "Beeds."
)

Comment.create(
    post_id: p3.id,
    author_id: gob.id,
    body: "BEEDS?!"
)

Comment.create(
    post_id: p3.id,
    author_id: michael.id,
    body: "GOB's not on board."
)

p13 = Post.create(
    author_id: lucille.id,
    receiver_id: michael.id,
    body: "GOB's not happy."
)

Comment.create(
    post_id: p13.id,
    author_id: michael.id,
    body: "Again? I tried to include him, I gave him a job."
)

Comment.create(
    post_id: p13.id,
    author_id: lucille.id,
    body: "You gave him a letter to mail."
)

Comment.create(
    post_id: p13.id,
    author_id: michael.id,
    body: "And don’t tell me that was too much for him."
)

Comment.create(
    post_id: p13.id,
    author_id: lucille.id,
    body: "No, Michael, he mailed the letter. That’s not the point."
)

Comment.create(
    post_id: p13.id,
    author_id: narrator.id,
    body: "GOB had not mailed the letter."
)

p1 = Post.create(
    author_id: david.id,
    receiver_id: david.id,
    body: "Thank you for checking out Fakebook! If you have any questions, please feel free to get in touch."
)