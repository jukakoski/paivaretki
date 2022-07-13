import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { GatsbyImage } from "gatsby-plugin-image";
// import { Pannellum } from "pannellum-react";
import pannelumData, { IPannelum, IUiText } from '../data/pannelum'
import Pannellum from "../components/LoadablePannelum";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  const [selectedPannelumIndex, setSelectedPannelumIndex] = useState(0)

  const isSSR = typeof window === "undefined";


  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const selectedPannelum: IPannelum = pannelumData.filter(item => item.index === selectedPannelumIndex)[0]

  const pannelumUiText: IUiText = {
    bylineLabel: "%s",
    loadingLabel: "Ladataan..."
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Tervetuloa {site.title}</h1>

        {!isSSR &&
          <Pannellum
            {...selectedPannelum}
            hfov={95}
            width="100%"
            height="100vh"
            autoLoad
            onLoad={() => {
              console.log("panorama loaded");
            }}
            keyboardZoom={false}
            hotspotDebug={false}
            mouseZoom={false}
            showFullscreenCtrl={true}
            showControls
          >
            {selectedPannelum?.hotspots.map((props) =>
              <Pannellum.Hotspot
                {...props}
                tooltip={hotspot}
                handleClick={(evt, args) => setSelectedPannelumIndex(args.index)}
              />)
            }
          </Pannellum>
        }

        {projectNodes && (
          <ProjectPreviewGrid
            title="Heinolan kohteet"
            nodes={projectNodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout >
  );
};

export default IndexPage;



// Hot spot creation function
const hotspot = (hotSpotDiv, args) => {
  hotSpotDiv.classList.add('jumpTo');
  const span = document.createElement('span');
  span.innerHTML = args;

  const arrow = document.createElement('div')
  arrow.innerText = args.name
  // arrow.style.width = '50px'

  const kuva = document.createElement('img')

  const styles = {
    height: 'unset',
    top: 'unset',
    bottom: 0
  }

  const img = new Image()
  img.style.height = 'unset'
  img.style.top = 'unset'
  img.style.bottom = '0'

  console.log('tyyli', img.style)

  img.src = args.imageUrl

  hotSpotDiv.appendChild(arrow);
  arrow.style.height = 'auto'

  hotSpotDiv.appendChild(img)
  hotSpotDiv.height = 'auto'
  /*     span.style.width = 'auto' // span.scrollWidth - 20 + 'px';
      span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
      span.style.marginTop = -span.scrollHeight - 12 + 'px'; */

}
