/**
 * ========================================
 * COLOR SWITCHER PLUGIN
 * ========================================
 * 
 * Modern theme switching system for web applications
 * Features:
 * - Dynamic color theme switching
 * - Logo and favicon management
 * - LocalStorage persistence
 * - Error handling and fallbacks
 * - Modular and extensible architecture
 * 
 * @author Web Development Team
 * @version 2.0.0
 * @requires jQuery
 */

(function ($) {
  "use strict";

  // ========================================
  // CONSTANTS & CONFIGURATION
  // ========================================
  
  const CONFIG = {
    // Storage configuration
    STORAGE_PREFIX: 'theme_',
    STORAGE_EXPIRY: 365 * 24 * 60 * 60 * 1000, // 1 year in milliseconds
    
    // Plugin configuration
    STYLE_SWITCHER: {
      hasPreview: false,
      fullPath: "css/colors/",
      cookie: {
        expires: 999,
        isManagingLoad: true
      }
    },
    
    // Animation settings
    TRANSITION_DURATION: 300,
    
    // Debug mode
    DEBUG: false
  };

  // ========================================
  // STORAGE MANAGEMENT SYSTEM
  // ========================================
  
  const StorageManager = {
    /**
     * Set item in localStorage with error handling
     * @param {string} key - Storage key
     * @param {string} value - Storage value
     * @param {number} expiry - Expiry time in milliseconds (optional)
     */
    set: function(key, value, expiry = CONFIG.STORAGE_EXPIRY) {
      try {
        const item = {
          value: value,
          timestamp: Date.now(),
          expiry: expiry
        };
        localStorage.setItem(CONFIG.STORAGE_PREFIX + key, JSON.stringify(item));
        this.log('Storage set:', key, value);
      } catch (error) {
        this.handleError('Failed to set localStorage item', error);
      }
    },
    
    /**
     * Get item from localStorage with expiry check
     * @param {string} key - Storage key
     * @returns {string|null} - Stored value or null
     */
    get: function(key) {
      try {
        const itemStr = localStorage.getItem(CONFIG.STORAGE_PREFIX + key);
        if (!itemStr) return null;
        
        const item = JSON.parse(itemStr);
        const now = Date.now();
        
        // Check if item has expired
        if (item.expiry && (now - item.timestamp) > item.expiry) {
          this.remove(key);
          return null;
        }
        
        return item.value;
      } catch (error) {
        this.handleError('Failed to get localStorage item', error);
        return null;
      }
    },
    
    /**
     * Remove item from localStorage
     * @param {string} key - Storage key
     */
    remove: function(key) {
      try {
        localStorage.removeItem(CONFIG.STORAGE_PREFIX + key);
        this.log('Storage removed:', key);
      } catch (error) {
        this.handleError('Failed to remove localStorage item', error);
      }
    },
    
    /**
     * Clear multiple storage keys
     * @param {Array} keys - Array of keys to remove
     */
    clearMultiple: function(keys) {
      keys.forEach(key => this.remove(key));
    },
    
    /**
     * Check if localStorage is available
     * @returns {boolean} - True if available
     */
    isAvailable: function() {
      try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (error) {
        return false;
      }
    },
    
    /**
     * Log messages in debug mode
     */
    log: function(...args) {
      if (CONFIG.DEBUG) {
        console.log('[StorageManager]', ...args);
      }
    },
    
    /**
     * Handle storage errors
     */
    handleError: function(message, error) {
      console.warn('[StorageManager]', message, error);
    }
  };

  // ========================================
  // THEME CONFIGURATION SYSTEM
  // ========================================
  
  const ThemeConfig = {
    // Default theme configuration
    themes: {
      'default': {
        name: 'Default Theme',
        thmLogo: "images/nav-logo.png",
        dLogo: "images/logo-dark.png",
        fLogo: "images/nav-logo.png",
        favicon: "images/favicon.png",
        error404: "images/icons/404-image.png",
        description: "Original default theme"
      },
      'color-2': {
        name: 'Color Theme 2',
        thmLogo: "images/colors/color-2/nav-logo.png",
        dLogo: "images/colors/color-2/logo-dark.png",
        fLogo: "images/colors/color-2/nav-logo.png",
        favicon: "images/colors/color-2/favicon.png",
        error404: "images/colors/color-2/icons/404-image.png",
        description: "Alternative color scheme 2"
      },
      'color-3': {
        name: 'Color Theme 3',
        thmLogo: "images/colors/color-3/nav-logo.png",
        dLogo: "images/colors/color-3/logo-dark.png",
        fLogo: "images/colors/color-3/nav-logo.png",
        favicon: "images/colors/color-3/favicon.png",
        error404: "images/colors/color-3/icons/404-image.png",
        description: "Alternative color scheme 3"
      },
      'color-4': {
        name: 'Color Theme 4',
        thmLogo: "images/colors/color-4/nav-logo.png",
        dLogo: "images/colors/color-4/logo-dark.png",
        fLogo: "images/colors/color-4/nav-logo.png",
        favicon: "images/colors/color-4/favicon.png",
        error404: "images/colors/color-4/icons/404-image.png",
        description: "Alternative color scheme 4"
      },
      'color-5': {
        name: 'Color Theme 5',
        thmLogo: "images/colors/color-5/nav-logo.png",
        dLogo: "images/colors/color-5/logo-dark.png",
        fLogo: "images/colors/color-5/nav-logo.png",
        favicon: "images/colors/color-5/favicon.png",
        error404: "images/colors/color-5/icons/404-image.png",
        description: "Alternative color scheme 5"
      },
      'color-6': {
        name: 'Color Theme 6',
        thmLogo: "images/colors/color-6/nav-logo.png",
        dLogo: "images/colors/color-6/logo-dark.png",
        fLogo: "images/colors/color-6/nav-logo.png",
        favicon: "images/colors/color-6/favicon.png",
        error404: "images/colors/color-6/icons/404-image.png",
        description: "Alternative color scheme 6"
      }
    },
    
    // Storage keys for theme assets
    storageKeys: [
      'logo-img',
      'd-logo',
      'logo-img-footer',
      'favicon',
      'error-404',
      'current-theme'
    ],
    
    /**
     * Get theme configuration by name
     * @param {string} themeName - Theme identifier
     * @returns {Object|null} - Theme configuration or null
     */
    getTheme: function(themeName) {
      return this.themes[themeName] || null;
    },
    
    /**
     * Get all available themes
     * @returns {Object} - All theme configurations
     */
    getAllThemes: function() {
      return this.themes;
    },
    
    /**
     * Check if theme exists
     * @param {string} themeName - Theme identifier
     * @returns {boolean} - True if theme exists
     */
    themeExists: function(themeName) {
      return this.themes.hasOwnProperty(themeName);
    },
    
    /**
     * Add new theme configuration
     * @param {string} themeName - Theme identifier
     * @param {Object} config - Theme configuration
     */
    addTheme: function(themeName, config) {
      this.themes[themeName] = config;
    }
  };

  // ========================================
  // DOM MANIPULATION SYSTEM
  // ========================================
  
  const DOMManager = {
    // Element selectors
    selectors: {
      thmLogo: "#thm-logo",
      dLogo: "#dLogo",
      fLogo: "#fLogo",
      error404: "#error-404",
      favShortcut: "#fav-shortcut",
      favIcon: "#fav-icon",
      styleOptions: "#styleOptions",
      switcherToggler: "#switcher-toggler",
      styleSwitcher: ".style-switcher"
    },
    
    /**
     * Update theme assets in DOM
     * @param {Object} themeConfig - Theme configuration object
     */
    updateThemeAssets: function(themeConfig) {
      try {
        // Update logos with fade effect
        this.updateImageWithTransition(this.selectors.thmLogo, themeConfig.thmLogo);
        this.updateImageWithTransition(this.selectors.dLogo, themeConfig.dLogo);
        this.updateImageWithTransition(this.selectors.fLogo, themeConfig.fLogo);
        this.updateImageWithTransition(this.selectors.error404, themeConfig.error404);
        
        // Update favicons
        this.updateFavicon(this.selectors.favShortcut, themeConfig.favicon);
        this.updateFavicon(this.selectors.favIcon, themeConfig.favicon);
        
        this.log('Theme assets updated successfully');
      } catch (error) {
        this.handleError('Failed to update theme assets', error);
      }
    },
    
    /**
     * Update image with smooth transition
     * @param {string} selector - Element selector
     * @param {string} newSrc - New image source
     */
    updateImageWithTransition: function(selector, newSrc) {
      const $element = $(selector);
      if ($element.length) {
        $element.fadeOut(CONFIG.TRANSITION_DURATION / 2, function() {
          $element.attr("src", newSrc).fadeIn(CONFIG.TRANSITION_DURATION / 2);
        });
      }
    },
    
    /**
     * Update favicon
     * @param {string} selector - Element selector
     * @param {string} newHref - New favicon href
     */
    updateFavicon: function(selector, newHref) {
      const $element = $(selector);
      if ($element.length) {
        $element.attr("href", newHref);
      }
    },
    
    /**
     * Load saved theme assets from storage
     */
    loadSavedAssets: function() {
      const assets = {
        thmLogo: StorageManager.get('logo-img'),
        dLogo: StorageManager.get('d-logo'),
        fLogo: StorageManager.get('logo-img-footer'),
        favicon: StorageManager.get('favicon'),
        error404: StorageManager.get('error-404')
      };
      
      // Apply saved assets if they exist
      Object.keys(assets).forEach(key => {
        const value = assets[key];
        if (value) {
          switch(key) {
            case 'thmLogo':
              $(this.selectors.thmLogo).attr("src", value);
              break;
            case 'dLogo':
              $(this.selectors.dLogo).attr("src", value);
              break;
            case 'fLogo':
              $(this.selectors.fLogo).attr("src", value);
              break;
            case 'favicon':
              $(this.selectors.favShortcut).attr("href", value);
              $(this.selectors.favIcon).attr("href", value);
              break;
            case 'error404':
              $(this.selectors.error404).attr("src", value);
              break;
          }
        }
      });
      
      this.log('Saved assets loaded');
    },
    
    /**
     * Log messages in debug mode
     */
    log: function(...args) {
      if (CONFIG.DEBUG) {
        console.log('[DOMManager]', ...args);
      }
    },
    
    /**
     * Handle DOM errors
     */
    handleError: function(message, error) {
      console.error('[DOMManager]', message, error);
    }
  };

  // ========================================
  // THEME MANAGEMENT SYSTEM
  // ========================================
  
  const ThemeManager = {
    currentTheme: 'default',
    
    /**
     * Apply a theme
     * @param {string} themeName - Theme identifier
     * @returns {boolean} - Success status
     */
    applyTheme: function(themeName) {
      const themeConfig = ThemeConfig.getTheme(themeName);
      
      if (!themeConfig) {
        this.handleError('Theme not found: ' + themeName);
        return false;
      }
      
      try {
        // Update DOM
        DOMManager.updateThemeAssets(themeConfig);
        
        // Save to storage
        this.saveThemeToStorage(themeName, themeConfig);
        
        // Update current theme
        this.currentTheme = themeName;
        
        // Trigger custom event
        this.triggerThemeChangeEvent(themeName, themeConfig);
        
        this.log('Theme applied successfully:', themeName);
        return true;
      } catch (error) {
        this.handleError('Failed to apply theme', error);
        return false;
      }
    },
    
    /**
     * Save theme configuration to storage
     * @param {string} themeName - Theme identifier
     * @param {Object} themeConfig - Theme configuration
     */
    saveThemeToStorage: function(themeName, themeConfig) {
      // Clear existing theme data
      StorageManager.clearMultiple(ThemeConfig.storageKeys);
      
      // Save new theme data
      StorageManager.set('logo-img', themeConfig.thmLogo);
      StorageManager.set('d-logo', themeConfig.dLogo);
      StorageManager.set('logo-img-footer', themeConfig.fLogo);
      StorageManager.set('favicon', themeConfig.favicon);
      StorageManager.set('error-404', themeConfig.error404);
      StorageManager.set('current-theme', themeName);
    },
    
    /**
     * Load saved theme from storage
     * @returns {string} - Loaded theme name or default
     */
    loadSavedTheme: function() {
      const savedTheme = StorageManager.get('current-theme');
      
      if (savedTheme && ThemeConfig.themeExists(savedTheme)) {
        this.currentTheme = savedTheme;
        DOMManager.loadSavedAssets();
        this.log('Saved theme loaded:', savedTheme);
        return savedTheme;
      }
      
      this.log('No saved theme found, using default');
      return 'default';
    },
    
    /**
     * Get current active theme
     * @returns {string} - Current theme name
     */
    getCurrentTheme: function() {
      return this.currentTheme;
    },
    
    /**
     * Reset to default theme
     */
    resetToDefault: function() {
      this.applyTheme('default');
    },
    
    /**
     * Trigger custom theme change event
     * @param {string} themeName - Theme name
     * @param {Object} themeConfig - Theme configuration
     */
    triggerThemeChangeEvent: function(themeName, themeConfig) {
      $(document).trigger('themeChanged', {
        themeName: themeName,
        themeConfig: themeConfig,
        timestamp: Date.now()
      });
    },
    
    /**
     * Log messages in debug mode
     */
    log: function(...args) {
      if (CONFIG.DEBUG) {
        console.log('[ThemeManager]', ...args);
      }
    },
    
    /**
     * Handle theme errors
     */
    handleError: function(message, error) {
      console.error('[ThemeManager]', message, error);
    }
  };

  // ========================================
  // EVENT MANAGEMENT SYSTEM
  // ========================================
  
  const EventManager = {
    /**
     * Initialize style switcher plugin
     */
    initStyleSwitcher: function() {
      const $styleOptions = $(DOMManager.selectors.styleOptions);
      
      if ($styleOptions.length && typeof $styleOptions.styleSwitcher === 'function') {
        try {
          $styleOptions.styleSwitcher(CONFIG.STYLE_SWITCHER);
          this.log('Style switcher initialized');
        } catch (error) {
          this.handleError('Failed to initialize style switcher', error);
        }
      }
    },
    
    /**
     * Initialize switcher toggle functionality
     */
    initSwitcherToggle: function() {
      const $styleSwitcher = $(DOMManager.selectors.styleSwitcher);
      const $togglerButton = $(DOMManager.selectors.switcherToggler);
      
      if ($styleSwitcher.length && $togglerButton.length) {
        $togglerButton.on("click.colorSwitcher", function (e) {
          e.preventDefault();
          $styleSwitcher.toggleClass("active");
        });
        
        this.log('Switcher toggle initialized');
      }
    },
    
    /**
     * Initialize color option click handlers
     */
    initColorOptions: function() {
      const $styleOptions = $(DOMManager.selectors.styleOptions);
      
      if ($styleOptions.length) {
        // Remove existing event handlers
        $styleOptions.off('.colorSwitcher');
        
        // Add new event handlers for each theme
        Object.keys(ThemeConfig.getAllThemes()).forEach(themeName => {
          const selector = themeName === 'default' ? '.color-default' : '.' + themeName;
          
          $styleOptions.on("click.colorSwitcher", selector, function(e) {
            e.preventDefault();
            ThemeManager.applyTheme(themeName);
          });
        });
        
        this.log('Color options initialized');
      }
    },
    
    /**
     * Initialize keyboard shortcuts
     */
    initKeyboardShortcuts: function() {
      $(document).on('keydown.colorSwitcher', function(e) {
        // Ctrl + Shift + T: Toggle switcher
        if (e.ctrlKey && e.shiftKey && e.keyCode === 84) {
          e.preventDefault();
          $(DOMManager.selectors.styleSwitcher).toggleClass("active");
        }
        
        // Ctrl + Shift + R: Reset to default theme
        if (e.ctrlKey && e.shiftKey && e.keyCode === 82) {
          e.preventDefault();
          ThemeManager.resetToDefault();
        }
      });
      
      this.log('Keyboard shortcuts initialized');
    },
    
    /**
     * Initialize custom event listeners
     */
    initCustomEvents: function() {
      // Listen for theme change events
      $(document).on('themeChanged', function(e, data) {
        console.log('Theme changed to:', data.themeName);
      });
      
      // Listen for storage events (for cross-tab synchronization)
      $(window).on('storage', function(e) {
        if (e.originalEvent.key && e.originalEvent.key.startsWith(CONFIG.STORAGE_PREFIX)) {
          ThemeManager.loadSavedTheme();
        }
      });
      
      this.log('Custom events initialized');
    },
    
    /**
     * Cleanup event handlers
     */
    cleanup: function() {
      $(DOMManager.selectors.styleOptions).off('.colorSwitcher');
      $(DOMManager.selectors.switcherToggler).off('.colorSwitcher');
      $(document).off('.colorSwitcher');
      $(window).off('storage');
      
      this.log('Event handlers cleaned up');
    },
    
    /**
     * Log messages in debug mode
     */
    log: function(...args) {
      if (CONFIG.DEBUG) {
        console.log('[EventManager]', ...args);
      }
    },
    
    /**
     * Handle event errors
     */
    handleError: function(message, error) {
      console.error('[EventManager]', message, error);
    }
  };

  // ========================================
  // MAIN INITIALIZATION SYSTEM
  // ========================================
  
  const ColorSwitcher = {
    initialized: false,
    
    /**
     * Initialize the color switcher system
     */
    init: function() {
      if (this.initialized) {
        console.warn('[ColorSwitcher] Already initialized');
        return;
      }
      
      try {
        // Check dependencies
        if (!this.checkDependencies()) {
          return;
        }
        
        // Initialize all systems
        this.log('Initializing Color Switcher...');
        
        // Load saved theme first
        ThemeManager.loadSavedTheme();
        
        // Initialize event systems
        EventManager.initStyleSwitcher();
        EventManager.initSwitcherToggle();
        EventManager.initColorOptions();
        EventManager.initKeyboardShortcuts();
        EventManager.initCustomEvents();
        
        // Mark as initialized
        this.initialized = true;
        
        this.log('Color Switcher initialized successfully');
        
        // Trigger initialization complete event
        $(document).trigger('colorSwitcherReady');
        
      } catch (error) {
        this.handleError('Failed to initialize Color Switcher', error);
      }
    },
    
    /**
     * Check required dependencies
     * @returns {boolean} - True if all dependencies are available
     */
    checkDependencies: function() {
      // Check jQuery
      if (typeof $ === 'undefined') {
        console.error('[ColorSwitcher] jQuery is required');
        return false;
      }
      
      // Check localStorage
      if (!StorageManager.isAvailable()) {
        console.warn('[ColorSwitcher] localStorage not available, functionality will be limited');
      }
      
      return true;
    },
    
    /**
     * Destroy the color switcher system
     */
    destroy: function() {
      if (!this.initialized) {
        return;
      }
      
      try {
        EventManager.cleanup();
        this.initialized = false;
        this.log('Color Switcher destroyed');
      } catch (error) {
        this.handleError('Failed to destroy Color Switcher', error);
      }
    },
    
    /**
     * Get system status and information
     * @returns {Object} - System status object
     */
    getStatus: function() {
      return {
        initialized: this.initialized,
        currentTheme: ThemeManager.getCurrentTheme(),
        availableThemes: Object.keys(ThemeConfig.getAllThemes()),
        storageAvailable: StorageManager.isAvailable(),
        version: '2.0.0'
      };
    },
    
    /**
     * Log messages in debug mode
     */
    log: function(...args) {
      if (CONFIG.DEBUG) {
        console.log('[ColorSwitcher]', ...args);
      }
    },
    
    /**
     * Handle system errors
     */
    handleError: function(message, error) {
      console.error('[ColorSwitcher]', message, error);
    }
  };

  // ========================================
  // PUBLIC API
  // ========================================
  
  // Expose public methods
  window.ColorSwitcher = {
    // Core methods
    init: ColorSwitcher.init.bind(ColorSwitcher),
    destroy: ColorSwitcher.destroy.bind(ColorSwitcher),
    getStatus: ColorSwitcher.getStatus.bind(ColorSwitcher),
    
    // Theme methods
    applyTheme: ThemeManager.applyTheme.bind(ThemeManager),
    getCurrentTheme: ThemeManager.getCurrentTheme.bind(ThemeManager),
    resetToDefault: ThemeManager.resetToDefault.bind(ThemeManager),
    
    // Configuration methods
    addTheme: ThemeConfig.addTheme.bind(ThemeConfig),
    getAllThemes: ThemeConfig.getAllThemes.bind(ThemeConfig),
    
    // Utility methods
    enableDebug: function() { CONFIG.DEBUG = true; },
    disableDebug: function() { CONFIG.DEBUG = false; }
  };

  // ========================================
  // AUTO-INITIALIZATION
  // ========================================
  
  // Initialize when document is ready
  $(document).ready(function() {
    ColorSwitcher.init();
  });

  // Cleanup on page unload
  $(window).on('beforeunload', function() {
    ColorSwitcher.destroy();
  });

})(jQuery);
