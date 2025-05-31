export const ROUTES = {
  HOME: "/",
  PROJECT: "/project",
  TODO_LIST: "/project/todo-list",
  CALENDAR: "/project/calendar",
  SITESTACK: '/siteStack',
  NOTFOUND: '*'
} as const;

export type AppRoutes = typeof ROUTES;