# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.delete_all
Comment.delete_all
Post.delete_all
Friendship.delete_all
User.delete_all

michael = User.new(
    first_name: "Michael",
    last_name: "Bluth",
    password: "tracyb",
    email: "michael@bluthcompany.com",
    birthdate: "1967-12-14",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Done with the family."
)

michael.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'michael.jpg')),
  filename: 'michael.jpg',
  content_type: 'image/jpg'
)

michael.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-1.jpg')),
  filename: 'banner-1.jpg',
  content_type: 'image/jpg'
)

michael.save!

david = User.new(
    first_name: "David",
    last_name: "Anderson",
    password: "theSimpsonsIsTheBestShowEver",
    email: "dlande000@gmail.com",
    birthdate: "1991-08-18",
    gender: "Male",
    hometown: "Madison, Wisconsin",
    current_city: "New York, New York",
    bio: "Thank you for visiting Fakebook!"
)

david.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'david.jpeg')),
  filename: 'david.jpeg',
  content_type: 'image/jpeg'
)

david.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-2.jpg')),
  filename: 'banner-2.jpg',
  content_type: 'image/jpg'
)

david.save!

gm = User.new(
    first_name: "George Michael",
    last_name: "Bluth",
    password: "lescousinsdangereux",
    email: "georgemichael@ucirvine.edu",
    birthdate: "1990-11-02",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Irvine, California",
    bio: "Mr. Manager."
)

gm.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'george-michael.png')),
  filename: 'george-michael.png',
  content_type: 'image/png'
)

gm.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-3.jpeg')),
  filename: 'banner-3.jpg',
  content_type: 'image/jpeg'
)

gm.save!

gob = User.new(
    first_name: "GOB",
    last_name: "Bluth",
    password: "hugemistake",
    email: "georgeoscar@bluthcompany.com",
    birthdate: "1965-05-01",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "BEEDS?!"
)

gob.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'gob.jpg')),
  filename: 'gob.jpg',
  content_type: 'image/jpg'
)

gob.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-5.jpg')),
  filename: 'banner-5.jpg',
  content_type: 'image/jpg'
)

gob.save!

buster = User.new(
    first_name: "Buster",
    last_name: "Bluth",
    password: "mother",
    email: "byron@bluthcompany.com",
    birthdate: "1972-03-27",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Former and Current Mother Boy"
)

buster.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'buster.jpg')),
  filename: 'buster.jpg',
  content_type: 'image/jpg'
)

buster.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-6.jpeg')),
  filename: 'banner-6.jpeg',
  content_type: 'image/jpeg'
)

buster.save!

lindsay = User.new(
    first_name: "Lindsay",
    last_name: "Bluth Funke",
    password: "guccichanel",
    email: "lindsay@bluthcompany.com",
    birthdate: "1967-12-14",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Baja California Peninsula, Mexico",
    bio: "These salon wars have got to stop."
)

lindsay.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'lindsay.jpg')),
  filename: 'lindsay.jpg',
  content_type: 'image/jpg'
)

lindsay.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-7.jpg')),
  filename: 'banner-7.jpg',
  content_type: 'image/jpg'
)

lindsay.save!

franklin = User.new(
    first_name: "Franklin Delano",
    last_name: "Bluth",
    password: "itainteasybeing",
    email: "franklinbluth@yahoo.com",
    birthdate: "1988-04-20",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "My name is Judge"
)

franklin.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'franklin.png')),
  filename: 'franklin.png',
  content_type: 'image/png'
)

franklin.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-8.jpg')),
  filename: 'banner-8.jpg',
  content_type: 'image/jpg'
)

franklin.save!

lucille = User.new(
    first_name: "Lucille",
    last_name: "Bluth",
    password: "buildthewall",
    email: "lucille@bluthcompany.com",
    birthdate: "1938-10-10",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "I don't understand the question, and I won't respond."
)

lucille.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'lucille.png')),
  filename: 'lucille.png',
  content_type: 'image/png'
)

lucille.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-9.jpg')),
  filename: 'banner-9.jpg',
  content_type: 'image/jpg'
)

lucille.save!

