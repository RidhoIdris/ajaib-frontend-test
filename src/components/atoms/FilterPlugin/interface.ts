interface Value {
  label:string;
  value:string
}

export interface FilterPluginInterface {
  setParams:(e:Value | '')=>void,
  value:Value|''
}
