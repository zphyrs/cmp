<template>
  <DocumentCard :data="props.template" variant="library" @download="handleDownload" @show-history="handleShowHistory" />
</template>

<script setup lang="ts">
import type { CatalogueItem } from "@/data/mockData";
import DocumentCard from "./DocumentCard.vue";

const props = defineProps<{
  template: CatalogueItem;
}>();

const emit = defineEmits<{
  download: [fileName: string];
  showHistory: [template: any];
}>();

const handleDownload = (fileName: string) => {
  emit("download", fileName);
};

const handleShowHistory = (template: any) => {
  emit("showHistory", template);
};
</script>
