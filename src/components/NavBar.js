import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to='/' className='navbar-brand'> Workout Tracker</Link>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/create' className='nav-link'>Create Workout Log</Link>
          </li>
          <li className='nav-item'>
            <Link to='/user' className='nav-link'>Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar