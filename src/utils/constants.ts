/**
 * Created by 芋道源码
 *
 * 枚举类
 */

// 全局通用状态枚举
export const CommonStatusEnum = {
  ENABLE: 0, // 开启
  DISABLE: 1 // 禁用
}

/**
 * 用户的社交平台的类型枚举
 */
export const SystemUserSocialTypeEnum = {
  DINGTALK: {
    title: '钉钉',
    type: 20,
    source: 'dingtalk'
  },
  WECHAT_ENTERPRISE: {
    title: '企业微信',
    type: 30,
    source: 'wechat_enterprise'
  }
}

/**
 * 支付渠道枚举
 */
export const PayChannelEnum = {
  WX_PUB: {
    code: 'wx_pub',
    name: '微信 JSAPI 支付'
  },
  WX_LITE: {
    code: 'wx_lite',
    name: '微信小程序支付'
  },
  WX_APP: {
    code: 'wx_app',
    name: '微信 APP 支付'
  },
  ALIPAY_PC: {
    code: 'alipay_pc',
    name: '支付宝 PC 网站支付'
  },
  ALIPAY_WAP: {
    code: 'alipay_wap',
    name: '支付宝 WAP 网站支付'
  },
  ALIPAY_APP: {
    code: 'alipay_app',
    name: '支付宝 APP 支付'
  },
  ALIPAY_QR: {
    code: 'alipay_qr',
    name: '支付宝扫码支付'
  }
}

/**
 * 支付类型枚举
 */
export const PayType = {
  WECHAT: 'WECHAT',
  ALIPAY: 'ALIPAY'
}

/**
 * 支付订单状态枚举
 */
export const PayOrderStatusEnum = {
  WAITING: {
    status: 0,
    name: '未支付'
  },
  SUCCESS: {
    status: 10,
    name: '已支付'
  },
  CLOSED: {
    status: 20,
    name: '未支付'
  }
}

/**
 * 支付订单回调状态枚举
 */
export const PayOrderNotifyStatusEnum = {
  NO: {
    status: 0,
    name: '未通知'
  },
  SUCCESS: {
    status: 10,
    name: '通知成功'
  },
  FAILURE: {
    status: 20,
    name: '通知失败'
  }
}

/**
 * 支付订单退款状态枚举
 */
export const PayOrderRefundStatusEnum = {
  NO: {
    status: 0,
    name: '未退款'
  },
  SOME: {
    status: 10,
    name: '部分退款'
  },
  ALL: {
    status: 20,
    name: '全部退款'
  }
}

/**
 * 支付退款订单状态枚举
 */
export const PayRefundStatusEnum = {
  CREATE: {
    status: 0,
    name: '退款订单生成'
  },
  SUCCESS: {
    status: 1,
    name: '退款成功'
  },
  FAILURE: {
    status: 2,
    name: '退款失败'
  },
  PROCESSING_NOTIFY: {
    status: 3,
    name: '退款中，渠道通知结果'
  },
  PROCESSING_QUERY: {
    status: 4,
    name: '退款中，系统查询结果'
  },
  UNKNOWN_RETRY: {
    status: 5,
    name: '状态未知，请重试'
  },
  UNKNOWN_QUERY: {
    status: 6,
    name: '状态未知，系统查询结果'
  },
  CLOSE: {
    status: 99,
    name: '退款关闭'
  }
}
