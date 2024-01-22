import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WoollyM",
  description: "Documentation of the WoollyM project",

  sitemap: {
    hostname: 'https://woollym.dev'
  },

  themeConfig: {

    search: {provider: 'local'},

    logo: 'https://raw.githubusercontent.com/MammothPHP/WoollyM/master/logos/woollym_logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Getting_Started/' },
      { text: 'Manual', link: '/Manual/' },
      { text: 'API Reference', link: '/Reference/' },
      { text: 'Release Note', link: 'https://github.com/MammothPHP/WoollyM/blob/master/CHANGELOG.md' }
    ],

    sidebar: {
      '/Getting_Started/': [

        {text: 'License', link: '/Getting_Started/License'},

        {
          text: 'Getting Started',
          items: [
            {text: 'Presentation', link: '/Getting_Started/'},
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

        {text: '<strong>Next: Read the Manual</strong>', link: '/Manual/'},

      ],

    '/Manual/': [
      {text: '<strong>Getting Started</strong>', link: '/Getting_Started/'},

      {
        text: 'Manual',
        link: '/Manual/',
        items: [

          {text: 'Data Quick Overview', link: '/Manual/Data_Quick_Overview'},

          {text: 'The Dataframe object', link: '/Manual/Dataframe_Object'},

          {text: 'CRUD Operations', link: '/Manual/CRUD_Operations/Principles', items:[
            {text: 'Principles', link: '/Manual//CRUD_Operations/Principles'},
            {text: 'Select', link: '/Manual//CRUD_Operations/Select'},
            {text: 'Insert', link: '/Manual//CRUD_Operations/Insert'},
            {text: 'Update', link: '/Manual//CRUD_Operations/Update'},
            {text: 'Delete', link: '/Manual//CRUD_Operations/Delete'},
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
      { icon: 'github', link: 'https://github.com/MammothPHP/WoollyM' },
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73" xmlns:xlink="http://www.w3.org/1999/xlink"xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"/><g id="_1421344023328"><path fill="#F7931A" fill-rule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"/><path fill="white" fill-rule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"/></g></g></svg>'
        },
        link: 'https://blockchair.com/bitcoin/address/bc1q3jllk3qd9fjvvuqy07tawkv7t6h7qjf55fc2gh',
        ariaLabel: 'Bitcoin donation',
      },
    ]
  }
})
