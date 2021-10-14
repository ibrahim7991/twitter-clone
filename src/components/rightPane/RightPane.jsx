import './rightPane.scss'

const RightPane = () => {
  return (
    <div className="right-pane">
      <div className="SearchBar">
         <input type="search"  placeholder="Search Twitter"/>
      </div>
      
      <div className="hashtag">
        <div id='boldText'> <p>Trends</p> </div>
        <div className="hash1">
            <div className="hash2">
              <p id='text'>1 · Music · Trending</p>
              <p id='text1'>#Savage1stWin</p> 
              <p id='text'>103K Tweets</p> 
              </div>  
          </div>
          <div className="hash1">
            <div className="hash2">
              <p id='text'>3 · Football · Trending</p>
              <p id='text1'>#NoBraDay</p> 
              <p id='text'>52.2K Tweets</p> 
              </div>  
          </div>
          <div className="hash1">
            <div className="hash2">
              <p id='text'>4 · Technology · Trending</p>
              <p id='text1'>#snapchatdown</p> 
              <p id='text'>6,093 Tweets</p> 
              </div>  
          </div>
          <div id='ShowMore'> <p>Show more </p> </div>
      </div>

      <div className="profile">
        

        </div> 
      
    </div>

  )
}
export default RightPane
