import instance from '@/utils/request.js'

// 登录验证码
export function getSms(data){
    return instance.request({
        method: 'post',
        url: '/getSms/',
        data:data
    })
}