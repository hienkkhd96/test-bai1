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
  let totalPlay = 0;
  //   Vì mỗi lần chơi ta được tung 100 lần lên số lần tung xúc sắc sẽ là bội của 100
  for (let i = 1; i <= total * 100; i++) {
    count += 1;
    //  Lấy ngẫu nhiên số điểm của xúc sắc
    let score = Math.floor(Math.random() * 6) + 1;
    // Khi rơi vào trường hợp 0.1% phải đi lại từ tầng 0
    if (Math.floor(Math.random() * 1000) + 1 == 1) {
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
      floor = floor + Math.floor(Math.random() * 6) + 1;
    }
    // Tại vì mỗi lượt chơi chỉ được gieo 100 lần=> Khi gieo hết 100 lần mà không win thì reset và tính thêm 1 lượt chơi
    if (count >= 100 && floor < 60) {
      totalPlay += 1;
      floor = 0;
      count = 0;
    }
    //  Nếu số tằng lớn hơn hoặc bằng 60 thì sẽ là 1 lần win,tính thêm 1 lượt và reset số tầng , số lượt tung còn lại về 0
    if (count <= 100 && floor >= 60) {
      totalPlay += 1;
      countWin = countWin + 1;
      count = 0;
      floor = 0;
    }
  }
  //   Kết quả là số lần Win chia số lần chơi nhân 100
  //   Kết quả có đơn vị là phần trăm
  result = (countWin / totalPlay) * 100;
  console.log(totalPlay);
  return result;
};

console.log(rateWin(1000000));
// Tỉ lệ win khoảng 81%(Chơi càng nhiều càng chính xác)
