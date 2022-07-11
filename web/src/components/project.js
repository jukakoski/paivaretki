import { format, formatDistance, differenceInDays } from "date-fns";
import React, {useState} from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";
import { Pannellum, PannellumVideo } from "pannellum-react";
import * as styles from "./project.module.css";


import nuoli from './icon/nuoli.png'



function Project(props) {
  const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects, otherImages } = props;

  console.log('muut kuvat', otherImages)


  const hanldeClickImage = (e, args) => {

    if(args.url){
      window.open(args.url, '_blank').focus();
    } else {
      alert(args.name)
    }

  }

  // Hot spot creation function
  const hotspot = (hotSpotDiv, args) => {
    hotSpotDiv.classList.add('jumpTo');
    var span = document.createElement('span');
    span.innerHTML = args;

    const arrow = document.createElement('div')
    // arrow.innerText = args.name
    arrow.style.width = '50px'

    const kuva = document.createElement('img')

    /*     kuva.src = 'https://fi.wikipedia.org/wiki/Heinola#/media/Tiedosto:Heinola.vaakuna.svg'

        kuva.onload = ev => console.log('ladattu kuva', ev) */

    const styles = {
      height: 'unset',
      top: 'unset',
      bottom: 0
    }

    const img = new Image()
    img.style.height = 'unset'
    img.style.top = 'unset'
    img.style.bottom = 0

    console.log('tyyli', img.style)

    img.src = args.imageUrl // 'https://scontent.fqlf1-2.fna.fbcdn.net/v/t1.6435-9/201255316_3996044070514534_528694386255165909_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1vIAW8LLhMYAX-b00QS&_nc_ht=scontent.fqlf1-2.fna&oh=00_AT9l05_f7KEbCc-5v3ONtKp1vKZrKldqkynwlMd7ttk7Kw&oe=629A182B'

    hotSpotDiv.appendChild(arrow);
    // arrow.style.backgroundColor = 'red'
    arrow.style.height = 'auto'
    hotSpotDiv.appendChild(img)
    hotSpotDiv.height = 'auto'
    /*     span.style.width = 'auto' // span.scrollWidth - 20 + 'px';
        span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
        span.style.marginTop = -span.scrollHeight - 12 + 'px'; */

  }

  const [selectedImage, setSelectedImage] = useState(imageUrlFor(buildImageObj(mainImage)).url())

  const panoramas = [
    {

    }
  ]



  console.log(mainImage)
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          {/*           <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          /> */}
          <Pannellum
            width="100%"
            height="800px"
            image={selectedImage}
            pitch={-15} // vertical angle start
            yaw={60} // horizontal start
            hfov={110}
            autoRotate={5}
            autoLoad
            onLoad={() => {
              console.log("panorama loaded");
            }}
            hotspotDebug={false}
            showControls
            author="Aisoft"
            title="Heinolan heinäsaari"
            keyboardZoom={false}
            mouseZoom={false}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={-32.397136263831705}
              yaw={-103.54162669383389}
              text="Heinolan heinäsaari"
              URL="https://www.visitheinasaari.fi/"
            />
            <Pannellum.Hotspot
              type="custom"
              pitch={-13.170988884114987}
              yaw={-172.09571277267833}
              text="Kaivannon uimaranta"
              handleClick={(evt, args) => hanldeClickImage(evt, args)}
              handleClickArg={{ "name": "test" }}
            />
            <Pannellum.Hotspot
              type="custom"
              pitch={-1.0826514400215093}
              yaw={-94.0409909865549}
              text="Ravintola Kusmiku"
              handleClick={(evt, args) => hanldeClickImage(evt, {url: "http://www.kusmiku.fi"})}
              handleClickArg={{ "name": "kusmiku" }}
              tooltipArg={{ "name": "Kusmiku", "imageUrl": "https://scontent.fqlf1-2.fna.fbcdn.net/v/t1.6435-9/201255316_3996044070514534_528694386255165909_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O6ncPPYQE4gAX9t0Iit&_nc_ht=scontent.fqlf1-2.fna&oh=00_AT_c2AIEpW8hHfLewTfnpganMgcl_aNg_JMharziOIZnUg&oe=62D9602B" }}
              cssClass="jumpTo"
              tooltip={hotspot}
            />

            <Pannellum.Hotspot
              type="custom"
              pitch={-1.0826514400215093}
              yaw={-60.37729935876492}
              text="Kumpeli"
              handleClick={(evt, args) => hanldeClickImage(evt, args)}
              handleClickArg={{ "name": "kumpeli" }}
              tooltipArg={{ "name": "Kumpeli", "imageUrl": "https://www.kumpeli.fi/wp-content/uploads/elementor/thumbs/kumpelin-logo-ilman-tietoja-oln2hm9nxxynnddnio9s1g7r22dwwzbukoeksq8gry.png" }}
              cssClass="jumpTo"
              tooltip={hotspot}
            />

            <Pannellum.Hotspot
              type="custom"
              pitch={5.276079238692603}
              yaw={-99.97434903167009}
              text="Keskusta"
              handleClick={(evt, args) => setSelectedImage('https://live.staticflickr.com/8130/30256395731_4f0c6044b7_b.jpg')}
              handleClickArg={{ "name": "keskusta" }}
              tooltipArg={{ "name": "Keskusta", "imageUrl": nuoli }}
              cssClass="jumpTo"
              tooltip={hotspot}
            />

          </Pannellum>
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {otherImages &&
            <>
            <div>Muut kuvat</div>
            {otherImages.map(other => {
              return <Pannellum
               width="100%"
               height="800px"
               image={imageUrlFor(buildImageObj(other)).url()}
               /*             image={"https://farminf.github.io/pannellum-react/alma.ce3e3084.jpg"} */
               pitch={-15} // vertical angle start
               yaw={60} // horizontal start
               hfov={110}
               autoRotate={5}
               autoLoad
               onLoad={() => {
                 console.log("panorama loaded");
               }}
               hotspotDebug={false}
               showControls
               author="Aisoft"
               title={other.alt}
               keyboardZoom={false}
               mouseZoom={true}
             ></Pannellum>
              return <div>{other.alt}</div>
            })}
            </>}

            <h1 className={styles.title}>{title}</h1>
            <iframe width='853' height='480' src='https://my.matterport.com/show/?m=mRdXGywoJG4' frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM do yyyy")}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title="Project members" />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Project;
