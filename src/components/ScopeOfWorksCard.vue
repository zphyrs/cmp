<template>
  <DocumentCard
    :data="props.template"
    :first-uploader-name="firstUploaderName"
    :first-upload-date="firstUploadDate"
    variant="scope"
    @download="handleDownload"
    @show-history="handleShowHistory" />
</template>

<script setup lang="ts">
import type { CatalogueItem } from "@/data/mockData";
import DocumentCard from "./DocumentCard.vue";

const props = defineProps<{
  template: CatalogueItem;
  firstUploaderName?: string;
  firstUploadDate?: string;
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
