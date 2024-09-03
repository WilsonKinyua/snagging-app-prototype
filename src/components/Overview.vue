<script setup lang="ts">
import { BarChart } from "@/components/ui/chart-bar";
const props = defineProps<{
  data: { name: string; total: number }[];
}>();
</script>

<template>
  <BarChart
    :data="props.data"
    :categories="['total']"
    :index="'name'"
    :rounded-corners="10"
  />
</template>
