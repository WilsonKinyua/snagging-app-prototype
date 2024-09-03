<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Snag } from "@/stores/snagStore";
import { Badge } from "./ui/badge";

const props = defineProps<{
  snags: Snag[];
}>();
</script>

<template>
  <div class="space-y-8">
    <div v-for="snag in props.snags" :key="snag.id" class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage :src="snag.image" :alt="snag.title" />
        <AvatarFallback>
          {{ snag.title[0] }}
        </AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          {{ snag.title }}
        </p>
        <p class="text-sm text-muted-foreground">
          {{ new Date(snag.createdAt).toLocaleDateString() }}
          {{ new Date(snag.createdAt).toLocaleTimeString() }}
        </p>
      </div>
      <div class="ml-auto font-medium">
        <Badge :variant="snag.priority === 'high' ? 'destructive' : 'default'">
          {{ snag.priority }}
        </Badge>
      </div>
    </div>
  </div>
</template>
