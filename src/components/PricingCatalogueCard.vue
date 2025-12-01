<template>
  <DocumentCard
    :code="template.code"
    :category="template.category"
    :file-type="template.fileType"
    :upload-date="template.uploadDate"
    :file-name="template.fileName"
    :uploader-name="template.uploaderName"
    :approver-name="template.approverName"
    :approved-date="template.approvedDate"
    variant="pricing"
    @download="handleDownload"
  />
</template>

<script setup lang="ts">
import DocumentCard from "./DocumentCard.vue";

interface Template {
  id: string;
  code: string;
  category: string;
  fileType?: string;
  uploadDate: string | Date;
  fileName: string;
  status: string;
  uploaderName?: string;
  approverName?: string;
  approvedDate?: string | Date;
}

defineProps<{
  template: Template;
}>();

const emit = defineEmits<{
  download: [fileName: string];
}>();

const handleDownload = (fileName: string) => {
  emit('download', fileName);
};
</script>