import CrudCloseBtn from "../../snippets/crud-close"

const DashboardHeader = () => {
    return(
        <div className="flex justify-between items-center mb-4 sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add new event
              </h3>
             <CrudCloseBtn />
        </div>
    )
}

export default DashboardHeader