import { useRouter } from 'next/router'

const Recipe = (recipe) => {
  const pageState = "view";
  const viewableRecipe = recipe.recipe;
  const editableRecipe = recipe.recipe;

  return (
    <div className="border-b-2 border-gray-300 py-2">
      <div className="h-full flex-col md:flex md:flex-row md:justify-between md:items-start">
        <div className="order-1 md:order-2">
          <span className={viewableRecipe.imageLink ? "" : `hidden`}>
            <img 
              className="w-full h-56 md:h-72 md:w-72 lg:w-96 lg:h-64 object-cover rounded-lg" 
              src={viewableRecipe.imageLink} 
              alt="Recipe Image" 
              />
          </span>
          <span  className={!viewableRecipe.imageLink ? "" : `hidden`}>
            <img 
              className="w-full h-56 md:h-72 md:w-72 lg:w-96 lg:h-64 object-cover rounded-lg" 
              src="@/assets/images/recipe-placeholder.jpg"
              alt="Recipe Image" 
              />
          </span>
        </div>

        <div
          className="order-2 flex flex-col flex-1 px-2 h-full md:h-72 lg:h-64 md:flex-col md:justify-between md:order-1 md:w-1/2 lg:w-3/4"
        >
          <div className="flex-1 min-w-0">
            <div className={pageState=='edit' ? "" : "hidden"}>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                  </svg>
                </div>
                <label for="title" className="sr-only">title</label>
                <input 
                  id="title"
                  value={editableRecipe.title}
                  className="form-input block w-full pl-10 sm:text-sm sm:leading-5 py-2 mt-1 lg:py-1" 
                  placeholder="The Best Recipe Ever" />
              </div>
            </div>
            <h1
            className={pageState=='edit' ? "hidden" : "pt-2 text-2xl font-bold leading-7 text-gray-900 truncate md:pt-0 md:text-3xl md:leading-9 md:break-words"}
            >{viewableRecipe.title}</h1>
            <div className={pageState=='edit' ? "" : "hidden"}>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                  </svg>
                </div>
                <label for="recipeSourceLink" className="sr-only">recipe source link</label>
                <input 
                  id="recipeSourceLink"
                  value={editableRecipe.recipeSourceLink}
                  className="form-input block w-full pl-10 sm:text-sm sm:leading-5 py-2 mt-1 lg:py-1" 
                  placeholder="https://www.allrecipes.com" />
              </div>
            </div>
            <a
            href={viewableRecipe.recipeSourceLink}
            target="_blank"
            className={`${pageState=='edit' ? "hidden" : "mt-2 pt-1 flex items-center hover:underline cursor-pointer"}`}>
              <svg
                className={`${viewableRecipe.recipeSourceLink.length > 0 ? "flex-shrink-0 h-5 w-5 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" : "hidden"}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                />
              </svg>

              {/* <p className={`${pageState =='edit' ? "hidden" : "pl-2 text-sm w-64 sm:w-154 truncate"}`}> */}
              <p className="pl-2 text-sm w-64 sm:w-154 truncate">
                {getLinkHost(viewableRecipe.recipeSourceLink)}
                {/* {viewableRecipe.recipeSourceLink} */}
              </p>
            </a>
            <div className={pageState=='edit' ? "" : "hidden"}>
              <label
                for="description"
                className="mt-3 block font-medium leading-5 text-gray-700"
              >Description</label>
              <textarea
                rows="3"
                id="description"
                placeholder="Put whatever description you'd like to have for your recipe here."
                v-model="editableRecipe.description"
                className="h-28 md:h-24 mt-1 form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 py-2 px-2 lg:py-1 rounded-md shadow-sm resize-none"
              />
            </div>
            <p
              className={`${pageState=='edit' ? "hidden" : "mt-3 text-sm leading-5 overflow-y-auto max-h-24 md:max-h-32"}`}
            >{viewableRecipe.description}</p>
          </div>
          {/* <recipe-actions className="mt-3 lg:mt-2" @emitRecipeAction="performRecipeAction" /> */}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5001/api/v1/recipes/${context.query.recipeId}`)
  const recipe = await res.json()

  // Pass recipe to the page via props
  return { props: { recipe } }
}

function getLinkHost(url) {
  try{
    if(url != null){
      return new URL(url).host;
    }
  }
  catch(_){
    return url;
  }
}

export default Recipe
