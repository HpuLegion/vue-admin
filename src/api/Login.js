import instance from '@/utils/request.js'

// 验证码
export function getSms(data){
    return instance.request({
        method: 'post',
        url: '/getSms/',
        data:data
    })
}

//注册
export function userRegister(data){
    return instance.request({
        method: 'post',
        url: '/register/',
        data:data
    })
}

//登录
export function userLogin(data){
    return instance.request({
        method: 'post',
        url: '/login/',
        data:data
    })
}

//
