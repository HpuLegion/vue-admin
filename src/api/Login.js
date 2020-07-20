import instance from '@/utils/request.js'

// 登录验证码
export function getSms(data){
    instance.request({
        method: 'post',
        url: '/getSms/',
        data:data
    })
}