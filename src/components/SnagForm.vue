<script setup lang="ts">
import { computed, defineEmits } from "vue";
import { useSnagStore } from "@/stores/snagStore";
import { toast } from "vue-sonner";
import { useForm } from "vee-validate";
import { Input } from "@/components/ui/input";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const snagStore = useSnagStore();
const snags = computed(() => snagStore.snags);

// form schema
const schema = z.object({
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required"),
  type: z.string().nonempty("Type is required"),
  priority: z.string().nonempty("Priority is required"),
  location: z.string().nonempty("Location is required"),
  image: z.string().nonempty("Image is required"),
  assignedTo: z.string().nonempty("Assigned to is required"),
  estimatedCost: z.number().min(0, "Estimated cost must be a positive number"),
});

const { handleSubmit, values, resetForm, setValues } = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: {
    title: "",
    description: "",
    type: "",
    priority: "",
    location: "",
    image: "",
    assignedTo: "",
    estimatedCost: 0,
  },
});

const emit = defineEmits(["snagCreated"]);

const onSubmit = handleSubmit(async (values) => {
  const newSnag = {
    id: Math.random(),
    title: values.title,
    description: values.description,
    type: values.type,
    priority: values.priority,
    location: values.location,
    image: values.image,
    createdAt: new Date(),
    status: "open",
    assignedTo: values.assignedTo,
    estimatedCost: values.estimatedCost,
  };
  snagStore.addSnag(newSnag);
  emit("snagCreated", newSnag);
  toast.success("Snag created successfully");
  resetForm();
});
</script>
<template>
  <form @submit="onSubmit" class="space-y-4">
    <FormField v-slot="{ componentField }" name="title">
      <FormItem>
        <FormLabel for="title">Title</FormLabel>
        <Input
          id="title"
          placeholder="Eg. Broken pipe"
          v-bind="componentField"
        />
        <FormMessage for="title" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="description">
      <FormItem>
        <FormLabel for="description">Description</FormLabel>
        <Input
          v-bind="componentField"
          id="description"
          class="h-20"
          placeholder="Eg. The pipe is leaking"
        />
        <FormMessage for="description" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="type">
      <FormItem>
        <FormLabel for="type">Type</FormLabel>
        <Input v-bind="componentField" id="type" placeholder="Eg. plumbing" />
        <FormMessage for="type" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="priority">
      <FormItem>
        <FormLabel for="priority">Priority</FormLabel>
        <Input v-bind="componentField" id="priority" placeholder="Eg. High" />
        <FormMessage for="priority" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="location">
      <FormItem>
        <FormLabel for="location">Location</FormLabel>
        <Input
          v-bind="componentField"
          id="location"
          placeholder="Eg. Basement lounge"
        />
        <FormMessage for="location" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="image">
      <FormItem>
        <FormLabel for="image">Image</FormLabel>
        <Input v-bind="componentField" id="image" placeholder="Eg. Image URL" />
        <FormMessage for="image" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="assignedTo">
      <FormItem>
        <FormLabel for="assignedTo">Assigned To</FormLabel>
        <Input
          v-bind="componentField"
          id="assignedTo"
          placeholder="Eg. John Doe"
        />
        <FormMessage for="assignedTo" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="estimatedCost">
      <FormItem>
        <FormLabel for="estimatedCost">Estimated Cost</FormLabel>
        <Input
          v-bind="componentField"
          id="estimatedCost"
          type="number"
          placeholder="Eg. 100"
        />
        <FormMessage for="estimatedCost" />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full"> Create Snag </Button>
  </form>
</template>
