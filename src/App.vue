<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-neutral-900 text-white flex justify-center">
    <div
      class="w-full max-w-md min-h-screen zen-gradient-bg shadow-2xl border-x border-neutral-800 relative"
    >
      <header class="pt-8 pb-4 px-6 flex items-center justify-between">
        <div>
          <p class="text-xs tracking-[0.3em] text-neutral-400 uppercase">YuanRongXuan</p>
          <p class="mt-1 text-[11px] text-neutral-500">Oriental Aroma · 五行调香</p>
        </div>
        <div
          class="w-9 h-9 rounded-full border border-zen-gold/50 flex items-center justify-center text-[10px] tracking-[0.25em] text-zen-gold"
        >
          香
        </div>
      </header>

      <main class="px-4 pb-6">
        <section
          class="mb-4 mx-2 rounded-3xl border border-neutral-800/80 bg-black/30 backdrop-blur-sm px-4 py-3 flex items-center justify-between"
        >
          <div>
            <p class="text-[11px] text-neutral-400">五行体质 · 香薰问诊</p>
            <p class="mt-0.5 text-[11px] text-neutral-500">约 1 分钟 · 9 题精测</p>
          </div>
          <div class="flex items-center gap-1.5 text-[10px] text-neutral-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
            <span>身心状态扫描中</span>
          </div>
        </section>

        <router-view v-slot="{ Component }">
          <transition name="zen-page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

