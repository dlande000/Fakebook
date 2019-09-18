# Fakebook

[Fakebook live](https://fakebook-dla.herokuapp.com/#/)

Connect with family, friends, and the world with Fakebook, a Facebook-inspired single-page app built on Ruby on Rails and React/Redux. Fakebook is a social media platform on which one can interact with other users and speak one's mind. A user can post a status to their profile, write posts to their friends, add and remove friends, and like comments. 

![homepage](app/assets/images/homepage.png)

## Feature Highlights

![profile1](app/assets/images/profile1.png)

### The Wall, Feed, Posts, and Comments

![wall](app/assets/images/wall.png)

On Fakebook, the posts on a user's profile (the wall) and the posts seen on the homepage (the feed) are built using the same components; the appropriate posts are filtered based on the logged in user, the user's friends, and the posts the user's friends have received. Additional render information at the specific location for each `PostsAllComponents` component is specified by the `type` prop.

```javascript
// in the profile component, which renders a user's profile
class Wall extends React.Component {
    render() {
        return (
            <div className="wall">
                <PostsAllComponents 
                    type={"Wall"}
                    // additional props passed down with names agnostic to parent component
                />
            </div>
        )
    }
}

// Feed component, which renders the feed one sees upon login.
class Feed extends React.Component {
    // ...
    render() {
        return (
            // ... 
            <PostsAllComponents
                type={"Feed"}
                // additional props passed down with names agnostic to parent component
            />
            // ...
        )
    };
}
```

The wall and the feed are populated with posts; users can like and comment on posts. Additionally, users can like comments. Authors of posts or comments can edit or delete their content; receivers can delete posts and comments they do not want. 

With Amazon Web Services integration, users can also post images. 

### Profiles

![profile2](app/assets/images/profile2.png)

The wall is just one component of the profile. A profile displays a user's profile picture, banner picture, user introduction, and location information. Additionally, the one's profile hosts links to one's Fakebook friends. 

### Friendships

![friends](app/assets/images/friends.png)

Users can send friend requests to other users; once approved, users can see each others' walls, write posts to each other, and like content. Users can also remove friends, at which point users no longer can interact with each other. 

## Technologies Used
+ Ruby on Rails
+ PostgreSQL
+ JavaScript (ES6)
+ React.js
+ Redux
+ HTML
+ CSS
+ Amazon Web Services (AWS)

## Future Implementations
WIP features inlude:
+ Receiving notifications via the navbar
+ Accepting friends via the navbar
+ Listing users who liked posts or comments
+ Allow users to respond to comments
+ Messaging for users