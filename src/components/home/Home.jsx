import './home.scss'

const Home = () => {
  return (
    <div className="Home">
        <div className="homeBar">
          Home
        </div>
        <div className="tweeting">
        <div className="photo">
            <img
                alt="Ibrahim Abo Abdo"
                src="https://pbs.twimg.com/profile_images/1344684514543628288/W9eAK5IZ_400x400.jpg"
              />
            </div>
        <div className="what">What's Happening?</div>
        
        <button className="tweet">Tweet</button>
        </div>
        <div className="Copyright">
          Copyright: Ibrahim Abo Abdo - Code Academy
        </div>
        <div className="tweets">
          <div className="tweet">
            <div className="photo">
                <img
                    alt="account"
                    src="https://pbs.twimg.com/profile_images/1409799865450864642/TZyYafhX_400x400.jpg"
                  />
            </div>
              <div className="name">FCBarcelona <p id='uname'>@fcbarcelona</p>
              </div>
          </div>
            <p className="p">But de @Phil_Coutinho10, contre Cornella, ce matin en match d'entraînement 🙂 </p>
            <div className="post">
                <img
                    alt="post"
                    src="https://pbs.twimg.com/media/FBllVqhX0AkBUGK?format=jpg&name=large"
                  />
            </div>
        </div>
        
        
        <div className="tweets">
          <div className="tweet">
            <div className="photo">
                <img
                    alt="account"
                    src="https://pbs.twimg.com/profile_images/1402916628766015490/ZYeq0kdE_400x400.jpg"
                  />
            </div>
              <div className="name">PremierLeague <p id='uname'>@premierleague</p>
              </div>
          </div>
            <p className="p">Most distance covered by #PL players in 21/22 so far Man running </p>
            <div className="post">
                <img
                    alt="post"
                    src="https://pbs.twimg.com/media/FBlWxJFXsAcoVAn?format=jpg&name=large"
                  />
            </div>
        </div>

    </div>

  )
}

export default Home
