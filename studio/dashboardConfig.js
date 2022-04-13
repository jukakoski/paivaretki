export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6257095a4939970a7a1ee76a',
                  title: 'Sanity Studio',
                  name: 'paivaretki-studio',
                  apiId: '8af3c498-7cc0-4b92-8a15-1369d4b59120'
                },
                {
                  buildHookId: '6257095af340590a4774290e',
                  title: 'Portfolio Website',
                  name: 'paivaretki',
                  apiId: 'd7dfc1e3-80e7-4683-b9a9-b8219fe30221'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jukakoski/paivaretki',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://paivaretki.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
