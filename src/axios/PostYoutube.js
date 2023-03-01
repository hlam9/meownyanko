import axios from 'axios';

function PostYoutube(props){
    axios.post('https://meow-46766-default-rtdb.firebaseio.com/meow.json', {
      youtubeEmbed: props.embed,
      title: props.title
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    return (<div></div>);
  }
export default PostYoutube;