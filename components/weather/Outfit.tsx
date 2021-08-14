import React, { memo } from 'react'
import { getOutfitSuggestion, OutfitConditions } from '../../models/outfit'

type Props = OutfitConditions

export const Outfit = memo((props: Props) => {
  const outfit = getOutfitSuggestion(props)
  return (
    <section>
      <h3>Outfit</h3>
      <p>top: {outfit.top}</p>
      <p>bottom: {outfit.bottom}</p>
    </section>
  )
})
