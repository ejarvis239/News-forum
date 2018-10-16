import React from "react";
import "../Article.css";

const Article1 = () => {
    return (
            <div id="ArticleContainer">
                <p id="articleTitle">Making sense of Redux</p>               
                <p id="topicItems">
                Topic: Coding
                <br/>
                <br/>
                <img id="articleImage" src="https://i.pinimg.com/564x/be/dd/ef/beddef99d59666201ae293bcc362ec97.jpg" alt="Cooking" width="100" height="100" />
                </p>
                <p id="articleBody" >When I first started learning React, I remember reading lots of articles about the different technologies associated with it. In particular, this one article stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React. And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works! But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).</p>
                
                <p id="articleVotes">
                Votes: 0
                </p>
                <p id="createdBy">
                <img id="userImage" src="https://miro.medium.com/fit/c/240/240/0*nGIlOdrq0yUfDUJf.png" alt="jessjelly" width="100" height="100" />
                <br/>
                Author: jessjelly
                <br/>Created: 2017-12-24T05:38:51.240Z
                </p>

                <div id="postCommentContainer">
                <p id="postComment">
                <br/>
                Post a comment....
                <br/>
                <br/>
                </p>
                </div>
             
                <p id="Responses"><strong>Responses</strong></p>

                <div id="commentContainer">
                <p id="commentCount">
                Comments: 9
                </p>
                <div id="singleCommentContainer">

                <p id="commentItems">
                <strong>username: grumpy19</strong>
                <br/>created: 2016-11-10T21:26:49.256Z
                </p>
                <p id="commentBody">
                Great article. I rly got your point and will use that info wisely ;)
                Unfortunately I cant see your code snippets. Is that issue on my site or on yours? I am using latest Google chrome. I also tried to access the iframe url directly but I get only blank page.
                </p>
                </div>
                <p id="commentVotes">
                Votes: 7
                </p>
                <div id="singleCommentContainer">

                <p id="commentItems">
                <strong>username: grumpy19</strong>
                <br/>created: 2016-11-10T21:26:49.256Z
                </p>
                <p id="commentBody">
                Love the feedback and suggestions! To address your points, here are some of my thoughts: <br/>
                
                <br/>I completely agree with you that I’d rather future proof my codebase and use technologies that might help make my application scale better. But to be honest, I find that just using a technology without knowing how it actually helps your codebase is not the best approach. In this particular case, our team wanted to introduce React into an Angular 1.x application and we wanted to minimize as many new technologies at once. I had read about Redux but honestly didn’t really see it fit into the picture yet so I had suggested to my team that we leave it out until it made more sense. I think this was the right decision because it led us to seeing some of the pain points of just using React and including all of our business logic inside our view layer. From those pain points, we were able to then see the value of an architecture like Flux (Redux in this case). <br/>
                <br/>I used to think that introducing Redux into a full blown React application would be tough, but to be honest, in my experience it’s actually been pretty seamless. The reason its been pretty pleasant for me is because I don’t immediately try to move everything out of the component state and into the redux application state. Instead, I first introduced redux via a new feature that we were working on. For this particular component, instead of declaring the state in the component itself, I just moved it to the redux state. At this point, the redux state is super minimal — but that’s totally fine. Slowly, I started moving the rest of my other component’s state into the redux state. <br/>
                <br/>I think the other tricky part about using Redux and React is that you actually want to use another library that “glues” these two libraries together, and namely that’s React-Redux (https://github.com/reactjs/react-redux). Luckily the API is super small and it’s pretty easy to use — I actually have plans to write another post which dives into this a little bit more so stay tuned! I think this will actually help address the suggestions you made about Smart and Dumb components as well as how to wire up Redux and React to work together. <br/>
                Hopefully the post was still helpful for you and really appreciate the great suggestions!
                </p>
                </div>
                <p id="commentVotes">
                Votes: 7
                </p>
                <div id="singleCommentContainer">

                <p id="commentItems">
                <strong>username: grumpy19</strong>
                <br/>created: 2016-11-10T21:26:49.256Z
                </p>
                <p id="commentBody">
                Nice way to describe this. I find that most people using Redux or Flux say what you said.. only use it if you need it. or your application starts to grow and become unmanageable. The problem I have with that is, I find it much harder to try to bring Redux in to an existing app, retrofitting things and changing things for Redux to work, than to just start off with it in the first place, and add things to it as I go. I understand the reason for such a statement.. redux/flux can add some extra complexity, especially for someone new to React, that may be overkill. However, I tend to like to future proof my work, so “just in case”, I can expand without much pain knowing that its there for me to use.<br/><br/>
                There are some things with Redux that are a little confusing. Namely the concept of smart/dumb components, and how you use the undocumented (or now documented but advised not to use in most cases) Context to wire up the smart/parent component that will do the Redux work (dispatching events, updating props, etc). If you could work that in to your basketball analogy, that would be a welcome addition.
                </p>
                </div>
                <p id="commentVotes">
                Votes: 7
                </p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

              

              
            </div>
    )}

  export default Article1;