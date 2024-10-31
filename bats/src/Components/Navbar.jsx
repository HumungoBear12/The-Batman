import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    // const menuButtonDOM = document.querySelector('.menu-button');
    // const linksDivDOM = document.querySelector('.links');
    // const barsDOM = document.querySelector('.fa-bars')

    // menuButtonDOM.addEventListener('click', () => {
    //     linksDivDOM.classList.toggle("closed");
    //     barsDOM.classList.toggle("open");
    // })
    return (
        <div>
             <nav className="navbar">
                <ul>
                    <div className="align-left">
                        <li className="nav-logo"><img src="" alt="The Batman"/>
                        </li>
                        <li className="nav-item title"><a href="">Batman</a></li>
                        <li className="menu-button"><button><i className="fas fa-bars"></i></button></li>
                    </div>
                    <div className="align-right links closed">
                        <li className="nav-item"><a className="link active"><Link>Home</Link></a></li>
                        <li className="nav-item"><a className="link"><Link>Movies</Link></a></li>
                        <li className="nav-item"><a className="link"><Link>Games</Link></a></li>
                        <li className="nav-item"><a className="link"><Link>BatFamily</Link></a></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
