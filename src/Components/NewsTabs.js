import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsTabs extends Component {
    render() {
        return (
            <>
                <ul class="nav justify-content-center">
                    <li className='nav-item'>
                        <Link class="nav-link " aria-current="page" to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link class="nav-link " aria-current="page" to="/business">Business</Link>
                    </li>
                    <li className='nav-item'>
                        <Link class="nav-link " aria-current="page" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className='nav-item'>
                        <Link class="nav-link " aria-current="page" to="/health">Health</Link>
                    </li>
                    <li className='nav-item'>
                        <Link class="nav-link " aria-current="page" to="/science">Science</Link>
                    </li>
                    <li className='nav-item'>
                        <Link class="nav-link " aria-current="page" to="/sports">Sports</Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link class="nav-link " aria-current="page" to="/technology">Technology</Link>
                    </li>
                </ul>
            </>
        )
    }
}
export default NewsTabs;