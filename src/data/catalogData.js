const catalogGroups = [
  {
    category: 'Books',
    items: [
      {
        title: 'Atlas Journal',
        description: 'A structured notebook for planning, notes, and ideas.',
      },
      {
        title: 'Quiet Pages',
        description: 'A calm reading companion with a clean layout.',
      },
      {
        title: 'Northbound Notebook',
        description: 'A flexible notebook for daily writing and sketches.',
      },
      {
        title: 'Paper Trail Planner',
        description: 'A planner for tasks, deadlines, and weekly reviews.',
      },
      {
        title: 'Focus Draft Book',
        description: 'A compact book for drafts, outlines, and study notes.',
      },
      {
        title: 'Silver Spine Reader',
        description: 'A lightweight reader designed for long sessions.',
      },
      {
        title: 'Midnight Margin',
        description: 'A notebook with wide margins for comments and ideas.',
      },
      {
        title: 'Sunlit Notes',
        description: 'A bright notebook for everyday reflection and planning.',
      },
      {
        title: 'Chapter Compass',
        description: 'A reading log for tracking progress and highlights.',
      },
      {
        title: 'Daily Chapter',
        description: 'A simple journal for morning and evening writing.',
      },
    ],
  },
  {
    category: 'Office',
    items: [
      {
        title: 'Summit Desk Lamp',
        description: 'A steady lamp for focused work and late sessions.',
      },
      {
        title: 'Vector Mouse Pad',
        description: 'A smooth mouse pad with precise tracking support.',
      },
      {
        title: 'Clear View Monitor Stand',
        description: 'A raised stand that keeps the desk neat and ergonomic.',
      },
      {
        title: 'Anchor Pen Set',
        description: 'A reliable pen set for everyday office tasks.',
      },
      {
        title: 'North Star Keyboard Tray',
        description: 'A compact tray that saves space on the desk.',
      },
      {
        title: 'Signal Desk Organizer',
        description: 'A tidy organizer for cables, notes, and accessories.',
      },
      {
        title: 'Iron Frame Notebook Holder',
        description: 'A durable holder for notebooks, tablets, and papers.',
      },
      {
        title: 'Bright Line Cable Kit',
        description: 'A cable kit for keeping devices charged and sorted.',
      },
      {
        title: 'Orbit Whiteboard',
        description: 'A reusable board for planning and quick brainstorming.',
      },
      {
        title: 'Pulse Stapler',
        description: 'A compact stapler that keeps paperwork under control.',
      },
    ],
  },
  {
    category: 'Tech',
    items: [
      {
        title: 'Pixel Beacon Speaker',
        description: 'A compact speaker with crisp audio for small spaces.',
      },
      {
        title: 'Nova Charging Dock',
        description: 'A charging dock for phones, earbuds, and watches.',
      },
      {
        title: 'Circuit Travel Hub',
        description: 'A portable hub for laptops, tablets, and accessories.',
      },
      {
        title: 'Glide Wireless Mouse',
        description: 'A responsive mouse with smooth motion and quiet clicks.',
      },
      {
        title: 'Echo Mini Headphones',
        description: 'Lightweight headphones for commuting and calls.',
      },
      {
        title: 'Halo Webcam',
        description: 'A clean webcam for meetings, classes, and streams.',
      },
      {
        title: 'Core USB-C Hub',
        description: 'A fast hub with multiple ports for modern devices.',
      },
      {
        title: 'Phase Power Bank',
        description: 'A reliable power bank for travel and long days.',
      },
      {
        title: 'Stream Bluetooth Adapter',
        description: 'An adapter that keeps older devices connected.',
      },
      {
        title: 'Vector Track Pad',
        description: 'A smooth track pad for precise navigation.',
      },
    ],
  },
  {
    category: 'Kitchen',
    items: [
      {
        title: 'Stone Mug',
        description: 'A sturdy mug for coffee, tea, and hot chocolate.',
      },
      {
        title: 'Copper Tea Kettle',
        description: 'A classic kettle with a warm, polished finish.',
      },
      {
        title: 'Fresh Grain Canister',
        description: 'A sealed canister for cereal, flour, and snacks.',
      },
      {
        title: 'Harvest Cutting Board',
        description: 'A wooden board for chopping and serving.',
      },
      {
        title: 'Cloud Dish Towel',
        description: 'A soft towel for drying dishes and cleaning up.',
      },
      {
        title: 'Cedar Spice Rack',
        description: 'A compact rack for keeping spices visible and organized.',
      },
      {
        title: 'Bright Pour Bottle',
        description: 'A bottle designed for oil, vinegar, or sauces.',
      },
      {
        title: 'Linen Lunch Box',
        description: 'A lunch box that keeps meals neat and portable.',
      },
      {
        title: 'Flint Salt Mill',
        description: 'A hand mill for fresh seasoning at the table.',
      },
      {
        title: 'Marble Serving Tray',
        description: 'A stylish tray for snacks, drinks, and dessert.',
      },
    ],
  },
  {
    category: 'Fitness',
    items: [
      {
        title: 'Tempo Yoga Mat',
        description: 'A stable mat for stretches, flow, and floor work.',
      },
      {
        title: 'Pulse Water Bottle',
        description: 'A durable bottle that supports training and recovery.',
      },
      {
        title: 'Core Resistance Band',
        description: 'A flexible band for strength and mobility work.',
      },
      {
        title: 'Stride Foam Roller',
        description: 'A roller for warmups, recovery, and muscle release.',
      },
      {
        title: 'Peak Training Towel',
        description: 'A quick-dry towel for workouts and outdoor sessions.',
      },
      {
        title: 'Momentum Jump Rope',
        description: 'A lightweight rope for cardio and coordination drills.',
      },
      {
        title: 'Lift Grip Gloves',
        description: 'Gloves that improve grip during lifting sessions.',
      },
      {
        title: 'Balance Block Set',
        description: 'A set of blocks for stretching and support work.',
      },
      {
        title: 'Summit Gym Bag',
        description: 'A roomy bag for shoes, clothes, and accessories.',
      },
      {
        title: 'Endurance Timer',
        description: 'A timer for intervals, circuits, and rest tracking.',
      },
    ],
  },
  {
    category: 'Outdoors',
    items: [
      {
        title: 'Trail Lantern',
        description: 'A compact lantern for camping and evening walks.',
      },
      {
        title: 'Ridge Thermos',
        description: 'A thermal bottle that keeps drinks hot or cold.',
      },
      {
        title: 'Canyon Backpack',
        description: 'A travel backpack for day trips and light adventures.',
      },
      {
        title: 'Forest Compass',
        description: 'A reliable compass for navigation and hikes.',
      },
      {
        title: 'Camp Stool',
        description: 'A foldable stool for picnics, camping, and festivals.',
      },
      {
        title: 'Summit Blanket',
        description: 'A warm blanket for cool evenings outdoors.',
      },
      {
        title: 'River Flask',
        description: 'A slim flask for water on the trail or road.',
      },
      {
        title: 'Breeze Rain Cover',
        description: 'A protective cover for bags and gear in wet weather.',
      },
      {
        title: 'Pioneer Knife Set',
        description: 'A compact set for outdoor prep and campsite tasks.',
      },
      {
        title: 'Horizon Tent Light',
        description: 'A soft light that hangs easily inside a tent.',
      },
    ],
  },
]

