import Leftbar from "./Leftbar";
import Body from "./Body";
import Rightbar from "./Rightbar";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});

export const Dashboard = () => {
    return (
        <main>
            <Leftbar />
            <Body spotifyApi={ spotifyApi } />
            <Rightbar />
        </main>
    )
}

