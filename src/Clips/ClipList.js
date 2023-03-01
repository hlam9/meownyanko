import ClipItem from "./ClipItem";

function Clips(props){
    return<section>
        {props.clips.map(clip => 
        <ClipItem key={clip.id} 
        title={clip.title} 
        youtubeEmbed={clip.youtubeEmbed} 
        desc={clip.desc}/>)}
    </section>
}
export default Clips;