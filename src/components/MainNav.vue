<script setup lang="ts">
import { cn } from "@/lib/utils";
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <router-link
      :to="{ name: 'home' }"
      class="text-sm font-medium transition-colors hover:text-primary"
    >
      Overview
    </router-link>
    <router-link
      :to="{ name: 'snags' }"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Snags
    </router-link>
  </nav>
</template>
