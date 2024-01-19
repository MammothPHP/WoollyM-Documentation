import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WoollyM",
  description: "Documentation of the WoollyM project",
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/MammothPHP/WoollyM/master/logos/woollym_logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Getting_Started/Installation' },
      { text: 'Manual', link: '/Manual/' },
      { text: 'API Reference', link: '/Reference/' },
      { text: 'Release Note', link: '/' }
    ],

    sidebar: {
      '/Getting_Started/': [

        {
          text: 'Getting Started',
          items: [
            {text: 'Requirements', link: '/Getting_Started/Requirements'},
            {text: 'Installation', link: '/Getting_Started/Installation'},
            {text: 'Architecture Principles', link: '/Getting_Started/Architecture_Principles'},
            {text: 'Data Vocabulary & Principles', link: '/Getting_Started/Data_Vocabulary_Principles'},
            {text: 'Instanciation', link: '/Getting_Started/Instanciation'},

            {text: 'Import / Export with formats', link: '/Getting_Started/WorkingWithExternalsFormats/', items:[
              {text: 'CSV / TSV', link: '/Getting_Started/WorkingWithExternalsFormats/CSV'},
              {text: 'FWF', link: '/Getting_Started/WorkingWithExternalsFormats/FWF'},
              {text: 'JSON', link: '/Getting_Started/WorkingWithExternalsFormats/JSON'},
              {text: 'XLSX Excel Spreedsheet', link: '/Getting_Started/WorkingWithExternalsFormats/XLSX'},
              {text: 'ODF Spreedsheet', link: '/Getting_Started/WorkingWithExternalsFormats/XLSX'},
              {text: 'HTML table', link: '/Getting_Started/WorkingWithExternalsFormats/HtmlTable'},
              {text: 'PDO SQL', link: '/Getting_Started/WorkingWithExternalsFormats/PDOSql'},
            ]},
        ]},
      ],

    '/Manual/': [
      {
        text: 'Manual',
        link: '/Manual/',
        items: [

          {text: 'Data Quick Overview', link: '/Manual/Data_Quick_Overview'},

          {text: 'The Dataframe object', link: '/Manual/Dataframe_Object'},

          {text: 'Basic CRUD Operations', link: '/Manual/Basic_CRUD_Operations/Principles', items:[
            {text: 'Principles', link: '/Manual//Basic_CRUD_Operations/Principles'},
            {text: 'Select', link: '/Manual//Basic_CRUD_Operations/Select'},
            {text: 'Insert', link: '/Manual//Basic_CRUD_Operations/Insert'},
            {text: 'Update', link: '/Manual//Basic_CRUD_Operations/Update'},
            {text: 'Delete', link: '/Manual//Basic_CRUD_Operations/Delete'},
          ]},

          {text: 'Extracts Operations', link: '/Manual/Extracts_operations'},

          {text: 'Statistical Aggregation Functions', link: '/Manual/Statistical_Aggregation_Functions/Natives_Functions', items:[
            {text: 'Natives Functions', link: '/Manual/Statistical_Aggregation_Functions/Natives_Functions'},
            {text: 'Customized Functions', link: '/Manual/Statistical_Aggregation_Functions/Customized_Functions'},
          ]},

          {text: 'Sorting Data', link: '/Manual/Sorting_Data'},

          {text: 'Columns Operations', link: '/Manual/Columns'},

          {text: 'Typing', link: '/Manual/Typing'},

          {text: 'Working with externals data sources', link: '/Manual/External_Data_Sources/', items:[
            {text: 'Principles', link: '/Manual/External_Data_Sources/'},
            {text: 'Pdo Sql driver', link: '/Manual/External_Data_Sources/Pdo_Sql_driver'},
            {text: 'Implementing Driver', link: '/Manual/External_Data_Sources/Implementing_Driver'},
          ]},

        ]
      }],

      '/Reference/': [
        {
          text: 'API Reference',
          link: '/Reference/',
        },
      ]
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MammothPHP/WoollyM' }
    ]
  }
})
