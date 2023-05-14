import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './Thumbnail'
import CatalogDownload from './CatalogDownload'
import Gallery from './Gallery'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, Thumbnail, CatalogDownload, Gallery], // Custom Bricks
      },
    ],
  },
]

export default bricks
