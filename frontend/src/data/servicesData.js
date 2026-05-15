export const services = [
  {
    id: "service-1",
    name: "Event Production & Setup",
    summary: "LED walls, stage design, lighting and complete production setup.",
    image: "/images/Event Production & setup/ar-rehman.jpeg",
  },
  {
    id: "service-2",
    name: "🎬 Media & Coverage",
    summary: "Full videography and photography packages for every event.",
    image: "/images/Media&Coverage/multicamera/",
  },
  {
    id: "service-3",
    name: "💡 Stage Effects & Special Effects",
    summary: "Cold fire, blasters, dry ice, CO₂ and immersive special effects.",
    image: "/images/StageEffects& SpecialEffects/blasters&blowers&coldfires/",
  },
  {
    id: "service-4",
    name: "🏗️ Government & Infrastructure Contracting",
    summary:
      "Flood lights, street poles, CCTV, public displays and AC installations.",
    image: "/images/govt&infrastructure/flood lights/",
  },

];

export const serviceDetails = {
  "service-1": {
    title: "Event Production & Setup",
    intro:
      "Core event infrastructure and visual setup built for premium live experiences.",
    description:
      "Our event production services deliver a powerful stage environment with the technical support and visual systems needed to wow attendees.",
    bullets: [
      { label: "LED Wall & TV (Giant Screen)", mediaId: "prod-led-wall-tv" },
      { label: "Stage Setup", mediaId: "prod-stage-setup" },
      { label: "Venue Lighting", mediaId: "prod-venue-lighting" },
    ],
    mediaCards: [
      {
        id: "prod-led-wall-tv",
        title: "LED Wall & TV",
        subtitle: "Giant Screen",
        caption:
          "Giant LED wall screens with stage rigging and professional infrastructure.",
        images: [
          "/images/Event Production & setup/ledwall/ledwall/ledwall.jpeg",
          "/images/Event Production & setup/ledwall/ledwall/ar rahaman.jpg",
          "/images/Event Production & setup/ledwall/ledwall/ledwall2.jpeg",
          "/images/Event Production & setup/ledwall/ledwall/ledwall3.jpeg",
          "/images/Event Production & setup/ledwall/ledwall/ledtv.jpeg",
          "/images/Event Production & setup/ledwall/ledwall/ledwall4.jpeg",
          "/images/Event Production & setup/ledwall/ledwall/ledwall5.mp4",
          "/images/Event Production & setup/ledwall/ledwall/ledwall6.jpg",
        ],
      },

      {
        id: "prod-stage-setup",
        title: "Stage Setup",
        subtitle: "Concert & Event Stage",
        caption:
          "Professional stage setup with trussing, lighting rigs, and complete event infrastructure.",
        images: [
          "/images/Event Production & setup/stagesetup/setup.jpeg",
          "/images/Event Production & setup/stagesetup/stage.jpeg",
          "/images/Event Production & setup/stagesetup/stage2.jpeg",
          "/images/Event Production & setup/stagesetup/stage3.jpeg",
          "/images/Event Production & setup/stagesetup/stage4.jpeg",
          "/images/Event Production & setup/stagesetup/stage5.mp4",
        ],
      },

      {
        id: "prod-venue-lighting",
        title: "Venue Lighting",
        subtitle: "Atmospheric Illumination",
        caption:
          "Full venue lighting with ambient color and dynamic stage atmosphere.",
        images: [
          "/images/Event Production & setup/venuelighting/lighting1.jpeg",
          "/images/Event Production & setup/venuelighting/lighting2.mp4",
          "/images/Event Production & setup/venuelighting/lighting3.jpeg",
          "/images/Event Production & setup/venuelighting/venue.jpg",
        ],
      },
    ],
  },
  "service-2": {
    title: "🎬 Media & Coverage",
    intro: "Professional media services for every event format.",
    description:
      "Everything related to capturing the event, from cinematic video to on-site photography.",
    bullets: [
      { label: "Videography", mediaId: "media-videography" },
      { label: "Photography", mediaId: "media-photography" },
    ],
    mediaCards: [
      {
        id: "media-videography",
        title: "Videography",
        subtitle: "Cinematic Coverage",
        caption:
          "Capture every moment with cinematic video, creative shots, and powerful storytelling.",
        images: [
          "/images/Media&Coverage/videography/video1.mp4",
          "/images/Media&Coverage/videography/video2.mp4",
          "/images/Media&Coverage/videography/video3.mp4",
          "/images/Media&Coverage/videography/video4.mp4",
          "/images/Media&Coverage/videography/video5.mp4",
          "/images/Media&Coverage/videography/video6.mp4",
        ],
      },
      {
        id: "media-photography",
        title: "Photography",
        subtitle: "Live Event Shoots",
        caption:
          "Professional photography that captures atmosphere, guests, and highlights in every frame.",
        images: [
          "/images/Media&Coverage/photography/",
          "/images/Event Production & setup/venue-lighting.jpg",
          "/images/Event Production & setup/stage-setup.jpg",
        ],
      },
    ],
  },
  "service-3": {
    title: "💡 Stage Effects & Special Effects",
    intro: "Enhancing the experience with effects and immersive atmosphere.",
    description:
      "We bring stage energy to life through dramatic effects, safe pyrotechnics, and visual impact.",
    bullets: [
      {
        label: "Blasters,blowers,coldfires,dry ice effects",
        mediaId: "effects-blasters-blowers-coldfires-dry-ice",
      },
    ],
    mediaCards: [
      {
        id: "effects-blasters-blowers-coldfires",
        title: "Blasters, Blowers & Cold Fires",
        subtitle: "Safe Flame Effects",
        caption:
          "Safe, controlled cold fire effects for indoor and outdoor use, adding dramatic flair without the heat.",
        images: [
          "/images/StageEffects& SpecialEffects/blasters&blowers&coldfires/blasters.jpeg",
          "/images/StageEffects& SpecialEffects/blasters&blowers&coldfires/blowers.mp4",
        ],
      },
      {
        id: "effects-blasters",
        title: "Blasters",
        subtitle: "Jet and Smoke Effects",
        caption:
          "CO₂ and air blast effects for high-energy moments, drops, and reveal sequences.",
        images: [
          "images/StageEffects& SpecialEffects/dry ice effects/dry-ice.mp4",
        ],
      },
      {
        id: "effects-dry-ice",
        title: "Dry Ice Effects",
        subtitle: "Low Fog Atmosphere",
        caption:
          "Dense, theatrical dry ice fog that fills the stage with dramatic low-level atmosphere.",
        images: [
          "images/StageEffects& SpecialEffects/dry ice effects/dry-ice.mp4",
        ],
      },
    ],
  },
  "service-4": {
    title: "🏗️ Government & Infrastructure Contracting",
    intro:
      "Public and government-related installations for large-scale events.",
    description:
      "We deliver infrastructure systems with full compliance for government events and public installations.",
    bullets: [
      { label: "Electrical installations", mediaId: "infra-electrical" },
      { label: "Street pole lighting", mediaId: "infra-street-poles" },
    ],
    mediaCards: [
      {
        id: "infra-electrical",
        title: "Electrical Installations",
        subtitle: "Full Power Infrastructure",
        caption:
          "Complete electrical installation services for public events and government facilities.",
        images: [
          "/images/govt&infrastructure/electrical installations/electric.jpeg",
          "/images/govt&infrastructure/electrical installations/image.png",
          "/images/govt&infrastructure/electrical installations/mic.jpeg",
          "/images/govt&infrastructure/electrical installations/install2.jpeg",
        ],
      },
      {
        id: "infra-street-show",
        title: "Street show & Lighting",
        subtitle: "Public Road Lighting",
        caption:
          "Street pole lighting solutions for government installations and outdoor events.",
        images: [
          "/images/govt&infrastructure/streetpolelights/lights.jpeg",
          "/images/govt&infrastructure/streetpolelights/street2.mp4",
          "/images/govt&infrastructure/streetpolelights/street4.mp4",

          "/images/govt&infrastructure/streetpolelights/streetshow.mp4",
        ],
      },

      {
        id: "infra-ac & cctv",
        title: "Air Conditioning & cctv",
        subtitle: "Climate Control",
        caption:
          "AC & CCTV  for government and public event venues requiring reliable cooling plus security.",
        images: [
          "/images/govt&infrastructure/ac&cctv/ac.jpeg",
          "/images/govt&infrastructure/ac&cctv/cctv.jpeg",
        ],
      },
    ],
  },
 
  
};
