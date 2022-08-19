import request from "../utils/http";

//发布招标信息
export const publisInvite =(data: object) => request({
    url: '/bid/publish',
    method: 'POST',
    data
})

//获取招标内容信息
export const fetchBidInvite =(data: object) => request({
    url: '/bid/invites',
    method: 'POST',
    data
})
//更新招标信息内容
export const updateBidInvite =(data: object) =>({
    url: '/bid/update'
})