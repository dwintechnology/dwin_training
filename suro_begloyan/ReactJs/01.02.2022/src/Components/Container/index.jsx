
  
import './Container.css';

function Container() {
    const renderIntems = () => {
        let itemsList = [];
        for (let i = 0; i < 4; i++) {
            itemsList.push(
                <div className="Post" key={i}>
                    <h1>Hallo World</h1>
                    <img src="https://www.deccanherald.com/sites/dh/files/articleimages/2020/11/06/download-16-911906-1604629498.png"
                        // onMouseEnter={() => console.log('onMouseEnter')}
                        // onMouseLeave={() => console.log('onMouseLeave')}
                    />
                </div>
            )
        }
        return itemsList;
    }

    return (
        <div className="Container">
            {renderIntems()}
        </div>
    );
}

export { Container };