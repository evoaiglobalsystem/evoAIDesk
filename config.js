const API = {
  n8n_trigger_email_workflow:              "https://n8n.evoaiglobal.ai/webhook/evoaidesk_trigger_email",
  n8n_daily_report_workflow:               "https://n8n.evoaiglobal.ai/webhook/evoAIDesk_daily_report",
  n8n_weekly_report_workflow:              "https://n8n.evoaiglobal.ai/webhook/evoAIDesk_weekly_report",
  n8n_summary_report_workflow:             "https://n8n.evoaiglobal.ai/webhook/evoAIDesk_summary_report",
  n8n_company_summary_report_workflow:     "https://n8n.evoaiglobal.ai/webhook/evoAIDesk_company_summary_report",
  n8n_activity_pipeline:                   "https://n8n.evoaiglobal.ai/webhook/evoaidesk_activities",
  n8n_company_intel_webhook:               "https://n8n.evoaiglobal.ai/webhook/evoaidesk_company_intel",
  n8n_assignment_report_workflow:          "https://n8n.evoaiglobal.ai/webhook/evoaidesk_lead_assignments_report",
  n8n_send_report_email:                   "https://n8n.evoaiglobal.ai/webhook/evoaidesk_email_selected_report",
};

// Must be outside the object — window assignment is a statement, not a property
window.N8N_PIPELINE_VALUE_URL = "https://n8n.evoaiglobal.ai/webhook/evoaidesk_pipeline_value";