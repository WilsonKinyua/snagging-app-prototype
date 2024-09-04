<script setup lang="ts">
import { cn } from "@/lib/utils";
import { RouterLink } from "vue-router";
import { Button } from "./ui/button";
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <router-link :to="{ name: 'home' }">
      <Button> Overview </Button>
    </router-link>
    <router-link :to="{ name: 'snags' }">
      <Button> Snags </Button>
    </router-link>
  </nav>
</template>
