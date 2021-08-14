import { asElementTypes } from "../helpers/as-element-types"

enum top {
  tshirt = 'tshirt',
  hoodie = 'hoodie',
  jacket = 'jacket',
  raincoat = 'raincoat',
  tanktop = 'tanktop',
  shirt = 'shirt'
}

enum bottom {
  longtrousers = 'longtrousers',
  shorts = 'shorts',
  jeans = 'jeans'
}

export type Outfit = {
  top: top | `${top}/${top}`;
  bottom: bottom | `${bottom}/${bottom}`;
}



export const outfits = asElementTypes<Outfit>().createObject({
  hot: {
    top: `${top.tshirt}/${top.tanktop}`,
    bottom: bottom.shorts
  },
  medium: {
    top: `${top.hoodie}/${top.shirt}`,
    bottom: bottom.shorts
  },
  cold: {
    top: `${top.hoodie}/${top.jacket}`,
    bottom: `${bottom.longtrousers}/${bottom.jeans}`
  },
  rain: {
    top: `${top.raincoat}/${top.jacket}`,
    bottom: `${bottom.longtrousers}/${bottom.jeans}`
  },
})

export type OutfitConditions = {
  temp: number,
  feelsLike: number,
  tempMin: number,
  windSpeed: number
} 

const isSunnyTemp = (temp: number) => temp > 20;
const isColdTemp = (temp: number) => temp < 10
const isWindy = (windSpeed: number) => windSpeed > 100 

export const getOutfitSuggestion = (conditions: OutfitConditions): Outfit  => {
  const { tempMin, feelsLike, windSpeed } = conditions;

  if(isSunnyTemp(feelsLike) && isSunnyTemp(tempMin)) {
    if(isWindy(windSpeed)) outfits.medium
    return outfits.hot
  }

  if(isColdTemp(feelsLike) && isColdTemp(tempMin)) {
    return outfits.cold
  }

  if(isWindy(windSpeed)) return outfits.cold
  return outfits.medium
}