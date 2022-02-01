import './Container.css';
import './Header.css';
import './Footer.css';

function Header() {
    const menuBarArray = ['Menu', 'Home', 'About', 'Contact'];
    return (
        <div className="Header">
            {menuBarArray.map(el => <button onClick={() => alert(el)} >{el}</button>)}
        </div>
    );
}

function Container() {
   const renderIntems = () => {
        let itemsList = [];
        for (let i = 0; i < 3; i++) {
            itemsList.push(
                <div className="Post">
                    <h1>Hallo World</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/The_death.png/1200px-The_death.png" />
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


function Footer() {
    return (
        <div className="Footer">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                At eveniet doloremque, molestiae doloribus ea alias sequi non laborum nobis deserunt eum voluptates dicta reprehenderit blanditiis possimus? Assumenda iusto laudantium mollitia?</h3>
        </div>
    );
}

export {
    Header,
    Container,
    Footer,
}

