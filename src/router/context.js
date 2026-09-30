import { createContext, useContext } from 'react'

export const RouterContext = createContext(null)

/** { route, navigate, openProject } */
export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRouter doit être utilisé dans <RouterProvider>')
  return context
}
