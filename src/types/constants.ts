export enum valuesOfTheSettings {
    DEFAULT_APP_LANGUAGE = 'en',
    HOME = 'Home',
    SOLUTIONS = 'Solutions',
    PAGES = 'Pages',
    ELEMENTS = 'Elements',
    BLOG = 'Blog',
    CONTACT = 'Contact',
    WATCH_THE_DEMO = 'Watch the demo',
    FIND_POWER = 'Find power',
    ENSOME = 'Ensome',
    HEROES_SECTION_DESCRIPTION = 'HeroesSectionDescription',
    LEARN_MORE = 'Learn more',
    NEWEST_PLATFORM_START = 'Newest platform start',
    NEWEST_PLATFORM_MIDDLE = 'Newest platform middle',
    NEWEST_PLATFORM_END = 'Newest platform end',
    NEWEST_PLATFORM_DESCRIPTION = 'NewestPlatformDescription',
    DISCOVER_MORE = 'Discover more',
    NEW_SOLUTIONS = 'New Solutions',
    NEW_SOLUTIONS_DESCRIPTION = 'New Solutions Description',
    OVERVIEW_TITLE = 'OverviewTitle',
    OVERVIEW_DESCRIPTION = 'OverviewDescription',
    PROJECT_EXECUTED = 'ProjectExecuted',
    S_CUSTOMERS = 'SatisfiedCustomers',
    DATA_MANAGEMENT = 'DataManagement',
    BENEFITS_TITLE = 'BenefitsTitle',
    BENEFITS_DESCRIPTION = 'BenefitsDescription',
    MACHINE_LEARNING_TITLE = 'MachineLearningTitle',
    MACHINE_LEARNING_DESCRIPTION = 'MachineLearningDescription',
    EMBED_ANALYTICS_TITLE = 'EmbedAnalyticsTitle',
    EMBED_ANALYTICS_DESCRIPTION = 'EmbedAnalyticsDescription',
    ACCESS_CONTROL_TITLE = 'AccessControlTitle',
    ACCESS_CONTROL_DESCRIPTION = 'AccessControlDescription',
    DATA_ANALYTICS_TITLE = 'DataAnalyticsTitle',
    DATA_ANALYTICS_DESCRIPTION = 'DataAnalyticsDescription',
    TESTIMONIALS = 'Testimonials',
    OUR_PRICING = 'OurPricing',
    FREE_TRIAL = 'FreeTrial',
    LITE = 'Lite',
    BASIC = 'Basic',
    FOR_ENTERPRISES = 'ForEnterprises',
    FOR_SMALL_TEAMS = 'ForSmallTeams',
    COMUNITY_SUPPORT = 'CommunitySupport',
    FOR_MIDDLE_TEAMS = 'ForMiddleTeams',
    INDIVIDUAL_SUPPORT = 'IndividualSupport',
    INDIVIDUAL_DATA = 'IndividualData',
    FOR_BIG_TEAMS = 'ForBigTeams',
    INDIVIDUAL_DATA120 = 'IndividualData120',
    ADVANCED_PERMISSIONS = 'AdvancedPermissions',
    UNLIMITED_TEAMS = 'UnlimitedTeams',
    UNLIMITED_DATA = 'UnlimitedData',
    DATA_HISTORY = 'DataHistory',
    AUDIT_LOG = 'AuditLog',
    ALL_FUNCTIONS = 'AllFunctions',
    CHOOSE_PLAN = 'ChoosePlan',
    PUBLISH_DATE = 'PublishDate',
    SOFTWARE_BLOG_TITLE = 'SowtvareBlogTitle',
    FIRST_CONTENT_PART = 'FirstContentPart',
    SEPARATE_PARAGRAPH = 'SeparateParagraph',
    SECOND_CONTENT_PART = 'SecondContentPart',
    VIEWS = 'Views',
    SHARE = 'Share',
    TAGS = 'Tags',
    READ_MORE = 'ReadMore',
    OUR_BLOG = 'OurBlog',
    IS_NEED_HELP = 'IsNeedHelp',
    CONTACT_US_DESCRIPTION = 'ContactUsDescription',
    CONTACT_US = 'ContactUs',
    SUBSCRIBE_US = 'SubscribeTitle',
    SUBSCRIBE_DESCRIPTION = 'SubscribeDescription',
    INPUT_ERROR = 'InputError',
    CORRECT_EMAIL_ERROR = 'CorrectEmailError',
    SUBSCRIBE_PLACEHOLDER = 'SubscribeEmailPlaceholder',
    SUBSCRIBE_BUTTON_VALUE = 'SubscribeButtonValue',
    QUICK_LINK = 'QuickLink',
    CONTACTS = 'Contacts',
    OUR_TEAM = 'OurTeam',
    ABOUT_US = 'AboutUs',
    SERVICES = 'Services',
    FAQ = 'FAQ',
    PRICING = 'Pricing',
    SITE_MAP = 'SiteMap',
    SERVICE = 'Service',
    CONTACT_INFO = 'ContactInfo',
    FOOTER_DESCRIPTION = 'FooterDescription',
    BLOG_DESCRIPTION = 'BlogDescription',
    MORE_ARTICLES = 'MoreArticles',
    CONTACTS_PAGE_TITLE = 'ContactsPageTitle',
    MINIMUM_LETTERS_ERROR = 'MinimumLettersError',
    NAME_INPUT_PLACEHOLDER = 'NameInputPlaceholder',
    THEME_INPUT_PLACEHOLDER = 'ThemeInputPlaceholder',
    MESSAGE_INPUT_PLACEHOLDER = 'MessageInputPlaceholder',
    PHONE = 'Phone',
    EMAIL = 'Email',
    ADDRESS = 'Address',
    POPULAR_POSTS = 'PopularPosts',
    NO_POSTS = 'NoCards',
    NO_DATA = 'NoTags',
    RELATED_POSTS = 'RelatedPosts',
    SOFTWARE_DEVELOPMENT = 'SoftwareDevelopment',
    INFORMATION_SECURITY = 'InformationSecurity',
    INTERNET_OF_THIGS = 'InternetOfThings',
    DIGITAL_TRANSFORMATION = 'DigitalTransformation',
    HEALTH_CARE_IT = 'HealthcareIt',
    FAQS_SUBTITLE = 'FAQS',
    FAQ_TITLE = 'FrequentlyQuestions',
    FAQ_DESCRIPTION = 'FrequentlyQuestionsDescription',
    DATA_ANALYTICS = 'DataAnalytics',
    DATA_MINING = 'DataMining',
    BUSINESS_INTELLIGENCE = 'BusinessIntelligence',
    EXPLORATORY_DATA_ANALYSIS = 'ExploratoryDataAnalysis',
    CONFIRMATORY_DATA_ANALYSIS = 'ConfirmatoryDataAnalysis',
    PREDICTIVE_ANALYTICS = 'PredictiveAnalytics',
    DATA_VISUALIZATION = 'DataVisualization',
}

export enum numberEnums {
    MONTH_ON_THE_YEAR = 12,
    COUNT_OF_THE_CARDS_IN_BLOG_FLOW = 9,
    MINIMUM_LETTERS_OF_NAME_INPUT = 3,
    MINIMUM_LETTERS_OF_THEME_INPUT = 5,
    MINIMUM_LETTERS_OF_MESSAGE_INPUT = 10,
    DEFAULT_ZOOM_OF_THE_MAP = 10,
    COUNT_OF_THE_POPULAR_POSTS = 4,
    COUNT_OF_THE_RELATED_POSTS = 3,
}

export enum namesOfTheSlices {
    BLOG_SLICE = 'blogSlice',
}

export enum UIConstants {
    COMPANY_INFO = 'Ensome© 2022 All Rights Reserved',
    POLICY = 'Privacy policy',
    TERMS = 'Terms of us',
}

export const envConstants = {
    PAYPAL_ID: process.env.PAYPAL_ID,
    PAYPAL_SECRET: process.env.PAYPAL_SECRET,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
};
