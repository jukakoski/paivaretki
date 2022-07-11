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
import { Pannellum } from "pannellum-react";
import pannelumData, { IPannelum } from '../data/pannelum'

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

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Tervetuloa {site.title}</h1>
        <Pannellum
          {...selectedPannelum}
          width="100%"
          height="800px"
          autoLoad
          onLoad={() => {
            console.log("panorama loaded");
          }}
          keyboardZoom={false}
          mouseZoom={false}
        >
          {selectedPannelum?.hotspots.map((props) =>
            <Pannellum.Hotspot
              {...props}
              tooltip={hotspot}
              handleClick={(evt, args) => setSelectedPannelumIndex(args.index)}
            />)
          }
        </Pannellum>

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
  img.style.bottom = 'unset'

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
