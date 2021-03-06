export const appStrings = {
  APP: {
    locale: 'en-US',
    lang: 'English',
  },
  APP_HEADER: {
    onSearchError: 'Please enter a valid search',
    searchPlaceHolder: "Search 'Bali, Indonesia'",
  },
  LOGIN: {
    onCompleted: "You've successfully logged in!",
    loading: 'Logging you in...',
    error: "Sorry! We weren't able to log you in. Please try again later!",
    loginVia: (party: string) => `Login via ${party}`,
  },
  LOGOUT: {
    onCompleted: "You've successfully loggest out!",
    error: "Sorry! We weren't able to log you out. Please try again later!",
  },
  HOME: {
    title: 'Your guide for all things rental',
    explantion: 'Helping you make the best decisions in renting your last minute locations.',
    link: 'Popular listings in the Indonesia',
    homeListingTitle: 'Listings of any kind',
    onSearchError: 'Please enter a valid search',
    HERO: {
      title: "Find a place you'll love to stay at",
      dubai: 'Dubai',
      london: 'London',
      newYork: 'New York',
      taipei: 'Taipei',
    },
  },
  HOST: {
    onCompleted: "You've successfully created your listing!",
    loading: 'Please wait!',
    loadingExplanation: "We're creating your listing now.",
    error: "Sorry! We were'nt able to create your listing. Please try again later.",
    notViewerTitle: "You'll have to be signed in and connected with Stripe to host a listing!",
    notViewerReminder: [
      "We only allow users who've signed in to our application and have connected with Stripe to host new listings. You can sign in at the",
      'page and connect with Stripe shortly after.',
    ],
    title: "Hi! Let's get started listing your place.",
    text: "In this form, we'll collect some basic and additional information about your listing.",
    FORM: {
      maxChar: (limit: number) => `Max character count of ${limit}`,
      warning: (label: string) => `Please enter the ${label.toLowerCase()}!`,
      type: 'Home Type',
      typeMessage: 'Please select a home type!',
      apartment: 'Apartment',
      house: 'House',
      numOfGuests: 'Max # of Guests',
      title: 'Title',
      titlePlaceholder: 'The iconic and luxurious Manhatten mansion',
      description: 'Description',
      descriptionPlaceholder:
        'Modern, clean and iconic home of the Fresh Prince. Situated in the heart of New York City, Manhatten.',
      address: 'Address',
      addressPlaceholder: '5th Avenue',
      city: 'City/Town',
      cityPlaceholder: 'New York',
      state: 'State/Province',
      statePlaceholder: 'NY',
      zip: 'Zip/Postal Code',
      zipPlaceholder: '10018',
      image: 'Image',
      imageExtra: 'Images have to be under 1MB in size and of type JPG or PNG',
      imageAlt: 'listing',
      imageMessage: 'Please provide an image for your listing!',
      upload: 'Upload',
      price: 'Price',
      priceExtra: 'All prices in $USD/day',
      submit: 'Submit',
    },
    invalidImageError: "You're only able to upload valid JPG or PNG files!",
    invalidSizeError: "You're only able to upload valid image files of under 1MB in size!",
  },
  USER: {
    error: "This user may not exist or we've encountered an error",
    stripeError: 'We had an issue connecting with Stripe. Please try again soon.',
    PROFILE: {
      additionalDetails: 'Additional Details',
      intereseted:
        'Interested in becoming a Singgah House host? Register with your Stripe account!',
      tinyHouseUses: 'Singgah House uses',
      explanation: 'to help transfer your earnings in a secure and truster manner.',
      connectStripe: 'Connect with Stripe',
      details: 'Details',
      name: 'Name',
      contact: 'Contact',
      stripeOnCompleteMessage: "You've successfully disconnected from Stripe!",
      stripeOnCompleteDescription:
        "You'll have to reconnect with Stripe to continue to create listings.",
      stripeError: `Sorry, we weren't able to to disconnect you from Stripe. Please try again later.`,
      stripeRegistered: 'Stripe Registered',
      incomeEarned: 'Income Earned',
      disconnectStripe: 'Disconnect Stripe',
      disconnectWarning:
        "By disconnecting, you won't be able to receive any further payments. This will prevent users from booking listings that you might have already created.",
    },
    LISTINGS: {
      listings: 'Listings',
      emptyText: "User doesn't have any listings yet!",
      explanation:
        'This section highlights the listings this user currently hosts and has made available for bookings.',
    },
  },
  LISTING: {
    error: "This listing may not exist or we've encountered an error",
    DETAILS: {
      about: 'About this space',
      guests: 'guests',
    },
    CREATE_BOOKING: {
      dateError: "You can't book date of check out to be prior to check in!",
      dateOverlapsError:
        "You can't book a period of time that overlaps existing bookings. Please try again!",
      day: 'day',
      checkIn: 'Check in',
      checkOut: 'Check out',
      bookButton: 'Request to book!',
      wontBeCharged: "You won't be charged yet",
      signInRequird: 'You have to be signed in to book a listing!',
      cantBookOwnListing: "You can't book your own listing!",
      noHostWallet:
        "The host has disconnected from Stripe and thus won't be able to recieve payments!",
    },
    CREATE_BOOKING_MODAL: {
      title: 'Book your trip',
      enterYourPayment: 'Enter your payment information to book the listing between',
      and: 'and',
      inclusive: ', inclusive.',
      total: 'Total',
      book: 'Book',
      onCompletedMessage: "You've successfully booked the listing!",
      onCompletedDescription: 'Booking history can always be found in your User page.',
      error: "Soory! We weren't able to book the listing. Please try again later!",
      stripeError: "Sorry! We weren't able to connect with Stripe.",
    },
  },
  LISTINGS: {
    error:
      "We either couldn't find anything matching your search or we've encountered an error. If you're searching for a unique location, try searching again with more common keywords.",
    emptyList: 'It appears that no listings have yet been created for',
    host: 'Be the first person to create a listing in this area!',
    results: 'Results for',
    FILTERS: {
      filterBy: 'Filter By',
      priceLowToHigh: 'Price: Low to High',
      priceHighToLow: 'Price: High to Low',
    },
  },
  BOOKINGS: {
    bookings: 'Bookings',
    emptyText: 'No bookings for this listing!',
    checkIn: 'Check in',
    checkOut: 'Check out',
    explanation:
      "This section highlights the bookings you've made, and the check-in/check-out dates associated with said bookings.",
  },
  STRIPE: {
    onCompletedMessage: "You've successfully connected with your Stripe account!",
    onCompletedDescription: 'You can now begin to create listings in the Host page.',
    loading: 'Connecting your Stripe account...',
  },
  ERROR_BANNER: {
    message: 'Oh no! Something went wrong :(',
    description: 'Sorry, but something went wrong. Please check you connection and try again.',
  },
  LISTING_CARD: {
    day: 'night',
    guests: 'guests',
  },
};
