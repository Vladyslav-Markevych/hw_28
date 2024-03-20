// [ I ] Freeze me
const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "folder1",
      type: "folder",
      children: [
        { name: "file1.txt", type: "file" },
        { name: "file2.txt", type: "file" },
      ],
    },
    {
      name: "folder2",
      type: "folder",
      children: [{ name: "file3.txt", type: "file" }],
    },
  ],
};

function def(obj) {
  Object.freeze(obj);
  if (Array.isArray(obj)) {
    obj.forEach((element) => {
      Object.freeze(element);
      return def(element);
    });
  } else {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        return def(obj[key]);
      }
    }
  }
}

def(fileSystem);

//   [ II ] Days difference
function countDate(firstDate, secondDate) {
  firstDate = new Date(firstDate).getTime();
  secondDate = new Date(secondDate).getTime();

  let different = firstDate - secondDate;
  different = different / 1000 / 60 / 60 / 24;
  different = Math.abs(different);
  console.log(`Кількість днів між датами = ${different}`);
}

countDate("2024-2-10", "2024-2-20");

//   [ III ] How old are you?
function countDate(birthday) {
  let today = new Date().getFullYear();
  let year = new Date(birthday).getFullYear();
  let different;

  new Date(birthday).getMonth() > new Date().getMonth()
    ? (different = today - 1 - year)
    : (different = today - year);

  //   different = different / 1000 / 60 / 60 / 24 / 365;
  //   different = Math.floor(different);
  console.log(`Кількість повних років: ${different}`);
}

countDate("1996-09-28");

//   [ IV ] Final countdown
function newYearDate(param) {
  let today = Date.now();
  let newYear = new Date(param).getTime();
  let different = newYear - today;

  let days = Math.floor(different / 1000 / 60 / 60 / 24);
  let hour = Math.floor((different % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minute = Math.floor((different % (1000 * 60 * 60)) / 1000 / 60);
  let seconds = Math.floor((different % (1000 * 60)) / 1000);

  console.log(
    `Залишилось: днів-${days}, годин-${hour}, хвилин-${minute}, секунд-${seconds}`
  );
}

newYearDate("2025-1-1");

// [ V ] Working Days
function term(params) {
  let lastDay = new Date(params);
  let now = new Date();
  let countDays = 0;
  while (now <= lastDay) {
    if (now.getDay() !== 0 && now.getDay() !== 6) {
      countDays++;
    }
    now.setDate(now.getDate() + 1);
  }
  console.log(`Количество будних дней - ${countDays}`);
}

term("2024-05-25");
