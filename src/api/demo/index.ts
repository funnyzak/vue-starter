import { useAxios } from '@/hooks/web/useAxios'
import type { PostVO } from './types'

const request = useAxios()

// 获取POST
export const getPosts = () => {
  return request.get<PostVO[]>({ url: '/posts' })
}
