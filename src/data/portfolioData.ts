export interface ProjectImage {
  id: string;
  url: string;
  caption?: string;
  label?: string;
  aspect?: string;
}

export interface Annotation {
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'arrow-down' | 'arrow-up';
  targetImgId?: string;
  color?: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string; // e.g. "PROJECT 0"
  numIndex: number;
  title: string;
  clientSubtitle?: string;
  aestheticNotes: string[];
  annotations: { text: string; arrowDir?: 'up' | 'down' | 'left' | 'right' | 'curved'; x?: number; y?: number }[];
  description: string[];
  scope: string[];
  colorPalette?: string[];
  materials?: string[];
  images: {
    hero: string;
    gallery: ProjectImage[];
    pdfPageRefs: number[];
  };
  details: {
    directorOrLead?: string;
    role: string;
    year?: string;
    type: 'Commercial' | 'Feature / Long Format' | 'Set / Installation';
    story: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'android-show',
    projectNumber: 'PROJECT 0',
    numIndex: 0,
    title: 'ANDROID SHOW',
    clientSubtitle: 'House for Ananya Pandey',
    aestheticNotes: [
      'SOFT GIRL AESTHETICS',
      'PINKS AND CORALS',
      'FEMININE & BLUSH',
      'SUNKISSED WARMTH',
      'SOFT CURVES AND MUTED TONES'
    ],
    annotations: [
      { text: 'SOFT GIRL AESTHETICS', arrowDir: 'curved' },
      { text: 'PINKS AND CORALS', arrowDir: 'down' },
      { text: 'FEMININE & BLUSH', arrowDir: 'right' },
      { text: 'HOUSE FOR ANANYA PANDEY', arrowDir: 'right' },
      { text: 'SUNKISSED WARMTH', arrowDir: 'left' },
      { text: 'SOFT CURVES AND MUTED TONES', arrowDir: 'down' }
    ],
    description: [
      'Prepared the design treatment, curated the look & feel.',
      'Handled the construction.',
      'Coordinated the set decoration.',
      'Handled interdepartmental requirements.',
      'Managed the shoot proceedings.'
    ],
    scope: [
      'Design Treatment & Moodboards',
      'Set Construction & Architecture',
      'Curated Styling & Soft Furnishings',
      'On-Set Art Direction'
    ],
    colorPalette: ['#E6A495', '#F8DDD6', '#DF8D72', '#D8C3B1', '#C6A784'],
    materials: ['Curved Microcement', 'Ribbed Fluted Island', 'Coral Ombré Lacquer', 'Soft Sheer Drapes', 'Warm Beechwood'],
    images: {
      hero: '/assets/projects/android_dressing.jpg',
      gallery: [
        { id: 'a1', url: '/assets/projects/android_dressing.jpg', caption: 'Walk-in dressing sanctuary with arched vanity mirror & coral island counter', label: '(01)' },
        { id: 'a2', url: '/assets/projects/android_living.jpg', caption: 'Sunkissed living lounge with warm sunlight through arched clerestory', label: '(02)' },
        { id: 'a3', url: '/assets/projects/android_arch_wide.jpg', caption: 'Master archway perspective into the wardrobe suite', label: '(01)' },
        { id: 'a4', url: '/assets/projects/android_curved_detail.jpg', caption: 'Soft curves, pastel daybed & whimsical ceramic wall birds', label: '(02)' },
        { id: 'a5', url: '/assets/projects/android_sofa_setting.jpg', caption: 'Sculpted scalloped coffee tables with curved peach velvet sectional', label: '(02)' },
        { id: 'a6', url: '/assets/projects/android_full_panoramic.jpg', caption: 'Full panoramic master set under circular architectural skylight', label: '(03)' },
      ],
      pdfPageRefs: [3, 4]
    },
    details: {
      role: 'Assistant Production Designer & Set Decorator',
      type: 'Commercial',
      story: 'Crafted a soft-girl dreamscape bedroom and living environment for Ananya Pandey, balancing blush gradients, organic curved furniture, custom fluted millwork, and warm amber practical lighting.'
    }
  },
  {
    id: 'dyson',
    projectNumber: 'PROJECT 1',
    numIndex: 1,
    title: 'DYSON',
    clientSubtitle: 'Bedroom and Living Room for Deepika Padukone',
    aestheticNotes: [
      'JAPANESE WABI SABI',
      'QUIET, GROUNDED',
      'NEUTRAL PALLETE',
      'SOFT, IMPERFECT'
    ],
    annotations: [
      { text: 'JAPANESE WABI SABI', arrowDir: 'curved' },
      { text: 'QUIET, GROUNDED', arrowDir: 'down' },
      { text: 'NEUTRAL PALLETE', arrowDir: 'left' },
      { text: 'BEDROOM AND LIVING ROOM FOR DEEPIKA PADUKONE', arrowDir: 'right' },
      { text: 'SOFT, IMPERFECT', arrowDir: 'down' }
    ],
    description: [
      'Prepared the design treatment, curated the look & feel.',
      'Handled the construction.',
      'Coordinated the set decoration.',
      'Handled interdepartmental requirements.',
      'Managed the shoot proceedings.'
    ],
    scope: [
      'Wabi-Sabi Spatial Design',
      'Micro-cement Textured Walls',
      'Recessed Oculus Skylight Lighting',
      'Organic Archways & Minimalist Furnishings'
    ],
    colorPalette: ['#E3E0D8', '#C5C1B6', '#8F8B82', '#6B6861', '#4A463F'],
    materials: ['Raw Lime Plaster', 'Cast Concrete', 'Linen Bedding', 'Natural Jute Weave', 'Brushed Brass Accent'],
    images: {
      hero: '/assets/projects/dyson_master_oculus.jpg',
      gallery: [
        { id: 'd1', url: '/assets/projects/dyson_master_oculus.jpg', caption: 'Master suite with circular oculus skylight, stone platform bed, and arched soaking tub alcove', label: 'Suite' },
        { id: 'd2', url: '/assets/projects/dyson_archway.jpg', caption: 'Ribbed vaulted colonnade corridor with diffused natural daylighting', label: 'Archway' },
        { id: 'd3', url: '/assets/projects/dyson_bed_render.jpg', caption: '3D spatial visualization of the low-profile grounded bedroom', label: 'Render' },
        { id: 'd4', url: '/assets/projects/dyson_mirror_view.jpg', caption: 'Circular vanity mirror reflection capturing multi-layered architecture', label: 'Reflection' },
        { id: 'd5', url: '/assets/projects/dyson_corridor.jpg', caption: 'Perimeter archways with warm floor-level lantern illumination', label: 'Corridor' },
      ],
      pdfPageRefs: [5, 6]
    },
    details: {
      role: 'Assistant Production Designer',
      type: 'Commercial',
      story: 'Inspired by Japanese Wabi-Sabi philosophy, this environment embraces natural imperfection, monastic earth tones, seamless curved lime-washed surfaces, and serene architectural symmetry tailored for Deepika Padukone.'
    }
  },
  {
    id: 'azorte',
    projectNumber: 'PROJECT 2',
    numIndex: 2,
    title: 'AZORTE',
    clientSubtitle: 'Bedroom Space for Khushi Kapoor',
    aestheticNotes: [
      'WHIMSICAL AESTHETICS',
      'VISUALLY FORGIVING',
      'POWDERY & SUN-WARMED',
      '1970S WARMTH',
      'LIVED-IN ROOM DESIGNED FOR FEELING'
    ],
    annotations: [
      { text: 'WHIMSICAL AESTHETICS', arrowDir: 'curved' },
      { text: 'VISUALLY FORGIVING', arrowDir: 'down' },
      { text: 'POWDERY & SUN-WARMED', arrowDir: 'right' },
      { text: 'BEDROOM SPACE FOR KHUSHI KAPOOR', arrowDir: 'right' },
      { text: '1970S WARMTH', arrowDir: 'down' },
      { text: 'LIVED-IN ROOM DESIGNED FOR FEELING', arrowDir: 'left' }
    ],
    description: [
      'Coordinated the set decoration.',
      'Handled interdepartmental requirements.',
      'Managed the shoot proceedings.'
    ],
    scope: [
      '70s Retro Styling & Curation',
      'Split-Level Set Dressing',
      'Vintage Accent Sourcing',
      'Color Block Wall Treatments'
    ],
    colorPalette: ['#E08E2B', '#BF572A', '#D9A74A', '#536B4D', '#C88B77'],
    materials: ['Mustard Ochre Stucco', 'Woven Kilim Runner', 'Fluted Amber Glass', 'Retro Teakwood', 'Paper Flower Lamps'],
    images: {
      hero: '/assets/projects/azorte_hero_stairs.jpg',
      gallery: [
        { id: 'az1', url: '/assets/projects/azorte_hero_stairs.jpg', caption: 'Sun-warmed mustard corner staircase with woven kilim runner and pedestal terracotta plants', label: 'Corner' },
        { id: 'az2', url: '/assets/projects/azorte_bedroom_70s.jpg', caption: '1970s whimsical lounge bedroom with circular porthole wall sconces and velvet daybed', label: '(01)' },
        { id: 'az3', url: '/assets/projects/azorte_dining_nook.jpg', caption: 'Retro dining nook behind fluted amber reeded glass partition and fringed lamp', label: '(02)' },
        { id: 'az4', url: '/assets/projects/azorte_split_level.jpg', caption: 'Split level multi-tiered view with oversized flower standing floor lamps', label: '(03)' },
      ],
      pdfPageRefs: [7, 8]
    },
    details: {
      role: 'Set Decorator & Shoot Manager',
      type: 'Commercial',
      story: 'A playful retro haven for Khushi Kapoor drenched in turmeric, rust, and warm saffron. Built with split elevation levels, porthole wall lights, eccentric vintage artwork, and eclectic tactile fabrics.'
    }
  },
  {
    id: 'titan',
    projectNumber: 'PROJECT 3',
    numIndex: 3,
    title: 'TITAN',
    clientSubtitle: 'Parisian Chic Bedroom & Living Room for PV Sindhu',
    aestheticNotes: [
      'PARISIAN CHIC AESTHETIC',
      'EFFORTLESS ELEGANCE',
      'MONOTONE PALLETE',
      'HIGH CEILINGS',
      'ORNATE MOLDINGS'
    ],
    annotations: [
      { text: 'EFFORTLESS ELEGANCE', arrowDir: 'down' },
      { text: 'PARISIAN CHIC AESTHETIC', arrowDir: 'curved' },
      { text: 'BEDROOM AND LIVING ROOM FOR PV SINDHU', arrowDir: 'right' },
      { text: 'MONOTONE PALLETE', arrowDir: 'down' },
      { text: 'HIGH CEILINGS', arrowDir: 'left' },
      { text: 'ORNATE MOLDINGS', arrowDir: 'down' }
    ],
    description: [
      'Coordinated the set decoration.',
      'Handled interdepartmental requirements.',
      'Managed the shoot proceedings.'
    ],
    scope: [
      'Haussmannian Boiserie Mouldings',
      'Classical Gallery Wall Curation',
      'Chinoiserie Painted Panels',
      'Luxury Brass & Velvet Furniture Styling'
    ],
    colorPalette: ['#E7E2D3', '#E3A857', '#9FB7BD', '#5A7D8F', '#7D322B', '#C9A354'],
    materials: ['Boiserie Wood Trim', 'Chinoiserie Wall Mural', 'Saffron Velvet Upholstery', 'Brushed Brass', 'Fluted Glass Vanity'],
    images: {
      hero: '/assets/projects/titan_parisian_living.jpg',
      gallery: [
        { id: 't1', url: '/assets/projects/titan_parisian_living.jpg', caption: 'Grand Parisian salon with arched corridor portal, gilded sconces, and salon frame collection', label: 'Salon' },
        { id: 't2', url: '/assets/projects/titan_table_styling.jpg', caption: 'Brass chalice vignette styling with white lilies and antique perfume decanters', label: 'Vignette' },
        { id: 't3', url: '/assets/projects/titan_chinoiserie_bed.jpg', caption: 'Master bed enveloped by scenic Chinoiserie wallpaper panels and amber upholstered headboard', label: 'Suite' },
        { id: 't4', url: '/assets/projects/titan_console_nook.jpg', caption: 'Console table nook with ornate miniature antique frames and sculptures', label: 'Details' },
      ],
      pdfPageRefs: [9, 10]
    },
    details: {
      role: 'Set Decorator & Production Coordinator',
      type: 'Commercial',
      story: 'Channeling Parisian chic effortless elegance for world champion PV Sindhu, featuring towering ceilings, classical Haussmannian wall panelling, tailored velvet furnishings, and a curated gallery of vintage gilded frames.'
    }
  },
  {
    id: 'comfort',
    projectNumber: 'PROJECT 4',
    numIndex: 4,
    title: 'COMFORT',
    clientSubtitle: 'Monumental Sculptural Sanctuary & Architectural Textiles',
    aestheticNotes: [
      'MINIMALISM WITH WARM & SOUL',
      'SOFT, IMPERFECT SPACE',
      'NEUTRAL & GOLD PALLETE',
      'RAW, HONEST MINIMAL MATERIALS',
      'NEUTRALS & GOLDS'
    ],
    annotations: [
      { text: 'MINIMALISM WITH WARM & SOUL', arrowDir: 'curved' },
      { text: 'SOFT, IMPERFECT SPACE', arrowDir: 'down' },
      { text: 'NEUTRAL & GOLD PALLETE', arrowDir: 'left' },
      { text: 'RAW, HONEST MINIMAL MATERIALS', arrowDir: 'down' },
      { text: 'NEUTRALS & GOLDS', arrowDir: 'right' }
    ],
    description: [
      'Prepared the design treatment, curated the look & feel.',
      'Handled the construction.',
      'Coordinated the set decoration.',
      'Handled interdepartmental requirements.',
      'Managed the shoot proceedings.'
    ],
    scope: [
      'Large Scale Architectural Set Construction',
      'Fabric Canopy Billowing Ceiling Installation',
      'Golden Parabolic Sanctuary Fabrication',
      'Custom Giant Sculptural Flora Fixtures'
    ],
    colorPalette: ['#D6B26A', '#BF9742', '#EFE6D4', '#C9BAA3', '#967941'],
    materials: ['Draped Raw Silk Linen', 'Carved Stucco Walls', 'Gilded Metallic Leafing', 'Cathedral Fluted Glass', 'Polished Resin Stage'],
    images: {
      hero: '/assets/projects/comfort_golden_vault.jpg',
      gallery: [
        { id: 'c1', url: '/assets/projects/comfort_golden_vault.jpg', caption: 'Majestic gilded sanctuary chamber with organic petal arches and glowing lotus emblem', label: 'Sanctuary' },
        { id: 'c2', url: '/assets/projects/comfort_cathedral_set.jpg', caption: 'Realized architectural set with cathedral glass arch window and tiered podium (23/10/24)', label: 'Realized' },
        { id: 'c3', url: '/assets/projects/comfort_fabric_canopy.jpg', caption: '3D concept rendering of draped fabric canopy billowing across organic walls', label: 'Render' },
        { id: 'c4', url: '/assets/projects/comfort_sanctuary_stage.jpg', caption: 'Wide frontal view of the tiered ceremonial gold dais and parabolic vaulted portals', label: 'Stage' },
        { id: 'c5', url: '/assets/projects/comfort_flower_sculpture.jpg', caption: 'Oversized sculptural cloth petal floor lamp glowing under ambient amber light', label: 'Flora' },
        { id: 'c6', url: '/assets/projects/comfort_material_swatches.jpg', caption: 'Tactile material board: embossed copper, saddle leather, raw fabrics, and gold leaf', label: 'Materials' },
      ],
      pdfPageRefs: [11, 12, 13]
    },
    details: {
      role: 'Assistant Production Designer & Construction Manager',
      type: 'Commercial',
      story: 'A monumental spatial marvel combining fabric ceiling canopies that drift like clouds, ribbed acoustic wall contours, and a theatrical gilded temple sanctuary embodying sacred organic geometry.'
    }
  },
  {
    id: 'bru',
    projectNumber: 'PROJECT 5',
    numIndex: 5,
    title: 'BRU',
    clientSubtitle: 'Modern Indian Home — Living Room, Dining & Kitchen',
    aestheticNotes: [
      'MODERN INDIAN HOME',
      'MEMORY OVER MINIMALISM',
      'RUST, TURMERIC, BOTTLE GREEN',
      'LIVED-IN INDIAN MODERN HOME THATS INHABITED',
      'CHARACTER & TRADITION',
      'TEXTURE & SPICE'
    ],
    annotations: [
      { text: 'MODERN INDIAN HOME', arrowDir: 'curved' },
      { text: 'MEMORY OVER MINIMALISM', arrowDir: 'down' },
      { text: 'RUST, TURMERIC, BOTTLE GREEN', arrowDir: 'left' },
      { text: 'LIVED IN LIVING ROOM, DINING & KITCHEN', arrowDir: 'right' },
      { text: 'LIVED-IN INDIAN MODERN HOME THATS INHABITED', arrowDir: 'down' },
      { text: 'CHARACTER & TRADITION', arrowDir: 'curved' },
      { text: 'TEXTURE & SPICE', arrowDir: 'right' }
    ],
    description: [
      'Prepared the design treatment, curated the look & feel.',
      'Handled the construction.',
      'Coordinated the set decoration.',
      'Handled interdepartmental requirements.',
      'Managed the shoot proceedings.'
    ],
    scope: [
      '2D Layout Floorplans & Spatial Planning',
      'Modular Sage Kitchen & Backsplash Installation',
      'Heritage Furniture & Cane Hutch Styling',
      'Layered Lived-In Prop Dressing'
    ],
    colorPalette: ['#C88736', '#6E8573', '#9D4829', '#2E4C38', '#E6DEC9'],
    materials: ['Olive Green Cabinets', 'Hand-Painted Floral Tiles', 'Cane Weave Almirah', 'Solid Teak Wood', 'Indian Brassware'],
    images: {
      hero: '/assets/projects/bru_inhabited_scene.jpg',
      gallery: [
        { id: 'b1', url: '/assets/projects/bru_inhabited_scene.jpg', caption: 'Warm lived-in living room inhabited by actors with open visual flow into the kitchen', label: 'Scene' },
        { id: 'b2', url: '/assets/projects/bru_living_decor.jpg', caption: 'Lived-in modern Indian living room with warm yellow walls, heirloom curios, and brass coffee tray', label: 'Living' },
        { id: 'b3', url: '/assets/projects/bru_kitchen_cabinets.jpg', caption: 'Sage green modular kitchen island with artisanal printed floral backsplash and sunlit casement window', label: 'Kitchen' },
        { id: 'b4', url: '/assets/projects/bru_wooden_hutch.jpg', caption: 'Traditional wooden & woven cane crockery hutch with vintage botanical prints and amber glassware', label: 'Tradition' },
        { id: 'b5', url: '/assets/projects/bru_floorplan.jpg', caption: 'Architectural 2D technical layout diagram showing camera sights and passage circulation', label: 'Floorplan' },
        { id: 'b6', url: '/assets/projects/bru_axonometric.jpg', caption: '3D axonometric bird-eye cutaway of living, dining, and open kitchen connection', label: 'Axon' },
      ],
      pdfPageRefs: [14, 15, 16]
    },
    details: {
      role: 'Assistant Production Designer & Spatial Planner',
      type: 'Commercial',
      story: 'Prioritizing "memory over minimalism", this design created an authentic, multi-generational Indian home rich in emotional warmth, coffee aroma nostalgia, heirloom wooden curios, and a functional sage country kitchen.'
    }
  },
  {
    id: 'zivame',
    projectNumber: 'PROJECT 6',
    numIndex: 6,
    title: 'MUSEUM OF BOOKS FOR ZIVAME',
    clientSubtitle: 'Exhibition Environment Celebrating Womanhood & Imperfection',
    aestheticNotes: [
      'CELEBRATING WOMANHOOD',
      'CELEBRATING IMPERFECTIONS',
      'THEATRICAL VELVET CRIMSON',
      'CLASSICAL STATUARY ON PEDESTALS'
    ],
    annotations: [
      { text: 'CELEBRATING WOMANHOOD', arrowDir: 'down' },
      { text: 'CELEBRATING IMPERFECTIONS', arrowDir: 'right' },
      { text: 'Museum of Books for ZIVAME', arrowDir: 'left' }
    ],
    description: [
      'Curated experiential museum spatial concept.',
      'Theatrical red velvet drapery and plinth fabrication.',
      'Bespoke sculptural installation styling.',
      'Coordinated exhibition lighting & proceedings.'
    ],
    scope: [
      'Conceptual Art Direction',
      'Theatrical Velvet Drape Installation',
      'Sculpture Sourcing & Plinth Fabrication',
      'Curated Vignette Niches'
    ],
    colorPalette: ['#A51D24', '#781217', '#F5EFE6', '#221E1F', '#D4AF37'],
    materials: ['Deep Red Theatre Velvet', 'Cast Marble Busts', 'Dried Botanical Flora', 'Sheer Floating Tulle', 'Crystal Chandelier'],
    images: {
      hero: '/assets/projects/zivame_bust_gallery.jpg',
      gallery: [
        { id: 'z1', url: '/assets/projects/zivame_bust_gallery.jpg', caption: 'Theatrical red velvet hall with crystal chandelier and diverse classical female busts on monolithic pedestals', label: 'Hall' },
        { id: 'z2', url: '/assets/projects/zivame_pod_niche.jpg', caption: 'Curated shadowbox niche with dried organic botanical flora and woven natural seed pods', label: 'Niche 1' },
        { id: 'z3', url: '/assets/projects/zivame_cocoon_veil.jpg', caption: 'Suspended white cracked egg cocoon emerging with sheer crimson textile against oil painting backdrop', label: 'Niche 2' },
        { id: 'z4', url: '/assets/projects/zivame_illuminated_breast.jpg', caption: 'Arch-framed illuminated niche showcasing an abstract sculptural celebration of the female form', label: 'Niche 3' },
      ],
      pdfPageRefs: [17]
    },
    details: {
      role: 'Production Designer & Exhibition Stylist',
      type: 'Set / Installation',
      story: 'A visceral, poetic exhibition space cloaked in floor-to-ceiling crimson velvet. Features sculpted busts of women with authentic, diverse bodies on crimson plinths, illuminated by a glittering crystal chandelier.'
    }
  },
  {
    id: 'tanishq',
    projectNumber: 'PROJECT 7',
    numIndex: 7,
    title: 'FESTIVE BEDROOM FOR TANISHQ',
    clientSubtitle: 'Joyful & Radiant Festive Luxury Suite',
    aestheticNotes: [
      'JOYFUL & RADIANT',
      'FESTIVE BEDROOM FOR TANISHQ',
      'HERITAGE ARCHWAYS & GEM TONES',
      'RICH PATTERNED TAPESTRY'
    ],
    annotations: [
      { text: 'JOYFUL & RADIANT', arrowDir: 'right' },
      { text: 'Festive Bedroom for TANISHQ', arrowDir: 'left' }
    ],
    description: [
      'Handled set dressing and textile curation.',
      'Coordinated custom vintage wallpaper and archway painting.',
      'Sourced period furniture, antique piano, and brass chandeliers.',
      'Managed on-set shoot aesthetics.'
    ],
    scope: [
      'Festive Luxury Styling',
      'Regal Color Blocking (Emerald & Rose)',
      'Scalloped Alcove Bed Fabrication',
      'Heritage Tile Flooring & Antique Sourcing'
    ],
    colorPalette: ['#234B38', '#9B334C', '#D88E9E', '#E4D5B7', '#D19C4C'],
    materials: ['Flocked Striped Wallpaper', 'Scalloped Velvet Headboard', 'Inlaid Geometric Tile', 'Antique Carved Rosewood', 'Crystal Lustre Chandeliers'],
    images: {
      hero: '/assets/projects/tanishq_scalloped_master.jpg',
      gallery: [
        { id: 'tn1', url: '/assets/projects/tanishq_scalloped_master.jpg', caption: 'Master suite with emerald green scalloped alcove bed, quilted pink silk bedspread, and French arched window', label: 'Master Suite' },
        { id: 'tn2', url: '/assets/projects/tanishq_sideboard_hall.jpg', caption: 'Forest green arched hall with carved sunburst sideboard, vibrant floral arrangement, and vintage luggage', label: 'Foyer' },
        { id: 'tn3', url: '/assets/projects/tanishq_piano_suite.jpg', caption: 'Boudoir corner with upright piano, antique wall mirror, striped wallpaper, and jewel-toned rug runner', label: 'Piano Room' },
      ],
      pdfPageRefs: [18]
    },
    details: {
      role: 'Assistant Production Designer & Prop Stylist',
      type: 'Commercial',
      story: 'An opulent festive sanctuary blending royal forest greens with blush pink velvets, antique Indian craftsmanship, and jewel-like ambient sconces designed for Tanishq festive campaigns.'
    }
  },
  {
    id: 'samsung',
    projectNumber: 'PROJECT 8',
    numIndex: 8,
    title: 'COOL SUMMER WASHING OUTHOUSE FOR SAMSUNG',
    clientSubtitle: 'Sunkissed & Fresh Greenhouse Utility Space',
    aestheticNotes: [
      'SUNKISSED & FRESH',
      'FUCNTIONAL AESTHETICS',
      'COOL SUMMER WASHING OUTHOUSE FOR SAMSUNG',
      'NATURAL CANOPY LIGHTING'
    ],
    annotations: [
      { text: 'SUNKISSED & FRESH', arrowDir: 'down' },
      { text: 'FUCNTIONAL AESTHETICS', arrowDir: 'right' },
      { text: 'Cool summer washing outhouse for SAMSUNG', arrowDir: 'left' }
    ],
    description: [
      'Designed architectural glass conservatory framework.',
      'Integrated modern Samsung laundry appliances seamlessly into timber cabinetry.',
      'Curated organic wicker baskets, apothecary glassware, and linen styling.',
      'Executed on-site greenhouse build overlooking lush greenery.'
    ],
    scope: [
      'Architectural Timber Greenhouse Set',
      'Integrated Appliance Cabinetry',
      'Botanical Light & Shadow Planning',
      'Tactile Utility Styling'
    ],
    colorPalette: ['#67876F', '#93AD8E', '#D9B277', '#323730', '#FFFFFF'],
    materials: ['Timber Glass Rafters', 'Sage Shiplap Paneling', 'Butcher Block Wood Counters', 'Woven Willow Baskets', 'Lush Tropical Foliage'],
    images: {
      hero: '/assets/projects/samsung_greenhouse_panoramic.jpg',
      gallery: [
        { id: 's1', url: '/assets/projects/samsung_greenhouse_panoramic.jpg', caption: 'Panoramic front elevation of the timber glass greenhouse laundry studio looking into jungle canopy', label: 'Panorama' },
        { id: 's2', url: '/assets/projects/samsung_greenhouse_angle.jpg', caption: 'Corner perspective featuring sage green cabinetry, butcher block bench, and open drum washing machine', label: 'Perspective' },
      ],
      pdfPageRefs: [19]
    },
    details: {
      role: 'Assistant Production Designer',
      type: 'Commercial',
      story: 'Transformed an ordinary utility laundry into an idyllic, sun-drenched Scandinavian-meets-tropical conservatory with sloping timber glass rafters, natural sage cabinetry, and tranquil jungle reflections.'
    }
  },
  {
    id: 'meesho',
    projectNumber: 'PROJECT 9',
    numIndex: 9,
    title: "ROSARIO'S CAFÉ FOR MEESHO",
    clientSubtitle: 'Authentic Heritage Irani Café with Nostalgic Patina',
    aestheticNotes: [
      'KEEPSAKE OF CULTURE',
      'NOSTALGIC SPACE WITH DEPTH & AGE',
      'IRANI CAFE FOR MEESHO',
      'DISTRESSED WALLS & RED CHECK TABLECLOTHS'
    ],
    annotations: [
      { text: 'KEEPSAKE OF CULTURE', arrowDir: 'down' },
      { text: 'NOSTALIGIC SPACE WITH DEPTH & AGE', arrowDir: 'right' },
      { text: 'Irani cafe for MEESHO', arrowDir: 'left' }
    ],
    description: [
      'Recreated authentic Bombay Irani café atmosphere.',
      'Distressed antique bakery counter, mosaic tiles, and bentwood chairs.',
      'Curated authentic signage: "ROSARIO\'S BAKE", "NO SMOKING", "NO CREDIT".',
      'Managed dressing of cookie jars, vintage soda bottles, and gallery walls.'
    ],
    scope: [
      'Heritage Café Production Design',
      'Aging, Patina & Distressing Techniques',
      'Authentic Prop Sourcing (Glass Jars, Soda Crates)',
      'Vintage Nostalgia Art Direction'
    ],
    colorPalette: ['#A23838', '#D7A7A2', '#2F5C53', '#5D4937', '#EBE0C9'],
    materials: ['Checkered Gingham Linens', 'Bentwood Café Chairs', 'Distressed Plaster Patina', 'Heritage Terrazzo Floor', 'Carved Wooden Counters'],
    images: {
      hero: '/assets/projects/meesho_irani_cafe.jpg',
      gallery: [
        { id: 'm1', url: '/assets/projects/meesho_irani_cafe.jpg', caption: 'Full dining hall with classic red-and-white checkered tables, accordion iron gate, and illuminated bakery bar', label: '(01)' },
        { id: 'm2', url: '/assets/projects/meesho_service_counter.jpg', caption: 'Nostalgic pink carved service counter with cookie jars, vintage wall sconces, and patinated arches', label: '(02)' },
        { id: 'm3', url: '/assets/projects/meesho_art_wall.jpg', caption: 'Nostalgic dining corner with framed sepia portrait gallery, vintage shelving, and authentic signage', label: '(03)' },
      ],
      pdfPageRefs: [20]
    },
    details: {
      role: 'Assistant Production Designer & Prop Sourcing',
      type: 'Commercial',
      story: 'A heartfelt tribute to Mumbai’s dying Irani café culture for Meesho. Infused with layers of lived-in history: worn checkered tables, vintage biscuit jars, peeling paint patina, and a sense of nostalgic timelessness.'
    }
  },
  {
    id: 'paataal-lok',
    projectNumber: 'PROJECT 10',
    numIndex: 10,
    title: 'SECRET ATTIC FOR PAATAAL LOK',
    clientSubtitle: 'Dark & Atmospheric Story-Driven Hideaway',
    aestheticNotes: [
      'DARK & DINGY HIDEOUT',
      'SECRET ATTIC FOR PAATAAL LOK',
      'STORY-DRIVEN INVESTIGATION LAIR',
      'PITCHED ROOF RAFTERS & CRIME WALL MAP'
    ],
    annotations: [
      { text: 'DARK & DINGY HIDEOUT', arrowDir: 'right' },
      { text: 'Secret attic for PAATAAL LOK', arrowDir: 'left' }
    ],
    description: [
      'Created atmospheric thriller hideout set under steeply pitched wood rafters.',
      'Designed investigative wall map with interconnected red string diagrams, photos, and evidence notes.',
      'Curated weathered trunks, folding canvas cot, kerosene lanterns, and green banker’s lamp.',
      'Executed dark wood staining and aged patina finishes.'
    ],
    scope: [
      'Atmospheric Thriller Set Design',
      'Investigation Crime Board Styling',
      'Specialized Cinematic Low-Key Lighting Dressing',
      'Long-Format Narrative Art Direction'
    ],
    colorPalette: ['#3A241A', '#5A3B25', '#2C3A27', '#C6934A', '#1A1715'],
    materials: ['Aged Tongue-and-Groove Pine', 'Green Cased Glass Banker Lamp', 'Distressed Persian Rug', 'Vintage Brass Lanterns', 'Evidence String & Paper'],
    images: {
      hero: '/assets/projects/paataal_lok_attic_hideout.jpg',
      gallery: [
        { id: 'p1', url: '/assets/projects/paataal_lok_attic_hideout.jpg', caption: 'Atmospheric wooden attic under steep gabled roof with investigation workstation, trunks, and folding cot', label: 'Hideout' },
        { id: 'p2', url: '/assets/projects/paataal_lok_desk_vignette.jpg', caption: 'Close-up study of the investigative desk under triangular window with glowing lamp, crime map, and evidence bottles', label: 'Crime Desk' },
      ],
      pdfPageRefs: [21]
    },
    details: {
      role: 'Set Decorator & Art Department',
      type: 'Feature / Long Format',
      story: 'Crafted a chilling, claustrophobic secret attic hideaway for the acclaimed noir thriller Paataal Lok. Every corner is steeped in mystery, from the illuminated crime map pinned beneath the triangular roof dormer to the dusty antique trunks.'
    }
  }
];

