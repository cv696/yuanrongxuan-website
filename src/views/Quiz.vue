<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ElementType } from '../data/logic'
import { QUESTIONS } from '../data/logic'

const router = useRouter()

const currentIndex = ref(0)

const scores = ref<Record<ElementType, number>>({
  Metal: 0,
  Wood: 0,
  Water: 0,
  Fire: 0,
  Earth: 0,
})

const total = QUESTIONS.length

const currentQuestion = computed(() => QUESTIONS[currentIndex.value] ?? QUESTIONS[0])

const progressPercent = computed(() => Math.round(((currentIndex.value + 1) / total) * 100))

const handleSelect = (optionIndex: number) => {
  const question = currentQuestion.value!
  const option = question.options[optionIndex]!
  const score = option.score as Partial<Record<ElementType, number>>

  ;(Object.keys(score) as ElementType[]).forEach((key) => {
    scores.value[key] += score[key] ?? 0
  })

  if (currentIndex.value < total - 1) {
    currentIndex.value += 1
  } else {
    const query: Record<string, string> = {}
    ;(Object.keys(scores.value) as ElementType[]).forEach((key) => {
      query[key.toLowerCase()] = String(scores.value[key])
    })
    router.push({ path: '/result', query })
  }
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="pt-2 pb-24">
    <div class="px-3">
      <div class="mb-3 flex items-center justify-between text-[11px] text-neutral-400">
        <button
          type="button"
          class="inline-flex items-center gap-1 rounded-full border border-neutral-700/80 px-3 py-1.5 text-[11px] text-neutral-300 hover:border-neutral-500/80 active:scale-[0.97] transition"
          @click="goBack"
        >
          <span class="inline-block h-4 w-4 rounded-full border border-neutral-600/80 flex items-center justify-center text-[10px] leading-none">
            ←
          </span>
          返回
        </button>

        <div class="flex items-center gap-1">
          <span class="text-zen-gold">{{ currentIndex + 1 }}/{{ total }}</span>
          <span>题</span>
        </div>
      </div>

      <div class="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800/90">
        <div
          class="h-full rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 transition-all duration-300 ease-out"
          :style="{ width: progressPercent + '%' }"
        />
      </div>

      <p class="mt-2 text-right text-[11px] text-neutral-400">
        进度 <span class="text-zen-gold">{{ progressPercent }}%</span>
      </p>
    </div>

    <div v-if="currentQuestion" class="mt-5 px-4">
      <p class="text-[12px] tracking-[0.28em] text-neutral-400 uppercase">
        五行问诊 · Question {{ currentIndex + 1 }}
      </p>
      <p class="mt-3 text-[16px] leading-relaxed font-medium text-neutral-50">
        {{ currentQuestion.text }}
      </p>

      <p class="mt-2 text-[11px] text-neutral-500">
        请根据最近
        <span class="text-zen-gold">1 个月</span>
        的真实状态选择，系统将自动为您计算偏颇的
        <span class="text-zen-gold">五行属性</span>
        。
      </p>
    </div>

    <div v-if="currentQuestion" class="mt-6 space-y-3 px-3">
      <button
        v-for="(option, idx) in currentQuestion.options"
        :key="idx"
        type="button"
        class="group w-full rounded-2xl border border-neutral-800/90 bg-black/40 px-4 py-3.5 text-left shadow-sm transition hover:border-amber-400/70 hover:bg-amber-500/10 active:scale-[0.99]"
        @click="handleSelect(idx)"
      >
        <div class="flex items-center gap-3">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/80 text-[11px] text-neutral-300 group-hover:border-amber-400/80 group-hover:text-amber-300"
          >
            {{ String.fromCharCode(65 + idx) }}
          </div>
          <p class="text-[14px] leading-relaxed text-neutral-100 group-hover:text-amber-100">
            {{ option.label }}
          </p>
        </div>
      </button>
    </div>

    <div class="mt-7 px-4 text-[11px] text-neutral-500">
      <p>提示：本测评不作医疗诊断，仅作为了解体质与香薰调理方向的参考。</p>
    </div>
  </div>
</template>

