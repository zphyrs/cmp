// Mock Data for CMT Portal

export interface Contract {
  id: string
  vendorName: string
  title: string
  area: string
  value: number
  startDate: string
  endDate: string
  status: string
}

export interface ContractTemplate {
  id: string
  code: string
  category: string
  workName?: string
  fileName: string
}

export interface Document {
  id: string
  fileName?: string
  linkUrl?: string
  description: string
  category: string
  area: string
  workspace: string
  uploadDate: string
  contractId?: string
  metadata?: Record<string, any>
}

export const AREAS = ['Morowali', 'Pomalaa', 'Sorowako', 'Bahodopi']

export const CONTRACTS: Contract[] = [
  {
    id: 'C-2024-001',
    vendorName: 'PT Mining Solutions Indonesia',
    title: 'Heavy Equipment Rental & Maintenance',
    area: 'Morowali',
    value: 2500000,
    startDate: '2024-01-15',
    endDate: '2025-12-31',
    status: 'Active'
  },
  {
    id: 'C-2024-002',
    vendorName: 'PT Consultancy Services',
    title: 'Environmental Impact Assessment',
    area: 'Pomalaa',
    value: 850000,
    startDate: '2024-03-01',
    endDate: '2025-02-28',
    status: 'Active'
  },
  {
    id: 'C-2023-045',
    vendorName: 'PT Construction Experts',
    title: 'Infrastructure Development Project',
    area: 'Sorowako',
    value: 5200000,
    startDate: '2023-06-01',
    endDate: '2025-05-31',
    status: 'Active'
  },
  {
    id: 'C-2024-003',
    vendorName: 'PT Transportation Logistics',
    title: 'Material Transport Services',
    area: 'Bahodopi',
    value: 1200000,
    startDate: '2024-02-01',
    endDate: '2025-08-15',
    status: 'Expiring Soon'
  },
  {
    id: 'C-2023-078',
    vendorName: 'PT Engineering Works',
    title: 'Geotechnical Survey & Analysis',
    area: 'Morowali',
    value: 680000,
    startDate: '2023-09-15',
    endDate: '2025-03-31',
    status: 'Active'
  },
  {
    id: 'C-2024-004',
    vendorName: 'PT Safety Systems',
    title: 'Occupational Health & Safety Management',
    area: 'Pomalaa',
    value: 450000,
    startDate: '2024-04-01',
    endDate: '2026-03-31',
    status: 'Active'
  },
  {
    id: 'C-2023-092',
    vendorName: 'PT Equipment Supplies',
    title: 'Drilling Equipment Supply',
    area: 'Sorowako',
    value: 3100000,
    startDate: '2023-11-01',
    endDate: '2025-10-31',
    status: 'Active'
  },
  {
    id: 'C-2024-005',
    vendorName: 'PT IT Solutions',
    title: 'Mining Software & System Integration',
    area: 'Bahodopi',
    value: 920000,
    startDate: '2024-05-15',
    endDate: '2026-05-14',
    status: 'Active'
  },
  {
    id: 'C-2023-034',
    vendorName: 'PT Maintenance Services',
    title: 'Facility Maintenance & Upkeep',
    area: 'Morowali',
    value: 780000,
    startDate: '2023-07-01',
    endDate: '2025-06-30',
    status: 'Active'
  },
  {
    id: 'C-2024-006',
    vendorName: 'PT Security Solutions',
    title: 'Site Security & Surveillance',
    area: 'Pomalaa',
    value: 1500000,
    startDate: '2024-01-01',
    endDate: '2025-12-31',
    status: 'Active'
  }
]

export const CONTRACT_TEMPLATES = {
  pricingCatalogue: [
    {
      id: 'CP003-001',
      code: 'CP-003',
      category: 'Mining',
      workName: 'Heavy Equipment Rental',
      fileName: 'CP-003_Cost_Structure_Mining_Heavy_Equipment.pdf'
    },
    {
      id: 'CP003-002',
      code: 'CP-003',
      category: 'Construction',
      workName: 'Infrastructure Development',
      fileName: 'CP-003_Cost_Structure_Construction_Infrastructure.pdf'
    },
    {
      id: 'CP003-003',
      code: 'CP-003',
      category: 'Transportation',
      workName: 'Material Logistics',
      fileName: 'CP-003_Cost_Structure_Transportation_Logistics.pdf'
    },
    {
      id: 'CP003-004',
      code: 'CP-003',
      category: 'Engineering',
      workName: 'Consultancy Services',
      fileName: 'CP-003_Cost_Structure_Engineering_Consultancy.pdf'
    }
  ],
  scopeOfWorks: [
    {
      id: 'CP002-001',
      code: 'CP-002',
      category: 'Consultancy',
      fileName: 'CP-002_Reference_Scope_Consultancy.pdf'
    },
    {
      id: 'CP002-002',
      code: 'CP-002',
      category: 'Study',
      fileName: 'CP-002_Reference_Scope_Study.pdf'
    },
    {
      id: 'CP002-003',
      code: 'CP-002',
      category: 'Mining and Earth Work',
      fileName: 'CP-002_Reference_Scope_Mining_Earth_Work.pdf'
    },
    {
      id: 'CP002-004',
      code: 'CP-002',
      category: 'Construction Work',
      fileName: 'CP-002_Reference_Scope_Construction.pdf'
    },
    {
      id: 'CP002-005',
      code: 'CP-002',
      category: 'Medium Term Services',
      fileName: 'CP-002_Reference_Scope_Medium_Term.pdf'
    }
  ]
} as const

