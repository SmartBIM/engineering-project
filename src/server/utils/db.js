const { v4: uuidv4 } = require('uuid')
const DATABASE = {}


async function get(collection, id) {
  const c = DATABASE[collection] || {}
  return c.find(element => element.id === id) || null
}


async function add(collection, data) {
  const id = uuidv4()
  DATABASE[collection][id] = data
}


async function getAll(collection) {
  return [...DATABASE[collection]]
}

function seed() {
  DATABASE['products'] = [
    {
      id: 'test-id-1',
      brand: 'Some Brand',
      category: 'Anvil', 
      description: 'Well it\'s an anvil',
      features: [
        'protection from rain',
        'steel block'
      ],
      resources: [
        { material: 'weight', resource: 'steel', other: '20kg' },
        { material: 'height', resource: '2', other: 'ft' },
        { material: 'contact', resource: '123-456-7890', other: 'Contact' }
      ],
      media: [
        'https://res.cloudinary.com/teepublic/image/private/s--NCVmrvgD--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1565201622/production/designs/5541196_0.jpg'
      ]
    },
    {
      id: 'test-id-2',
      brand: 'Other Brand',
      category: 'Hammer', 
      description: 'Thor would be envious',
      features: [
        'Made from pantented Neutron Star matter',
        'Really, really strong'
      ],
      resources: [
        { material: 'weight', resource: 'neutron matter', other: '99999999kg' },
        { material: 'ability', resource: 'worthiness', other: 'Contact for info' },
        { material: 'contact', resource: '123-456-7890', other: 'Contact' }
      ],
      media: [
        'https://res.cloudinary.com/teepublic/image/private/s--NCVmrvgD--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1565201622/production/designs/5541196_0.jpg'
      ]
    }
  ]

  DATABASE['siteStylings'] = [
    {
      id: 1,
      company: 'A Company',
      brand: 'Some Brand',
      font: 'Arial',
      headerColor: 'papayawhip',
      footerColor: 'lightgrey',
      textColor: '#424242',
      buttonColor: '#FFFFFF',
      buttonText: '#ABABAB'
    },
    {
      id: 2,
      company: 'Company B',
      brand: 'Other Brand',
      font: 'Helvetica',
      headerColor: 'blue',
      footerColor: 'green',
      textColor: '#424242',
      buttonColor: '#FFFFFF',
      buttonText: '#ABABAB'
    }
  ]
}

seed()

module.exports = {
  add,
  get,
  getAll
}
