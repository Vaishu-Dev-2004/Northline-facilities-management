// Each sample client has one included property record; keep the displayed counts consistent.
export const clients = [
  { id: 'CL-1048', name: 'Meridian Workspaces', contact: 'Kavya Raman', email: 'kavya@meridian.example', properties: 1, contract: 'Enterprise', status: 'Active' },
  { id: 'CL-1047', name: 'Harborview Health', contact: 'Dr. Naveen Varma', email: 'naveen@harborview.example', properties: 1, contract: 'Enterprise', status: 'Active' },
  { id: 'CL-1046', name: 'Juniper Residential', contact: 'Priya Nair', email: 'priya@juniper.example', properties: 1, contract: 'Professional', status: 'Active' },
  { id: 'CL-1045', name: 'Westward Learning Group', contact: 'Radhika Krishnan', email: 'radhika@westward.example', properties: 1, contract: 'Professional', status: 'Active' },
  { id: 'CL-1044', name: 'Atelier House Hotels', contact: 'Sandeep Rao', email: 'sandeep@atelier.example', properties: 1, contract: 'Enterprise', status: 'Active' },
  { id: 'CL-1043', name: 'Fieldstone Logistics', contact: 'Aishwarya Nair', email: 'aishwarya@fieldstone.example', properties: 1, contract: 'Professional', status: 'Active' },
  { id: 'CL-1042', name: 'Cedar & Finch Retail', contact: 'Vijay Kumar', email: 'vijay@cedarfinch.example', properties: 1, contract: 'Professional', status: 'Active' },
  { id: 'CL-1041', name: 'Pioneer BioLabs', contact: 'Dr. Meera Balasubramanian', email: 'meera@pioneer.example', properties: 1, contract: 'Enterprise', status: 'Active' },
  { id: 'CL-1040', name: 'Civic Arts Foundation', contact: 'Vivek Chandran', email: 'vivek@civicarts.example', properties: 1, contract: 'Essential', status: 'Review' },
  { id: 'CL-1039', name: 'Alder Manufacturing', contact: 'Hari Prakash', email: 'hari@alder.example', properties: 1, contract: 'Professional', status: 'Active' }
];

export const properties = [
  { id: 'PR-2201', name: 'Meridian Tech Park Tower 2', type: 'Corporate office', client: 'Meridian Workspaces', address: 'TIDEL Park Road, Coimbatore, Tamil Nadu', area: '184,000 sq ft', manager: 'Ananya Iyer', health: 96, status: 'Operational' },
  { id: 'PR-2202', name: 'Harborview Medical Centre', type: 'Healthcare', client: 'Harborview Health', address: 'Avinashi Road · Peelamedu, Coimbatore, Tamil Nadu', area: '126,500 sq ft', manager: 'Karthik Subramanian', health: 92, status: 'Operational' },
  { id: 'PR-2203', name: 'Juniper Residences · Saravanampatti', type: 'Residential', client: 'Juniper Residential', address: 'Saravanampatti, Coimbatore, Tamil Nadu', area: '98,200 sq ft', manager: 'Divya Narayanan', health: 89, status: 'Operational' },
  { id: 'PR-2204', name: 'Westward Learning Campus', type: 'Education', client: 'Westward Learning Group', address: 'Peelamedu Education District, Coimbatore, Tamil Nadu', area: '212,000 sq ft', manager: 'Krishna Moorthy', health: 94, status: 'Operational' },
  { id: 'PR-2205', name: 'Atelier House Coimbatore', type: 'Hospitality', client: 'Atelier House Hotels', address: 'Race Course Road, Coimbatore, Tamil Nadu', area: '78,400 sq ft', manager: 'Nandhini Raj', health: 97, status: 'Operational' },
  { id: 'PR-2206', name: 'Fieldstone Logistics Hub', type: 'Warehouse', client: 'Fieldstone Logistics', address: 'Neelambur Logistics Park, Coimbatore, Tamil Nadu', area: '306,000 sq ft', manager: 'Ravi Shankar', health: 87, status: 'Attention' },
  { id: 'PR-2207', name: 'Cedar & Finch Retail · RS Puram', type: 'Retail', client: 'Cedar & Finch Retail', address: 'R.S. Puram, Coimbatore, Tamil Nadu', area: '41,800 sq ft', manager: 'Ananya Iyer', health: 95, status: 'Operational' },
  { id: 'PR-2208', name: 'Pioneer BioLabs · KGISL Tech Park', type: 'Laboratory', client: 'Pioneer BioLabs', address: 'KGISL Tech Park, Coimbatore, Tamil Nadu', area: '64,100 sq ft', manager: 'Karthik Subramanian', health: 98, status: 'Operational' },
  { id: 'PR-2209', name: 'Civic Arts Centre · Race Course', type: 'Cultural', client: 'Civic Arts Foundation', address: 'Race Course, Coimbatore, Tamil Nadu', area: '53,700 sq ft', manager: 'Divya Narayanan', health: 82, status: 'Attention' },
  { id: 'PR-2210', name: 'Alder Manufacturing · SIDCO', type: 'Manufacturing', client: 'Alder Manufacturing', address: 'SIDCO Industrial Estate, Coimbatore, Tamil Nadu', area: '248,000 sq ft', manager: 'Ravi Shankar', health: 91, status: 'Operational' }
];

