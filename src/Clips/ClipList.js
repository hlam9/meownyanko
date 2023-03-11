import ClipItem from "./ClipItem";

function Clips(props){
    return<section>
        {props.clips.map(clip => 
        <><><ClipItem key={clip.id}
                title={clip.title}
                emote={clip.emote}
                youtubeEmbed={clip.youtubeEmbed}
                time={clip.time}
                gameCategory={clip.gameCategory}
                desc={clip.desc} /><br></br></><br></br></>)
        }
        
    </section>
}
export default Clips;