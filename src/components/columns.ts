import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import type { Snag } from "@/stores/snagStore";
import { Button } from "./ui/button";

export const columns: ColumnDef<Snag>[] = [
  {
    accessorKey: "image",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Photos");
    },
    cell: ({ row }) => {
      return h("div", { class: "text-left font-medium" }, [
        h("img", {
          src: row.getValue("image"),
          alt: "snag image",
          class: "w-10 h-10 rounded-full",
        }),
      ]);
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Title");
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-left font-medium" },
        row.getValue("title")
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Description");
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-left font-medium" },
        row.getValue("description")
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Type");
    },
    cell: ({ row }) => {
      return h("div", { class: "text-left font-medium" }, row.getValue("type"));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Priority");
    },
    cell: ({ row }) => {
      return h("div", { class: "text-left font-medium" }, [
        h(Badge, { type: row.getValue("priority") }, row.getValue("priority")),
      ]);
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Location");
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-left font-medium" },
        row.getValue("location")
      );
    },
  },
  {
    accessorKey: "assignedTo",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Assigned");
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-left font-medium" },
        row.getValue("assignedTo") ? row.getValue("assignedTo") : "Unassigned"
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Status");
    },
    cell: ({ row }) => {
      const status = row.getValue("status");
      const color =
        status === "in-progress"
          ? "bg-yellow-500 text-white"
          : status === "completed"
          ? "bg-green-500 text-white"
          : "text-gray-500 text-white";
      return h(
        Badge,
        { class: `text-left font-medium ${color}` },
        status as string
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Created");
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-left font-medium" },
        new Date(row.getValue("createdAt")).toLocaleDateString() 
      );
    },
  },
];
