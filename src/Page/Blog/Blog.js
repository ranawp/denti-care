import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2>Difference between authorise and authentication,  </h2>
            <h4>Authentication </h4>
            <ul>
                <li>Authentication identifies users. </li>
                <li>It works through password, user information.
                </li>
                <li>Authentication is the first step and it is a good management process. </li>
                <li>Authentication is visible and changeable by the user. </li>
            </ul>

            <h4>Authorization </h4>
            <ul>
                <li>Aurions means which resource can be used.
                </li>
                <li>Authorization works maintaining by the organisation</li>
                <li>Authorization visible after authentication.
                </li>
                <li>User can not change this authorization
                </li>
            </ul>

            <br />
            <h3>Why are we using firebase authentication? What  other options do you have to implement authentication?
            </h3>
            <p>Firebase Authentication provides backend services and provides ready made libraries. It supports using password, phone numbers, Google,Facebook and twitter and more.It provides authentication UI.
            </p> <br />
            <p>There are lots of authentication systems without using firebase. Such as, Stytch, ory , Supabase, Okta , Ping Identity,KeycLoak, Frontegg, AUthress, AuthO , Amazon Cognito ,OneLogin
            </p>

            <h2>What other service does firebase provide other than authentication ?
            </h2>
            <p>Firebase provides Authentication UI. It has a ready made Library so that users can implement this service easily. </p>
            <p>There are many service firebase provide: </p>
            <p>Realtime database : Build serverless apps by storing JSON data between and syncing. Users can get real time experience.
                Cloud Function : You can  run logic server side without needing to set up your own server.
                Authentication : Add an Identity solution to your app for using authentication, just write a few lines of codes.
                Hosting : Deploy fast loading,secure websites by a global CDN without any hassle.

                CLoud Storage: Store and server user generated content with ease as your app grows from prototype to production ready.

                Cloud Messaging  :It is reliable to send and receive push messages between your server and devices free of cost.
            </p>


        </div>
    );
};

export default Blog;