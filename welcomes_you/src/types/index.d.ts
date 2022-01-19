export interface BaseRoute {
  title: string;
  path: string;
  Component: () => JSX.Element;
  routes?: Routes;
}
export type BaseRoutes = Array<BaseRoute>;
