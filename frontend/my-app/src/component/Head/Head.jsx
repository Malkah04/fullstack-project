import React from 'react'
import { Link } from 'react-router-dom'
import './Head.css'
import img1 from '../../images/menu.svg'
import img2 from '../../images/close.svg'

export default function Head() {
  const [show, setShow] = React.useState(false)

  return (
    <div>
         <header className='head'>
         <h1 style={{marginLeft:"20px"}} >logoname</h1>
        
        <nav className='n1' >
            <div>
            <Link className='h1' to='/'>Home</Link>
            <Link className='h1' to='/category'>category</Link>
            <Link className='h1' to='/cart'>Cart</Link>
            <Link className='h1' to='/wishlist'>WishList</Link>
            </div>
            <div>
            <Link className='h1' to='/login'>Login</Link>
            <Link className='h1' to='/signup'>signUp</Link>
            </div>
        </nav>
        <nav className='n2'>
          <img src={(show)?img2:img1 } alt="" onClick={()=>setShow(!show)} className="menu-icon" />
          <div className={`mobile-menu ${show ? 'show' : ''}`}>
        <Link className='h1' to='/' onClick={() => setShow(false)}>Home</Link>
        <Link className='h1' to='/category' onClick={() => setShow(false)}>Category</Link>
        <Link className='h1' to='/cart' onClick={() => setShow(false)}>Cart</Link>
        <Link className='h1' to='/wishlist' onClick={() => setShow(false)}>WishList</Link>
        <Link className='h1' to='/login' onClick={() => setShow(false)}>Login</Link>
        <Link className='h1' to='/signup' onClick={() => setShow(false)}>SignUp</Link>
  
          </div>
        </nav>
        
      </header>
    </div>
  )
}
