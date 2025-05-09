// Minecraft items with prices for trading
export interface MinecraftItem {
  id: string;
  name: string;
  description: string;
  price: {
    netherite?: number;
    amount?: string;
  };
  category: 'weapons' | 'tools' | 'armor' | 'blocks' | 'resources' | 'food' | 'misc' | 'special';
  inStock: boolean;
  image?: string; // SVG inline content or path
}

export const MINECRAFT_ITEMS: MinecraftItem[] = [
  {
    id: 'golden_apple',
    name: 'Golden Apple',
    description: 'Provides regeneration and absorption effects when consumed.',
    price: {
      netherite: 3,
      amount: '2 Stacks'
    },
    category: 'food',
    inStock: true,
  },
  {
    id: 'tear',
    name: 'Ghast Tear',
    description: 'A rare drop from Ghasts, used for brewing Regeneration potions.',
    price: {
      netherite: 1,
      amount: '4 Stacks'
    },
    category: 'resources',
    inStock: true,
  },
  {
    id: 'ender_pearl',
    name: 'Ender Pearl',
    description: 'Used for teleportation and crafting Eye of Ender.',
    price: {
      netherite: 1,
      amount: '2 Stacks (128)'
    },
    category: 'resources',
    inStock: true,
  },
  {
    id: 'blaze_rod',
    name: 'Blaze Rod',
    description: 'Dropped by Blazes, used for brewing stands and Blaze powder.',
    price: {
      netherite: 1,
      amount: '1 Stack'
    },
    category: 'resources',
    inStock: true,
  },
  {
    id: 'respawn_anchor',
    name: 'Respawn Anchor',
    description: 'Allows players to set their respawn point in the Nether.',
    price: {
      netherite: 5,
      amount: '1 Stack'
    },
    category: 'blocks',
    inStock: true,
  },
  {
    id: 'xp_bottle',
    name: 'Experience Bottle',
    description: 'Throws to release experience orbs that grant XP points.',
    price: {
      netherite: 1,
      amount: '3 Stacks'
    },
    category: 'misc',
    inStock: true,
  },
  {
    id: 'glowstone',
    name: 'Glowstone',
    description: 'A block that emits light, found naturally in the Nether.',
    price: {
      netherite: 1,
      amount: '2 Stacks'
    },
    category: 'blocks',
    inStock: true,
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    description: 'An extremely hard block required for Nether Portals and Enchanting Tables.',
    price: {
      netherite: 1,
      amount: '2 Stacks'
    },
    category: 'blocks',
    inStock: true,
  },
  {
    id: 'gold_block',
    name: 'Gold Block',
    description: 'A decorative block made from 9 gold ingots.',
    price: {
      netherite: 2,
      amount: '1 Stack'
    },
    category: 'blocks',
    inStock: true,
  },
  {
    id: 'iron_block',
    name: 'Iron Block',
    description: 'A decorative and functional block made from 9 iron ingots.',
    price: {
      netherite: 1,
      amount: '1 Stack'
    },
    category: 'blocks',
    inStock: true,
  },
  {
    id: 'ominous_bottle',
    name: 'Ominous Bottle',
    description: 'A special potion bottle with ominous properties.',
    price: {
      netherite: 2,
      amount: '1 Stack'
    },
    category: 'special',
    inStock: true,
  },
  {
    id: 'diamond_armor_cpvp',
    name: 'Diamond Armor (CPVP)',
    description: 'Full set of diamond armor optimized for crystal PVP.',
    price: {
      netherite: 3,
      amount: 'Full Set'
    },
    category: 'armor',
    inStock: true,
  },
  {
    id: 'diamond_tools_cpvp',
    name: 'Diamond Tools (CPVP)',
    description: 'Complete set of diamond tools for crystal PVP.',
    price: {
      netherite: 2,
      amount: 'Full Set'
    },
    category: 'tools',
    inStock: true,
  },
  {
    id: 'gunpowder',
    name: 'Gunpowder',
    description: 'Used to craft TNT, fire charges, and various potions.',
    price: {
      netherite: 1,
      amount: '15 Stacks'
    },
    category: 'resources',
    inStock: true,
  },
  {
    id: 'end_crystals',
    name: 'End Crystals',
    description: 'Powerful explosive items used in end-game combat.',
    price: {
      netherite: 2,
      amount: '1 Stack'
    },
    category: 'misc',
    inStock: true,
  },
  {
    id: 'emerald_block',
    name: 'Emerald Block',
    description: 'A decorative block made from 9 emeralds.',
    price: {
      netherite: 3,
      amount: '1 Stack'
    },
    category: 'blocks',
    inStock: true,
  },
  {
    id: 'wither_skeleton_skull',
    name: 'Wither Skeleton Skull',
    description: 'A rare drop used to summon the Wither boss.',
    price: {
      netherite: 1,
      amount: '12'
    },
    category: 'special',
    inStock: true,
  },
  {
    id: 'nether_star',
    name: 'Nether Star',
    description: 'Dropped by the Wither, used to craft beacons.',
    price: {
      netherite: 1,
      amount: '2'
    },
    category: 'special',
    inStock: true,
  },
  {
    id: 'prismarine',
    name: 'Prismarine',
    description: 'A decorative underwater block from ocean monuments.',
    price: {
      netherite: 1,
      amount: '5 Stacks'
    },
    category: 'blocks',
    inStock: true,
  },
  {
    id: 'netherite_sword',
    name: 'Netherite Sword',
    description: 'The most powerful melee weapon in Minecraft.',
    price: {
      netherite: 1,
      amount: '1'
    },
    category: 'weapons',
    inStock: true,
  }
];