import React, { useState } from "react";
import Link from 'next/link'
import Transition from "../../../components/Transition";
import PencilAlt from 'heroicons/solid/pencil-alt.svg';
import XCircle from 'heroicons/solid/x-circle.svg';
import ChevronLeft from 'heroicons/solid/chevron-left.svg';
import Calendar from 'heroicons/outline/calendar.svg';
import ClipboardList from 'heroicons/outline/clipboard-list.svg';
import Save from '@fortawesome/fontawesome-free/svgs/regular/save.svg'

function Recipe(recipe) {
  const [pageState, setPageState] = useState("view");
  const viewableRecipe = recipe.recipe;
  const editableRecipe = recipe.recipe;

  const updatePageState = (state) => {
    if(state === 'edit' )
      setPageState(state);
    else
    setPageState('view');      
  } 

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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                value={editableRecipe.description}
                className="h-28 md:h-24 mt-1 form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 py-2 px-2 lg:py-1 rounded-md shadow-sm resize-none"
              />
            </div>
            <p
              className={`${pageState=='edit' ? "hidden" : "mt-3 text-sm leading-5 overflow-y-auto max-h-24 md:max-h-32"}`}
            >{viewableRecipe.description}</p>
          </div>
          <div className="mt-3 lg:mt-2"> {/*can't get classname to register on RecipeActions component */}
            <RecipeActions pageState = {pageState} updatePageState = {updatePageState} />
          </div>
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

function RecipeActions({pageState, updatePageState}){
  const [open, moreActions] = useState(false);

  function editRecipe(pageState){
    console.log("a");
    console.log(pageState);
    () => updatePageState(pageState); // this isn't referencing the actual function being passed in as a prop
  }

  return(
    <div className="flex">
    <span className="shadow-sm rounded-md">
      <Link
        href="/myrecipes"
        >
        <a
          type="button"
          className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
          <ChevronLeft className="h-5 w-5 text-gray-500" />
          <p className="hidden sm:block sm:pl-2 md:hidden lg:block">Back</p>
        </a>
      </Link>
    </span>

    <span className={`${pageState=='view' ? 'ml-1 sm:ml-2 md:ml-1 lg:ml-2 shadow-sm rounded-md' : 'hidden'}`}>
      <button
        onClick={() => updatePageState('edit')}
        type="button"
        className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
      >
        <PencilAlt className="h-5 w-5 text-gray-500"/>
        <p className="hidden sm:block sm:pl-2 md:hidden lg:block">Edit</p>
      </button>
    </span>

    <span className={pageState=='edit' ? 'ml-1 sm:ml-2 md:ml-1 lg:ml-2 shadow-sm rounded-l-md' : 'hidden'}>
      <button
        onClick={saveRecipe()}
        type="button"
        className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-l-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
      >        
        <Save className ="h-5 w-5 fill-current" />
        {/* <p v-if="this.saving" className="hidden sm:block sm:pl-2 md:hidden lg:block">Saving...</p>
        <p v-else className="hidden sm:block sm:pl-2 md:hidden lg:block">Save</p> */}
      </button>
    </span>

    <span className={pageState=='edit' ? "shadow-sm rounded-r-md" : "hidden"}>
      <button
        onClick={() => updatePageState('cancel')}
        type="button"
        className="-ml-px inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
      >
        <XCircle className="h-5 w-5 text-gray-500" />
        <p className="hidden sm:block sm:pl-2 md:hidden lg:block">Cancel</p>
      </button>
    </span>

    <span className="ml-1 sm:ml-2 md:ml-1 lg:ml-2 shadow-sm rounded-md">
      <button
        type="button"
        className={`${pageState != 'view' ? 'opacity-50 cursor-not-allowed' : ''} inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out`}
      >
        <Calendar className="h-5 w-5 text-gray-500" />
        <p className="hidden sm:block sm:pl-2 md:hidden lg:block">Plan</p>
      </button>
    </span>

    <span className="ml-1 sm:ml-2 md:ml-1 lg:ml-2 shadow-sm rounded-md">
      <button
        type="button"
        className={`${pageState != 'view' ? 'opacity-50 cursor-not-allowed' : ''} inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out`}
      >
        <ClipboardList className="h-5 w-5 text-gray-500" />
        <p className="hidden sm:block sm:pl-2 md:hidden lg:block">Shop</p>
      </button>
    </span>

    <span
      className="ml-1 sm:ml-2 md:ml-1 lg:ml-2 relative shadow-sm rounded-md sm:hidden md:block lg:hidden"
    >
      <button
        onClick={() => moreActions(!open)}
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
      >
        More
        <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`${open ? "" : "hidden"} origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg`}
        >
          <div className="py-1 rounded-md bg-white shadow-xs">
            <a
              href="#"
              className="flex justify-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                />
              </svg>
              Edit
            </a>
            <a
              href="#"
              className="flex justify-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>Plan
            </a>
          </div>
        </div>
      </Transition>
    </span>
  </div>
  )
}


function cancelUpdate(){
  
}

function saveRecipe(){
  
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
