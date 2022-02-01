import './Container.css';

function Container() {
    const renderIntems = () => {
        let itemsList = [];
        for (let i = 0; i < 4; i++) {
            itemsList.push(
                <div className="Post" key={i}>
                    <h1>Hallo World</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/The_death.png/1200px-The_death.png"
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

