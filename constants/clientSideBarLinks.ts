import {
  ApplicationIcon,
  CustomerIcon,
  BookingsIcon,
  ReferAndEarnIcon,
  UserMgtIcon,
  InvoiceIcon,
} from "@/client/svgs";

export const clientSideBarLinks1 = [
  {
    name: "Dashboard",
    icon: ApplicationIcon,
    url: "/dashboard",
  },
  {
    name: "Buy Data",
    icon: BookingsIcon,
    url: "/dashboard/data",
  },
  {
    name: "Buy Data Coupon",
    icon: ApplicationIcon,
    url: "/dashboard/coupon",
  },
  {
    name: "Buy Airtime",
    icon: BookingsIcon,
    url: "/dashboard/airtime",
  },
  {
    name: "Fund Wallet",
    icon: ApplicationIcon,
    url: "/dashboard/wallet",
  },
  {
    name: "Utilities Payment",
    icon: InvoiceIcon,
    url: "/dashboard/utilities",
  },
  // {
  //   name: "Change Pin",
  //   icon: ApplicationIcon,
  //   url: "/dashboard/pin",
  // },
];
export const clientSideBarLinks2 = [
  {
    name: "Pricing",
    icon: CustomerIcon,
    url: "/dashboard/pricing",
  },
  {
    name: "Developers Api </>",
    icon: ReferAndEarnIcon,
    url: "/dashboard/devApi",
  },
  {
    name: "Settings",
    icon: UserMgtIcon,
    url: "/dashboard/settings",
  },
];

export const faqs = [
  {
    question: "How can I purchase data from you? ",
    answer1:
      " Fund your wallet. ",
    answer2: " Fill the data order form. STEP 3: Wait for 5-15 minutes, the recipient will receive notification(s) of data recharge(Except for 9mobile(SME), which should be confirmed with its balance code)",
  },
  {
    question: "How can I fund my wallet? ",
    answer:
      "You can fund your wallet using any of our three payment means.",
      answer1: "1. Bank payment.",
      answer2: "2. Online Payment with your ATM card details via Pay stack Payment Gateway.",
      answer3: "3. Payment with airtime.",
      answer4: "4. Payment with Coupon Code(s)."
  },
  {
    question:
      "Can I share the data I buy from you with another line?",
    answer:
      "You can only share glo data plans, mtn, 9MOBILE and airtel data cant be shared.",
  },
  {
    question:
      "How can I be your agent?",
    answer:
      "Our Products can be retailed, as they are affordable. You can retail our Products to others and make profit. Just make sure your wallet is funded, then you can easily purchase for anyone you wish.",
  },
  {
    question:
      "Can I send airtime to you for data bundle?",
    answer:
      "Yes you can, but payment with airtime attracts little additional charge. Kindly fund your wallet with airtime.",
  },
  {
    question:
      "Hope the data won't get exhausted quickly or disappear?",
    answer: 'Our data plans are sourced from the network providers, therefore consumption rate is similar to the data gotten directly from them.',
  },
  {
    question:
      "How am I sure you guys are not scammers?",
    answer:
      "We've being in business for years and have made reputation from our happy clients. We love to keep feedbacks, hence you can check our testimonials page for people's comment about us by clicking this button.Testimonials",
  },
  {
    question: "What are the other products/services you offer?",
    answer: "We sell Cheap Internet Data Plans, Airtime VTU on MTN, 9MOBILE, GLO and AIRTEL, we Convert Airtime To Cash, Airtime Swap, Bills Payment (GOTV, DSTV, STARTIMES).",
  },
  {
    question: "What if my order was cancelled but my wallet was not refunded?",
    answer: "Chat admin on whatsapp +2349039242601",
  },
  {
    question: "What if my order has been approved, but not yet received?",
    answer:
      "Sincere apologies about that, we regret the inconvenience caused. Kindly reach out us through our customer care line(+2349039242601) via WhatsApp with the order details",
  },
  {
    question: "Can I communicate with you in case I have any enquiry? ",
    answer: "Yes, you can always reach out to us through our customer care line via Whatsapp +2349039242601 +2349152764148 ",
  },
  {
    question: "Is this data plan compatible with all devices? ",
    answer: "Yes, it is compatible with all devices. ",
  },
  {
    question: "What's your working period?",
    answer: "Mon to.Friday 8.30am to 5.00pm, Saturday 10am -4pm.",
  },
  // {
  //   question: "how to Convert airtime ?",
  //   answer: "after log in click fund my account , if the Airtime has not been load select Airtime pin otherwise Share and sell.

// Fill the form correctly to convert your airtime to cash

// 2. The minimum amount is #500

// 3. If you want to transfer airtime to us, you must send the airtime within 20 minutes or else the transaction will be automatically cancelled.

// 4. To transfer MTN airtime: *600*recipient number*amount*pin#

// 5. To change MTN transfer pin: *600*default pin*new pin*new pin# e.g *600*0000*new pin*new pin#

// 6. To transfer 9mobile airtime: *223*pin*amount*number#

// 7. To change 9mobile transfer pin: *247*default pin*new pin# e.g *247*0000*new pin#

// 8. To transfer Glo airtime: *131*number*amount*pin#

// 10. To change Glo transfer pin: *132*00000*new pin*new pin#

// 9. To Transfer Airtel Airtime:*432*1#

// 10. To change Airtel transfer pin: *432*3# (Default pin:1234)

// 11. Your wallet will be credited with 80% of the amount of airtime you sent(If MTN) and 70% (GLO) ,75% (If Other Networks) e.g if you send #1,000 MTN airtime, #850 will be credited ,Glo #700, if other Networks, #750 will be credited.

// 12. You must not send any amount or Network different from the amount you filled or Choosed.

// 13.You are required to transfer the worth of airtime to the phone number displayed.

// 13.It takes approximately 5 minutes for funds to be verified and credited to your-wallet.

// 14 .After that you can proceed to withdraw using bank of your choice",
  // },
  {
    question: "How to buy data?",
    answer: "after log in click fund my account ,select Counpon payment You can buy coupon code from our agents",
    answer1:"Fill the form correctly to buy data plan",
    answer2: "STEP 1: Fund your wallet.",
    answer3:"STEP 2: Fill the data order form. STEP 3:the recipient will receive notification(s) of data recharge(Except for 9mobile(SME) instantly, which should be confirmed with its balance code)",
  },
]

