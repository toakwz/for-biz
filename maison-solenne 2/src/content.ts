// All copy and image slots live here so you can change them in one place.
// Image slots: set `src` to a photo URL (or a file in /public). While `src` is
// empty a dark champagne gradient placeholder is shown, with the brief as a caption.

export const images = {
  hero: {
    src: "",
    brief: "Faceted perfume bottle, amber liquid, golden caustics on dark stone",
  },
  featured: {
    src: "",
    brief: "Close-up of leaves and dark wood with morning dew, moody macro",
  },
  ingredients: {
    src: "",
    brief: "Fields of Grasse jasmine at dawn, soft haze, warm golden light",
  },
  perfumer: { src: "", brief: "Portrait of Camille Arnaud in her studio" },
  discovery: { src: "", brief: "Linen-bound case with four 2ml vials" },
  tiles: [
    { src: "", brief: "CEDAR bottle" },
    { src: "", brief: "Lumière d'Ambre bottle" },
    { src: "", brief: "Jasmin de Nuit bottle" },
    { src: "", brief: "Pluie Minérale bottle" },
  ],
};

export const collection = [
  { name: "CEDAR", family: "Woody · Green", size: "50ml", price: "€185" },
  { name: "Lumière d'Ambre", family: "Amber · Resinous", size: "50ml", price: "€195" },
  { name: "Jasmin de Nuit", family: "White Floral", size: "50ml", price: "€185" },
  { name: "Pluie Minérale", family: "Fresh · Mineral", size: "50ml", price: "€175" },
];

export const featured = {
  name: "CEDAR",
  story:
    "An evening in a walled garden in Provence, after the heat of the day has gone. Crushed fig leaves, the milky sap of unripe fruit, and the dark wood of an old bench still warm from the sun.",
  top: "Bergamot · Fig leaf · Black pepper",
  heart: "fig milk · iris · violet leaf",
  base: "cedar · tonka · smoked vetiver",
  sizes: "50ml €185 · 100ml €260",
  button: "Discover CEDAR",
};

export const ingredients = ["Jasmine from Grasse", "Iris from Florence", "Vetiver from Haiti"];
