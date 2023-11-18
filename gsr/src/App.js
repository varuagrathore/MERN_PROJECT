import React from "react";
import './App.css'
import Topbar from "./topbar/topbar";
import Swami from "./Swami/Swami";
import Quotes from "./quotes/quotes";
import { useEffect } from "react";
import { BrowserRouter as Router, Route ,Switch,useLocation} from 'react-router-dom';
// import ScrollToTop from 'react-router-scroll-top'
import Home from "./homepage/home";
import About from "./Component/about/About";
import Categories from './categories/categories'
import Success from "./success/Success";
import Courage from "./quotecomponenet/courage";
import Adventure from "./quotecomponenet/Adventure";
import Dreams from "./quotecomponenet/dreams";
import Belief from "./quotecomponenet/Belief";
import Inspiration from "./quotecomponenet/Inspiration";
import Motivation from './quotecomponenet/Motivation';
import Persistence from './quotecomponenet/Persistence';
import Opportunity from './quotecomponenet/Opportunity';
import Wisdom from './quotecomponenet/Wisdom';
import Contact  from "./contact/Contact";
import Love from './quotecomponenet/Love'
import Happiness from "./quotecomponenet/Happiness";
import Gratitude from './quotecomponenet/Gratitude';
import Leadership from './quotecomponenet/Leadership';
import Creativity from './quotecomponenet/Creativity.js';
import Change from './quotecomponenet/Change';
import Faith from './quotecomponenet/Faith';
import Humor from './quotecomponenet/Humor';
import Life from './quotecomponenet/Life';
import Friendship from './quotecomponenet/Friendship';
import Family from './quotecomponenet/Family';
import Hope from './quotecomponenet/Hope';
import Time from './quotecomponenet/Time';
import Perseverance from './quotecomponenet/Perseverance';
import OvercomingAdversity from './quotecomponenet/OvercomingAdversity';
import SelfImprovement from './quotecomponenet/SelfImprovement';
import Mindfulness from './quotecomponenet/Mindfulness';
import Kindness from './quotecomponenet/Kindness';
import Grit from './quotecomponenet/Grit';
import Learning from './quotecomponenet/Learning';
import Passion from './quotecomponenet/Passion';
import Reflection from './quotecomponenet/Reflection';
import Equality from './quotecomponenet/Equality';
import Challenge from './quotecomponenet/Challenge';
import Empowerment from './quotecomponenet/Empowerment';
import Humility from './quotecomponenet/Humility';
import Forgiveness from './quotecomponenet/Forgiveness';
import Purpose from './quotecomponenet/Purpose';
import Connectedness from './quotecomponenet/Connectedness';
import Footer from "./footer/Footer";
// import './style.css'
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App(){
  
  return(
    <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Router>
      <ScrollToTopOnRouteChange />
      <Topbar/>
      <div style={{ flex: '1' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path="/Swami" component={Swami} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/Inspiration' component={Inspiration} />
          <Route exact path='/adventure'  component={Adventure}/>
          <Route exact path='/Motivation' component={Motivation}/>
          <Route exact path='/Persistence' component={Persistence} />
          <Route exact path='/Opportunity' component={Opportunity} />
          <Route exact path='/courage' component={Courage} />
          <Route exact path='/Wisdom' component={Wisdom} />
          <Route exact path='/love' component={Love}/>
          <Route exact path='/happiness' component={Happiness}/>
          <Route exact path='/gratitude' component={Gratitude}/>
          <Route exact path='/leadership' component={Leadership}/>
          <Route exact path='/creativity' component={Creativity}/>
          <Route exact path='/change' component={Change}/>
          <Route exact path='/faith' component={Faith}/>
          <Route exact path='/humor' component={Humor}/>
          <Route exact path='/life' component={Life}/>
          <Route exact path='/friendship' component={Friendship}/>
          <Route exact path='/family' component={Family}/>
          <Route exact path='/hope' component={Hope}/>
          <Route exact path='/time' component={Time}/>
          <Route exact path='/perseverance' component={Perseverance}/>
          <Route exact path='/overcoming' component={OvercomingAdversity}/>
          <Route exact path='/self' component={SelfImprovement}/>
          <Route exact path='/mindfulness' component={Mindfulness}/>
          <Route exact path='/kindness' component={Kindness}/>
          <Route exact path='/grit' component={Grit}/>
          <Route exact path='/learning' component={Learning}/>
          <Route exact path='/passion' component={Passion}/>
          <Route exact path='/reflection' component={Reflection}/>
          <Route exact path='/equality' component={Equality}/>
          <Route exact path='/challenge' component={Challenge}/>
          <Route exact path='/empowerment' component={Empowerment}/>
          <Route exact path='/humility' component={Humility}/>
          <Route exact path='/forgiveness' component={Forgiveness}/>
          <Route exact path='/purpose' component={Purpose}/>
          <Route exact path='/connectedness' component={Connectedness}/>
          <Route exact path='/Belief' component={Belief} />
          <Route exact path='/dream' component={Dreams} />
          <Route exact path='/quotes' component={Quotes} />
          <Route exact path='/Success' component={Success} />
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