export const DOCUMENT_CATEGORIES = [
  'Cost Structure',
  'Reference',
  'Scope of Works',
  'Work Instructions',
  'Safety Procedures',
  'Minutes of Meeting',
  'Deviation Form',
  'Procurement Request',
  'Contract Request Form',
  'Administration Document',
  'Technical Specification',
  'Compliance Report'
]

// Helper function to calculate contract expiry status
export const getContractExpiryStatus = (endDate: string): 'normal' | 'warning' | 'critical' => {
  const end = new Date(endDate)
  const now = new Date()
  const diffTime = end.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const diffMonths = diffDays / 30

  if (diffMonths < 3) return 'critical'
  if (diffMonths < 6) return 'warning'
  return 'normal'
}

// Helper function to get documents from localStorage
export const getDocumentsFromStorage = (): Document[] => {
  if (typeof window === 'undefined') return []
  const docs = localStorage.getItem('cmt_documents')

  // Return sample documents if no saved documents exist
  if (!docs) {
    return getSampleDocuments()
  }

  const parsedDocs = JSON.parse(docs)

  // If stored documents don't have metadata, migrate them
  const migratedDocs = parsedDocs.map((doc: any) => {
    if (!doc.metadata) {
      return addSampleMetadata(doc)
    }
    return doc
  })

  return migratedDocs
}

// Sample documents with metadata for testing
const getSampleDocuments = (): Document[] => [
  {
    id: 'DOC-001',
    fileName: 'contract_mining_services.pdf',
    description: 'Mining equipment rental and maintenance contract for Q1 2024',
    category: 'Contract Request Form',
    area: 'Morowali',
    workspace: 'planning',
    uploadDate: '2024-01-15T10:30:00Z',
    contractId: 'C-2024-001',
    metadata: {
      contractRequestId: 'CRQ-2024-001',
      contractType: 'Service Contract',
      expectedStartDate: '2024-02-01',
      duration: 12,
      estimatedValue: 2500000,
      requester: 'John Doe - Operations Manager'
    }
  },
  {
    id: 'DOC-002',
    fileName: 'safety_procedure_heavy_equipment.pdf',
    description: 'Standard operating procedures for heavy equipment operation',
    category: 'Safety Procedures',
    area: 'Sorowako',
    workspace: 'planning',
    uploadDate: '2024-01-20T14:15:00Z',
    metadata: {
      procedureNumber: 'SP-2024-001',
      procedureType: 'Standard Operating Procedure',
      riskLevel: 'High Risk',
      effectiveDate: '2024-01-15',
      reviewDate: '2024-07-15'
    }
  },
  {
    id: 'DOC-003',
    linkUrl: 'https://example.com/monthly-report',
    description: 'Monthly compliance report for environmental regulations',
    category: 'Compliance Report',
    area: 'Bahodopi',
    workspace: 'execution',
    uploadDate: '2024-01-25T09:00:00Z',
    metadata: {
      reportPeriod: 'Monthly',
      reportDate: '2024-01-25',
      complianceType: 'Environmental Compliance',
      auditor: 'PT Environmental Audit Services',
      overallRating: 'Good'
    }
  },
  {
    id: 'DOC-004',
    fileName: 'cost_structure_q1_2024.xlsx',
    description: 'Detailed cost breakdown for Q1 2024 operations',
    category: 'Cost Structure',
    area: 'Pomalaa',
    workspace: 'planning',
    uploadDate: '2024-01-30T16:45:00Z',
    metadata: {
      totalAmount: 5000000,
      currency: 'IDR',
      fiscalYear: '2024',
      costCenter: 'CC-OPER-001'
    }
  },
  {
    id: 'DOC-005',
    fileName: 'meeting_minutes_project_review.pdf',
    description: 'Weekly project review meeting minutes',
    category: 'Minutes of Meeting',
    area: 'Morowali',
    workspace: 'central-hub',
    uploadDate: '2024-02-05T11:30:00Z',
    metadata: {
      meetingDate: '2024-02-05',
      meetingType: 'Project Review',
      attendees: 12,
      facilitator: 'Jane Smith - Project Manager',
      location: 'Main Conference Room'
    }
  }
]

// Helper function to add sample metadata to existing documents
const addSampleMetadata = (doc: Document): Document => {
  const metadataMap: Record<string, any> = {
    'Contract Request Form': {
      contractRequestId: 'CRQ-LEGACY',
      contractType: 'Service Contract',
      expectedStartDate: '2024-01-01',
      duration: 6,
      estimatedValue: 1000000,
      requester: 'Legacy User'
    },
    'Cost Structure': {
      totalAmount: 1000000,
      currency: 'IDR',
      fiscalYear: '2024',
      costCenter: 'CC-DEFAULT'
    }
  }

  return {
    ...doc,
    metadata: metadataMap[doc.category] || {}
  }
}

// Helper function to save documents to localStorage
export const saveDocumentsToStorage = (documents: Document[]): void => {
  if (typeof window === 'undefined') return
  localStorage.setItem('cmt_documents', JSON.stringify(documents))
}

// Helper function to add a document
export const addDocument = (document: Omit<Document, 'id' | 'uploadDate'>): Document => {
  const documents = getDocumentsFromStorage()
  const newDoc: Document = {
    ...document,
    id: `DOC-${Date.now()}`,
    uploadDate: new Date().toISOString()
  }
  documents.push(newDoc)
  saveDocumentsToStorage(documents)
  return newDoc
}