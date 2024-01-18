import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WoollyM Documentation",
  description: "Document for WoollyM project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples'},
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Working With Externals Formats', link: '/WorkingWithExternalsFormats/', items:[
            {text: 'CSV / TSV', link: 'WorkingWithExternalsFormats/CSV'},
            {text: 'FWF', link: 'WorkingWithExternalsFormats/FWF'},
            {text: 'JSON', link: 'WorkingWithExternalsFormats/JSON'},
            {text: 'XLSX Excel Spreedsheet', link: 'WorkingWithExternalsFormats/XLSX'},
            {text: 'ODF Spreedsheet', link: 'WorkingWithExternalsFormats/XLSX'},
            {text: 'HTML table', link: 'WorkingWithExternalsFormats/HtmlTable'},
            {text: 'PDO SQL', link: 'WorkingWithExternalsFormats/PDOSql'},
          ]}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MammothPHP/WoollyM' }
    ]
  }
})
