<script setup lang="ts">
import DataTable from "@/components/DataTable.vue";
import { columns } from "@/components/columns";
import { ref } from "vue";
import { useSnagStore, type Snag } from "@/stores/snagStore";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SnagForm from "@/components/SnagForm.vue";

const snagStore = useSnagStore();
const snags = ref(snagStore.snags);

const handleSnagCreated = (newSnag: Snag) => {
  snags.value = [newSnag, ...snags.value];
};
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-bold tracking-tight my-10">All Snags</h2>
    <Sheet>
      <SheetTrigger> <Button> Create Snag </Button></SheetTrigger>
      <SheetContent class="h-screen overflow-scroll">
        <SheetHeader>
          <SheetTitle> Create a new Snag </SheetTitle>
          <SheetDescription>
            <p class="my-2">Fill in the form below to create a new snag.</p>
            <SnagForm @snagCreated="handleSnagCreated" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
  <DataTable :data="snags" :columns="columns" />
</template>
