// Given array
const arr = [1, 4, 4, 3, 4, 5, 3, 3];

const mp = [];
for (let i = 0; i < arr.length; i++) {
  if (!mp.some((item) => item.data === arr[i])) {
    mp.push({
      data: arr[i],
      cnt: 1,
    });
  } else {
    mp.some((item) => (item.data === arr[i] ? (item.cnt += 1) : null));
  }
}

// store cnt value in values array
let values = [];
for (let item of mp) {
  values.push(item.cnt);
}

// arrenged by decending order
values.sort(function (a, b) {
  return b - a;
});

let mini_data = Number.MAX_VALUE;
for (let item of mp) {
  if (item.data < mini_data && item.cnt === values[0]) {
    mini_data = item.data;
  }
}

// output
console.log(mini_data);
