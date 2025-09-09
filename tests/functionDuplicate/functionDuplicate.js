// Написать функцию duplicate которая вернет список повторяющихся email'ов
function duplicate(list) {
  let result = [];
  let uniqueEmails = {};

  for (let email of list) {
    if (uniqueEmails[email]) {
      if (!result.includes(email)) {
        result.push(email);
      }
    } else {
      uniqueEmails[email] = true;
    }
  }
//   console.log(result);
  return result;
}
// const emails = [
//   "lyhxr@example.com",
//   "lyhxr@example.com",
//   "masha@example.com",
//   "fedya@example.com",
//   "katya@example.com",
//   "fedya@example.com",
//   "katya@example.com",
//   "lyhxr@example.com",
// ];

// const val = duplicate(emails);
// console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com' ]

module.exports = duplicate;