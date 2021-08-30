const Products = [
  {
    id: 1,
    brand: 'ABC',
    imageUrl: 'https://picsum.photos/350/256',
    category: 'Hand Tool',
    description: 'A tool that requires one hand to use.',
    features: ['Comfort grip handle. ', 'Machined precision head. '],
    productTabs: [
      {
        name: 'tab1',
        label: 'Product Information',
        content: 'ABC Hand Tool product information'
      },
      {
        name: 'tab2',
        label: 'Resources',
        content: 'ABC Hand Tool resources.'
      },
      {
        name: 'tab3',
        label: 'Other',
        content: 'ABC Hand Tool other stuff.'
      }
    ]
  },
  {
    id: 2,
    brand: 'ABC',
    imageUrl: 'https://picsum.photos/350/256',
    category: 'Work Bench',
    description: 'A bech/table to work on.',
    features: [
      'Rectangular. ',
      'Four foldable and height adjustable legs. ',
      'Sturdy construction. ',
      'Portable. '
    ],
    productTabs: [
      {
        name: 'tab1',
        label: 'Product Information',
        content: 'ABC Work Bench product-information.'
      },
      {
        name: 'tab2',
        label: 'Resources',
        content: 'ABC Work Bench resources.'
      },
      {
        name: 'tab3',
        label: 'Other',
        content: 'ABC Work Bench other stuff.'
      }
    ]
  },
  {
    id: 3,
    brand: 'XYZ',
    imageUrl: 'https://picsum.photos/350/256',
    category: 'Protective Gear',
    description: 'Wearable gear designed to protect the body.',
    features: ['Form fitting. ', 'Light weight. ', 'Machine washable. '],
    productTabs: [
      {
        name: 'tab1',
        label: 'Product Information',
        content: 'XYZ Protective Gear product-information'
      },
      {
        name: 'tab2',
        label: 'Resources',
        content: 'XYZ Protective Gear resources'
      },
      {
        name: 'tab3',
        label: 'Other',
        content: 'XYZ Protective Gear other stuff.'
      }
    ]
  }
];

module.exports = Products;
