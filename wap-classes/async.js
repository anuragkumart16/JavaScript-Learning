
// // console.log('this is a sync code')

// // // setTimeout(() => {
// // //     console.log('this is a async code')
// // // }, 2000);

// // console.log('this is a sync code')

// // setTimeout(()=>{
// //     console.log('this is a async 0 seconds code')
// // },0)
// // setTimeout(()=>{
// //     console.log('this is 1 a async 0 seconds code')
// // },0)
// // setTimeout(()=>{
// //     console.log('this is 2 a async 0 seconds code')
// // },0)



// // for (let i = 0; i < 11; i++) {
// //     setTimeout(() => {
// //         console.log(i)
// //     },i*1000);
// // }

// // console.log("Start");

// // setTimeout(() => {
// //   console.log("First timeout");

// //   setTimeout(() => {
// //     console.log("Nested timeout");

// //     setTimeout(() => {
// //       console.log("Deeply nested timeout");
// //     }, 1000);

// //   }, 1000);

// // }, 2000);

// // console.log("End");


// let count = 0;

// console.log("Start");

// setInterval(() => {
//   count++;
//   console.log("Interval running:", count);
// }, 1000);

// console.log("End");


function task1(nextTask) {
  setTimeout(() => {
    console.log("Task 1 completed");
    nextTask();
  }, 2000);
}

function task2(nextTask) {
  setTimeout(() => {
    console.log("Task 2 completed");
    nextTask();
  }, 1000);
}

function task3() {
  console.log("Task 3 completed");
}

console.log("Execution starts");

task1(() => {
  task2(() => {
    task3();
  });
});

console.log("Execution ends");