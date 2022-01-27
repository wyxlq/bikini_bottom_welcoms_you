export interface BaseRoute {
  path: string;
  Component: () => JSX.Element;
  routes?: Array<BaseRoute>;
}
export type BaseRoutes = Array<BaseRoute>;
export interface BaseCharacter {
  code: string;
  name: string;
}
export type BaseCharacters = Array<BaseCharacter>;
export interface BaseLocation {
  code: string;
  name: string;
  isInUse: boolean;
  userIds: Array<number>;
}
export type BaseLocations = Array<BaseLocation>;
export interface BaseUser {
  id: number;
  account: string;
  password: string;
  characterCode: string;
}
export type BaseUsers = Array<BaseUser>;
export interface TrafficLightProps {
  color: 'red' | 'green';
}
