export class TestData {
  // SauceDemo credentials
  static readonly VALID_USERNAME = 'standard_user';
  static readonly VALID_PASSWORD = 'secret_sauce';
  
  // Other test users (if needed in future)
  static readonly LOCKED_OUT_USER = 'locked_out_user';
  static readonly PROBLEM_USER = 'problem_user';
  static readonly PERFORMANCE_GLITCH_USER = 'performance_glitch_user';
  
  // Expected page titles
  static readonly INVENTORY_PAGE_TITLE = 'Products';
  
  // Error messages
  static readonly LOCKED_OUT_ERROR = 'Epic sadface: Sorry, this user has been locked out.';
}
