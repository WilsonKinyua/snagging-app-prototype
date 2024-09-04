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
import {
  CircleDashed,
  DollarSign,
  ListCheck,
  ListTodo,
  RefreshCcw,
} from "lucide-vue-next";
import { computed } from "vue";
import { useSnagStore } from "@/stores/snagStore";
import DataTable from "@/components/DataTable.vue";
import { columns } from "@/components/columns";

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
        <div class="lg:flex items-center space-x-2 hidden">
          <DateRangePicker />
          <Button disabled class="cursor-not-allowed">Download</Button>
        </div>
      </div>
      <div value="overview" class="space-y-4">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card class="bg-primary text-white">
            <CardHeader
              class="flex flex-row items-center justify-between space-y-0 pb-2"
            >
              <CardTitle class="text-sm font-medium"> Total Cost </CardTitle>
              <DollarSign />
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                <span class="text-xs">KES</span>
                {{
                  (Math.random() * 10000000)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
              </div>
            </CardContent>
          </Card>
          <Card class="border border-[#8EB338] text-[#8EB338]">
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
          <Card class="lg:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent class="pl-2">
              <Overview
                :data="[
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
          <Card class="lg:col-span-3">
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
        <h2
          class="text-2xl font-bold tracking-tight my-10"
          v-if="snags.filter((snag) => snag.status === 'completed').length > 0"
        >
          Completed Snags
        </h2>
        <DataTable
          :data="snags.filter((snag) => snag.status === 'completed')"
          :columns="columns"
        />
      </div>
    </div>
  </div>
</template>
