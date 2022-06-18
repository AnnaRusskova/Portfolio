import './NotFound.css';
import { Link } from 'react-router-dom';

export function NotFound () {
    return (
        <div className='notFound'>
            <img className='notFound-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4wMuLUjH4mmiAsTxEEUISPhPtoN_UZ-8Hg&usqp=CAU" alt='404'></img>
            <h1 className='notFound-header'>The page is not found! </h1>
            <p className='notFound-text'>Please return to <Link to='/' className='notFound-link'>Home Page</Link> </p>
        </div>
    )
}