maeby = User.new(
    first_name: "Maeby",
    last_name: "Funke",
    password: "marryme",
    email: "maeby@imagine.com",
    birthdate: "1990-09-22",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Marry me!"
)

maeby.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'maeby.jpeg')),
  filename: 'maeby.jpeg',
  content_type: 'image/jpeg'
)

maeby.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-10.jpg')),
  filename: 'banner-10.jpg',
  content_type: 'image/jpg'
)

maeby.save!

tobias = User.new(
    first_name: "Tobias",
    last_name: "Funke",
    password: "blueman",
    email: "tobiasf@yahoo.com",
    birthdate: "1966-08-18",
    gender: "Male",
    hometown: "Janesville, Wisconsin",
    current_city: "Orange County, California",
    bio: "There are dozens of us! Dozens!"
)

tobias.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'tobias.jpg')),
  filename: 'tobias.jpg',
  content_type: 'image/jpg'
)

tobias.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-11.jpg')),
  filename: 'banner-11.jpg',
  content_type: 'image/jpg'
)

tobias.save!

narrator = User.new(
    first_name: "Omniscient",
    last_name: "Narrator",
    password: "ronhoward",
    email: "ron@imagine.com",
    birthdate: "1954-03-01",
    gender: "Male",
    hometown: "Duncan, Oklahoma",
    current_city: "Los Angeles, California",
    bio: "Now the story of a wealthy family who lost everything..."
)

narrator.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'default-profile-picture.jpg')),
  filename: 'default-profile-picture.jpg',
  content_type: 'image/jpg'
)

narrator.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-12.jpeg')),
  filename: 'banner-12.jpeg',
  content_type: 'image/jpg'
)

narrator.save!

ann = User.new(
    first_name: "Ann",
    last_name: "Veal",
    password: "heregg",
    email: "her@imagine.com",
    birthdate: "1992-03-01",
    gender: "Female",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "In the yearbook as 'not pictured'."
)

ann.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'default-profile-picture.jpg')),
  filename: 'default-profile-picture.jpg',
  content_type: 'image/jpg'
)

ann.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-13.jpg')),
  filename: 'banner-13.jpg',
  content_type: 'image/jpg'
)

ann.save!

gene = User.new(
    first_name: "Gene",
    last_name: "Parmesan",
    password: "ahhhhhhhhhhhhhh",
    email: "gene@parmesan.com",
    birthdate: "1954-03-01",
    gender: "Male",
    hometown: "San Francisco, California",
    current_city: "Orange County, California",
    bio: "Private Detective for Hire"
)

gene.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'gene.png')),
  filename: 'gene.png',
  content_type: 'image/png'
)

gene.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-14.jpeg')),
  filename: 'banner-14.jpeg',
  content_type: 'image/jpeg'
)

gene.save!

oam = User.new(
    first_name: "J Walter",
    last_name: "Weatherman",
    password: "alwaysleaveanote",
    email: "jwalter@weatherman.com",
    birthdate: "1954-03-01",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "I help teach lessons."
)

oam.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'one-armed-man.png')),
  filename: 'one-armed-man.png',
  content_type: 'image/png'
)

oam.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-15.jpg')),
  filename: 'banner-15.jpg',
  content_type: 'image/jpg'
)

oam.save!

annyong = User.new(
    first_name: "Annyong",
    last_name: "Bluth",
    password: "helloo",
    email: "anyong@thebluthcompany.com",
    birthdate: "1991-03-01",
    gender: "Male",
    hometown: "Seoul, South Korea",
    current_city: "Orange County, California",
    bio: "안녕"
)

annyong.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'annyong.png')),
  filename: 'annyong.png',
  content_type: 'image/png'
)

annyong.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-16.jpg')),
  filename: 'banner-16.jpg',
  content_type: 'image/jpg'
)

annyong.save!

steveholt = User.new(
    first_name: "Steve",
    last_name: "Holt",
    password: "steveholt",
    email: "steveholt@steveholt.com",
    birthdate: "1991-03-01",
    gender: "Male",
    hometown: "Orange County, California",
    current_city: "Orange County, California",
    bio: "Steve Holt!"
)

steveholt.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'steve-holt.png')),
  filename: 'steve-holt.png',
  content_type: 'image/png'
)

