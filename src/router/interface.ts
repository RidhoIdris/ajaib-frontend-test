/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CompnentMiddlewareInterface {
  path: string;
  exact: boolean;
  title: string;
  type: string;
  component: any
}
export interface RouterPropsInterface {
  history: any;
}
