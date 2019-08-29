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
                  buildHookId: '5d679d45a96365243fb0fcb0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6c7t8vwz',
                  apiId: 'd35311b4-4f7b-4a71-9342-de4fadb6ff37'
                },
                {
                  buildHookId: '5d679d45e59b2237d771f2d6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7z8ps6zs',
                  apiId: 'b6066fcb-803c-4bc6-aa3f-9e4dc7fd74c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mabroor/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7z8ps6zs.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