export const pricings1 = [
  {title:[{title:'MTN AIRTIME'},{title:'% 98'}, {title:'% 98'}]},
  {title:[{title:'GLO AIRTIME'},{title:'% 98'}, {title:'% 98'}]},
  {title:[{title:'AIRTEL AIRTIME'},{title:'% 98'}, {title:'% 98'}]},
  {title:[{title:'9MOBILE AIRTIME'},{title:'% 98'}, {title:'% 97'}]},
  {title:[{title:'WAEC Result Checker'},{title:'₦ 3750.0'}, {title:'₦ 2650.0'}]},
  {title:[{title:'NECO Result Checker'},{title:'₦ 1400.0'}, {title:'₦ 1400.0'}]},
  {title:[{title:'MTN Recharge Card pin'},{title:' (₦100.0) @ ₦98.0'}, {title:'(₦100.0) @ ₦100.0'}]},
  {title:[{title:'MTN Recharge Card pin'},{title:'(₦200.0) @ ₦198.0'}, {title:'(₦200.0) @ ₦100.0'}]},
  {title:[{title:'MTN Recharge Card pin'},{title:'(₦500.0) @ ₦498.0'}, {title:'(₦500.0) @ ₦100.0'}]},
  {title:[{title:'GLO Recharge Card pin'},{title:'(₦100.0) @ ₦97.0'}, {title:'(₦100.0) @ ₦100.0'}]},
  {title:[{title:'GLO Recharge Card pin'},{title:'(₦200.0) @ ₦197.0'}, {title:'(₦200.0) @ ₦100.0'}]},
  {title:[{title:'GLO Recharge Card pin'},{title:'(₦500.0) @ ₦497.0'}, {title:'(₦500.0) @ ₦100.0'}]},
  {title:[{title:'AIRTEL Recharge Card pin'},{title:'(₦100.0) @ ₦98.0'}, {title:'(₦100.0) @ ₦100.0'}]},
  {title:[{title:'AIRTEL Recharge Card pin'},{title:'(₦200.0) @ ₦198.0'}, {title:'(₦200.0) @ ₦100.0'}]},
  {title:[{title:'AIRTEL Recharge Card pin'},{title:'(₦500.0) @ ₦497.0'}, {title:'(₦500.0) @ ₦100.0'}]},
]
export const mtnPricings =[
  {title: [
    {title:'150.0MB'}, {title:'₦38'},{title:'₦35'}, {title:'1month'},
  ]},
  {title: [
    {title:'250.0MB'}, {title:'	₦69'},{title:'₦70'}, {title:'1month'},
  ]},
  {title: [
    {title:'500.0MB'}, {title:'₦130'},{title:'₦140'}, {title:'1month'},
  ]},
  {title: [
    {title:'500.0MB'}, {title:'₦133'},{title:'₦140'}, {title:'30days'},
  ]},
  {title: [
    {title:'0.5GB'}, {title:'₦134'},{title:'₦120'}, {title:'30days'},
  ]},
  {title: [
    {title:'1000.0MB'}, {title:'₦250'},{title:'₦280'}, {title:'1month'},
  ]},
  {title: [
    {title:'1.024GB'}, {title:'₦255'},{title:'₦280'}, {title:'30days'},
  ]},
  {title: [
    {title:'1.0GB'}, {title:'₦258'},{title:'₦240'}, {title:'30days'},
  ]},
  {title: [
    {title:'1.5GB'}, {title:'₦310'},{title:'₦300'}, {title:'1month'},
  ]},
  {title: [
    {title:'2000.0MB'}, {title:'₦500'},{title:'₦560'}, {title:'1month'},
  ]},
  {title: [
    {title:'2.048GB'}, {title:'₦510'},{title:'₦560'}, {title:'30days'},
  ]},
  {title: [
    {title:'2.0GB'}, {title:'₦516'},{title:'₦480'}, {title:'30days'},
  ]},
  {title: [
    {title:'3.0GB'}, {title:'₦630'},{title:'₦600'}, {title:'1month'},
  ]},
  {title: [
    {title:'3000.0MB'}, {title:'₦750'},{title:'₦840'}, {title:'1month'},
  ]},
  {title: [
    {title:'3.072GB'}, {title:'₦765'},{title:'₦840'}, {title:'1month'},
  ]},
  {title: [
    {title:'3.0GB'}, {title:'	₦774	'},{title:'₦720'}, {title:'1month'},
  ]},
  {title: [
    {title:'5.0GB'}, {title:'₦1050'},{title:'₦1000'}, {title:'1month'},
  ]},
  {title: [
    {title:'5000.0MB'}, {title:'₦1250'},{title:'₦1400'}, {title:'1month'},
  ]},
  {title: [
    {title:'5.12GB'}, {title:'₦1275'},{title:'₦1400'}, {title:'30days'},
  ]},
  {title: [
    {title:'5.0GB'}, {title:'₦1290'},{title:'₦1200'}, {title:'30days'},
  ]},
  {title: [
    {title:'10000.0MB'}, {title:'₦2500'},{title:'₦2800'}, {title:'1month'},
  ]},
  {title: [
    {title:'10.12GB'}, {title:'₦2550'},{title:'₦2800'}, {title:'30days'},
  ]},
  {title: [
    {title:'10.0GB'}, {title:'₦2580'},{title:'₦2400'}, {title:'30days'},
  ]},
  {title: [
    {title:'15.0GB'}, {title:'₦3825'},{title:'₦4200'}, {title:'1month'},
  ]},
  {title: [
    {title:'20.0GB'}, {title:'₦5100'},{title:'₦5600'}, {title:'1month'},
  ]},
]

