import React from 'react'

const Todos = () => {
  return (
    <ul className='todos'>
        <li className='todos__item'>
            <span className='todos__text'>GYM</span>
            <div className='todos__buttons'>
                <a href="#">❌</a>
                <a href="#">✅</a>
            </div>
        </li>
        <li className='todos__item'>
            <span className='todos__text'>GYM</span>
            <div className='todos__buttons'>
                <a href="#">❌</a>
                <a href="#">✅</a>
            </div>
        </li>
        <li className='todos__item'>
            <span className='todos__text'>GYM</span>
            <div className='todos__buttons'>
                <a href="#">❌</a>
                <a href="#">✅</a>
            </div>
        </li>
        <li className='todos__item'>
            <span className='todos__text'>GYM</span>
            <div className='todos__buttons'>
                <a href="#">❌</a>
                <a href="#">✅</a>
            </div>
        </li>
    </ul>
  )
}

export default Todos