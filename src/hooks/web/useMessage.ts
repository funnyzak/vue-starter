export const useMessage = () => {
  return {
    // 消息提示
    info(content: string) {
      alert(content)
    },
    // 错误消息
    error(content: string) {
      alert(content)
    },
    // 成功消息
    success(content: string) {
      alert(content)
    },
    // 警告消息
    warning(content: string) {
      alert(content)
    },
    // 弹出提示
    alert(content: string) {
      alert(content)
    },
    // 错误提示
    alertError(content: string) {
      alert(content)
    },
    // 成功提示
    alertSuccess(content: string) {
      alert(content)
    },
    // 警告提示
    alertWarning(content: string) {
      alert(content)
    },
    // 通知提示
    notify(content: string) {
      alert(content)
    },
    // 错误通知
    notifyError(content: string) {
      alert(content)
    },
    // 成功通知
    notifySuccess(content: string) {
      alert(content)
    },
    // 警告通知
    notifyWarning(content: string) {
      alert(content)
    },
    // 确认窗体
    confirm(content: string, _tip: string) {
      alert(_tip + content)
    },
    // 提交内容
    prompt(content: string, _tip: string) {
      alert(_tip + content)
    }
  }
}
