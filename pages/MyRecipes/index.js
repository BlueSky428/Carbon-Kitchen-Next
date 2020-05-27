import { useState } from "react";
import Link from 'next/link'

function MyRecipes({recipes}){
  let recipeCount = recipes.length;
  
  return(
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="mt-2 flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">My Recipes</h1>
          {/* <button
            @click="createNewRecipe()"
            type="button"
            className="w-full sm:w-auto flex items-center justify-center inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="pl-2">Add Recipe</p>
          </button> */}
      </div>
      <div className="mt-5 bg-white shadow overflow-hidden sm:rounded-md">
        <div 
          className={recipeCount > 0 ? "hidden" : `px-8 py-12 text-gray-400 rounded-lg border-4 shadow-lg`}>
          <div className="flex justify-center items-center">
            <svg className="w-16 h-16 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <p className="text-lg font-semibold pl-4">
              It looks like you don't have any recipes at the moment. Try and add your first recipe!
            </p>
          </div>
        </div>

        <ul
          className={recipeCount <= 0 ? "hidden" : ``}>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <div
                className="group block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div className="flex items-center px-4 py-4">
                  <Link
                    href={`/myrecipes/recipe/${recipe.recipeId}`}
                    >
                    <a
                      target="_blank"
                      className="min-w-0 flex-1 flex items-center"
                    >
                      <div className="flex-shrink-0">
                        <img className="h-20 w-20 object-cover rounded-full" src={recipe.imageLink} alt="TBD Image Placeholder" />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <div
                            className="font-semibold text-gray-600 truncate group-hover:text-red-500"
                          >{recipe.title}</div>
                          <div className="mt-2 flex items-center sm:text-sm sm:leading-5 text-gray-500">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4 text-gray-400 flex-shrink-0"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                            <div
                              // href={recipe.recipeSourceLink}
                              // className="pl-1 truncate hover:underline"
                              className="pl-1 truncate"
                            >{recipe.recipeSourceLink}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:5001/api/v1/recipes/`)
    const recipes = await res.json()
  
    // Pass recipes to the page via props
    return { props: { recipes } }
}

function RecipeListCard(recipe){
  return (
    <div
      className="group block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div className="flex items-center px-4 py-4">
        <Link
          href={`/myrecipes/recipe/${recipe.recipeId}`}
          >
          <a
            target="_blank"
            className="min-w-0 flex-1 flex items-center"
          >
            <div className="flex-shrink-0">
              <img className="h-20 w-20 object-cover rounded-full" src={recipe.imageLink} alt="" />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <div
                  className="font-semibold text-gray-600 truncate group-hover:text-red-500"
                >{recipe.title}</div>
                <div className="mt-2 flex items-center sm:text-sm sm:leading-5 text-gray-500">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <div
                    href={recipe.recipeSourceLink}
                    className="pl-1 truncate hover:underline"
                  >{recipe.recipeSourceLink}</div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MyRecipes;