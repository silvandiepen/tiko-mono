/**
 * Services Layer
 * 
 * This layer abstracts all backend operations from the UI components.
 * It provides a clean API that can be easily swapped out when changing backends.
 * 
 * Current implementation uses localStorage and direct API calls to bypass
 * the broken Supabase SDK, but can be easily replaced with any other backend.
 * 
 * @see {@link file://./README.md} for detailed documentation
 */

// Export all service interfaces and types
export * from './auth.service'
export * from './parent-mode.service'
export * from './user-settings.service'
export * from './item.service'
export * from './file.service'

// Export Supabase implementations
export { SupabaseParentModeService } from './parent-mode-supabase.service'
export { SupabaseUserSettingsService } from './user-settings-supabase.service'
export { SupabaseItemService } from './item-supabase.service'

// Export active service instances
// Currently using localStorage implementations due to Supabase SDK issues
// To switch to Supabase, uncomment the Supabase imports and comment out localStorage ones
export { authService } from './auth.service'
export { parentModeService } from './parent-mode.service'
export { userSettingsService } from './user-settings.service'
export { itemService } from './item.service'
export { fileService } from './file.service'

// Alternative: Export Supabase implementations
// import { SupabaseParentModeService } from './parent-mode-supabase.service'
// import { SupabaseUserSettingsService } from './user-settings-supabase.service'
// export const parentModeService = new SupabaseParentModeService()
// export const userSettingsService = new SupabaseUserSettingsService()