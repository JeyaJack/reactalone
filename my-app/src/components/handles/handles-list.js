import React, { useEffect, useState } from "react"

function Handles() {
    const [tweetHandles, setTweetHandles] = useState([]);
    useEffect(() => {

        fetchhandlesdata();

    }, [])
    async function fetchhandlesdata() {
        const res = await fetch("https://jacksnodeserver.azurewebsites.net/api/tweethandles")
        const ans = await res.json();
        setTweetHandles({ tweetHandles: ans });
        console.log(ans);
        console.log(JSON.stringify(ans))




    }
    if (tweetHandles.length === 0) {
        return (
            <div>Loading....</div>
        )
    }
    const tweeList = tweetHandles.tweetHandles.map((aTweet) => (
        <TweetItem key={aTweet.id} handleName={aTweet.handleName} />
    ));
    return (
        <div>
            <h1>Handles</h1>
            {JSON.stringify(tweetHandles)}
            <ul id="twwets">
                {tweeList}



            </ul>


        </div>
    )
}

function TweetItem(props) {
    const { id, handleName } = props;
    return (
        <li key={id}>{handleName}</li>
    )
}

export default Handles;