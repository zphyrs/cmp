<template>
  <DocumentCard
    :data="props.template"
    :hide-history-button="authStore.isUser"
    :first-uploader-name="firstUploaderName"
    :first-upload-date="firstUploadDate"
    variant="pricing"
    @download="handleDownload"
    @show-history="handleShowHistory" />
</template>

<script setup lang="ts">
import type { CatalogueItem } from "@/data/mockData";
import DocumentCard from "./DocumentCard.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

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
