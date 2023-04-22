import Leftbar from "./Leftbar";
import Body from "./Body";
import Rightbar from "./Rightbar";
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilState } from "recoil";
import { playingTrackState } from "@/atoms/playerAtom";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});


export const Dashboard = () => {
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
    const chooseTrack = (track) => {
        setPlayingTrack(track);
    }
    return (
        <main>
            <Leftbar />
            <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
            <Rightbar />
        </main>
    )
}

