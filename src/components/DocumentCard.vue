<template>
  <div
    class="flex items-center justify-between p-4 rounded-lg hover:shadow-md transition-shadow"
    :class="[
      variant === 'pricing'
        ? 'bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200'
        : variant === 'scope'
          ? 'bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200'
          : 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200',
    ]">
    <div class="flex items-center gap-3">
      <div
        class="w-12 h-12 rounded-lg flex items-center justify-center"
        :class="[variant === 'pricing' ? 'bg-blue-600' : variant === 'scope' ? 'bg-blue-600' : 'bg-gray-600']">
        <FileText class="w-6 h-6 text-white" />
      </div>
      <div class="flex-1">
        <p class="font-medium text-slate-800">
          {{ displayTitle }}
        </p>
        <p class="text-sm text-slate-600">{{ props.fileType }}</p>

        <div class="flex items-center gap-1">
          <span class="text-xs text-slate-500">Uploaded by:</span>
          <span class="text-xs font-medium">{{ uploaderName }}</span>
          <span class="text-xs text-slate-500">({{ formattedDate }})</span>
        </div>

        <!-- Metadata Section -->
        <div v-if="approverName" class="flex items-center gap-1">
          <span class="text-xs text-slate-500">Approved by:</span>
          <span class="text-xs font-medium">{{ approverName }}</span>
          <span class="text-xs text-slate-500">({{ formattedApprovedDate }})</span>
        </div>
      </div>
    </div>
    <Button
      size="sm"
      variant="ghost"
      @click="handleDownload"
      :class="[
        variant === 'pricing' ? 'hover:bg-blue-200' : variant === 'scope' ? 'hover:bg-blue-200' : 'hover:bg-gray-200',
      ]">
      <Download class="w-4 h-4" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FileText, Download } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";

interface DocumentCardProps {
  code: string;
  category: string;
  fileType?: string;
  uploadDate: string | Date;
  fileName: string;
  variant?: "pricing" | "scope" | "library";
  uploaderName?: string;
  approverName?: string;
  approvedDate?: string | Date;
}

const props = withDefaults(defineProps<DocumentCardProps>(), {
  variant: "pricing",
  uploaderName: "",
  approverName: "",
  approvedDate: "",
});

const emit = defineEmits<{
  download: [fileName: string];
}>();

const displayTitle = computed(() => {
  switch (props.variant) {
    case "pricing":
      return `${props.code} Cost Structure of ${props.category}`;
    case "scope":
      return `${props.code} Reference Scope of Works of ${props.category}`;
    case "library":
      return `${props.code} ${props.fileType || props.category} (Archive)`;
    default:
      return props.fileName;
  }
});

const subtitle = computed(() => {
  if (props.variant === "library") {
    return `Category: ${props.category} | ${props.fileType || "Reference Document"}`;
  }
  return `${props.category} | ${props.fileType || "Reference Document"}`;
});

const formattedDate = computed(() => {
  return new Date(props.uploadDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
});

const formattedApprovedDate = computed(() => {
  if (!props.approvedDate) return "";
  return new Date(props.approvedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
});

const handleDownload = () => {
  emit("download", props.fileName);
};
</script>
