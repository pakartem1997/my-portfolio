export const ROUTES = {
  HOME: "/",
  PROJECT: "/project",
  TODO_LIST: "/project/todo-list",
  SITESTACK: '/siteStack',
  NOTFOUND: '*'
} as const;

export type AppRoutes = typeof ROUTES;