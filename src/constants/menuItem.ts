import { faDollar, faFile, faPlay, faHouse} from '@fortawesome/free-solid-svg-icons'

export const menuItem = [
  {
    id: 1,
    name: "Home",
    icons: faHouse,
    key: '/'
  },
  {
    id: 2,
    name: "Generation",
    icons: faPlay,
    key: '/examples'
  },
  {
    id: 3,
    name: "Instruction",
    icons: faFile,
    key: '/documentation'
  },
  {
    id: 4,
    name: "Price",
    icons: faDollar,
    key: '/price'
  },

]