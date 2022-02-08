export interface BaseRoute {
  path: string;
  routes?: BaseRoutes;
  Component?: () => JSX.Element;
}
export type BaseRoutes = Array<BaseRoute>;
