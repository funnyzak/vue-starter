<script lang="tsx">
import { defineComponent } from 'vue'
import { useRenderLayout } from './components/useRenderLayout'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

const renderLayout = () => {
  const { renderLayout } = useRenderLayout()

  return renderLayout()
}

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => <section class={[prefixCls, 'w-[100%] h-[100%] relative']}>{renderLayout()}</section>
  }
})
</script>
