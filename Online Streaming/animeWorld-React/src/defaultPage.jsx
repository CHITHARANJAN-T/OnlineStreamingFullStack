import './defaultPage.css';
// import logo2 from './logo.png'
import logo from './logo-name.png'
// import search from './icons8-search.svg'
import { Link } from 'react-router-dom';
import linkArrow from './arrow_circle_right_white_24dp.svg'



export default function DefaultPage({ loginPage, setLoginPage, signUpPage, setsignUpPage, ProfilePage, setProfilePage }) {

  // const[value,setValue] = useState({value});


  // const handleNavigate = (e)=>{
  //   e.preventDefault()
  //   if(!localStorage.getItem("is-login")){
  //     setLoginPage(true)
  //   }
    
  // }

  return (
    <>
      <div className="defaultPage">
        <div className="dpage-home">
          <div className="dpage-home-body">
            <div className="dpage-home-link">
            <a href='/'>
            <img className='home-link-logo' src={logo}></img>
            </a>
            </div>

            {/* <div className="dpage-input-div">
              <input className='dpage-input-box' type="text" placeholder='Enter keywords...'/>
              <div className="dpage-search-div">
                <img src={search} className='dpage-search-icon' />
              </div>
            </div> */}

              <Link to="/anime"className='dpge-home-vlink-a'>
                <div className="dpge-home-vlink" >
                  View Full Site
                  <img src={linkArrow} className='dpge-home-vlink-icon'/>
                </div>
              </Link>
            
          </div>

          <div className='dpage-container'>
            <div className="dpage-details">
              <h1 className="dpage-details-h1">
              Anime World - The best site to watch anime online for Free
              </h1>

              <p className="dpage-details-p">
              Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites. 
              </p>

              <p className="dpage-details-p">
              Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so we've decided to build AnimeWorld to be one of the best free anime streaming site for all anime fans on the world.
                </p>

                <h1 className="dpage-details-h1">
                1/ What is Anime World?
              </h1>

              <p className="dpage-details-p">
              AnimeWorld is a free site to watch anime and you can even download subbed or dubbed anime in ultra HD quality without any registration or payment. By having No Ads in all kinds, we are trying to make it the safest site for free anime.
                </p>

              <h1 className="dpage-details-h1">
              2/ Is AnimeWorld safe?
              </h1>

              <p className="dpage-details-p">
              Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to make sure all are clean, If you find any ads that is suspicious, please forward us the info and we will remove it.
                </p>

              <h1 className="dpage-details-h1">
              3/ So what make AnimeWorld the best site to watch anime free online?
              </h1>

              <ul>
                <li className="dpage-details-li">
                  <strong>Safety:</strong>
                  We try our best to not having harmful ads on AnimeWorld.
                </li>
                <li className="dpage-details-li">
                  <strong>Content library:</strong>
                  Our main focus is anime. You can find here popular, classic, as well as current titles from all genres such as action, drama, kids, fantasy, horror, mystery, police, romance, school, comedy, music, game and many more. All these titles come with English subtitles or are dubbed in many languages.
                </li>
                <li className="dpage-details-li">
                  <strong>Quality/Resolution:</strong>
                  All titles are in excellent resolution, the best quality possible. AnimeWorld also has a quality setting function to make sure our users can enjoy streaming no matter how fast your Internet speed is. You can stream the anime at 360p if your Internet is being ridiculous, Or if it is good, you can go with 720p or even 1080p anime.
                </li>
                <li className="dpage-details-li">
                  <strong>Updates: </strong>
                  We updates new titles as well as fulfill the requests on a daily basis so be warned, you will never run out of what to watch on AnimeWorld.
                </li>
                <li  className="dpage-details-li">
                  <strong>User interface: </strong>
                  Our UI and UX makes it easy for anyone, no matter how old you are, how long have you been on the Internet. Literally, you can figure out how to navigate our site after a quick look. If you want to watch a specific title, search for it via the search box. If you want to look for suggestions, you can use the site's categories or simply scroll down for new releases.
                </li>
                <li className="dpage-details-li">
                  <strong>Device compatibility:</strong>
                  AnimeWorld works alright on both your mobile and desktop. 
                </li>
                
              </ul>

              <p className="dpage-details-p">
              So if you're looking for a trustworthy and safe site for your Anime streaming, let's give AnimeWorld a try. And if you like us, please help us to spread the words and do not forget to bookmark our site.                 </p>
              
              <h1 className="dpage-details-h1">
              4/ I can not access AnimeWorld website, what should I do?
              </h1>

              <p className="dpage-details-p">
              Your ISP (Internet Service Provider) may have put AnimeWorld domain into the block list, you can now access AnimeWorld website via our Proxy sites network, which can be found here: https://AnimeWorldanime.net. We will keep adding new domain to the list so please bookmark AnimeWorldAnime.net website to stay updated.
                </p>

                <p className="dpage-details-p">
                Thank you!
                </p>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}