export const PROFILE_DATA = {
  name: 'MANSI RASTOGI',
  tagline: 'PRODUCTION DESIGNER | PHOTO BASED ARTIST | PRODUCT DESIGNER',
  shortBio: "I'm Mansi, an assistant production designer in the Film industry in Bombay, with 5 years of work experience in over 100 ad films and 3 long-format film projects. I've also worked as a lifestyle accessory/product designer and product stylist. Visually voicing stories and always curating aesthetics, here to make films a better place :)",
  mentorsNote: "An assortment of what I've learnt from a bunch of Production designers like Nimish Kotwal, Urvi Asher, Rohini Sen, Snehal Kadwadkar, here's presenting some of the best.",
  education: {
    institution: 'NIFT, Chennai',
    degree: 'Bachelor of Product Design'
  },
  experienceTimeline: [
    {
      role: 'Assistant Production Designer',
      company: 'Freelance (with Rohini Sen, Urvi Asher, Snehal Kadwadkar)',
      period: 'August 2024 - Present',
      location: 'Mumbai',
      details: 'Freelancing on major commercial campaigns and narrative film projects.'
    },
    {
      role: 'Set Decorator',
      company: 'With Production Designer Manini Mishra',
      period: 'April 2024 - July 2024',
      location: 'Mumbai',
      details: 'Assisted on 2 long-format narrative projects in Mumbai.'
    },
    {
      role: 'Assistant Production Designer',
      company: 'With Production Designer Nimish Kotwal',
      period: 'May 2022 - May 2024',
      location: 'Mumbai',
      details: 'Assisted on over 60 commercial ad films across diverse genres and brand aesthetics.'
    },
    {
      role: 'Production Design Intern',
      company: 'With Production Designer Nimish Kotwal',
      period: 'December 2021 - May 2022',
      location: 'Mumbai',
      details: 'Interned on numerous high-profile commercial ad shoots in Mumbai.'
    }
  ],
  skills: [
    'Designing treatment & decks',
    'Autocad, SketchUp & Photoshop',
    'Material & construction knowledge',
    'Set decoration & prop styling',
    'Sourcing & vendor management',
    'Interdepartmental coordination & shoot management'
  ],
  contact: {
    phone: '+91 9092820932',
    phoneRaw: '9092820932',
    email: 'rastogimansi@yahoo.co.in',
    location: 'Mumbai, India',
    vimeo: 'https://vimeo.com/mancr',
    vimeoDisplay: 'vimeo.com/mancr'
  }
};
