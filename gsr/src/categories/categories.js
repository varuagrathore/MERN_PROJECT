import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
// import Success from '../success/Success';
// import { Route } from 'react-router-dom'
// import Quotetop from '../topbarforquote/quotetop'
// import './categoriesstyle.css'


export default function Categories() {
  
  return (
   
    <div className='Categories'>
      <p>
    <ul>
        <Link to='/Inspiration' className='catList'> Inspiration</Link>
        <Link to='/Motivation' className='catlist'>Motivation</Link>
        <Link to='/Persistence' className='catlist'>Persistence</Link>
        <Link to='/Opportunity' className='catlist'>Opportunity</Link>
        <Link to='/courage' className='catlist'>Courage</Link>
        <Link to='/Wisdom' className='catlist'>Wisdom</Link>
        <Link to ='/love' className='catlist'>Love</Link>
        <Link to='/happiness' className='catlist'>Happiness</Link>
        <Link to='/gratitude' className='catlist'>Gratitude</Link>
        <Link to='/leadership' className='catlist'>Leadership</Link>
        <Link to='/creativity' className='catlist'>Creativity</Link>
        <Link to='/change' className='catlist'>Change</Link>
        <Link to='/faith' className='catlist'>Faith</Link>
        <Link to='/humor' className='catlist'>Humor</Link>
        <Link to='/life' className='catlist'>Life</Link>
        <Link to='/friendship' className='catlist'>Friendship </Link>
        <Link to='/family' className='catlist'>Family </Link>
        <Link to='/dream' className='catlist'>Dreams </Link>
        <Link to='/hope' className='catlist'>Hope </Link>
        <Link to='/time' className='catlist'>Time </Link>
        <Link to='/perseverance' className='catlist'>Perseverance </Link>
        <Link to='/overcoming' className='catlist'>Overcoming Adversity </Link>
        <Link to='/self' className='catlist'>Self-improvement </Link>
        <Link to='/mindfulness' className='catlist'>Mindfulness </Link>
        <Link to='/kindness' className='catlist'>Kindness </Link>
        <Link to='/grit' className='catlist'>Grit </Link>
        <Link to='/learning' className='catlist'>Learning </Link>
        <Link to='/passion' className='catlist'>Passion </Link>
        <Link to='/reflection' className='catlist'>Reflection </Link>
        <Link to='/equality' className='catlist'>Equality </Link>
        <Link to='/challenge' className='catlist'>Challenge </Link>
        <Link to='/empowerment' className='catlist'>Empowerment </Link>
        <Link  to='/Belief' className='catlist'>Belief </Link>
        <Link to='/humility' className='catlist'>Humility </Link>
        <Link to='Success' className='catlist'>Success </Link>
        <Link to='/purpose' className='catlist'>Purpose </Link>
        <Link to='/forgiveness' className='catlist' >Forgiveness </Link>
        <Link to='/Adventure' className='catlist' >Adventure</Link>
        <Link to='/connectedness' className='catlist' >connectedness </Link>
   
    </ul>
  

      </p>
      {/* <Router>
     <Switch>
      <Route exact path='/Success' component={Success}/>
     </Switch>
     </Router> */}
      
    </div>
    
  )
}
