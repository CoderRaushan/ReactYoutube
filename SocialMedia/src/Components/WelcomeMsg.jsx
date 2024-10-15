import React, {useContext} from 'react'


function WelcomeMsg({onclickhandle}) 
{
  return (
    <div className='welcomemsg'>
        <h1>No posts are there</h1>
        <button onClick={onclickhandle} className='btn btn-warning'>Fetch posts form server</button>
    </div>
  )
}

export default WelcomeMsg