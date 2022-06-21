// 公共验证
export const REG = {
  regMobile: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,//验证手机号
  regFullname: /^[\u4e00-\u9fa5]{2,8}$/,//验证中文姓名
  regEmail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,//验证邮箱
  regCredentials: /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/,//验证身份证
  regPassport: /^[a-zA-Z]{5,17}$|^[a-zA-Z0-9]{5,17}$/,//护照身份证
  regHongKongMacao: /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/,//验证港澳通行证
  regTaiwan: /^[0-9]{8}$|^[0-9]{10}$/,//验证台湾通行证
  regLetters: /^[A-z]{2,}$/, // 必须是英文并且是两个字以上
  regOfficers: /^\w+$/, // 正英文数字，不限制字数 验证军官证
  regTaiwanCompatriots: /^\w+$/, // 正英文数字，不限制字数 验证台胞证
  regHometown: /^\w+$/, // 正英文数字，不限制字数 验证回乡证
  regAccount: /^\w{15,18}$/, // 正英文数字，不限制字数 验证户口本
}

const APPID = 'wx23fa6de658e63201' // 测试 appid

/**
 * 
// const GET_OPENID_ERROR = 11115;       //小程序获取openid失败
// const JWT_ERR = 11116;                //没有token或是token失效
// const VERIFY_ERROR = 11117;           //token存在但是校验数据失败
// const NOT_MOBILE = 11118;             //查无此手机账户
*/
export const HTTP_TOKEN_INVALID = 11116
export const HTTP_NOT_TOKEN = 11117