/**
 * WhatsApp utility functions for generating pre-filled message links
 */

export const WHATSAPP_NUMBER = "35796804574";

export type WhatsAppContext =
  | "general"
  | "home-alarm"
  | "business-alarm"
  | "cctv"
  | "monitoring"
  | "keyholding"
  | "vacant-property"
  | "property-management"
  | "blog-post"
  | "contact-form";

interface WhatsAppMessageOptions {
  context: WhatsAppContext;
  serviceName?: string;
  blogTitle?: string;
  additionalInfo?: string;
}

const contextMessages: Record<WhatsAppContext, string> = {
  general: "Hello! I'm interested in learning more about your security services in Cyprus. Could you please provide me with more information?",
  
  "home-alarm": "Hello! I'm interested in getting a quote for a home alarm system. I would like to discuss:\n\n🏠 Property Type: Residential Home\n🔒 Service: Alarm System Installation\n\nCould you please provide me with pricing and installation details?",
  
  "business-alarm": "Hello! I'm interested in getting a quote for a business alarm system. I would like to discuss:\n\n🏢 Property Type: Business/Commercial\n🔒 Service: Commercial Alarm System\n\nCould you please provide me with pricing and installation details?",
  
  cctv: "Hello! I'm interested in CCTV camera installation for my property. I would like to discuss:\n\n📹 Service: CCTV System Installation\n👁️ Features: HD cameras, remote viewing, night vision\n\nCould you please provide me with a quote and consultation?",
  
  monitoring: "Hello! I'm interested in your 24/7 monitoring services. I would like to discuss:\n\n👁️ Service: 24/7 Professional Monitoring\n🚨 Features: Rapid response, alarm verification\n\nCould you please provide me with pricing and service details?",
  
  keyholding: "Hello! I'm interested in your keyholding services. I would like to discuss:\n\n🔑 Service: Keyholding & Alarm Response\n🏠 Property: Residential/Commercial\n\nCould you please provide me with more information?",
  
  "vacant-property": "Hello! I'm interested in vacant property inspection services. I would like to discuss:\n\n🏡 Service: Vacant Property Checks\n📋 Requirements: Regular inspections and reporting\n\nCould you please provide me with pricing and service details?",
  
  "property-management": "Hello! I'm interested in your property management services. I would like to discuss:\n\n🏘️ Service: Full Property Management\n🔑 Requirements: Keyholding, cleaning, maintenance, inspections\n\nCould you please provide me with a comprehensive quote?",
  
  "blog-post": "Hello! I just read your article about {blogTitle} and I'm interested in learning more about this service. Could you please provide me with additional information and pricing?",
  
  "contact-form": "Hello! I submitted a contact form on your website and would like to get a faster response via WhatsApp. Could you please get back to me regarding my enquiry?"
};

export function generateWhatsAppLink(options: WhatsAppMessageOptions): string {
  let message = contextMessages[options.context];
  
  // Replace placeholders
  if (options.blogTitle) {
    message = message.replace("{blogTitle}", options.blogTitle);
  }
  
  if (options.serviceName) {
    message = message.replace("{serviceName}", options.serviceName);
  }
  
  // Add additional info if provided
  if (options.additionalInfo) {
    message += `\n\n${options.additionalInfo}`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppLink(context: WhatsAppContext, serviceName?: string, blogTitle?: string): string {
  return generateWhatsAppLink({ context, serviceName, blogTitle });
}
