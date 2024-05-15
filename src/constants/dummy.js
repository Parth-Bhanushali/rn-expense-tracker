export const Status = {
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Rejected"
}

const PaymentSite = {
  HOTEL: "Hotel",
  FOOD: "Food",
  TRAVEL: "Train/Bus",
  PROJECT: "Project Expense"
}

const ProjectSite = {
  CHHATISGARH: "Chhatisgarh",
  GUJARAT: "Gujarat",
  UTTARPRADESH: "Uttar Pradesh",
  MADHYAPRADESH: "Madhya Pradesh",
  TELANGANA: "Telangana",
  TAMILNADU: "Tamilnadu",
  MAHARASHTRA: "Maharashtra"
}

function getRandomBillNumber () {
  return Math.floor(Math.random() * 9999)
}

export const dummyExpenseList = [
  {
    id: 0,
    project_name: "NTPC Korba",
    project_site: ProjectSite.CHHATISGARH,
    date: 1715694250838,
    expenses: [
      {
        paid_for: PaymentSite.HOTEL,
        amount: 15000,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.FOOD,
        amount: 8500,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.TRAVEL,
        amount: 2500,
        bill_number: getRandomBillNumber()
      }
    ],
    status: Status.PENDING,
  },
  {
    id: 1,
    project_name: "Rihand Themal Power Station",
    project_site: ProjectSite.UTTARPRADESH,
    date: 1715611161778,
    expenses: [
      {
        paid_for: PaymentSite.HOTEL,
        amount: 12000,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.FOOD,
        amount: 4500,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.TRAVEL,
        amount: 6000,
        bill_number: getRandomBillNumber()
      }
    ],
    status: Status.APPROVED,
  },
  {
    id: 2,
    project_name: "NTPC Dadri",
    project_site: ProjectSite.UTTARPRADESH,
    date: 1715511161778,
    expenses: [
      {
        paid_for: PaymentSite.PROJECT,
        amount: 30000,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.HOTEL,
        amount: 10000,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.FOOD,
        amount: 5550,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.TRAVEL,
        amount: 1250,
        bill_number: getRandomBillNumber()
      }
    ],
    status: Status.REJECTED,
  },
  {
    id: 3,
    project_name: "NTPC Jogra",
    project_site: ProjectSite.MADHYAPRADESH,
    date: 1715311161778,
    expenses: [
      {
        paid_for: PaymentSite.FOOD,
        amount: 5000,
        bill_number: getRandomBillNumber()
      },
      {
        paid_for: PaymentSite.TRAVEL,
        amount: 2500,
        bill_number: getRandomBillNumber()
      }
    ],
    status: Status.PENDING,
  },
]