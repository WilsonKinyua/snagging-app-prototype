import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";
import { Badge } from "@/components/ui/badge";
import type { Snag } from "@/stores/snagStore";

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
  // {
  //   accessorKey: "description",
  //   header: ({ column }) => {
  //     return h("div", { class: "text-left font-medium" }, "Description");
  //   },
  //   cell: ({ row }) => {
  //     const description = row.getValue("description") as string;
  //     return h(
  //       "div",
  //       { class: "text-left font-medium" },
  //       description.slice(0, 10) + "..."
  //     );
  //   },
  // },
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
      const priority = row.getValue("priority");
      const color =
        priority === "high"
          ? "bg-red-500 text-white"
          : priority === "medium"
          ? "bg-primary text-white"
          : "bg-blue-500 text-white";
      return h(
        Badge,
        { class: `text-left font-medium ${color}` },
        priority as string
      );
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
    accessorKey: "responseTime",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Response Time");
    },
    cell: ({ row }) => {
      const responseTime = row.getValue("responseTime") as number;
      const status = row.getValue("status");
      if (status === "completed") {
        return h(
          "div",
          { class: "text-left font-medium" },
          Math.round(Math.random() * 10) + " days"
        );
      } else {
        return h(
          "div",
          { class: "text-left font-medium text-red-500" },
          "Not yet completed"
        );
      }
    },
  },
  {
    accessorKey: "estimatedCost",
    header: ({ column }) => {
      return h("div", { class: "text-left font-medium" }, "Cost");
    },
    cell: ({ row }) => {
      const estimatedCost = row.getValue("estimatedCost") as number;
      return h(
        "div",
        { class: "text-left font-medium" },
        "KES " +
          (estimatedCost
            ? estimatedCost
            : Math.round(Math.random() * 100000)
          ).toLocaleString()
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
