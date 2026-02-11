<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToQuiz = () => {
  router.push('/quiz')
}
</script>

<template>
  <div class="pt-4 pb-20 px-2">
    <section
      class="relative overflow-hidden rounded-[26px] border border-neutral-800/80 bg-gradient-to-b from-zinc-900/90 via-black/90 to-black shadow-zen-card px-6 py-7"
    >
      <div
        class="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-zen-gold/15 blur-3xl"
      />
      <div
        class="pointer-events-none absolute bottom-0 -left-12 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl"
      />

      <p class="text-[11px] tracking-[0.28em] text-neutral-400 uppercase">
        TCM · FIVE ELEMENTS
      </p>
      <h1
        class="mt-3 text-3xl leading-snug font-display tracking-[0.18em] text-zen-gold drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]"
      >
        缘融轩 · 寻香问诊
      </h1>
      <p class="mt-3 text-[13px] leading-relaxed text-neutral-300">
        通过
        <span class="text-zen-gold">9 个核心问题</span>
        ，洞察您的
        <span class="text-zen-gold">五行体质</span>
        ，为您匹配专属
        <span class="text-zen-gold">中式香薰调理方案</span>
        。
      </p>

      <div class="mt-5 flex items-center gap-3 text-[11px] text-neutral-400">
        <div class="flex -space-x-2">
          <span
            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-200/40 bg-amber-50/90 text-[10px] font-medium text-amber-900"
          >
            木
          </span>
          <span
            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-emerald-200/40 bg-emerald-50/90 text-[10px] font-medium text-emerald-900"
          >
            火
          </span>
          <span
            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-sky-200/40 bg-sky-50/90 text-[10px] font-medium text-sky-900"
          >
            水
          </span>
          <span
            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300/40 bg-slate-50/90 text-[10px] font-medium text-slate-900"
          >
            金
          </span>
          <span
            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-300/40 bg-amber-50/90 text-[10px] font-medium text-amber-900"
          >
            土
          </span>
        </div>
        <p>五行失衡，会悄悄写在睡眠、情绪与气色里。</p>
      </div>

      <button
        type="button"
        class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-6 py-3.5 text-[15px] font-medium tracking-[0.25em] text-neutral-900 shadow-[0_10px_40px_rgba(250,204,21,0.55)] active:scale-[0.98] transition"
        @click="goToQuiz"
      >
        开始测试
      </button>

      <p class="mt-3 text-center text-[11px] text-neutral-400">
        约 <span class="text-zen-gold">60 秒</span> ·
        <span class="text-zen-gold">9 题</span> 即可完成
      </p>
    </section>

    <section class="mt-6 grid grid-cols-2 gap-3 text-[11px] text-neutral-300">
      <div class="rounded-2xl border border-neutral-800/80 bg-black/40 px-4 py-3">
        <p class="text-neutral-400">根据</p>
        <p class="mt-1 text-sm text-zen-gold">中医五行理论</p>
        <p class="mt-1.5 leading-relaxed">
          通过睡眠、情绪、消化等 9 项指标，综合判断您的
          <span class="text-zen-gold">五行偏盛或不足</span>
          。
        </p>
      </div>

      <div class="rounded-2xl border border-neutral-800/80 bg-black/40 px-4 py-3">
        <p class="text-neutral-400">结合</p>
        <p class="mt-1 text-sm text-zen-gold">宫廷合香配方</p>
        <p class="mt-1.5 leading-relaxed">
          为您推荐
          <span class="text-zen-gold">对应经络与脏腑</span>
          的香方，帮助缓解失眠、焦虑、乏力等问题。
        </p>
      </div>
    </section>
  </div>
</template>