export const mobilePricings = [
  {title: [
    {title:'500.0MB'}, {title:'₦78'},{title:'₦170'}, {title:'1month'},
  ]},
  {title: [
    {title:'1.0GB'}, {title:'₦145'},{title:'₦105'}, {title:'1month'},
  ]},
  {title: [
    {title:'1.5GB'}, {title:'₦223'},{title:'₦250'}, {title:'1month'},
  ]},
  
  {title: [
    {title:'2.0GB'}, {title:'₦290'},{title:'₦345'}, {title:'1month'},
  ]},
  
  {title: [
    {title:'2.5GB'}, {title:'₦368'},{title:'₦375'}, {title:'1month'},
  ]},
  
  {title: [
    {title:'3.0GB'}, {title:'₦435'},{title:'₦520'}, {title:'1month'},
  ]},
  
  {title: [
    {title:'4.0GB'}, {title:'₦580'},{title:'	₦695'}, {title:'1month'},
  ]},
  
  {title: [
    {title:'10.0GB'}, {title:'₦1450'},{title:'₦2000'}, {title:'1month'},
  ]},
]

export const airtelPricings =[
  {title: [
    {title:'100.0MB'}, {title:'₦41'},{title:'₦85'}, {title:'1month'},
  ]},
  {title: [
    {title:'300.0MB'}, {title:'₦80'},{title:'₦110'}, {title:'1month'},
  ]},
  {title: [
    {title:'500.0MB'}, {title:'₦142'},{title:'₦101'}, {title:'30days'},
  ]},
  {title: [
    {title:'1.0GB'}, {title:'₦273'},{title:'₦203'}, {title:'1month'},
  ]},
  {title: [
    {title:'2.0GB'}, {title:'₦546'},{title:'₦406'}, {title:'1month'},
  ]},
  {title: [
    {title:'5.0GB'}, {title:'₦1365'},{title:'₦1015'}, {title:'1month'},
  ]},
  {title: [
    {title:'10.0GB'}, {title:'₦2730'},{title:'₦2030'}, {title:'1month'},
  ]},
  {title: [
    {title:'15.0GB'}, {title:'₦4095'},{title:'₦3045'}, {title:'1month'},
  ]},
  {title: [
    {title:'20.0GB'}, {title:'₦5460'},{title:'₦4060	'}, {title:'1month'},
  ]},
]
export const gloPricings = [
  {title: [
    {title:'200.0MB'}, {title:'₦69'}, {title:'₦56'}, {title:'14days'},
  ]},
  {title: [
    {title:'500.0MB'}, {title:'₦150'}, {title:'₦112'}, {title:'1month'},
  ]},
  {title: [
    {title:'1.0GB'}, {title:'₦255'}, {title:'₦255'}, {title:'1month'},
  ]},
  {title: [
    {title:'2.0GB'}, {title:'₦510'}, {title:'₦450'}, {title:'1month'},
  ]},
  {title: [
    {title:'3.0GB'}, {title:'₦765'}, {title:'₦675'}, {title:'1month'},
  ]},
  {title: [
    {title:'5.0GB'}, {title:'₦1275'}, {title:'₦1125'}, {title:'1month'},
  ]},
  {title: [
    {title:'10.0GB'}, {title:'₦2550'}, {title:'₦2250'}, {title:'1month'},
  ]},
]