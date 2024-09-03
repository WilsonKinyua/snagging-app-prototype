<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import MainNav from "@/components/MainNav.vue";
import Search from "@/components/Search.vue";
import TeamSwitcher from "@/components/TeamSwitcher.vue";
import UserNav from "@/components/UserNav.vue";
import { RouterView } from "vue-router";
import { computed, onMounted } from "vue";
import { useSnagStore } from "@/stores/snagStore";

const snagStore = useSnagStore();
const snags = computed(() => snagStore.snags);

onMounted(() => {
  snagStore.generateDummyData();
});
</script>

<template>
  <main>
    <div class="border-b">
      <div class="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav class="mx-6" />
        <div class="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
    <div class="container mx-auto mb-10">
      <RouterView />
    </div>
  </main>
  <Toaster />
</template>
