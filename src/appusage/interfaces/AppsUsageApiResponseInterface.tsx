import AppUsageInterface from "./AppUsageInterface";

interface AppsUsageApiResponseInterface {
  items: AppUsageInterface[]
  itemsPerPage: number
  totalItems: number
}

export default AppsUsageApiResponseInterface
