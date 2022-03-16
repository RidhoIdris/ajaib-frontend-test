interface onChange {
  value: string;
  label: string
}
// interface value {

// }
export interface MySelectPropsInterface{
  placeholder?:string,
  name:string,
  value?:onChange | '',
  onchange:(e:onChange)=>void
}