export const categoryOptions = [
  { value: 'all', label: 'All categories' },
  ...catalogGroups.map(({ category }) => ({
    value: category,
    label: category,
  })),
]

export const sortOptions = [
  { value: 'featured', label: 'Featured first' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating-desc', label: 'Rating: high to low' },
  { value: 'title-asc', label: 'Title: A to Z' },
]

function hashString(value) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index)
    hash |= 0
  }

  return Math.abs(hash)
}

function buildProduct(category, item, categoryIndex, itemIndex) {
  const seed = `${category}-${item.title}-${itemIndex}`
  const hash = hashString(seed)

  return {
    id: `${category.toLowerCase()}-${categoryIndex + 1}-${itemIndex + 1}`,
    title: item.title,
    category,
    description: item.description,
    price: Number((18 + categoryIndex * 6 + (hash % 64)).toFixed(2)),
    rating: Number((3.4 + (hash % 17) / 10).toFixed(1)),
    inStock: hash % 5 !== 0,
    featured: hash % 7 === 0,
    label:
      hash % 4 === 0 ? 'New arrival' : hash % 3 === 0 ? 'Best seller' : 'Staff pick',
  }
}

export function loadCatalogProducts() {
  return catalogGroups.flatMap((group, categoryIndex) =>
    group.items.map((item, itemIndex) =>
      buildProduct(group.category, item, categoryIndex, itemIndex),
    ),
  )
}

export function filterProducts(products, filters) {
  const normalizedSearch = filters.search.trim().toLowerCase()

  return products.filter((product) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      [product.title, product.description, product.category]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch)
    const matchesCategory =
      filters.category === 'all' || product.category === filters.category
    const matchesStock = !filters.onlyInStock || product.inStock

    return matchesSearch && matchesCategory && matchesStock
  })
}

export function sortProducts(products, sortBy) {
  const items = [...products]

  switch (sortBy) {
    case 'price-asc':
      return items.sort((left, right) => left.price - right.price)
    case 'price-desc':
      return items.sort((left, right) => right.price - left.price)
    case 'rating-desc':
      return items.sort((left, right) => right.rating - left.rating)
    case 'title-asc':
      return items.sort((left, right) => left.title.localeCompare(right.title))
    case 'featured':
    default:
      return items.sort((left, right) => {
        if (left.featured !== right.featured) {
          return Number(right.featured) - Number(left.featured)
        }

        if (left.rating !== right.rating) {
          return right.rating - left.rating
        }

        return left.title.localeCompare(right.title)
      })
  }
}

export function getCatalogStats(products, favoriteIds) {
  const total = products.length
  const inStock = products.filter((product) => product.inStock).length
  const favoriteCount = products.filter((product) => favoriteIds.has(product.id)).length
  const averagePrice = total
    ? products.reduce((sum, product) => sum + product.price, 0) / total
    : 0

  return {
    total,
    inStock,
    favoriteCount,
    averagePrice: Number(averagePrice.toFixed(2)),
  }
}

