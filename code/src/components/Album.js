import React from 'react'


export const Album = (props) => {
  return (
    <div className="card">
    

       <div className="container">
          <img className="cardImg" src={props.AlbumImg.url} alt="Album cover"></img>
        <div className="middle">
          <div className="text">

            <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.933333 16.933334"><path styles="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M5.5429688 1.72632c-1.3973405.12793-2.3147222.54076-3.1308594 1.33199h-.00195C.73840872 4.76006.73795173 7.46473 2.3457064 9.20089c.01979.0505.049702.0963.087891.13476h.00195l5.7402343 5.75391c.1543639.15504.4050805.15594.5605469.002l5.7402334-5.73047c.0044-.004.0093-.008.01367-.0117.002-.002.004-.004.0059-.006.0097-.009.01963-.0183.0293-.0274.004-.004.0079-.008.01172-.0117 1.709157-1.75617 1.677419-4.57518-.07031-6.29297-1.655648-1.62642-4.246883-1.64589-5.9863287-.16796-.847356-.72896-1.8847572-1.12889-2.9375-1.11719zm.00977.78906c.9348454-.0104 1.8727796.33751 2.5976562 1.04297.00819.009.017285.0165.025391.0254.00445.005.009.009.013672.0137.028195.0281.060457.0518.095703.0703.023693.0122.048558.022.074219.0293.019156.006.038744.0106.058594.0137.00649.00083.013005.001.019531.002a.39759413.39759413 0 00.039062 0c.013046-.00002.026082-.00069.039062-.002.013112-.001.026149-.003.039062-.006.00656-.002.013073-.004.019531-.006.00656-.002.013073-.004.019531-.006.00591-.002.011766-.004.017578-.006.00658-.002.013093-.005.019531-.008.00592-.003.011784-.005.017578-.008.00594-.003.011805-.007.017578-.01l.00586-.004c.00394-.002.00785-.004.011719-.006.00131-.001.00262-.003.00391-.004.0006523-.00066.0013-.001.00195-.002.02241-.0141.043348-.0305.0625-.0488 1.426867-1.42362 3.72228-1.43203 5.160156-.0195 1.442106 1.4174 1.467535 3.72006.05859 5.16992-.000655.00068-.0013.001-.002.002-.0091.009-.01811.017-.02734.0254-.004.004-.0079.009-.01172.0137-.0081.007-.01596.0153-.02344.0234l-5.4492189 5.4375-5.4375-5.44922c-.00744-.009-.01526-.0173-.023437-.0254-1.4222667-1.42556-1.4319808-3.71814-.023438-5.15625.00132-.001.00259-.003.00391-.004h.00195c.709023-.72139 1.6393733-1.08922 2.5742188-1.09961z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" paint-order="fill markers stroke"/></svg>
            <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path styles="text-indent:0;text-transform:none;block-progression:tb" d="M50 6.00001c-24.2767 0-44.0000001 19.7233-44.0000001 44.00001 0 24.2767 19.7233001 44 44.0000001 44s44-19.7233 44-44C94 25.72331 74.2767 6.00001 50 6.00001zm0 4c22.1149 0 40 17.8851 40 40.00001 0 22.1149-17.8851 40-40 40s-40.0000001-17.8851-40.0000001-40C9.9999999 27.88511 27.8851 10.00001 50 10.00001zm-15 21v38.00001l34-19-34-19.00001z" overflow="visible" color="#000"/></svg>
            <svg className="dots" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle cx="2.5" cy="12.5" r="2.5"/><circle cx="12" cy="12.5" r="2.5"/><circle cx="21.5" cy="12.5" r="2.5"/></g></svg>
      
          </div>       
        </div>
      </div>

      
      <div>
        <a href={props.AlbumUrl} target="_blank">
          <p className="albumNameText">{props.AlbumName}</p>
        </a>
        <a href={props.AlbumArtistUrl} target="_blank">
          <p className="artistNameText">{props.AlbumArtist}</p>
        </a>
      </div>
    </div>
  )
}