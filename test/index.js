const stripe = require('stripe')('sk_test_51Q4JFqAOZytClOsubUeyJKjlek9qCndIyY4wVWgq2vpxfwnEQoBnOxxJBrruiCoyGQPggCLQUbGfUdPepUbQfDqq00U9V8OVxE');

// async function test() {
//     const account = await stripe.accounts.update(
//         'acct_1QAD71PQdcfHHCUk',
//         {
//             tos_acceptance: {
//                 date: Math.floor(Date.now() / 1000),
//                 ip: '8.8.8.8',
//             },
//         }
//     );
//     return account;
// }

// test().then(() => {
//     console.log("Active success")
// })


// (async () => {
//     try {
//       const accountId = 'acct_1QAD71PQdcfHHCUk'; // Thay bằng Account ID của bạn
  
//       // Cập nhật thông tin doanh nghiệp và sử dụng test token để hoàn tất xác minh
//       const account = await stripe.accounts.update(accountId, {
//         company: {
//           name: 'Test Company LLC',
//           tax_id: '123456789', // Mã UEN giả lập
//           address: {
//             line1: '10 Anson Road',
//             line2: '#27-15 International Plaza',
//             postal_code: '079903',
//             city: 'Singapore',
//             country: 'SG',
//           },
//           verification: {
//             document: {
//               front: 'file_identity_document_success', // Test token để giả lập xác minh thành công
//             },
//           },
//         },
//       });
  
//       console.log('Company verification completed: ', account);
//     } catch (err) {
//       console.error('Error: ', err);
//     }
//   })();


(async () => {
    try {
      const accountId = 'acct_1QA1dyPEmZ6GDCXx'; // Thay bằng Account ID bạn muốn hủy
  
      // Hủy kích hoạt tài khoản Connect
      const deletedAccount = await stripe.accounts.del(accountId);
  
      console.log('Account deactivated: ', deletedAccount);
    } catch (err) {
      console.error('Error: ', err);
    }
  })();
