# Vertretungsplan Next.js Conversion TODO

## Core Setup
- [x] Setup TailwindCSS design system with CSS variables (theme colors, spacing, typography)
- [x] Install and configure ShadCN/UI components
- [x] Setup project structure and folders
- [x] Configure TypeScript interfaces for data types

## Theme Management
- [x] Implement theme provider (light/dark/system modes)
- [x] Create theme toggle component with cycling functionality
- [x] Setup CSS variables for theme switching
- [x] Store theme preference in session storage

## Layout & Navigation
- [x] Create app layout with header and main content
- [x] Implement responsive header with title and navigation
- [x] Create mobile menu overlay with slide animation
- [x] Add navigation links (Impressum, Datenschutz)
- [x] Make title clickable to return to main view

## Calendar Widget
- [x] Create calendar component with month navigation
- [x] Implement date selection functionality
- [x] Show current date and selected date highlighting
- [x] Handle previous/next month navigation
- [x] Support clicking on adjacent month dates
- [x] Make calendar responsive (desktop sidebar + mobile menu)

## API Integration
- [x] Create TypeScript interfaces for WebUntis API request/response
- [x] Implement API service for fetching substitution data
- [x] Add error handling for API requests (network, auth, rate limiting)
- [x] Implement date formatting for API requests (YYYYMMDD format)
- [x] Handle HTML parsing in API responses (substMonitorSubstElem, cancelStyle)
- [x] Add loading states for API calls
- [x] Implement retry logic for failed requests
- [x] Add environment configuration for API endpoints

## Data Management
- [x] Create TypeScript interfaces for substitution data
- [x] Setup sample data structure (substitutions and categories)
- [x] Implement data processing and filtering logic
- [x] Parse API response data into app format
- [x] Handle special characters and HTML entities in API data
- [x] Implement data caching strategy

## Substitution Management
- [x] Create substitution cards with proper styling
- [x] Implement loading states with skeleton cards
- [x] Add error state with retry functionality
- [x] Create "no results" state
- [x] Sort substitutions by priority (Entfall first, then by hour)

## Search & Filtering
- [x] Implement search input with icon
- [x] Create category filter buttons with color indicators
- [x] Add search results counter
- [x] Implement real-time filtering (search + categories combined)
- [x] Sync search between desktop and mobile

## Category System
- [x] Create category filter components
- [x] Implement category color indicators
- [x] Add active/inactive filter states
- [x] Map substitution types to visual styles (border colors)

## Legal Pages
- [x] Create Impressum page with enhanced card layout
- [x] Create Datenschutz page with enhanced card layout
- [x] Implement navigation between main view and legal pages
- [x] Add back button functionality
- [x] Style legal content cards with icons

## Welcome Experience
- [x] Create welcome overlay component
- [x] Implement confetti animation on first visit
- [x] Add session storage to track welcome status
- [x] Create dismissible welcome message

## Interactive Features
- [x] Add loading spinners for button states
- [x] Implement hover effects and transitions
- [ ] Add focus management for accessibility
- [x] Create smooth animations and transitions

## Responsive Design
- [x] Desktop layout with sidebar and main content
- [x] Mobile layout with hamburger menu
- [x] Responsive grid layouts for substitution cards
- [x] Mobile-optimized calendar and filters
- [x] Responsive legal page layouts

## Accessibility
- [ ] Add proper focus management
- [ ] Implement keyboard navigation
- [ ] Add ARIA labels and roles
- [ ] Ensure color contrast compliance
- [ ] Add screen reader support

## Error Handling & UX
- [x] Create error boundary components
- [x] Implement app-level error boundary with fallback UI
- [x] Add retry functionality to error states
- [x] Create loading hook for data fetching
- [x] Implement in-memory caching for API responses
- [x] Add proper error messages and user feedback

## Final Polish
- [x] Add proper error handling
- [x] Implement proper TypeScript types throughout
- [x] Add loading states for all async operations
- [ ] Optimize performance and bundle size
- [ ] Test all functionality across devices

## Testing & Cleanup
- [ ] Test theme switching
- [ ] Test calendar functionality
- [ ] Test search and filtering
- [ ] Test mobile menu and responsive design
- [ ] Test legal page navigation
- [ ] Test welcome overlay
- [ ] Final code cleanup and optimization 