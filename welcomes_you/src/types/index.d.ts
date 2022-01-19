export interface BaseRoute {
  path: string;
  Component: () => JSX.Element;
  routes?: Routes;
}
export type BaseRoutes = Array<BaseRoute>;
