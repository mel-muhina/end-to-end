

export default function ShowCard({ show }) {
   
  return (
    <div className="show-card">
        <div>
          <img src={show.image.original}/> 
        </div>
   
 
    {/* wrap these in div */}
        <div>
            <span>{show.rating.average}</span>
            {/* rating */}
            {/* show name */}
            <h2>{show.name}</h2>
            {/*  language, show premier date */}
            <em>{show.language}, {show.premiered}</em>
            {/* show summary */}
            <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
        </div>
    </div>

  )
}