steveholt.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-17.png')),
  filename: 'banner-17.png',
  content_type: 'image/png'
)

steveholt.save!

carlweathers = User.new(
    first_name: "Carl",
    last_name: "Weathers",
    password: "gotastew",
    email: "carlweathers@imagine.com",
    birthdate: "1948-01-14",
    gender: "Male",
    hometown: "New Orleans, Louisiana",
    current_city: "Los Angeles, California",
    bio: "$1,100 is exactly what I charge for acting classes."
)

carlweathers.profile_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'carl-weathers.jpg')),
  filename: 'carl-weathers.jpg',
  content_type: 'image/jpg'
)

carlweathers.banner_pic.attach(
  io: File.open(Rails.root.join('app', 'assets', 'images', 'banner-17.png')),
  filename: 'banner-17.png',
  content_type: 'image/png'
)

carlweathers.save!

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

c4 = Comment.create(
    author_id: lindsay.id,
    post_id: p11.id,
    body: "Chaw chee chaw chee chaw chee chaw!"
)

c5 = Comment.create(
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

c2 = Comment.create(
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

c1 = Comment.create(
    post_id: p13.id,
    author_id: narrator.id,
    body: "GOB had not mailed the letter."
)

image_post4 = Post.new(
    author_id: gm.id,
    receiver_id: gm.id,
    body: "One of those days."
)

image_post4.photo.attach(
    io: File.open(Rails.root.join('app', 'assets', 'images', 'gm-gif.gif')),
    filename: 'gm-gif.gif',
    content_type: 'image/gif'
)

image_post4.save!

image_post3 = Post.new(
    author_id: lucille.id,
    receiver_id: gene.id,
    body: "AHHHHH!!!!"
)

image_post3.photo.attach(
    io: File.open(Rails.root.join('app', 'assets', 'images', 'lucille-gif.gif')),
    filename: 'lucille-gif.gif',
    content_type: 'image/gif'
)

image_post3.save!

p1 = Post.create(
    author_id: david.id,
    receiver_id: david.id,
    body: "Thank you for checking out Fakebook! If you have any questions, please feel free to get in touch."
)

image_post1 = Post.new(
    author_id: gob.id,
    receiver_id: gob.id,
    body: "I've made a huge mistake ..."
)

image_post1.photo.attach(
    io: File.open(Rails.root.join('app', 'assets', 'images', 'gob-gif.gif')),
    filename: 'gob-gif.gif',
    content_type: 'image/gif'
)

image_post1.save!

image_post2 = Post.new(
    author_id: michael.id,
    receiver_id: michael.id,
    body: "Memories!"
)

image_post2.photo.attach(
    io: File.open(Rails.root.join('app', 'assets', 'images', 'michael-gm.jpg')),
    filename: 'michael-gm.jpg',
    content_type: 'image/jpg'
)

image_post2.save!

User.all.each do |user|
    Like.create(
        user_id: user.id,
        likeable_id: p1.id,
        likeable_type: 'Post'
    ) 
end

Like.create(
    user_id: david.id,
    likeable_id: c1.id,
    likeable_type: 'Comment'
)

Like.create(
    user_id: david.id,
    likeable_id: p6.id,
    likeable_type: 'Post'
)

Like.create(
    user_id: narrator.id,
    likeable_id: c2.id,
    likeable_type: 'Comment'
)

Like.create(
    user_id: lindsay.id,
    likeable_id: p11.id,
    likeable_type: 'Post' 
)

Like.create(
    user_id: lucille.id,
    likeable_id: p11.id,
    likeable_type: 'Post' 
)

Like.create(
    user_id: ann.id,
    likeable_id: p8.id,
    likeable_type: 'Post' 
)

Like.create(
    user_id: gob.id,
    likeable_id: c4.id,
    likeable_type: 'Comment'
)

Like.create(
    user_id: lucille.id,
    likeable_id: c4.id,
    likeable_type: 'Comment'
)

Like.create(
    user_id: gob.id,
    likeable_id: c5.id,
    likeable_type: 'Comment'
)

Like.create(
    user_id: lindsay.id,
    likeable_id: c5.id,
    likeable_type: 'Comment'
)