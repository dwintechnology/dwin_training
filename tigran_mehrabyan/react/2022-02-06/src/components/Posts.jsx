import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


function Posts(){
    const data = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
  let array = data.map((el, i) => {
    return(
      <div style ={{width : "300px", height : "auto", backgroundColor : "brown" , marginTop:"30px"}} key = {i}>
        <h2>Kanye West twit</h2>
        <Link to = {`/posts/${i}/title`}>{el}</Link>
      </div>
    )
  })
  return (
    <div className="App">
          <div style={{display:"grid", gridTemplateColumns: "400px 400px 400px", marginLeft:"50px"}}>{array}</div>
     
    </div>
  );
}

export default Posts