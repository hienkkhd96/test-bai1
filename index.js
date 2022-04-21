const rateWin = function (total) {
  if (total <= 0 || !Number.isInteger(total)) {
    console.log("Input ERROR");
    return false;
  }
  // Khởi tạo biến số lần win
  let countWin = 0;
  //   Khởi tạo biến số tầng đi được
  let floor = 0;
  // Khởi tạo lần tung mỗi lượt chơi
  let count = 0;
  //   Vì mỗi lần chơi ta được tung 100 lần lên số lần tung xúc sắc sẽ là bội của 100
  for (let i = 1; i <= total * 100; i++) {
    count += 1;
    //  Lấy ngẫu nhiên số điểm của xúc sắc
    let score = Math.random() * 6;
    // Tại vì mỗi lượt chơi chỉ được gieo 100 lần=> Khi gieo hết 100 lần mà không win thì reset
    if (count > 100 && floor < 100) {
      floor = 0;
      count = 0;
    }
    //  Nếu số tằng lớn hơn hoặc bằng 100 thì sẽ là 1 lần win
    if (floor >= 100) {
      countWin = countWin + 1;
      floor = 0;
    }
    // Khi rơi vào trường hợp 0.1% phải đi lại từ tầng 0
    if (Math.random() * 100 <= 0.1) {
      floor = 0;
    }
    //  Khi rơi vào trường hợp lùi 1 tầng
    else if (score <= 2) {
      if (floor == 0) {
        floor = 0;
      } else if (floor > 0) {
        floor = floor - 1;
      }
    }
    // Khi rơi vào trường hợp tiến 1 tầng
    else if (score <= 5) {
      floor = floor + 1;
    }
    // Khi rơi vào trường hợp tung được 6 điểm
    else if (score <= 6) {
      floor = floor + Math.ceil(Math.random() * 6);
    }
  }
  //   Kết quả là số lần Win chia số lần chơi nhân 100
  //   Kết quả có đơn vị là phần trăm
  result = (countWin / total) * 100;
  return result;
};

console.log(rateWin(1000000));
// Tỉ lệ win khoảng 8.4%(Chơi càng nhiều càng chính xác)
