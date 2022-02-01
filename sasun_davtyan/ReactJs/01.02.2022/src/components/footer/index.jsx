import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [randomColor, setRandomColor] = useState(null);
    return (
        <div
            className="Footer"
            style={randomColor && { backgroundColor: "#" + `${randomColor}` }}
            onDoubleClick={() => {
                setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
            }}
        >
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dicta quia nihil amet. Similique laboriosam ducimus quisquam. Consectetur, ipsa, delectus beatae nemo nobis iusto dolores eos nesciunt dicta excepturi ex.
            Quos, consequuntur fugiat veniam alias optio aut vitae eos ducimus minima ipsum expedita, sequi doloribus corporis aperiam explicabo id esse nemo? Consequuntur repellendus sapiente amet modi temporibus sint omnis voluptate.
            Cum corrupti corporis ipsam nemo beatae eaque soluta accusamus voluptatem saepe? Eius repellendus enim sit qui, sapiente, ducimus, inventore consequatur doloremque porro mollitia laborum nam harum voluptate dolor aliquid animi!
            Alias nulla recusandae sunt excepturi vero id ipsum harum, molestiae possimus, nisi cum reiciendis, enim eaque iusto itaque sint? Alias facilis fugiat numquam voluptas, suscipit saepe omnis qui laborum. Itaque.
            Architecto corporis facere enim, consequuntur iusto, nobis ipsa consectetur assumenda, voluptates quasi tempora pariatur sapiente corrupti numquam accusamus inventore laborum reiciendis autem velit quisquam asperiores reprehenderit laudantium nemo cum. Sequi!
            Blanditiis placeat repellat consectetur debitis labore. Reiciendis, earum? Laborum in vero quasi repellat reiciendis maiores sunt ullam. Quas, expedita iure ab deserunt, minima exercitationem, officiis cupiditate itaque nam deleniti minus.
            Dolores ipsum nulla perferendis dolorem alias ipsam modi at obcaecati, pariatur possimus quaerat voluptatibus, vero corporis nesciunt exercitationem necessitatibus. Voluptatum dolor necessitatibus repellendus totam quod enim tempore obcaecati aspernatur saepe.
            Dolor nesciunt architecto excepturi eveniet illum. Fugiat, ea illum a blanditiis necessitatibus inventore reprehenderit cupiditate ipsa consequuntur! Commodi illo molestiae dolorem quisquam, rem tenetur ea tempore aliquid, ipsa, aspernatur dolore!
            Laudantium, voluptatum. Fugiat velit tempora aut atque quos vel cupiditate a voluptatibus consectetur sequi ea odit, quisquam at non enim saepe ducimus illo sit debitis temporibus recusandae. Fugiat, voluptate molestias?
            Magni at sit expedita esse sed suscipit corporis fugiat, voluptatum rerum placeat a fuga alias quam facilis cum, molestiae impedit nam nobis rem omnis assumenda. Harum dolor fugiat quaerat tempore?
            </h3>
        </div>
    );
}

export { Footer };

