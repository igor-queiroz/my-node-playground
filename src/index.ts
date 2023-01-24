// const obj = {
//   startDate: "2021-10-01",
//   endDate: "2022-01-01",
// };

const obj = {
  salesperson_id: "3",
  plan: {
    type: "PME (2 a 29 vidas)",
    companies: [
      {
        cnpj: "85.888.067/0001-67",
      },
      {
        cnpj: "85.888.067/0001-67",
      },
    ],
  },
  products: {
    health: {
      proposal_number: 10123465,
    },
    dental: {
      proposal_number: 10123465,
    },
    global_capital: {
      proposal_number: 10123465,
    },
  },
  has_supervisor: true,
  supervisor: {
    full_name: "João Luiz Silva",
    cpf: "123.456.789-10",
  },
  broker: "3G CORRETORA DE SEGUROS DE VIDA LTDA",
  id: "3",
  created_at: "2023-01-12T16:30:20.461Z",
  updated_at: "2023-01-12T16:30:20.461Z",
  status: "NOVO",
  credit: null,
  credit_date: null,
};

let objJsonStr = JSON.stringify(obj);
let objJsonB64 = Buffer.from(objJsonStr).toString("base64");

console.log(JSON.stringify(obj, null, 2));
console.log(objJsonB64);
