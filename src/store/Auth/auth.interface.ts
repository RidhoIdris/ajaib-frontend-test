export type UserState = {
    token:string | null,
    meta: {
        latlong:string | null,
        device_token:string | null,
        device_type:number | null
    },
    user:{
        id:string | null,
        phone:string | null
    }

}
