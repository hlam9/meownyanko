import YoutubeEmbed from "../components/YoutubeEmbed";

function ClipItem(props){
    return (
    <li>
        <div>
            <h1>{props.title}</h1>
            <YoutubeEmbed embedId={`${props.youtubeEmbed}`} ></YoutubeEmbed>
            <p>{props.desc ? props.desc: 'This is a default description.'}</p>
        </div>
    </li>
    );
}
export default ClipItem;