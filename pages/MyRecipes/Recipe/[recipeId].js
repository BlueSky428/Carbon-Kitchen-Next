import { useRouter } from 'next/router'

const Recipe = () => {
  const router = useRouter()
  const { recipeId } = router.query

  return <p>Recipe: {recipeId}</p>
}

export default Recipe
