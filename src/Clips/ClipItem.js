import YoutubeEmbed from "../components/YoutubeEmbed";

function ClipItem(props){
    return (
    <li>
        <div>
            <br />
            <h1>{props.title}</h1>
            <h3>{props.gameCategory}</h3>
            <YoutubeEmbed embedId={`${props.youtubeEmbed}`} time={props.time} ></YoutubeEmbed>
            <img src={`${props.emote}`} alt="emote" />
            <p>{props.desc ? props.desc: 'This is a default description.'}</p>
        </div>
    </li>
    );
}
export default ClipItem;