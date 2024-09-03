<script setup lang="ts">
import Overview from "@/components/Overview.vue";
import DateRangePicker from "@/components/DateRangePicker.vue";
import RecentSnags from "@/components/RecentSnags.vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleDashed, ListCheck, ListTodo, RefreshCcw } from "lucide-vue-next";
import { computed } from "vue";
import { useSnagStore } from "@/stores/snagStore";

const snagStore = useSnagStore();
const snags = computed(() => snagStore.snags);
</script>

<template>
  <div class="flex-col flex">
    <div class="flex-1 space-y-4 pt-6">
      <div class="flex items-center justify-between space-y-4">
        <div>
          <h2 class="text-3xl font-bold tracking-tight mb-4">Dashboard</h2>
          <p>Welcome back, <strong>John Doe</strong>!</p>
        </div>
        <div class="flex items-center space-x-2">
          <DateRangePicker />
          <Button class="cursor-not-allowed">Download</Button>
        </div>
      </div>
      <div value="overview" class="space-y-4">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card class="bg-primary text-white">
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium"> Total Snags </CardTitle>
              <ListCheck />
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                {{ snags.length }}
              </div>
            </CardContent>
          </Card>
          <Card class="bg-white text-primary border border-primary">
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium">
                Completed Snags
              </CardTitle>
              <ListTodo />
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                {{ snags.filter((snag) => snag.status === "completed").length }}
              </div>
            </CardContent>
          </Card>
          <Card class="bg-destructive text-white">
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium"> Pending Snags </CardTitle>
              <RefreshCcw />
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                {{ snags.filter((snag) => snag.status === "pending").length }}
              </div>
            </CardContent>
          </Card>
          <Card class="bg-black text-white border border-black">
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium">
                In Progress Snags
              </CardTitle>
              <CircleDashed />
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                {{
                  snags.filter((snag) => snag.status === "in-progress").length
                }}
              </div>
            </CardContent>
          </Card>
        </div>
        <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
          <Card class="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent class="pl-2">
              <Overview
                :data="[
                  //by months from createdAt (name: string; total: number)
                  {
                    name: 'Jan',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 0
                    ).length,
                  },
                  {
                    name: 'Feb',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 1
                    ).length,
                  },
                  {
                    name: 'Mar',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 2
                    ).length,
                  },
                  {
                    name: 'Apr',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 3
                    ).length,
                  },
                  {
                    name: 'May',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 4
                    ).length,
                  },
                  {
                    name: 'Jun',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 5
                    ).length,
                  },
                  {
                    name: 'Jul',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 6
                    ).length,
                  },
                  {
                    name: 'Aug',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 7
                    ).length,
                  },
                  {
                    name: 'Sep',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 8
                    ).length,
                  },
                  {
                    name: 'Oct',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 9
                    ).length,
                  },
                  {
                    name: 'Nov',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 10
                    ).length,
                  },
                  {
                    name: 'Dec',
                    total: snags.filter(
                      (snag) => new Date(snag.createdAt).getMonth() === 11
                    ).length,
                  },
                ]"
              />
            </CardContent>
          </Card>
          <Card class="col-span-3">
            <CardHeader>
              <CardTitle>Recent Snags</CardTitle>
              <CardDescription>
                You made
                {{
                  snags.filter(
                    (snag) =>
                      new Date(snag.createdAt).getMonth() ===
                      new Date().getMonth()
                  ).length
                }}
                snags this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSnags
                :snags="
                  snags
                    .filter(
                      (snag) =>
                        new Date(snag.createdAt).getMonth() ===
                        new Date().getMonth()
                    )
                    .slice(0, 6)
                "
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
