function Post(proto) {
    let textObj = proto.obj.Data;
    return (
        <>
            {textObj.map((el,i) => 
                <div className="cardMain" key={i}>
                    <h3>{el.title}</h3>
                    <p>{el.header}</p>
                    <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" alt="" className="PostImg" />
                </div> 
            )}
        </>
    )
}
export default Post;