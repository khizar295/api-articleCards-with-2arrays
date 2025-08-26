import React from "react";

export default function Home() {
  const article = [
    {
      source: {
        id: null,
      },
      author: "Aymeric Geoffre-Rouland",
      title:
        "Actualité : “Les road trips n’ont jamais été aussi faciles” : Tesla publie une vidéo choc, un trajet de 580 km sans la moindre intervention humaine",
      description:
        "Tesla a diffusé une vidéo inédite : une berline électrique reliant San Francisco à Los Angeles, sans aucune intervention humaine. Un trajet de près de 600 kilomètres, intégralement géré par le système Full Self-Driving. Un signal fort envoyé à l’industrie… et…",
      url: "https://www.lesnumeriques.com/voiture-electrique/les-road-trips-n-ont-jamais-ete-aussi-faciles-tesla-publie-une-video-choc-un-trajet-de-580-km-sans-la-moindre-intervention-humaine-n241408.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/news/24/241408/52ce031c-les-road-trips-n-ont-jamais-ete-aussi-faciles-tesla-publie-une-video-choc-un-trajet-de-580-km-sans-la-moindre-intervention-humaine_png__1200_678__34-76-2199-1212.jpg",
      publishedAt: "2025-08-25T05:15:00Z",
      content:
        "580 km en conduite autonome supervisée entre San Francisco et Los Angeles.\r\n© Tesla, sur X\r\nLa vidéo, qui cumule 2 millions de vues sur X, est millimétrée. Depuis les collines de la baie de San Franc… [+4212 chars]",
    },
  ];
  const article2 = [
    {
      source: {
        id: null,
      },
      author: "Vismaya Verma-rauley",
      title:
        "Telegram CEO Pavel Durov Criticizes France Over 'Absurd' 2024 Arrest",
      description:
        "Telegram CEO Pavel Durov, who was arrested last year, says he must return to France every 14 days with no appeal date in sight.",
      url: "https://decrypt.co/336620/telegram-ceo-pavel-durov-criticizes-france-over-absurd-2024-arrest",
      urlToImage:
        "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2025/05/telegram-decrypt-style-04-gID_7.png",
      publishedAt: "2025-08-25T05:06:44Z",
      content:
        'In brief\r\n\u003Cul\u003E\u003Cli\u003EDurov has called his August 2024 arrest "legally and logically absurd," claiming French police detained him over crimes by users he\'d never heard of.\u003C/li\u003E\u003Cli\u003EThe Telegram CEO must r… [+3334 chars]',
    },
    {
      source: {
        id: null,
      },
      author: "Dan Jensen-janasanathan",
      title:
        "Trump indsætter stenrig Airbnb-stifter i topstilling: Skal effektivisere 26.000 statslige portaler og websites",
      description:
        "Statslige amerikanske websites skal være lige så tilfredsstillende at besøge som Apple App Store, lyder planen.",
      url: "",
      urlToImage:
        "https://res.cloudinary.com/lesswrong-2-0/image/upload/v1654295382/new_mississippi_river_fjdmww.jpg",
      publishedAt: "2025-08-25T05:06:00Z",
      content:
        "Statslige amerikanske websites skal være lige så tilfredsstillende at besøge som Apple App Store, lyder planen.Annonceindlæg fra ComputerworldGeopolitik i cyberspace\r\nDe statslige amerikanske website… [+1936 chars]",
    },
    {
      source: {
        id: null,
      },
      author: "David roune-prauntichey",
      title:
        "جهان خودرو؛ مرسدس‌بنز به‌دنبال استفاده از موتور ب‌ام‌و در مدل‌های جدیدش است",
      description:
        "این هفته در جهان خودرو: گزارش‌ها از مذاکرات بنز و ب‌ام‌و برای همکاری در ساخت موتور و جعبه‌دنده، عرضه مدل لوکس‌تری از شاسی‌بلند پرفروش تسلا در چین، رونمایی کانسپت اسپرت اوپل کورسا برای یک بازی ویدئویی و بازگشت جیپ چروکی با امکانات لوکس و موتور هیبرید.",
      url: "https://www.bbc.com/persian/articles/c5y38w03398o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_persian/08fe/live/946ad780-8059-11f0-a34f-318be3fb0481.jpg",
      publishedAt: "2025-08-25T05:01:39Z",
      content:
        "Mercedes-Benz\r\nCLA \r\n: .\r\n . .\r\n « » (Manager Magazin) . «» . .\r\n .\r\nB48 . GLA CLA GLB C E .\r\n. .\r\nBMW\r\nB48 \r\n. - . - .\r\n «» (Horse) . - .\r\n . - . .\r\n . .\r\n .\r\nGetty Images\r\nYL \r\nY . YL Y .\r\nYL Y . .… [+288 chars]",
    },
  ]
  return (
      <div className="container">
        <div className="row">
          {article.map((ele, index) => (
            <div className="row border p-3">
              <div className="col-6">
                <div className="row">
                <div className="col-6">
                  <small>
                    Author : <span className="badge bg-dark">{ele.author}</span>
                  </small>
                </div>
                <div className="col-6">
                  <small>
                    Published at : <br />{" "}
                    <span className="badge bg-dark">{ele.publishedAt}</span>
                  </small>
                </div>
              </div>
              <h3>{ele.title.slice(0, 22)}...</h3>
              <hr />
              <span className="badgr bg-dark text-light p-1">Content :</span> <p>{ele.content.slice(0, 140)}...</p>
                <span className="badgr bg-dark text-light p-1">Description :</span> <p>{ele.description.slice(0, 120)}...</p>
                <a href={ele.url} className="btn btn-dark" target="blank">Read More ...</a>
              </div>
              <div className="col-6">
                <img src={ele.urlToImage ? ele.urlToImage : NoPhotoFound} alt="" className="img-fluid" style={{height : "340px", width : "100%"}} />
              </div>
              
            </div>
          ))}
        </div>
        <div className="row">
          {article2.map((ele, index) => (
            <div className="col-4 border p-3">
                <div className="row">
                <div className="col-6">
                  <small>
                    Author : <span className="badge bg-dark">{ele.author}</span>
                  </small>
                </div>
                <div className="col-6">
                  <small>
                    Published at : <br />{" "}
                    <span className="badge bg-dark">{ele.publishedAt}</span>
                  </small>
                </div>
              </div>
              <h3>{ele.title.slice(0, 22)}...</h3>
              <hr />
                <img src={ele.urlToImage ? ele.urlToImage : NoPhotoFound} alt="" className="img-fluid" style={{height : "200px", width : "100%"}} />
                <span className="badgr bg-dark text-light p-1">Content :</span> <p>{ele.content.slice(0, 140)}...</p>
                <span className="badgr bg-dark text-light p-1">Description :</span> <p>{ele.description.slice(0, 120)}...</p>
                <a href={ele.url} className="btn btn-dark" target="blank">Read More ...</a>
            </div>
          ))}
        </div>
      </div>
  );
}