export const users = [
  { id: 'US-3180', name: 'Ananya Iyer', email: 'ananya.iyer@northline.example', role: 'Admin', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 9:42 AM' },
  { id: 'US-3179', name: 'Arjun Menon', email: 'arjun.menon@northline.example', role: 'Super Admin', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 8:15 AM' },
  { id: 'US-3178', name: 'Divya Narayanan', email: 'divya.narayanan@northline.example', role: 'Manager', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 9:06 AM' },
  { id: 'US-3177', name: 'Karthik Subramanian', email: 'karthik.subramanian@northline.example', role: 'Manager', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 8:54 AM' },
  { id: 'US-3176', name: 'Kavya Raman', email: 'kavya@meridian.example', role: 'Client', company: 'Meridian Workspaces', status: 'Active', lastActive: 'Today, 9:21 AM' },
  { id: 'US-3175', name: 'Dr. Naveen Varma', email: 'naveen@harborview.example', role: 'Client', company: 'Harborview Health', status: 'Active', lastActive: 'Yesterday' },
  { id: 'US-3174', name: 'Priya Nair', email: 'priya@juniper.example', role: 'Client', company: 'Juniper Residential', status: 'Active', lastActive: 'Today, 7:58 AM' },
  { id: 'US-3173', name: 'Radhika Krishnan', email: 'radhika@westward.example', role: 'Client', company: 'Westward Learning Group', status: 'Active', lastActive: 'Oct 6, 2026' },
  { id: 'US-3172', name: 'Sandeep Rao', email: 'sandeep@atelier.example', role: 'Client', company: 'Atelier House Hotels', status: 'Active', lastActive: 'Today, 8:03 AM' },
  { id: 'US-3171', name: 'Aishwarya Nair', email: 'aishwarya@fieldstone.example', role: 'Client', company: 'Fieldstone Logistics', status: 'Active', lastActive: 'Oct 7, 2026' },
  { id: 'US-3170', name: 'Vijay Kumar', email: 'vijay@cedarfinch.example', role: 'Client', company: 'Cedar & Finch Retail', status: 'Active', lastActive: 'Oct 5, 2026' },
  { id: 'US-3169', name: 'Dr. Meera Balasubramanian', email: 'meera@pioneer.example', role: 'Client', company: 'Pioneer BioLabs', status: 'Active', lastActive: 'Today, 8:32 AM' },
  { id: 'US-3168', name: 'Vivek Chandran', email: 'vivek@civicarts.example', role: 'Client', company: 'Civic Arts Foundation', status: 'Invited', lastActive: '—' },
  { id: 'US-3167', name: 'Hari Prakash', email: 'hari@alder.example', role: 'Client', company: 'Alder Manufacturing', status: 'Active', lastActive: 'Oct 7, 2026' },
  { id: 'US-3166', name: 'Senthil Kumar', email: 'senthil.kumar@northline.example', role: 'Technician', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 9:14 AM' },
  { id: 'US-3165', name: 'Kiran Raj', email: 'kiran.raj@northline.example', role: 'Technician', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 8:48 AM' },
  { id: 'US-3164', name: 'Lakshmi Prasad', email: 'lakshmi.prasad@northline.example', role: 'Technician', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 7:59 AM' },
  { id: 'US-3163', name: 'Rahul Menon', email: 'rahul.menon@northline.example', role: 'Technician', company: 'Northline Facilities', status: 'Active', lastActive: 'Oct 7, 2026' },
  { id: 'US-3162', name: 'Suresh Babu', email: 'suresh.babu@northline.example', role: 'Technician', company: 'Northline Facilities', status: 'Inactive', lastActive: 'Sep 28, 2026' },
  { id: 'US-3161', name: 'Aravind S', email: 'aravind.s@northline.example', role: 'Technician', company: 'Northline Facilities', status: 'Active', lastActive: 'Today, 9:31 AM' }
];

export const technicians = [
  { id: 'TN-081', name: 'Senthil Kumar', initials: 'SK', skills: 'HVAC · Controls', status: 'On site', jobs: 3, rating: '4.9', response: '18 min', completed: '97%' },
  { id: 'TN-080', name: 'Kiran Raj', initials: 'KR', skills: 'Electrical · Lighting', status: 'Available', jobs: 1, rating: '4.8', response: '22 min', completed: '96%' },
  { id: 'TN-079', name: 'Lakshmi Prasad', initials: 'LP', skills: 'Plumbing · Water systems', status: 'On site', jobs: 2, rating: '5.0', response: '16 min', completed: '99%' },
  { id: 'TN-078', name: 'Rahul Menon', initials: 'RM', skills: 'Building systems · BMS', status: 'Available', jobs: 2, rating: '4.8', response: '24 min', completed: '94%' },
  { id: 'TN-077', name: 'Aravind S', initials: 'AS', skills: 'General maintenance', status: 'On break', jobs: 1, rating: '4.7', response: '26 min', completed: '93%' },
  { id: 'TN-076', name: 'Sneha Reddy', initials: 'SR', skills: 'Life safety · Fire systems', status: 'Available', jobs: 1, rating: '4.9', response: '19 min', completed: '98%' },
  { id: 'TN-075', name: 'Prabhu Kumar', initials: 'PK', skills: 'Elevators · Mechanical', status: 'On site', jobs: 2, rating: '4.8', response: '21 min', completed: '95%' },
  { id: 'TN-074', name: 'Janani Devi', initials: 'JD', skills: 'Cleaning · Floor care', status: 'Available', jobs: 2, rating: '4.9', response: '20 min', completed: '98%' },
  { id: 'TN-073', name: 'Manoj Das', initials: 'MD', skills: 'Energy · Commissioning', status: 'Offline', jobs: 0, rating: '4.8', response: '25 min', completed: '95%' },
  { id: 'TN-072', name: 'Fathima A', initials: 'FA', skills: 'Grounds · Pest control', status: 'Available', jobs: 1, rating: '4.7', response: '23 min', completed: '92%' }
];

export const services = [
  { id: 'SV-001', slug: 'integrated-facilities-management', image: '/assets/services/integrated-facilities-management.jpg', imageAlt: 'Facilities manager coordinating building operations inside a modern commercial workplace.', name: 'Integrated Facilities Management', category: 'Maintenance', description: 'One accountable operating plan across technical, workplace and site services.', detail: 'Coordinate building engineering, workplace services, planned maintenance and specialist partners through one service desk, clear site responsibilities and consistent reporting. Designed for Indian organisations managing busy, multi-system facilities.', icon: 'building', benefits: ['One accountable service partner', 'Joined-up site teams and vendor coordination', 'Portfolio reporting aligned to operations'], industries: ['IT parks', 'Corporate offices', 'Manufacturing', 'Healthcare'], scope: ['Site mobilisation and asset register', 'Service desk, escalation and vendor oversight', 'Monthly performance and improvement review'], related: ['facility-maintenance','preventive-maintenance','smart-facility-management'] },
  { id: 'SV-002', slug: 'facility-maintenance', image: '/assets/services/facility-maintenance.jpg', imageAlt: 'Facilities technician inspecting a commercial building service corridor.', name: 'Technical & Building Maintenance', category: 'Maintenance', description: 'Responsive repairs and planned care for the assets people rely on.', detail: 'A practical building-maintenance programme brings routine inspections and responsive repair together. Our sample scope covers building fabric, common areas and essential plant, with clear priority, site access and follow-up notes.', icon: 'wrench', benefits: ['Fewer repeat callouts through better job history', 'Priority-led response for live sites', 'Clear completion notes and follow-up actions'], industries: ['Commercial buildings', 'Education', 'Retail', 'Residential communities'], scope: ['Reactive building and fabric repairs', 'Routine site checks and minor works', 'Completion evidence and open-action tracking'], related: ['integrated-facilities-management','civil-fabric-maintenance','preventive-maintenance'] },
  { id: 'SV-003', slug: 'electrical-maintenance', image: '/assets/services/electrical-maintenance.jpg', imageAlt: 'Electrical engineer safely inspecting a commercial distribution switchboard.', name: 'Electrical Maintenance & Power Systems', category: 'Technical services', description: 'Inspection, troubleshooting and lifecycle care for facility electrical systems.', detail: 'Support electrical distribution and site power systems with planned checks, responsive fault diagnosis and clear escalation. Work is coordinated to the property’s approved safety procedures and statutory requirements.', icon: 'bolt', benefits: ['More visible electrical asset condition', 'Planned checks for critical circuits', 'Documented actions and specialist escalation'], industries: ['IT parks', 'Data centres', 'Healthcare', 'Manufacturing'], scope: ['Panels, lighting and essential circuits', 'Earthing and power-quality observations', 'Permit-to-work and specialist vendor coordination'], related: ['ups-power-backup','generator-maintenance','energy-management'] },
  { id: 'SV-004', slug: 'plumbing-water-systems', image: '/assets/services/plumbing-water-systems.jpg', imageAlt: 'Plumbing technician checking commercial water pipes, valves and pumps.', name: 'Plumbing & Water Systems', category: 'Technical services', description: 'Care for domestic water, drainage, pumps and site water infrastructure.', detail: 'Keep water and drainage systems serviceable with scheduled inspections, responsive repairs and clear site records. Planned work can be aligned with occupancy, water-use needs and property operating windows.', icon: 'droplet', benefits: ['Earlier identification of leaks and pressure changes', 'More reliable water-system records', 'Clear coordination for specialist treatment work'], industries: ['Healthcare', 'Residential communities', 'Hospitality', 'Education'], scope: ['Fixtures, drainage and water lines', 'Tank, pump and pressure observations', 'Water-system checks and corrective follow-up'], related: ['pumps-equipment','preventive-maintenance','emergency-maintenance'] },
  { id: 'SV-005', slug: 'hvac-chiller-maintenance', image: '/assets/services/hvac-chiller-maintenance.jpg', imageAlt: 'HVAC engineer inspecting commercial chiller and air-handling equipment.', name: 'HVAC & Chiller Maintenance', category: 'Technical services', description: 'Planned service for chillers, AHUs, ventilation and comfort systems.', detail: 'Support year-round thermal comfort in India’s varied operating conditions with a planned approach to chillers, air handling, ventilation and controls. Service visits are coordinated around occupied hours, seasonal changeovers and site-specific risk.', icon: 'fan', benefits: ['More consistent comfort and indoor-air observations', 'Better planned visibility of critical equipment', 'Reduced avoidable disruption during peak demand'], industries: ['IT parks', 'Hospitals', 'Hotels', 'Data centres'], scope: ['Chillers, AHUs, ventilation and filters', 'Operating readings and condition notes', 'Seasonal readiness and specialist escalation'], related: ['bms-integration','predictive-maintenance','energy-management'] },
  { id: 'SV-006', slug: 'civil-fabric-maintenance', image: '/assets/services/civil-fabric-maintenance.jpg', imageAlt: 'Maintenance technician carrying out a minor repair to an office door and frame.', name: 'Civil & Fabric Maintenance', category: 'Maintenance', description: 'Practical care for finishes, doors, roofs and everyday building fabric.', detail: 'Look after the physical fabric of the workplace with minor civil repairs, finish restoration and planned inspections. Site reviews can flag water ingress, damp and weather-related wear before they become larger interruptions.', icon: 'building', benefits: ['A more consistent site experience', 'Earlier attention to weather-related deterioration', 'Trackable small works across properties'], industries: ['Commercial buildings', 'Education', 'Retail', 'Residential communities'], scope: ['Minor masonry, paint and finish repairs', 'Roof, door and common-area observations', 'Monsoon-readiness and remedial work tracking'], related: ['facility-maintenance','landscaping-grounds','emergency-maintenance'] },
  { id: 'SV-007', slug: 'generator-maintenance', image: '/assets/services/generator-maintenance.jpg', imageAlt: 'Engineer performing a readiness inspection on a standby diesel generator.', name: 'Generator (DG Set) Maintenance', category: 'Technical services', description: 'Planned DG-set readiness checks and operating-record coordination.', detail: 'Support backup-power readiness through planned visual checks, operating-log review and maintenance coordination for diesel generator sets. Load testing and specialist work are scheduled with approved partners and site safety controls.', icon: 'activity', benefits: ['Clearer readiness records for backup power', 'Planned coordination of specialist visits', 'Fewer last-minute service surprises'], industries: ['Hospitals', 'IT parks', 'Manufacturing', 'Commercial buildings'], scope: ['DG-set inspection and operating records', 'Readiness and service-calendar tracking', 'Specialist partner and safety coordination'], related: ['ups-power-backup','electrical-maintenance','preventive-maintenance'] },
  { id: 'SV-008', slug: 'ups-power-backup', image: '/assets/services/ups-power-backup.jpg', imageAlt: 'Technician reviewing uninterruptible power equipment and battery cabinets.', name: 'UPS & Power Backup Systems', category: 'Technical services', description: 'Service coordination for UPS, battery banks and critical power continuity.', detail: 'Keep critical power assets visible through planned inspections, battery and alarm observations, operating records and specialist maintenance coordination. Critical sites can map escalation paths to agreed continuity procedures.', icon: 'bolt', benefits: ['Better visibility of backup-power condition', 'Planned battery and service reviews', 'Clear escalation for critical loads'], industries: ['Data centres', 'Healthcare', 'IT parks', 'Financial services'], scope: ['UPS and battery-bank observations', 'Alarm, bypass and service-log review', 'Partner coordination and continuity notes'], related: ['generator-maintenance','electrical-maintenance','predictive-maintenance'] },
  { id: 'SV-009', slug: 'pumps-equipment', image: '/assets/services/pumps-equipment.jpg', imageAlt: 'Technician checking the coupling and condition of a commercial pump and motor.', name: 'Pumps & Equipment Maintenance', category: 'Technical services', description: 'Condition-led care for pumps, motors and rotating equipment.', detail: 'Use routine observations, service history and operating readings to keep pumps and essential equipment on a manageable maintenance cycle. Work can include coordination across water, HVAC and process-support systems.', icon: 'settings', benefits: ['Earlier visibility of vibration, noise and leakage', 'More organised service history', 'Planned follow-up before avoidable downtime'], industries: ['Manufacturing', 'Residential communities', 'Healthcare', 'Hospitality'], scope: ['Pump, motor and rotating-equipment observations', 'Condition and service-log review', 'Repair, spares and specialist coordination'], related: ['plumbing-water-systems','hvac-chiller-maintenance','predictive-maintenance'] },
  { id: 'SV-010', slug: 'lift-vertical-transportation', image: '/assets/services/lift-vertical-transportation.jpg', imageAlt: 'Lift engineer inspecting elevator traction equipment and its control cabinet.', name: 'Lift & Vertical Transportation Support', category: 'Technical services', description: 'Planned lift-service coordination and responsive passenger-support escalation.', detail: 'Coordinate scheduled lift maintenance, service partner access and clear incident escalation for vertical transportation. Repair and statutory certification are delivered by appropriately authorised specialists under the client’s governance.', icon: 'arrowUp', benefits: ['Clear ownership during service events', 'Planned access and partner visits', 'Consistent incident and downtime records'], industries: ['Commercial buildings', 'Healthcare', 'Residential communities', 'Hotels'], scope: ['Service calendars and access arrangements', 'Passenger incident escalation path', 'Partner reports and follow-up actions'], related: ['integrated-facilities-management','emergency-maintenance','preventive-maintenance'] },
  { id: 'SV-011', slug: 'cleaning-workplace-services', image: '/assets/services/cleaning-workplace-services.jpg', imageAlt: 'Brush and cleaning solution being used to scrub hard-surface flooring.', name: 'Cleaning & Workplace Services', category: 'Cleaning', description: 'Site-specific cleaning and workplace care shaped around occupancy.', detail: 'Build cleaning schedules around how each space is used, with clear service standards for common areas, washrooms, work zones and high-touch points. Delivery is planned for Indian business hours, shift patterns and site occupancy.', icon: 'sparkle', benefits: ['Consistent, visible cleaning standards', 'Schedules matched to occupancy and footfall', 'Clear inspection and corrective-action records'], industries: ['Corporate offices', 'Education', 'Healthcare', 'Retail'], scope: ['Daily and periodic cleaning schedules', 'Washroom, common-area and floor-care plans', 'Site inspections and service recovery'], related: ['integrated-facilities-management','security-safety','sustainability-services'] },
  { id: 'SV-012', slug: 'preventive-maintenance', image: '/assets/services/preventive-maintenance.jpg', imageAlt: 'Technician checking an outdoor air-conditioning unit during planned maintenance.', name: 'Preventive Maintenance', category: 'Maintenance', description: 'Planned inspections for critical assets, building systems and site risks.', detail: 'Translate asset criticality, manufacturer recommendations and operating patterns into a maintainable calendar. Completion rates, findings and overdue actions remain visible to the client and operations teams.', icon: 'calendar', benefits: ['More planned work and fewer avoidable emergencies', 'Clear ownership for overdue actions', 'Useful evidence for operational reviews'], industries: ['Manufacturing', 'Healthcare', 'IT parks', 'Education'], scope: ['Asset register and task-calendar review', 'Planned visits, checklists and sign-off', 'Exceptions, corrective work and completion reporting'], related: ['integrated-facilities-management','predictive-maintenance','hvac-chiller-maintenance'] },
  { id: 'SV-013', slug: 'security-safety', image: '/assets/services/security-safety.jpg', imageAlt: 'Office staff member presenting an access card to an electronic building-entry reader.', name: 'Security & Safety Coordination', category: 'Security', description: 'Coordinated access, incident escalation and safety processes for live sites.', detail: 'Bring site access, guard-provider coordination and facilities incident response into a consistent operating rhythm. Security duties and statutory responsibilities remain defined by the client and appropriately licensed partners.', icon: 'shield', benefits: ['Clear site escalation and communication paths', 'Consistent access and incident records', 'Safety expectations visible to service partners'], industries: ['Corporate offices', 'Healthcare', 'Warehouses', 'Residential communities'], scope: ['Access and visitor-process coordination', 'Incident logging and escalation', 'Contractor induction and permit-to-work alignment'], related: ['integrated-facilities-management','emergency-maintenance','cleaning-workplace-services'] },
  { id: 'SV-014', slug: 'energy-management', image: '/assets/fm-plant-room.jpg', imageAlt: 'Facilities engineer reviewing equipment readings in a commercial plant room.', name: 'Energy Management', category: 'Energy', description: 'Practical energy reviews for building systems, operating hours and utility use.', detail: 'Make energy use easier to understand by reviewing operating schedules, building-system performance and utility patterns. Recommendations focus on measurable, site-specific operational improvements rather than unverified savings promises.', icon: 'chart', benefits: ['Clearer energy baselines and operating trends', 'Actionable schedules for major building systems', 'Evidence to support client sustainability goals'], industries: ['IT parks', 'Manufacturing', 'Commercial buildings', 'Education'], scope: ['Utility and meter-data review', 'Operating schedule and setpoint observations', 'Opportunity register and progress checks'], related: ['sustainability-services','bms-integration','smart-facility-management'] },
  { id: 'SV-015', slug: 'sustainability-services', image: '/assets/services/sustainability-services.jpg', imageAlt: 'Solar technician inspecting photovoltaic panels as part of a building sustainability programme.', name: 'Sustainability Services', category: 'Energy', description: 'Operational improvements for energy, water, waste and responsible procurement.', detail: 'Support practical environmental improvements with site data, facilities actions and review routines that operations teams can maintain. Any carbon, water or waste claims should be based on verified measurements and agreed reporting boundaries.', icon: 'leaf', benefits: ['Site actions connected to measurable indicators', 'Better coordination of energy, water and waste initiatives', 'Evidence that can be reviewed with stakeholders'], industries: ['Corporate offices', 'IT parks', 'Education', 'Manufacturing'], scope: ['Energy and water opportunity tracking', 'Waste-diversion and supplier data coordination', 'Progress reviews with documented assumptions'], related: ['energy-management','cleaning-workplace-services','smart-facility-management'] },
  { id: 'SV-016', slug: 'pest-control', image: '/assets/services/pest-control.jpg', imageAlt: 'Pest-management specialist applying a controlled warehouse treatment while wearing protective equipment.', name: 'Pest Control', category: 'Maintenance', description: 'Prevention-first pest management coordinated with approved specialists.', detail: 'Coordinate inspections, site hygiene actions and approved pest-control partners with minimal disruption to occupants, stock and sensitive operations. Treatment methods are selected by qualified providers for the site and applicable requirements.', icon: 'shield', benefits: ['Earlier attention to conditions that attract pests', 'Documented inspections and corrective actions', 'Careful scheduling for sensitive environments'], industries: ['Healthcare', 'Food and hospitality', 'Warehouses', 'Education'], scope: ['Inspection and trend records', 'Site hygiene and exclusion actions', 'Specialist treatment and follow-up coordination'], related: ['cleaning-workplace-services','security-safety','integrated-facilities-management'] },
  { id: 'SV-017', slug: 'landscaping-grounds', image: '/assets/services/landscaping-grounds.jpg', imageAlt: 'Groundskeeper maintaining a landscaped lawn in a public park setting.', name: 'Landscaping & Grounds', category: 'Cleaning', description: 'Seasonal grounds care for safe, welcoming and well-maintained sites.', detail: 'Plan grounds maintenance around site access, seasonal rainfall and local landscape conditions. Work can cover routine horticulture, pathways, irrigation observations and coordination of specialist arboriculture.', icon: 'leaf', benefits: ['Safer, more welcoming outdoor spaces', 'Seasonal tasks planned around site use', 'Visible inspection and contractor follow-up'], industries: ['Corporate campuses', 'Residential communities', 'Education', 'Hospitality'], scope: ['Horticulture and grounds-care schedules', 'Pathway, drainage and irrigation observations', 'Seasonal and monsoon-readiness actions'], related: ['civil-fabric-maintenance','sustainability-services','integrated-facilities-management'] },
  { id: 'SV-018', slug: 'emergency-maintenance', image: '/assets/services/emergency-maintenance.jpg', imageAlt: 'Technician diagnosing a building air-conditioning unit during a repair visit.', name: 'Emergency Maintenance', category: 'Emergency services', description: 'Urgent incident escalation for facility faults and service disruptions, with coverage agreed in the service scope.', detail: 'Give site teams a clear route to report urgent building issues, reach the operations desk and receive coordinated updates. Response expectations, escalation contacts and service coverage are agreed for each client and city.', icon: 'clock', benefits: ['One clear point of contact for urgent incidents', 'Priority triage and documented escalation', 'Communication through to service restoration'], industries: ['Healthcare', 'Manufacturing', 'IT parks', 'Residential communities'], scope: ['Urgent incident intake and priority triage as agreed in scope', 'On-call resource and specialist partner coordination', 'Status updates and incident close-out notes'], related: ['integrated-facilities-management','security-safety','facility-maintenance'] },
  { id: 'SV-019', slug: 'smart-facility-management', image: '/assets/fm-workplace-operations.jpg', imageAlt: 'Facilities coordinator reviewing building systems beside a control panel in an office campus.', name: 'Smart Facility Management', category: 'Technical services', description: 'A joined-up digital view of assets, service requests and operating performance.', detail: 'Connect work orders, site schedules, asset records and performance reviews in one operational workspace. Smart FM should simplify the work of site teams and clients—not add another disconnected system.', icon: 'sparkle', benefits: ['One shared view of work and site information', 'Faster handoffs between clients and field teams', 'More useful portfolio-level reporting'], industries: ['IT parks', 'Corporate offices', 'Data centres', 'Manufacturing'], scope: ['Digital work-order and service history', 'Asset and maintenance schedule visibility', 'Operational dashboards and review workflows'], related: ['iot-monitoring','bms-integration','predictive-maintenance'] },
  { id: 'SV-020', slug: 'iot-monitoring', image: '/assets/services/iot-monitoring.jpg', imageAlt: 'Rows of monitored equipment in a data-centre server room.', name: 'IoT Monitoring', category: 'Technical services', description: 'Connected sensor signals translated into useful facilities alerts.', detail: 'Where clients already have suitable sensors, bring agreed readings and alerts into a practical review process. Data quality, alert thresholds, device ownership and privacy boundaries are confirmed before integration.', icon: 'activity', benefits: ['Earlier awareness of abnormal operating patterns', 'Fewer disconnected alerts for site teams', 'Clear ownership from signal to action'], industries: ['Data centres', 'Manufacturing', 'IT parks', 'Healthcare'], scope: ['Sensor and data-source inventory', 'Threshold and alert-routing review', 'Exception triage and work-order linkage'], related: ['bms-integration','predictive-maintenance','smart-facility-management'] },
  { id: 'SV-021', slug: 'bms-integration', image: '/assets/facility-hero.jpg', imageAlt: 'Facilities engineer reviewing a building-management control panel in a plant room.', name: 'BMS Integration', category: 'Technical services', description: 'Coordinate building-management-system data with facilities workflows.', detail: 'Help teams make better use of existing BMS alarms and trends by aligning points, response ownership and maintenance processes. Integration is scoped to approved client systems and vendor access controls.', icon: 'settings', benefits: ['Less manual relay of building alarms', 'Clearer links between alarms and work orders', 'More consistent review of operating trends'], industries: ['IT parks', 'Hospitals', 'Commercial buildings', 'Data centres'], scope: ['BMS point and alarm review', 'Role-based notification and response mapping', 'Work-order and trend-review coordination'], related: ['iot-monitoring','energy-management','hvac-chiller-maintenance'] },
  { id: 'SV-022', slug: 'predictive-maintenance', image: '/assets/services/predictive-maintenance.jpg', imageAlt: 'Engineer recording condition observations beside industrial machinery.', name: 'Predictive Maintenance', category: 'Maintenance', description: 'Use asset history and condition signals to prioritise maintenance earlier.', detail: 'Combine service history, inspection findings and available condition data to identify assets that may need earlier attention. Predictions are decision support, not guarantees; technicians and client teams retain operational judgement.', icon: 'chart', benefits: ['Earlier prioritisation of developing issues', 'Maintenance based on condition as well as time', 'Evidence-led planning for critical assets'], industries: ['Manufacturing', 'Data centres', 'Healthcare', 'IT parks'], scope: ['Critical-asset and failure-history review', 'Condition indicators and trend assessment', 'Recommended work, review window and outcomes'], related: ['preventive-maintenance','iot-monitoring','bms-integration'] }
];

export const workOrders = [
  { id: 'WO-4821', title: 'Chiller 2 vibration inspection', client: 'Meridian Workspaces', property: 'Meridian Tech Park Tower 2', category: 'HVAC', priority: 'High', status: 'In Progress', assignee: 'Senthil Kumar', date: '2026-10-08', location: 'Level 4 · Chiller plant' },
  { id: 'WO-4820', title: 'Main lobby · Block A lighting circuit', client: 'Harborview Health', property: 'Harborview Medical Centre', category: 'Electrical', priority: 'Medium', status: 'Dispatched', assignee: 'Kiran Raj', date: '2026-10-08', location: 'Main lobby · Block A' },
  { id: 'WO-4819', title: 'Domestic water pressure review', client: 'Juniper Residential', property: 'Juniper Residences · Saravanampatti', category: 'Plumbing', priority: 'High', status: 'Assigned', assignee: 'Lakshmi Prasad', date: '2026-10-08', location: 'Block B · Water riser' },
  { id: 'WO-4818', title: 'Air handling unit filter change', client: 'Westward Learning Group', property: 'Westward Learning Campus', category: 'Preventive', priority: 'Low', status: 'Client Approval', assignee: 'Senthil Kumar', date: '2026-10-07', location: 'Science block · AHU room' },
  { id: 'WO-4817', title: 'Guest floor carpet spot treatment', client: 'Atelier House Hotels', property: 'Atelier House Coimbatore', category: 'Cleaning', priority: 'Medium', status: 'Pending Review', assignee: 'Unassigned', date: '2026-10-07', location: 'Level 3 · East wing' },
  { id: 'WO-4816', title: 'Dock leveler safety check', client: 'Fieldstone Logistics', property: 'Fieldstone Logistics Hub', category: 'Inspection', priority: 'Critical', status: 'In Progress', assignee: 'Prabhu Kumar', date: '2026-10-07', location: 'Loading bay 3' },
  { id: 'WO-4815', title: 'Exterior sign timer adjustment', client: 'Cedar & Finch Retail', property: 'Cedar & Finch Retail · RS Puram', category: 'Electrical', priority: 'Low', status: 'Completed', assignee: 'Kiran Raj', date: '2026-10-07', location: 'West entrance' },
  { id: 'WO-4814', title: 'Lab exhaust alarm investigation', client: 'Pioneer BioLabs', property: 'Pioneer BioLabs · KGISL Tech Park', category: 'HVAC', priority: 'Critical', status: 'Dispatched', assignee: 'Senthil Kumar', date: '2026-10-07', location: 'Lab 2A' },
  { id: 'WO-4813', title: 'Gallery humidity sensor calibration', client: 'Civic Arts Foundation', property: 'Civic Arts Centre · Race Course', category: 'Controls', priority: 'High', status: 'On Hold', assignee: 'Rahul Menon', date: '2026-10-06', location: 'Gallery 1' },
  { id: 'WO-4812', title: 'Compressed air leak at line 4', client: 'Alder Manufacturing', property: 'Alder Manufacturing · SIDCO', category: 'Mechanical', priority: 'Medium', status: 'Assigned', assignee: 'Aravind S', date: '2026-10-06', location: 'Production line 4 · compressor bay' },
  { id: 'WO-4811', title: 'Fire door closer adjustment', client: 'Meridian Workspaces', property: 'Meridian Tech Park Tower 2', category: 'Life safety', priority: 'Medium', status: 'In Progress', assignee: 'Sneha Reddy', date: '2026-10-06', location: 'Level 12 · Stair B' },
  { id: 'WO-4810', title: 'Loading bay floor scrub', client: 'Fieldstone Logistics', property: 'Fieldstone Logistics Hub', category: 'Cleaning', priority: 'Low', status: 'Completed', assignee: 'Janani Devi', date: '2026-10-06', location: 'Bay 7' },
  { id: 'WO-4809', title: 'Domestic hot water temperature', client: 'Harborview Health', property: 'Harborview Medical Centre', category: 'Plumbing', priority: 'High', status: 'Closed', assignee: 'Lakshmi Prasad', date: '2026-10-05', location: 'Patient wing · Level 3' },
  { id: 'WO-4808', title: 'Elevator door sensor fault', client: 'Juniper Residential', property: 'Juniper Residences · Saravanampatti', category: 'Mechanical', priority: 'Critical', status: 'Completed', assignee: 'Prabhu Kumar', date: '2026-10-05', location: 'Tower A · Lift 2' },
  { id: 'WO-4807', title: 'Quarterly generator exercise', client: 'Westward Learning Group', property: 'Westward Learning Campus', category: 'Preventive', priority: 'Medium', status: 'Assigned', assignee: 'Sneha Reddy', date: '2026-10-05', location: 'Central plant' },
  { id: 'WO-4806', title: 'Restroom sensor tap replacement', client: 'Cedar & Finch Retail', property: 'Cedar & Finch Retail · RS Puram', category: 'Plumbing', priority: 'Low', status: 'Completed', assignee: 'Lakshmi Prasad', date: '2026-10-04', location: 'Level 2 · West' },
  { id: 'WO-4805', title: 'AHU condensate line clearing', client: 'Atelier House Hotels', property: 'Atelier House Coimbatore', category: 'HVAC', priority: 'High', status: 'Waiting for Parts', assignee: 'Senthil Kumar', date: '2026-10-04', location: 'Roof plant deck' },
  { id: 'WO-4804', title: 'Visitor access reader offline', client: 'Pioneer BioLabs', property: 'Pioneer BioLabs · KGISL Tech Park', category: 'Security', priority: 'High', status: 'In Progress', assignee: 'Rahul Menon', date: '2026-10-04', location: 'East entry' },
  { id: 'WO-4803', title: 'Parking garage drain inspection', client: 'Meridian Workspaces', property: 'Meridian Tech Park Tower 2', category: 'Plumbing', priority: 'Medium', status: 'Completed', assignee: 'Aravind S', date: '2026-10-03', location: 'P2 · Zone C' },
  { id: 'WO-4802', title: 'Classroom thermostat response', client: 'Westward Learning Group', property: 'Westward Learning Campus', category: 'Controls', priority: 'Medium', status: 'Closed', assignee: 'Rahul Menon', date: '2026-10-03', location: 'Room 214' },
  { id: 'WO-4801', title: 'Irrigation valve seasonal shutoff', client: 'Civic Arts Foundation', property: 'Civic Arts Centre · Race Course', category: 'Grounds', priority: 'Low', status: 'Completed', assignee: 'Fathima A', date: '2026-10-03', location: 'South courtyard' },
  { id: 'WO-4800', title: 'Emergency egress light test', client: 'Harborview Health', property: 'Harborview Medical Centre', category: 'Life safety', priority: 'High', status: 'Assigned', assignee: 'Sneha Reddy', date: '2026-10-02', location: 'Level 4 · East wing' },
  { id: 'WO-4799', title: 'Cooling tower basin clean', client: 'Alder Manufacturing', property: 'Alder Manufacturing · SIDCO', category: 'Preventive', priority: 'Medium', status: 'Completed', assignee: 'Senthil Kumar', date: '2026-10-02', location: 'Roof plant' },
  { id: 'WO-4798', title: 'Retail entry mat replacement', client: 'Cedar & Finch Retail', property: 'Cedar & Finch Retail · RS Puram', category: 'Cleaning', priority: 'Low', status: 'Closed', assignee: 'Janani Devi', date: '2026-10-02', location: 'Main entrance' },
  { id: 'WO-4797', title: 'Roll-up door intermittent stop', client: 'Fieldstone Logistics', property: 'Fieldstone Logistics Hub', category: 'Mechanical', priority: 'High', status: 'In Progress', assignee: 'Prabhu Kumar', date: '2026-10-01', location: 'Dock 11' },
  { id: 'WO-4796', title: 'Conference room lighting scene', client: 'Meridian Workspaces', property: 'Meridian Tech Park Tower 2', category: 'Electrical', priority: 'Low', status: 'Completed', assignee: 'Kiran Raj', date: '2026-10-01', location: 'Level 9 · Cedar' },
  { id: 'WO-4795', title: 'Booster pump seal inspection', client: 'Juniper Residential', property: 'Juniper Residences · Saravanampatti', category: 'Plumbing', priority: 'Medium', status: 'Closed', assignee: 'Lakshmi Prasad', date: '2026-09-30', location: 'Basement plant room' },
  { id: 'WO-4794', title: 'Monthly kitchen hood service', client: 'Atelier House Hotels', property: 'Atelier House Coimbatore', category: 'Preventive', priority: 'Medium', status: 'Completed', assignee: 'Aravind S', date: '2026-09-30', location: 'Main kitchen' },
  { id: 'WO-4793', title: 'Cleanroom differential pressure', client: 'Pioneer BioLabs', property: 'Pioneer BioLabs · KGISL Tech Park', category: 'HVAC', priority: 'Critical', status: 'Closed', assignee: 'Senthil Kumar', date: '2026-09-29', location: 'Cleanroom 1' },
  { id: 'WO-4792', title: 'Tree limb clearance after wind', client: 'Civic Arts Foundation', property: 'Civic Arts Centre · Race Course', category: 'Grounds', priority: 'High', status: 'Completed', assignee: 'Fathima A', date: '2026-09-29', location: 'South walkway' }
];

export const schedules = [
  { id: 'PM-2041', title: 'Quarterly air handling inspection', property: 'Meridian Tech Park Tower 2', service: 'HVAC', technician: 'Senthil Kumar', due: '2026-10-09', recurrence: 'Quarterly', status: 'Scheduled' },
  { id: 'PM-2040', title: 'Fire alarm panel functional test', property: 'Harborview Medical Centre', service: 'Life safety', technician: 'Sneha Reddy', due: '2026-10-10', recurrence: 'Monthly', status: 'Scheduled' },
  { id: 'PM-2039', title: 'Domestic water temperature log', property: 'Juniper Residences · Saravanampatti', service: 'Plumbing', technician: 'Lakshmi Prasad', due: '2026-10-11', recurrence: 'Weekly', status: 'Scheduled' },
  { id: 'PM-2038', title: 'Generator load-bank readiness', property: 'Westward Learning Campus', service: 'Electrical', technician: 'Kiran Raj', due: '2026-10-12', recurrence: 'Quarterly', status: 'Scheduled' },
  { id: 'PM-2037', title: 'Kitchen extract filter service', property: 'Atelier House Coimbatore', service: 'HVAC', technician: 'Aravind S', due: '2026-10-12', recurrence: 'Monthly', status: 'Scheduled' },
  { id: 'PM-2036', title: 'Dock door safety inspection', property: 'Fieldstone Logistics Hub', service: 'Mechanical', technician: 'Prabhu Kumar', due: '2026-10-13', recurrence: 'Monthly', status: 'Scheduled' },
  { id: 'PM-2035', title: 'Emergency lighting audit', property: 'Cedar & Finch Retail · RS Puram', service: 'Life safety', technician: 'Sneha Reddy', due: '2026-10-14', recurrence: 'Quarterly', status: 'Scheduled' },
  { id: 'PM-2034', title: 'Lab exhaust calibration', property: 'Pioneer BioLabs · KGISL Tech Park', service: 'Controls', technician: 'Rahul Menon', due: '2026-10-15', recurrence: 'Quarterly', status: 'At risk' },
  { id: 'PM-2033', title: 'Gallery environmental sensor check', property: 'Civic Arts Centre · Race Course', service: 'Controls', technician: 'Rahul Menon', due: '2026-10-16', recurrence: 'Monthly', status: 'Scheduled' },
  { id: 'PM-2032', title: 'Cooling tower water treatment review', property: 'Alder Manufacturing · SIDCO', service: 'HVAC', technician: 'Senthil Kumar', due: '2026-10-17', recurrence: 'Monthly', status: 'Scheduled' },
  { id: 'PM-2031', title: 'Lift traction and door review', property: 'Juniper Residences · Saravanampatti', service: 'Mechanical', technician: 'Prabhu Kumar', due: '2026-10-18', recurrence: 'Quarterly', status: 'Scheduled' },
  { id: 'PM-2030', title: 'Exterior glass and entry inspection', property: 'Meridian Tech Park Tower 2', service: 'Building care', technician: 'Janani Devi', due: '2026-10-20', recurrence: 'Monthly', status: 'Scheduled' }
];

export const invoices = [
  { id: 'INV-9804', client: 'Meridian Workspaces', property: 'Meridian Tech Park Tower 2', issue: '2026-10-01', due: '2026-10-31', amount: 1248000, status: 'Pending' },
  { id: 'INV-9803', client: 'Harborview Health', property: 'Harborview Medical Centre', issue: '2026-10-01', due: '2026-10-31', amount: 1892000, status: 'Paid' },
  { id: 'INV-9802', client: 'Juniper Residential', property: 'Juniper Residences · Saravanampatti', issue: '2026-09-30', due: '2026-10-30', amount: 865000, status: 'Partially Paid' },
  { id: 'INV-9801', client: 'Westward Learning Group', property: 'Westward Learning Campus', issue: '2026-09-30', due: '2026-10-30', amount: 1430000, status: 'Paid' },
  { id: 'INV-9800', client: 'Atelier House Hotels', property: 'Atelier House Coimbatore', issue: '2026-09-28', due: '2026-10-28', amount: 1164000, status: 'Pending' },
  { id: 'INV-9799', client: 'Fieldstone Logistics', property: 'Fieldstone Logistics Hub', issue: '2026-09-26', due: '2026-10-26', amount: 972000, status: 'Overdue' },
  { id: 'INV-9798', client: 'Cedar & Finch Retail', property: 'Cedar & Finch Retail · RS Puram', issue: '2026-09-25', due: '2026-10-25', amount: 624000, status: 'Paid' },
  { id: 'INV-9797', client: 'Pioneer BioLabs', property: 'Pioneer BioLabs · KGISL Tech Park', issue: '2026-09-23', due: '2026-10-23', amount: 1588000, status: 'Paid' }
];

export const notifications = [
  { id: 'NT-701', title: 'Technician dispatched', body: 'Kiran Raj has been dispatched to Harborview Medical Centre.', time: '8 min ago', type: 'dispatch', unread: true },
  { id: 'NT-700', title: 'Work order completed', body: 'WO-4818 · Air handling unit filter change is ready for review.', time: '42 min ago', type: 'success', unread: true },
  { id: 'NT-699', title: 'Maintenance due soon', body: 'Fire alarm panel test at Harborview is scheduled for Friday.', time: '2 hours ago', type: 'calendar', unread: true },
  { id: 'NT-698', title: 'Invoice available', body: 'Invoice INV-9804 for Meridian Tower is ready to view.', time: 'Yesterday', type: 'invoice', unread: false }
];

export const messages = [
  { id: 'MS-441', sender: 'Kavya Raman', company: 'Meridian Workspaces', subject: 'After-hours access for chiller inspection', preview: 'The plant room access code has been updated for this evening...', time: '9:12 AM', unread: true },
  { id: 'MS-440', sender: 'Dr. Naveen Varma', company: 'Harborview Health', subject: 'Patient wing lighting follow-up', preview: 'Could you share the completion photos with our facilities lead?', time: '8:46 AM', unread: true },
  { id: 'MS-439', sender: 'Senthil Kumar', company: 'Technician', subject: 'WO-4821 · Chiller 2 inspection', preview: 'Vibration is isolated to the secondary pump coupling. Reviewing...', time: '8:18 AM', unread: false },
  { id: 'MS-438', sender: 'Priya Nair', company: 'Juniper Residential', subject: 'Lobby access window', preview: 'The contractor can access the south riser from 10:30 to 12:00.', time: 'Yesterday', unread: false }
];

export const blogPosts = [
  {
    "id": "BL-108",
    "slug": "preventive-maintenance-guide",
    "title": "A practical guide to preventive maintenance planning",
    "category": "Preventive maintenance",
    "date": "Oct 06, 2026",
    "read": "7 min read",
    "author": "Divya Narayanan",
    "featured": true,
    "excerpt": "Connect asset consequence, condition and site use so planned work is both worthwhile and achievable.",
    "description": "A practical framework for prioritising assets, building a maintainable service rhythm and turning inspection findings into owned follow-up.",
    "image": "/assets/services/preventive-maintenance.jpg",
    "imageAlt": "Technician inspecting an outdoor air-conditioning unit during a planned maintenance visit.",
    "intro": "A preventive programme is not valuable simply because tasks appear on a calendar. It works when the schedule reflects the consequence of failure, the condition of equipment and the hours a site can safely make available.",
    "sections": [
      {
        "id": "prioritise-assets",
        "title": "Start with consequence, not a long asset list",
        "paragraphs": [
          "Begin with equipment whose failure could affect safety, business continuity, essential comfort or an important building service. A short, agreed criticality review is often more useful than trying to make every asset equally urgent.",
          "Use what is already known: age, operating conditions, repeat faults, available redundancy and manufacturer guidance. Record uncertainty rather than filling gaps with assumptions; a reliable plan can improve as asset information improves."
        ],
        "list": [
          "Confirm the asset and its location are identifiable.",
          "Note failure history, known condition and operational impact.",
          "Name who can approve access, shutdowns and follow-up work."
        ]
      },
      {
        "id": "build-rhythm",
        "title": "Build a service rhythm the site can support",
        "paragraphs": [
          "Set frequencies from the asset, local requirements and operating context—not from a blanket interval. A plant room, a teaching space and a loading dock have different access constraints and usage patterns.",
          "Coordinate visits with operating windows and technician capacity. Leave room for isolation, safe access and the time needed to record findings; a schedule that cannot be completed consistently will not provide dependable evidence."
        ]
      },
      {
        "id": "close-findings",
        "title": "Make inspection findings part of the plan",
        "paragraphs": [
          "A completed checklist is only the beginning. Give each actionable observation an owner, priority and next review date, then link it to the appropriate work order or specialist decision.",
          "Review repeat findings alongside missed tasks and reactive callouts. That conversation helps teams adjust the plan based on real building history rather than treating the calendar as fixed."
        ]
      }
    ],
    "keyInsights": [
      "Prioritise work by consequence and condition.",
      "Schedule around real access and operating windows.",
      "Give every finding an owner and a recorded next step."
    ],
    "conclusion": "Choose one critical system, review its work history and agree the next service cycle with the site team. A small, well-documented loop is a sound starting point for a wider programme.",
    "tags": [
      "Asset care",
      "Maintenance planning",
      "Site operations"
    ],
    "cta": {
      "title": "Make planned work easier to manage",
      "body": "Review the sample preventive-maintenance scope and the information a site plan should clarify.",
      "label": "Explore preventive maintenance",
      "href": "#/services/preventive-maintenance"
    },
    "relatedSlugs": [
      "seasonal-hvac-transition-checklist",
      "critical-spares-maintenance",
      "work-order-data-that-matters"
    ]
  },
  {
    "id": "BL-107",
    "slug": "indoor-air-quality-workplace",
    "title": "Making indoor air quality part of everyday operations",
    "category": "Indoor air quality",
    "date": "Sep 24, 2026",
    "read": "5 min read",
    "author": "Karthik Subramanian",
    "excerpt": "Combine occupant feedback, ventilation checks and measured conditions to investigate comfort concerns with context.",
    "description": "How facilities teams can pair occupant feedback with ventilation observations and measured conditions when investigating indoor air quality.",
    "image": "/assets/fm-workplace-operations.jpg",
    "imageAlt": "Facilities coordinator reviewing building systems in a modern office lobby.",
    "intro": "Indoor air quality is experienced by people, but it is influenced by building systems, occupancy, maintenance and the way a space is used. A useful response connects those signals instead of relying on a single reading or one-off complaint.",
    "sections": [
      {
        "id": "listen-to-people",
        "title": "Begin with the pattern people are describing",
        "paragraphs": [
          "Record where and when discomfort occurs, how many people are affected and whether the concern changes with occupancy or weather. Consistent notes help a team distinguish a recurring pattern from an isolated event.",
          "Treat feedback as a prompt to investigate, not as a diagnosis. Explain what will be checked and when the team will report back, especially when the cause is not immediately clear."
        ]
      },
      {
        "id": "check-ventilation",
        "title": "Check the building conditions around the concern",
        "paragraphs": [
          "Review ventilation schedules, filter condition, recent maintenance, temperature and humidity observations, and any relevant control settings. Consider room use and recent changes such as a shift in headcount or a change to partitions.",
          "Where monitoring equipment is used, confirm its location, calibration status and measurement period before comparing results. Readings are more useful when they are interpreted alongside the operating context."
        ],
        "list": [
          "Inspect air-handling and ventilation schedules.",
          "Check filters, intakes and recent service records.",
          "Compare occupied and unoccupied periods where appropriate."
        ]
      },
      {
        "id": "document-response",
        "title": "Close the loop with a clear update",
        "paragraphs": [
          "Record the observation, checks completed, any adjustment made and the point at which the result will be reviewed. Escalate specialist concerns through the site’s established health, safety and building procedures.",
          "A concise follow-up gives occupants confidence that the issue has an owner and gives the facilities team a record to compare if the concern returns."
        ]
      }
    ],
    "keyInsights": [
      "Capture location, timing and occupancy with each concern.",
      "Interpret measurements alongside system condition and operating schedules.",
      "Document the check, action and follow-up date."
    ],
    "conclusion": "Start with one recurring comfort concern. Pair occupant notes with a focused ventilation review, then agree how and when the outcome will be checked again.",
    "tags": [
      "Ventilation",
      "Occupant feedback",
      "Building comfort"
    ],
    "cta": {
      "title": "Connect comfort with system care",
      "body": "See how an HVAC maintenance scope can include planned checks, operating observations and clear follow-up.",
      "label": "Review HVAC and ventilation care",
      "href": "#/services/hvac-chiller-maintenance"
    },
    "relatedSlugs": [
      "seasonal-hvac-transition-checklist",
      "cleaning-service-programme",
      "facility-management-data-quality"
    ]
  },
  {
    "id": "BL-106",
    "slug": "building-energy-baselines",
    "title": "The building energy baseline: where to begin",
    "category": "Energy management",
    "date": "Sep 11, 2026",
    "read": "6 min read",
    "author": "Ananya Iyer",
    "excerpt": "Create a trustworthy reference point before comparing buildings, changing settings or reporting energy progress.",
    "description": "A facilities guide to setting a useful energy baseline by defining boundaries, accounting for operating context and checking data quality.",
    "image": "/assets/fm-plant-room.jpg",
    "imageAlt": "Facilities engineer checking equipment and readings in a commercial plant room.",
    "intro": "A baseline gives an energy team a fair point of comparison. It is not just a number from a utility bill: it depends on which meters and spaces are included, how a building is occupied and whether the underlying records are complete.",
    "sections": [
      {
        "id": "define-boundary",
        "title": "Define what the baseline includes",
        "paragraphs": [
          "List the buildings, meters and energy sources in scope, and note any areas shared with another tenant or service. Make the boundary explicit so the same load is not counted twice or quietly omitted.",
          "Keep source records and note the period covered. If a meter was replaced, a space changed use or a site was only partly occupied, record that alongside the figures rather than hiding the change."
        ]
      },
      {
        "id": "normalise-context",
        "title": "Compare like with like",
        "paragraphs": [
          "Occupancy, operating hours, weather and production patterns can all change demand. Choose a small number of contextual factors that are relevant to the property and make them visible in each review.",
          "Avoid presenting a raw month-to-month difference as proof of improvement when the period or operating conditions are not comparable. A transparent caveat is more useful than a precise-looking but misleading percentage."
        ],
        "list": [
          "Keep the reporting period consistent.",
          "Record occupancy and operating-hour changes.",
          "Separate verified readings from estimates."
        ]
      },
      {
        "id": "investigate-load",
        "title": "Use the baseline to guide a site review",
        "paragraphs": [
          "Once records are checked, look for meaningful changes by end use, time of day or building system. Then ask site teams what changed in schedules, setpoints, maintenance or demand before deciding on an action.",
          "Track the selected action and review its effect over an agreed period. This turns energy reporting into an operating conversation instead of a chart that is read once and forgotten."
        ]
      }
    ],
    "keyInsights": [
      "Write down the boundary, period and data source.",
      "Note occupancy and schedule changes before comparing usage.",
      "Pair a trend with a site check and a documented action."
    ],
    "conclusion": "Choose one building and one consistent reporting period. Confirm the meter boundary with the site team, then use the first baseline review to identify what should be checked next.",
    "tags": [
      "Energy data",
      "Building operations",
      "Performance review"
    ],
    "cta": {
      "title": "Build an operating view of energy use",
      "body": "Review a sample energy-management scope for system observations, site context and practical follow-up.",
      "label": "Explore energy management",
      "href": "#/services/energy-management"
    },
    "relatedSlugs": [
      "facility-management-data-quality",
      "work-order-data-that-matters",
      "preventive-maintenance-guide"
    ]
  },
  {
    "id": "BL-105",
    "slug": "work-order-data-that-matters",
    "title": "Five work-order signals that improve service planning",
    "category": "Work-order analytics",
    "date": "Aug 29, 2026",
    "read": "4 min read",
    "author": "Arjun Menon",
    "excerpt": "Use repeat visits, asset context and closure quality to turn work-order history into practical planning questions.",
    "description": "Five practical work-order signals that help facilities teams investigate repeat faults, service delays and follow-up quality.",
    "image": "/assets/services/iot-monitoring.jpg",
    "imageAlt": "Rows of equipment in a data-centre server room, illustrating connected operational monitoring.",
    "intro": "A work-order dashboard is only as useful as the decisions it supports. A few well-defined signals—read with site context—can help a team spot recurring friction without confusing activity counts with service quality.",
    "sections": [
      {
        "id": "standardise-records",
        "title": "Make the record consistent enough to compare",
        "paragraphs": [
          "Use stable property, asset, location and fault labels so similar jobs can be found together. If technicians describe the same issue in different ways, agree a simple coding guide and update it as the service evolves.",
          "A record should also distinguish a new request from a follow-up visit. That small difference is essential when a team wants to understand whether an issue was resolved or simply returned to the queue."
        ]
      },
      {
        "id": "look-for-repeat",
        "title": "Look for repeat work and waiting time",
        "paragraphs": [
          "Repeated jobs on one asset or in one area can point to an underlying condition, a poor handoff or a scope that needs review. Compare recurrence with the work notes before drawing a conclusion.",
          "Time to first response and time to close are different measures. Use both alongside the reason a job was delayed—such as access, parts or approval—so a team can act on the constraint rather than the number alone."
        ],
        "list": [
          "Repeat callouts by asset and location.",
          "Jobs waiting on access, approval or material.",
          "Follow-up work linked to the original request."
        ]
      },
      {
        "id": "use-signals",
        "title": "Turn signals into a short review agenda",
        "paragraphs": [
          "Choose a small set of measures that has an owner and a regular review point. Ask what changed, what the notes confirm and which follow-up would reduce recurrence or improve visibility.",
          "Do not rank technicians or sites from raw counts without checking job complexity and data quality. A responsible dashboard helps teams learn where the process needs attention."
        ]
      }
    ],
    "keyInsights": [
      "Standardise asset and fault labels before comparing trends.",
      "Separate repeat work from first-time requests.",
      "Use delay reasons and completion notes to explain the metric."
    ],
    "conclusion": "Select one repeat-fault pattern and read the underlying notes with the site team. A focused review can reveal whether the next step is a repair, a schedule change or better recordkeeping.",
    "tags": [
      "Work orders",
      "Service data",
      "Operational reporting"
    ],
    "cta": {
      "title": "Make connected signals useful to the team",
      "body": "See a sample smart-facilities approach that links assets, service requests and follow-up visibility.",
      "label": "Explore smart facilities",
      "href": "#/services/smart-facility-management"
    },
    "relatedSlugs": [
      "facility-management-data-quality",
      "vendor-management-facilities",
      "preventive-maintenance-guide"
    ]
  },
  {
    "id": "BL-104",
    "slug": "safety-walkthroughs",
    "title": "A better rhythm for workplace safety walkthroughs",
    "category": "Safety walkthroughs",
    "date": "Aug 13, 2026",
    "read": "5 min read",
    "author": "Sneha Reddy",
    "excerpt": "Short, repeatable walkthroughs turn site observations into assigned actions and a clearer record of follow-through.",
    "description": "A practical approach to planning workplace safety walkthroughs, recording observations and assigning follow-up on live sites.",
    "image": "/assets/services/security-safety.jpg",
    "imageAlt": "Office access-control reader being used at a building entry.",
    "intro": "A useful safety walkthrough is specific, repeatable and connected to the site’s existing reporting process. The goal is not to create a second audit; it is to notice conditions early and make the next action clear.",
    "sections": [
      {
        "id": "plan-route",
        "title": "Choose a route that reflects site activity",
        "paragraphs": [
          "Include the areas where people, materials and building services interact: entrances, circulation routes, plant access and active work zones. The route should reflect local risk and be adjusted when the way a space is used changes.",
          "Tell the people responsible for the area when the walkthrough will happen. That gives them a chance to share context and helps avoid interrupting sensitive work unnecessarily."
        ]
      },
      {
        "id": "record-observation",
        "title": "Write observations that another person can act on",
        "paragraphs": [
          "Describe what was seen, where it was found and what made it a concern. Separate the observation from the proposed correction so a competent person can assess the appropriate control.",
          "Use the site’s required incident and hazard reporting channels for urgent or serious conditions. A routine walkthrough is not a substitute for emergency procedures or specialist assessment."
        ],
        "list": [
          "Record the location and time.",
          "Note any immediate control already applied.",
          "Identify the person or role that owns the next review."
        ]
      },
      {
        "id": "verify-action",
        "title": "Verify the action, not just the task status",
        "paragraphs": [
          "Give each follow-up a responsible owner and a review date. Where the initial action is temporary, state what evidence will confirm a durable correction.",
          "Review overdue and recurring observations with the site team. Patterns can point to a training, access, maintenance or layout issue that will not be solved by closing individual tasks."
        ]
      }
    ],
    "keyInsights": [
      "Walk a route shaped by how the site is used.",
      "Write factual, located observations with an owner.",
      "Check that controls remain effective after follow-up."
    ],
    "conclusion": "Agree one recurring walkthrough route and a straightforward method to assign and verify actions. Consistency makes it easier for people on site to participate and learn.",
    "tags": [
      "Site safety",
      "Walkthroughs",
      "Follow-up"
    ],
    "cta": {
      "title": "Coordinate safer site operations",
      "body": "Explore an illustrative security and safety coordination scope for access, escalation and site procedures.",
      "label": "Explore security and safety",
      "href": "#/services/security-safety"
    },
    "relatedSlugs": [
      "facility-emergency-response-playbook",
      "vendor-management-facilities",
      "cleaning-service-programme"
    ]
  },
  {
    "id": "BL-103",
    "slug": "vendor-management-facilities",
    "title": "Building a dependable vendor partner network",
    "category": "Service partners",
    "date": "Jul 27, 2026",
    "read": "8 min read",
    "author": "Divya Narayanan",
    "excerpt": "Clear boundaries, useful site information and regular feedback help specialist partners work as part of one service plan.",
    "description": "How to coordinate facilities vendors with clear scope boundaries, site onboarding, escalation paths and meaningful performance reviews.",
    "image": "/assets/services/integrated-facilities-management.jpg",
    "imageAlt": "Facilities manager coordinating service work inside a commercial building.",
    "intro": "Specialist providers often bring the expertise a site needs, but their work still has to fit the building’s operating rules. A dependable partner network starts with clarity about responsibilities, access and the information each team needs.",
    "sections": [
      {
        "id": "define-roles",
        "title": "Define the boundaries before work is assigned",
        "paragraphs": [
          "Document what is included, what is excluded and who approves any change to scope. Set out who raises the job, who arranges access, who owns permits and who confirms that the work is complete.",
          "For interfaces between two providers, name the handoff point. A short responsibility map can prevent important tasks from sitting between contracts."
        ]
      },
      {
        "id": "prepare-site",
        "title": "Make site onboarding practical",
        "paragraphs": [
          "Provide current access instructions, emergency contacts, local work rules and the site information a provider needs before arriving. Confirm what evidence or closeout notes are expected for the type of work.",
          "Check that required qualifications and authorisations are appropriate to the task and location. Keep approval records current and avoid assuming that a previous visit automatically covers a new activity."
        ],
        "list": [
          "Share the approved scope and site contact.",
          "Confirm access, induction and permit requirements.",
          "Agree how progress and completion will be recorded."
        ]
      },
      {
        "id": "review-partners",
        "title": "Review the relationship using evidence",
        "paragraphs": [
          "Use regular check-ins to review completed work, repeat issues, response communication and open actions. Include the people who use the site as well as the contract owner.",
          "When a service concern appears, look at the full handoff: request detail, access, parts, approval, work quality and closeout. That gives both sides a fair basis for correcting the process."
        ]
      }
    ],
    "keyInsights": [
      "Write down scope boundaries and cross-provider handoffs.",
      "Give partners current site and access information.",
      "Review outcomes and open actions with the people affected."
    ],
    "conclusion": "Map one recurring specialist service from request to close. Clear owners at each handoff will show where the partner network is dependable and where the operating agreement needs attention.",
    "tags": [
      "Vendor coordination",
      "Scope clarity",
      "Service quality"
    ],
    "cta": {
      "title": "Bring service responsibilities into one view",
      "body": "Review how an integrated facilities scope can coordinate site teams, specialist partners and reporting.",
      "label": "Explore integrated FM",
      "href": "#/services/integrated-facilities-management"
    },
    "relatedSlugs": [
      "work-order-data-that-matters",
      "facility-management-data-quality",
      "facility-emergency-response-playbook"
    ]
  },
  {
    "id": "BL-102",
    "slug": "facility-emergency-response-playbook",
    "title": "A practical emergency response playbook for facilities teams",
    "category": "Emergency readiness",
    "date": "Jul 10, 2026",
    "read": "6 min read",
    "author": "Sneha Reddy",
    "excerpt": "A named first contact, reliable site information and clear escalation roles can support a more coordinated response.",
    "description": "A facilities-focused framework for first notification, escalation ownership, site information and post-incident learning.",
    "image": "/assets/services/emergency-maintenance.jpg",
    "imageAlt": "Technician working on a building air-conditioning unit during a repair visit.",
    "intro": "A building incident can change quickly. Facilities teams can support a more coordinated response when contact routes, decision roles and essential site information are agreed in advance and kept easy to find.",
    "sections": [
      {
        "id": "first-notification",
        "title": "Make the first notification straightforward",
        "paragraphs": [
          "Use the site’s established emergency process first, including public emergency services where required. The facilities contact route should help communicate location, immediate hazard information and who is already responding.",
          "Keep emergency contacts and essential system information current. A location plan, isolation reference or access instruction is only useful if it is accurate and available to the people who need it."
        ]
      },
      {
        "id": "assign-decisions",
        "title": "Clarify who coordinates each decision",
        "paragraphs": [
          "Name the incident lead, the person who communicates with building occupants and the role that can authorise access or specialist support. Make clear when an issue must be escalated to the client’s safety, security or continuity lead.",
          "Use simple status updates that distinguish confirmed facts from information still being checked. Avoid sending unverified details into broad communication channels."
        ],
        "list": [
          "Who receives the first call?",
          "Who can authorise isolation or restricted access?",
          "Who updates occupants and records decisions?"
        ]
      },
      {
        "id": "restore-review",
        "title": "Restore service carefully and learn from the event",
        "paragraphs": [
          "Before normal operation resumes, confirm that required safety checks and approvals have been completed by the right people. Record temporary controls and any remaining restrictions.",
          "After the event, review timing, communication, asset condition and the actions that remain open. Update the playbook where the experience exposed missing contacts or unclear responsibilities."
        ]
      }
    ],
    "keyInsights": [
      "Use the site’s emergency and public-response procedures.",
      "Keep decision roles, contacts and critical site facts current.",
      "Record what is confirmed, what remains open and what must be reviewed."
    ],
    "conclusion": "Test the contact and escalation chain with a short tabletop review. A practical rehearsal can reveal stale details before they are needed in a live incident.",
    "tags": [
      "Incident coordination",
      "Escalation",
      "Continuity"
    ],
    "cta": {
      "title": "Clarify urgent facilities coverage",
      "body": "Explore the sample emergency-maintenance scope and the response boundaries that should be agreed for each site.",
      "label": "Explore emergency maintenance",
      "href": "#/services/emergency-maintenance"
    },
    "relatedSlugs": [
      "safety-walkthroughs",
      "vendor-management-facilities",
      "critical-spares-maintenance"
    ]
  },
  {
    "id": "BL-101",
    "slug": "critical-spares-maintenance",
    "title": "Choosing critical spares without tying up your budget",
    "category": "Critical spares",
    "date": "Jun 22, 2026",
    "read": "5 min read",
    "author": "Karthik Subramanian",
    "excerpt": "Balance failure impact, replacement lead time and equipment commonality to focus inventory on the parts that matter.",
    "description": "A measured way to identify critical maintenance spares using consequence, supplier lead times, interchangeability and stock review.",
    "image": "/assets/services/pumps-equipment.jpg",
    "imageAlt": "Technician inspecting a pump and motor assembly in a commercial utility room.",
    "intro": "Holding every possible spare is expensive; holding none can extend an avoidable outage. A critical-spares review combines asset consequence with the time and uncertainty involved in obtaining a replacement.",
    "sections": [
      {
        "id": "identify-exposure",
        "title": "Identify the exposure a spare would reduce",
        "paragraphs": [
          "Start with equipment where downtime has a material effect on safety, continuity or essential building conditions. Check whether another unit can provide redundancy and whether a temporary operating mode is approved.",
          "Use failure history and supplier advice to identify parts that are difficult to obtain or likely to stop a repair. Treat uncertain lead times as a risk to validate, not as a fixed promise."
        ]
      },
      {
        "id": "balance-inventory",
        "title": "Balance commonality, cost and shelf life",
        "paragraphs": [
          "A part used across several assets may deserve attention because one item can support multiple repairs. Confirm the exact specification and compatibility before treating components as interchangeable.",
          "Consider purchase cost, storage conditions, degradation, warranty rules and the time required to replenish stock. For costly items, a documented supplier arrangement may be more suitable than holding a unit on site."
        ],
        "list": [
          "Failure consequence and redundancy.",
          "Verified part number and interchangeability.",
          "Lead time, storage and replenishment plan."
        ]
      },
      {
        "id": "keep-records",
        "title": "Keep ownership and review dates visible",
        "paragraphs": [
          "Record where each critical item is stored, who owns the inventory decision and what threshold triggers replenishment. Review use and supplier availability after a failure, major asset change or contract renewal.",
          "Stock policy is a living decision. A small review tied to asset criticality prevents obsolete parts from accumulating unnoticed."
        ]
      }
    ],
    "keyInsights": [
      "Prioritise spares by the consequence of waiting.",
      "Verify compatibility before grouping parts as interchangeable.",
      "Assign an owner and review the stock decision when assets or suppliers change."
    ],
    "conclusion": "Choose one critical asset and map the time from fault to replacement part. The exercise will show whether the better next step is a stocked spare, a supplier agreement or a clearer repair contingency.",
    "tags": [
      "Inventory planning",
      "Asset risk",
      "Supply lead time"
    ],
    "cta": {
      "title": "Protect continuity for critical power",
      "body": "Review a sample UPS and backup-power service scope with planned inspections and clear specialist coordination.",
      "label": "Explore UPS and power backup",
      "href": "#/services/ups-power-backup"
    },
    "relatedSlugs": [
      "preventive-maintenance-guide",
      "facility-emergency-response-playbook",
      "seasonal-hvac-transition-checklist"
    ]
  },
  {
    "id": "BL-100",
    "slug": "facility-management-data-quality",
    "title": "Why a useful facilities dashboard starts with clean data",
    "category": "Facilities data",
    "date": "Jun 04, 2026",
    "read": "7 min read",
    "author": "Ananya Iyer",
    "excerpt": "Consistent property, asset and work-order records make operational trends easier to trust and explain.",
    "description": "Improve facilities dashboards by standardising core records, checking ownership and showing how each measure is defined.",
    "image": "/assets/facility-hero.jpg",
    "imageAlt": "Facilities engineer interacting with a building management control panel.",
    "intro": "A dashboard can make information easier to scan, but it cannot repair incomplete or inconsistent records. Reliable reporting starts with a shared understanding of buildings, assets, work statuses and the meaning of each measure.",
    "sections": [
      {
        "id": "standardise-records",
        "title": "Give buildings and assets stable identities",
        "paragraphs": [
          "Use consistent property names, asset identifiers and location conventions across the systems that feed the report. Agree how retired, replaced or relocated equipment is represented so history remains understandable.",
          "Assign data owners for the records that matter most. If no role is responsible for checking a field, it will become difficult to know whether a blank value is intentional or missing."
        ]
      },
      {
        "id": "validate-inputs",
        "title": "Check records where they are created",
        "paragraphs": [
          "Make forms and closeout steps collect only information that supports a decision. Validate required fields, use clear status definitions and give staff a way to flag a record that cannot yet be confirmed.",
          "Sample records against source documents and site observations. A small recurring quality check is more sustainable than a major cleanup after reporting has become unreliable."
        ],
        "list": [
          "Agree definitions for priority and status.",
          "Check asset IDs against current site records.",
          "Track corrections and the role that approved them."
        ]
      },
      {
        "id": "explain-metrics",
        "title": "Make the measure understandable",
        "paragraphs": [
          "Show the period, scope and calculation behind a key figure. If a work-order count excludes cancelled requests or a response-time measure begins at a particular status, make that definition available to readers.",
          "Keep a route from a summary to the records behind it. That helps managers ask better questions and gives operational teams a fair way to explain unusual results."
        ]
      }
    ],
    "keyInsights": [
      "Assign owners to core property and asset records.",
      "Validate data at entry and review a sample routinely.",
      "Publish metric definitions and the reporting scope."
    ],
    "conclusion": "Pick one dashboard measure that teams find difficult to explain. Trace it back to its source records, document the definition and agree the smallest change that would make it more reliable.",
    "tags": [
      "Data governance",
      "Asset registers",
      "Reporting"
    ],
    "cta": {
      "title": "Connect system data with service workflows",
      "body": "See how a BMS integration scope can clarify data handoffs, ownership and operational follow-up.",
      "label": "Explore BMS integration",
      "href": "#/services/bms-integration"
    },
    "relatedSlugs": [
      "work-order-data-that-matters",
      "building-energy-baselines",
      "vendor-management-facilities"
    ]
  },
  {
    "id": "BL-099",
    "slug": "cleaning-service-programme",
    "title": "Designing a cleaning programme around how spaces are used",
    "category": "Cleaning operations",
    "date": "May 18, 2026",
    "read": "4 min read",
    "author": "Janani Devi",
    "excerpt": "Use occupancy, footfall and room purpose to set practical cleaning priorities instead of applying one frequency everywhere.",
    "description": "Build a cleaning programme from space use, occupancy, service standards and observation rather than a one-size frequency chart.",
    "image": "/assets/services/cleaning-workplace-services.jpg",
    "imageAlt": "Cleaning brush and solution used on a hard floor surface.",
    "intro": "A good cleaning plan reflects the way people move through a building. Reception areas, washrooms, meeting rooms and low-use storage spaces do not experience the same demand, so a uniform schedule can miss the places that matter most.",
    "sections": [
      {
        "id": "map-use",
        "title": "Map spaces by purpose and demand",
        "paragraphs": [
          "List the main space types, their expected occupancy and the times when cleaning can happen without disrupting work. Include seasonal or event-driven changes that affect footfall.",
          "Prioritise high-touch areas and spaces with specific hygiene or client requirements using the site’s approved standards. Record those requirements clearly so local teams understand what good completion looks like."
        ]
      },
      {
        "id": "set-standards",
        "title": "Set a clear standard for each task",
        "paragraphs": [
          "Describe the expected result, the method or approved material where relevant, and how a supervisor will verify the work. Make it easy to distinguish routine care from a response to a spill or other immediate need.",
          "Confirm that staffing, equipment, storage and access are adequate for the agreed frequency. If a schedule is not practical, review the scope with the site owner rather than quietly reducing the task."
        ],
        "list": [
          "Space use and high-traffic periods.",
          "Agreed service standard and inspection method.",
          "Access, equipment and safe product handling."
        ]
      },
      {
        "id": "review-service",
        "title": "Review the service with site feedback",
        "paragraphs": [
          "Use supervisor checks, requests and occupant feedback to identify recurring gaps. Compare observations by location and time so adjustments respond to a pattern rather than a single comment.",
          "When the building changes, update the schedule and communicate the reason. A visible review cycle helps cleaning teams and building users understand what has changed."
        ]
      }
    ],
    "keyInsights": [
      "Match cleaning frequency to space use and occupancy.",
      "Define the expected outcome and how it will be checked.",
      "Review patterns and adjust when the building changes."
    ],
    "conclusion": "Walk the building with the people responsible for daily operations. A simple space-use map can reveal where a cleaning schedule needs more focus or a different service window.",
    "tags": [
      "Workplace services",
      "Space planning",
      "Quality checks"
    ],
    "cta": {
      "title": "Shape cleaning around the workplace",
      "body": "Explore a sample cleaning and workplace-services scope built around occupancy and site standards.",
      "label": "Explore cleaning services",
      "href": "#/services/cleaning-workplace-services"
    },
    "relatedSlugs": [
      "indoor-air-quality-workplace",
      "safety-walkthroughs",
      "vendor-management-facilities"
    ]
  },
  {
    "id": "BL-098",
    "slug": "seasonal-hvac-transition-checklist",
    "title": "Preparing building systems for the seasonal changeover",
    "category": "Seasonal HVAC",
    "date": "May 02, 2026",
    "read": "6 min read",
    "author": "Senthil Kumar",
    "excerpt": "Coordinate controls, plant inspections and occupant communication before weather shifts change building demand.",
    "description": "A practical seasonal changeover checklist for HVAC schedules, plant condition, control settings, access and follow-up.",
    "image": "/assets/services/hvac-chiller-maintenance.jpg",
    "imageAlt": "HVAC engineer checking a commercial chiller and air-handling system.",
    "intro": "A change in weather can expose schedules or settings that worked well in the previous season but no longer suit the building. A coordinated review gives facilities teams time to check the plant and communicate adjustments before demand changes.",
    "sections": [
      {
        "id": "review-schedule",
        "title": "Review operating hours and control schedules",
        "paragraphs": [
          "Check holiday calendars, occupancy patterns and the start-up or shut-down times used by building controls. Compare current schedules with how spaces are actually being used and confirm who can approve a change.",
          "Where zones have different demand, avoid applying one setting across the whole property without a site review. Note the expected adjustment and when it should be checked again."
        ]
      },
      {
        "id": "inspect-equipment",
        "title": "Inspect the equipment that carries the seasonal load",
        "paragraphs": [
          "Review service records for chillers, boilers, cooling towers, pumps, filters and related controls according to the equipment and site requirements. Confirm that deferred actions are visible and assigned before peak demand.",
          "Coordinate specialist work, access and any planned isolation in advance. Record unusual readings or condition notes for review rather than making changes outside approved procedures."
        ],
        "list": [
          "Confirm the seasonal service and inspection dates.",
          "Check filters, strainers and visible equipment condition.",
          "Review alarms and control sequences with the authorised specialist."
        ]
      },
      {
        "id": "communicate-results",
        "title": "Communicate the plan and check the result",
        "paragraphs": [
          "Tell site contacts what will change, when the change takes effect and how occupants can report a comfort issue. Clear communication can reduce duplicate requests during the first days of a transition.",
          "After the changeover, review comfort feedback, energy patterns and system alarms. Use those observations to adjust the schedule or add a follow-up task for the next seasonal review."
        ]
      }
    ],
    "keyInsights": [
      "Check control schedules against actual occupancy.",
      "Plan critical plant inspections before seasonal demand rises.",
      "Review alarms and occupant feedback after the change."
    ],
    "conclusion": "Select a building with a defined seasonal peak and agree a short readiness review with the authorised site and HVAC contacts. Record what was checked and when the outcome will be revisited.",
    "tags": [
      "HVAC planning",
      "Seasonal readiness",
      "Building controls"
    ],
    "cta": {
      "title": "Plan service for your building systems",
      "body": "Review the illustrative HVAC and chiller scope for planned equipment care and seasonal coordination.",
      "label": "Plan seasonal HVAC care",
      "href": "#/services/hvac-chiller-maintenance"
    },
    "relatedSlugs": [
      "preventive-maintenance-guide",
      "building-energy-baselines",
      "indoor-air-quality-workplace"
    ]
  }
];

export const testimonials = [
  { quote: 'Northline made maintenance visible again. We have one clear view of the work, the people and what needs attention next.', name: 'Kavya Raman', role: 'VP, Workplace Operations', company: 'Meridian Workspaces', initials: 'ET' },
  { quote: 'Their team understands that in a healthcare setting, a fast response is only useful when it is coordinated and documented.', name: 'Dr. Naveen Varma', role: 'Director of Facilities', company: 'Harborview Health', initials: 'DC' },
  { quote: 'The preventive schedule has helped our site teams plan around residents instead of disrupting their day.', name: 'Priya Nair', role: 'Regional Property Director', company: 'Juniper Residential', initials: 'PN' }
];
