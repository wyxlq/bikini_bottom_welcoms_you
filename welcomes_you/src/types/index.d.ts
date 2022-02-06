export interface BaseRoute {
  path: string;
  Component?: () => JSX.Element;
  routes?: BaseRoutes;
}
export type BaseRoutes = Array<BaseRoute>;
