<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ElementType } from '../data/logic'
import { ELEMENT_TITLES, PRODUCTS } from '../data/logic'

const route = useRoute()
const router = useRouter()

const scores = computed<Record<ElementType, number>>(() => {
  const base: Record<ElementType, number> = {
    Metal: 0,
    Wood: 0,
    Water: 0,
    Fire: 0,
    Earth: 0,
  }

  ;(Object.keys(base) as ElementType[]).forEach((key) => {
    const value = Number(route.query[key.toLowerCase()] ?? 0)
    base[key] = Number.isFinite(value) && value >= 0 ? value : 0
  })

  return base
})

const dominantElement = computed<ElementType | null>(() => {
  let maxKey: ElementType | null = null
  let maxValue = -Infinity

  ;(Object.entries(scores.value) as [ElementType, number][]).forEach(([key, value]) => {
    if (value > maxValue) {
      maxValue = value
      maxKey = key
    }
  })

  if (!maxKey || maxValue <= 0) {
    return null
  }

  return maxKey
})

const dominantTitle = computed(() => {
  if (!dominantElement.value) return '整体均衡型'
  return ELEMENT_TITLES[dominantElement.value]
})

const relatedProducts = computed(() => {
  if (!dominantElement.value) return []
  return PRODUCTS.filter((p) => p.element === dominantElement.value)
})

const handlePlan = () => {
  // H5 里用弹窗即可，后期可换成跳转微信/客服
  window.alert('请联系您的专属团长')
}

const retake = () => {
  router.push('/quiz')
}

const backHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="pt-3 pb-24">
    <div class="px-4">
      <p class="text-[11px] tracking-[0.28em] text-neutral-400 uppercase">
        RESULT · 体质解析
      </p>

      <div
        class="mt-3 rounded-3xl border border-amber-400/60 bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-black/70 px-4 py-4 shadow-zen-card"
      >
        <p class="text-[11px] text-amber-200/90">您的五行体质是</p>
        <p class="mt-2 text-xl font-display tracking-[0.25em] text-zen-gold">
          {{ dominantTitle }}
        </p>

        <p class="mt-2 text-[12px] leading-relaxed text-neutral-100">
          <span v-if="dominantElement">
            当前状态以
            <span class="text-zen-gold">{{ dominantElement }}</span>
            属性较为突出，说明相关脏腑经络较为敏感，需要重点
            <span class="text-zen-gold">疏理与调养</span>。
          </span>
          <span v-else>
            从本次问答来看，您的整体状态较为
            <span class="text-zen-gold">均衡</span>
            ，可通过香薰温和辅助，巩固睡眠与情绪稳定。
          </span>
        </p>

        <div class="mt-3 grid grid-cols-5 gap-1.5 text-[10px] text-neutral-300">
          <div
            v-for="(v, key) in scores"
            :key="key"
            class="flex flex-col items-center gap-1 rounded-2xl bg-black/40 px-1.5 py-2"
          >
            <span class="text-[10px] text-neutral-400">{{ key }}</span>
            <div class="h-10 w-1.5 overflow-hidden rounded-full bg-neutral-800/80">
              <div
                class="h-full rounded-full bg-gradient-to-b from-amber-300 to-amber-500"
                :style="{ transform: `translateY(${Math.max(0, 100 - v * 33)}%)` }"
              />
            </div>
            <span class="text-[11px] text-zen-gold">{{ v }}</span>
          </div>
        </div>
      </div>

      <div class="mt-5 flex items-center justify-between text-[11px] text-neutral-400">
        <button
          type="button"
          class="rounded-full border border-neutral-700/80 px-3 py-1.5 hover:border-neutral-500/80 active:scale-[0.97] transition"
          @click="retake"
        >
          重新测试
        </button>
        <button
          type="button"
          class="rounded-full border border-neutral-700/80 px-3 py-1.5 hover:border-neutral-500/80 active:scale-[0.97] transition"
          @click="backHome"
        >
          返回首页
        </button>
      </div>
    </div>

    <div class="mt-6 px-3">
      <h2 class="px-1 text-[12px] font-medium tracking-[0.28em] text-neutral-300">
        香薰推荐 · RECOMMENDED BLENDS
      </h2>

      <div v-if="relatedProducts.length" class="mt-3 space-y-3">
        <article
          v-for="item in relatedProducts"
          :key="item.id"
          class="relative overflow-hidden rounded-2xl border border-neutral-800/90 bg-black/60 px-4 py-3.5"
        >
          <div
            class="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-amber-500/10 blur-3xl"
          />

          <p class="text-[11px] text-zen-gold/90">适合当前体质的香方</p>
          <p class="mt-1 text-[15px] font-medium text-amber-100">
            {{ item.name }}
          </p>
          <p class="mt-1 text-[11px] text-neutral-400">
            对应五行：
            <span class="text-zen-gold">{{ item.element }}</span>
          </p>
          <p class="mt-2 text-[12px] leading-relaxed text-neutral-100">
            {{ item.desc }}
          </p>

          <div class="mt-2 inline-flex items-center gap-1 rounded-full bg-neutral-900/70 px-2 py-1">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span class="text-[10px] text-neutral-400">可用于睡前、冥想、阅读时段熏香</span>
          </div>
        </article>
      </div>

      <div v-else class="mt-3 rounded-2xl border border-neutral-800/90 bg-black/50 px-4 py-4">
        <p class="text-[12px] text-neutral-200">
          本次未检测到明显偏颇的五行属性，您可以根据
          <span class="text-zen-gold">当前情绪与睡眠需求</span>
          自由选择喜欢的香型。
        </p>
      </div>
    </div>

    <div
      class="fixed inset-x-0 bottom-0 z-20 flex justify-center bg-gradient-to-t from-black via-black/80 to-transparent pb-5 pt-4"
    >
      <div class="w-full max-w-md px-4">
        <button
          type="button"
          class="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-6 py-3 text-[14px] font-medium tracking-[0.18em] text-neutral-900 shadow-[0_14px_45px_rgba(250,204,21,0.65)] active:scale-[0.98] transition"
          @click="handlePlan"
        >
          获取调理方案
        </button>
        <p class="mt-1.5 text-center text-[10px] text-neutral-400">
          私聊团长可获得更详细的体质解析与日常调养建议
        </p>
      </div>
    </div>
  </div>
</template>

